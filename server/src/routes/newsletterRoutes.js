const express = require("express");
const router = express.Router();
const newsletterController = require("../controllers/newsletterController");
const { newsletterLimiter, unsubscribeLimiter } = require("../middleware/rateLimiter");

// POST /api/newsletter/subscribe
router.post("/subscribe", newsletterLimiter, newsletterController.handleNewsletterSubscription);

// GET /api/newsletter/unsubscribe/:token
router.get("/unsubscribe/:token", unsubscribeLimiter, newsletterController.handleUnsubscribe);

module.exports = router;
