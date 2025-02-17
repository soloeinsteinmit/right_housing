/**
 * @fileoverview Email Service for handling contact form submissions
 * This service manages email communications using Hostinger's SMTP server
 * for the RIGHT Housing contact form.
 */

const nodemailer = require("nodemailer");
const winston = require("winston");

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
      filename: "logs/email-error.log",
      level: "error",
    }),
    new winston.transports.File({ filename: "logs/email.log" }),
  ],
});

class EmailService {
  /**
   * Initialize the email service with SMTP configuration
   */
  constructor() {
    this.initializeTransporter();
  }

  /**
   * Initialize and verify SMTP transporter
   * @private
   */
  async initializeTransporter() {
    try {
      this.transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT),
        secure: true, // Use SSL/TLS
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
        logger: process.env.NODE_ENV === "development", // Enable built-in logger for development
        debug: process.env.NODE_ENV === "development", // Include debug information
      });

      // Verify SMTP connection
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

  /**
   * Format contact form data into HTML email template
   * @private
   * @param {Object} formData - The contact form data
   * @returns {string} Formatted HTML content
   */
  createEmailTemplate(formData) {
    const {
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
      preferredContact,
      bestTime,
    } = formData;

    return `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>RIGHT Housing Contact Form</title>
                <link href="https://fonts.googleapis.com/css2?family=Vollkorn:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">
                <style>
                    * {
                        font-family: 'Vollkorn', Arial, serif;
                    }
                </style>
            </head>
            <body style="margin: 0; padding: 0; font-family: 'Vollkorn', Arial, serif; line-height: 1.6; background-color: #f8f9fa;">
                <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                    <!-- Header with Logo Background -->
                    <div style="background-color: #10B981; padding-inline: 20px; padding-block: 30px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; padding-bottom: 5px; font-size: 24px; border-bottom: 2px solid #FFD700; font-family: 'Vollkorn', Arial, serif; font-weight: 600;">
                            RIGHT Housing Inc. - Contact Form
                        </h1>
                        <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 16px; font-family: 'Vollkorn', Arial, serif; font-style: italic;">
                            Where Every Door Leads to Opportunity
                        </p>
                    </div>

                    <!-- Main Content -->
                    <div style="padding: 30px; background-color: #ffffff;">
                        <div style="margin-bottom: 30px;">
                            <h2 style="color: #10B981; margin: 0 0 15px 0; font-size: 20px; border-bottom: 2px solid #FFD700; padding-bottom: 10px; font-family: 'Vollkorn', Arial, serif; font-weight: 600;">
                                New Contact Form Submission
                            </h2>
                            <p style="color: #666666; margin: 0; font-family: 'Vollkorn', Arial, serif;">
                                A new inquiry has been received through the RIGHT Housing contact form.
                            </p>
                        </div>

                        <!-- Personal Information Section -->
                        <div style="background-color: #f8fdfb; border-left: 4px solid #10B981; padding: 20px; margin-bottom: 20px;">
                            <h3 style="color: #10B981; margin: 0 0 15px 0; font-size: 18px; font-family: 'Vollkorn', Arial, serif; font-weight: 600;">Personal Information</h3>
                            <table style="width: 100%; border-collapse: collapse; font-family: 'Vollkorn', Arial, serif;">
                                <tr>
                                    <td style="padding: 8px 0; color: #666666; width: 140px;"><strong>Full Name:</strong></td>
                                    <td style="padding: 8px 0; color: #333333;">${firstName} ${lastName}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; color: #666666;"><strong>Email:</strong></td>
                                    <td style="padding: 8px 0; color: #333333;"><a href="mailto:${email}" style="color: #10B981; text-decoration: none;">${email}</a></td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; color: #666666;"><strong>Phone:</strong></td>
                                    <td style="padding: 8px 0; color: #333333;">${
                                      phone || "Not provided"
                                    }</td>
                                </tr>
                            </table>
                        </div>

                        <!-- Contact Preferences Section -->
                        <div style="background-color: #f8fdfb; border-left: 4px solid #FFD700; padding: 20px; margin-bottom: 20px;">
                            <h3 style="color: #10B981; margin: 0 0 15px 0; font-size: 18px; font-family: 'Vollkorn', Arial, serif; font-weight: 600;">Contact Preferences</h3>
                            <table style="width: 100%; border-collapse: collapse; font-family: 'Vollkorn', Arial, serif;">
                                <tr>
                                    <td style="padding: 8px 0; color: #666666; width: 140px;"><strong>Preferred Method:</strong></td>
                                    <td style="padding: 8px 0; color: #333333;">${preferredContact}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; color: #666666;"><strong>Best Time:</strong></td>
                                    <td style="padding: 8px 0; color: #333333;">${bestTime}</td>
                                </tr>
                            </table>
                        </div>

                        <!-- Message Section -->
                        <div style="background-color: #f8fdfb; border-left: 4px solid #10B981; padding: 20px; margin-bottom: 20px;">
                            <h3 style="color: #10B981; margin: 0 0 15px 0; font-size: 18px; font-family: 'Vollkorn', Arial, serif; font-weight: 600;">Message Details</h3>
                            <div style="margin-bottom: 15px;">
                                <strong style="color: #666666;">Subject:</strong>
                                <p style="margin: 5px 0; color: #333333; font-family: 'Vollkorn', Arial, serif;">${subject}</p>
                            </div>
                            <div>
                                <strong style="color: #666666;">Message:</strong>
                                <p style="margin: 5px 0; color: #333333; white-space: pre-wrap; background-color: #ffffff; padding: 15px; border: 1px solid #e1e1e1; border-radius: 4px; font-family: 'Vollkorn', Arial, serif;">${message}</p>
                            </div>
                        </div>

                        <!-- Quick Action Buttons -->
                        <div style="text-align: center; margin-top: 30px;">
                            <a href="mailto:${email}" style="display: inline-block; background-color: #10B981; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 5px; margin: 0 10px; font-family: 'Vollkorn', Arial, serif; font-weight: 500;">Reply to Sender</a>
                        </div>
                    </div>

                    <!-- Footer -->
                    <div style="background-color: #10B981; color: #ffffff; padding: 20px; text-align: center;">
                        <p style="margin: 0; font-size: 14px; font-family: 'Vollkorn', Arial, serif;">
                            This is an automated message from RIGHT Housing Support Team
                        </p>
                        <p style="margin: 10px 0 0 0; font-size: 12px; font-family: 'Vollkorn', Arial, serif;">
                            <strong>Priority:</strong> Please respond within 48 hours
                        </p>
                    </div>
                </div>
            </body>
            </html>
        `;
  }

  /**
   * Send contact form email
   * @public
   * @param {Object} formData - The contact form data
   * @returns {Promise<Object>} Result of the email sending operation
   */
  async sendContactFormEmail(formData) {
    const { firstName, lastName, email, subject } = formData;

    try {
      // Log attempt to send email
      logger.info("Attempting to send contact form email", {
        fromEmail: email,
        toEmail: process.env.TO_EMAIL,
        subject: subject,
      });

      const mailOptions = {
        from: {
          name: `${firstName} ${lastName} via RIGHT Housing Website`,
          address: process.env.SMTP_USER, // Send from authenticated Hostinger email
        },
        replyTo: email, // Set reply-to as the contact form submitter's email
        to: process.env.TO_EMAIL,
        subject: `New Contact Form: ${subject}`,
        html: this.createEmailTemplate(formData),
        headers: {
          "X-Contact-Form": "RIGHT-Housing",
          "X-Sender-Name": `${firstName} ${lastName}`,
          "X-Sender-Email": email,
        },
      };

      // Send email and get response
      const info = await this.transporter.sendMail(mailOptions);

      // Log successful email sending
      logger.info("Email sent successfully", {
        messageId: info.messageId,
        response: info.response,
        envelope: info.envelope,
      });

      return {
        success: true,
        messageId: info.messageId,
        response: info.response,
      };
    } catch (error) {
      // Log detailed error information
      logger.error("Failed to send contact form email", {
        error: error.message,
        code: error.code,
        command: error.command,
        response: error.response,
        stack: error.stack,
      });

      throw new Error(`Failed to send email: ${error.message}`);
    }
  }
}

module.exports = new EmailService();
