const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const { validateContactForm } = require("../middleware/contactValidation");

// POST /api/contact/submit
router.post(
  "/submit",
  validateContactForm,
  contactController.handleContactSubmission
);

module.exports = router;
