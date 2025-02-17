const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');

/**
 * @route POST /api/about/get-involved
 * @desc Handle submissions from the Get Involved form on the About page
 */
router.post('/get-involved', aboutController.handleGetInvolvedSubmission);

module.exports = router;
