const validateContactForm = (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    subject,
    message,
    preferredContact,
    bestTime,
  } = req.body;

  // Basic validation rules
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[\d\s-()]{10,}$/;

  const errors = [];

  // Required fields validation
  if (!firstName?.trim()) {
    errors.push("First name is required");
  }

  if (!lastName?.trim()) {
    errors.push("Last name is required");
  }

  if (!email?.trim()) {
    errors.push("Email is required");
  } else if (!emailRegex.test(email)) {
    errors.push("Invalid email format");
  }

  if (!phoneNumber?.trim()) {
    errors.push("Phone number is required");
  } else if (!phoneRegex.test(phoneNumber)) {
    errors.push("Invalid phone number format");
  }

  if (!subject?.trim()) {
    errors.push("Subject is required");
  }

  if (!message?.trim()) {
    errors.push("Message is required");
  }

  // Contact preference validation
  const validContactPreferences = ["email", "phone", "both"];
  if (!preferredContact || !validContactPreferences.includes(preferredContact)) {
    errors.push("Invalid preferred contact method");
  }

  // Best time validation
  const validBestTimes = ["morning", "afternoon", "evening"];
  if (!bestTime || !validBestTimes.includes(bestTime)) {
    errors.push("Invalid best time preference");
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: errors.join(", "),
    });
  }

  next();
};

module.exports = { validateContactForm };
