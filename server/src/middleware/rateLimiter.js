const rateLimit = require("express-rate-limit");
const RedisStore = require("rate-limit-redis");
const Redis = require("ioredis");

const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

// Create a limiter for newsletter subscriptions
const newsletterLimiter = rateLimit({
  store: new RedisStore({
    client: redis,
    prefix: "newsletter-limit:",
  }),
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 3, // limit each IP to 3 requests per windowMs
  message: {
    success: false,
    message: "Too many subscription attempts. Please try again in an hour.",
  },
});

// Create a limiter for unsubscribe attempts
const unsubscribeLimiter = rateLimit({
  store: new RedisStore({
    client: redis,
    prefix: "unsubscribe-limit:",
  }),
  windowMs: 15 * 60 * 1000, // 15 minutes window
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    success: false,
    message: "Too many unsubscribe attempts. Please try again in 15 minutes.",
  },
});

module.exports = {
  newsletterLimiter,
  unsubscribeLimiter,
};
