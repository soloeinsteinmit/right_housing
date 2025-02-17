const housingApplicationEmailService = require("../services/housingApplicationEmailService");

/**
 * Handle housing application submissions
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
const handleHousingApplication = async (req, res) => {
  try {
    const formData = req.body;

    // Validate required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phoneNumber",
      "currentAddress",
      "dateOfBirth",
    ];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // Validate phone number (basic validation)
    const phoneRegex = /^\+?[\d\s-()]{10,}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      return res.status(400).json({
        success: false,
        message: "Invalid phone number format",
      });
    }

    // Validate date of birth
    const dob = new Date(formData.dateOfBirth);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    
    if (isNaN(dob.getTime())) {
      return res.status(400).json({
        success: false,
        message: "Invalid date of birth format",
      });
    }

    if (age < 18) {
      return res.status(400).json({
        success: false,
        message: "Applicant must be at least 18 years old",
      });
    }

    // Add device and location information
    formData.deviceInfo = req.headers["user-agent"];
    formData.location = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    // Send email
    const result = await housingApplicationEmailService.sendEmail(formData);

    res.status(200).json({
      success: true,
      message: "Thank you for your application! We will review it and contact you soon.",
      data: result,
    });
  } catch (error) {
    console.error("Error in handleHousingApplication:", error);
    res.status(500).json({
      success: false,
      message: "Failed to process your application. Please try again later.",
      error: error.message,
    });
  }
};

module.exports = {
  handleHousingApplication,
};
