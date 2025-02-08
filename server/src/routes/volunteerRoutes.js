const express = require("express");
const router = express.Router();
const volunteerController = require("../controllers/volunteerController");

// POST /api/volunteer/submit
router.post("/submit", volunteerController.handleVolunteerSubmission);

module.exports = router;
