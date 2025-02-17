require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const rateLimit = require("express-rate-limit");

const app = express();

// Trust proxy - required for rate limiting behind reverse proxies (like Vercel)
app.set("trust proxy", 1);

// Define allowed origins
const allowedOrigins = [
  // Production origins
  "https://righthousing.org",
  "https://www.righthousing.org",
  // Development origins
  "http://localhost:5173",
  "http://localhost:3000",
  "http://localhost:2468",
];

// // CORS configuration
// const corsOptions = {
//   origin: function (origin, callback) {
//     // Allow requests with no origin (like mobile apps, curl, or Postman)
//     if (!origin) {
//       return callback(null, true);
//     }

//     if (allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       console.error("CORS Error - Origin not allowed:", origin);
//       callback(new Error("Origin not allowed by CORS"));
//     }
//   },
//   credentials: true,
//   methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
//   allowedHeaders: [
//     "Content-Type",
//     "Authorization",
//     "X-Requested-With",
//     "Accept",
//     "Origin",
//   ],
//   optionsSuccessStatus: 204,
// };

// Apply CORS middleware
app.use(
  cors({
    origin: allowedOrigins,
  })
);

// Handle OPTIONS preflight requests
// app.options("*", cors(corsOptions));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add response headers middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Authorization,X-Requested-With,Accept,Origin"
  );
  next();
});

// Rate limiting to prevent abuse
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use(limiter);

// Nodemailer setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Import routes
const contactRoutes = require("./src/routes/contactRoutes");
const aboutRoutes = require("./src/routes/aboutRoutes");
const volunteerRoutes = require("./src/routes/volunteerRoutes");
const housingRoutes = require("./src/routes/housingRoutes");

// Use routes
app.use("/api/contact", contactRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/volunteer", volunteerRoutes);
app.use("/api/housing", housingRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Something broke!",
    message: process.env.NODE_ENV === "production" ? err.message : undefined,
  });
});

// For local development
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server ready on port ${PORT}`));
}

// Export for Vercel
module.exports = app;
