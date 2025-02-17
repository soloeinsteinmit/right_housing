const volunteerEmailService = require("../services/volunteerEmailService");

/**
 * Handle volunteer form submissions
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
const handleVolunteerSubmission = async (req, res) => {
  try {
    const formData = req.body;

    // Validate required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "address",
      "city",
      "state",
      "zipCode",
      "interests",
      "availability",
      "motivation",
      "experience",
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
    if (!phoneRegex.test(formData.phone)) {
      return res.status(400).json({
        success: false,
        message: "Invalid phone number format",
      });
    }

    // Validate interests and availability are arrays
    if (!Array.isArray(formData.interests) || formData.interests.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Please select at least one area of interest",
      });
    }

    if (
      !Array.isArray(formData.availability) ||
      formData.availability.length === 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Please select at least one availability time slot",
      });
    }

    // Add device and location information
    formData.deviceInfo = req.headers["user-agent"];
    formData.location =
      req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    // Send email
    const result = await volunteerEmailService.sendEmail(formData);

    res.status(200).json({
      success: true,
      message:
        "Thank you for your interest in volunteering! We will contact you soon.",
      data: result,
    });
  } catch (error) {
    console.error("Error in handleVolunteerSubmission:", error);
    res.status(500).json({
      success: false,
      message: "Failed to process your request. Please try again later.",
      error: error.message,
    });
  }
};

module.exports = {
  handleVolunteerSubmission,
};
