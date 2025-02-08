const express = require("express");
const router = express.Router();
const housingController = require("../controllers/housingController");

// POST /api/housing/apply
router.post("/apply", housingController.handleHousingApplication);

module.exports = router;
