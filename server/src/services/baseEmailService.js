const nodemailer = require("nodemailer");
const winston = require("winston");
const path = require("path");

// Create logs directory in /tmp for Vercel
const LOG_DIR = process.env.NODE_ENV === "production" ? "/tmp/logs" : path.join(__dirname, "../..", "logs");

// Configure logger
const logger = winston.createLogger({
  level: process.env.NODE_ENV === "development" ? "debug" : "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: path.join(LOG_DIR, "email-error.log"),
      level: "error",
      mkdir: true, // This will create the directory if it doesn't exist
    }),
    new winston.transports.File({
      filename: path.join(LOG_DIR, "email.log"),
      mkdir: true, // This will create the directory if it doesn't exist
    }),
  ],
});

class BaseEmailService {
  constructor() {
    this.initializeTransporter();
  }

  async initializeTransporter() {
    try {
      this.transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT),
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
        logger: process.env.NODE_ENV === "development",
        debug: process.env.NODE_ENV === "development",
      });

      const verification = await this.transporter.verify();
      logger.info("SMTP Connection established successfully", {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        user: process.env.SMTP_USER,
      });
    } catch (error) {
      logger.error("Failed to initialize SMTP connection", {
        error: error.message,
        stack: error.stack,
      });
      throw new Error("Email service initialization failed");
    }
  }

  getLogger() {
    return logger;
  }
}

module.exports = BaseEmailService;
