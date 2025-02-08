const validateContactForm = (req, res, next) => {
    const { firstName, lastName, email, phone, subject, message } = req.body;

    // Basic validation rules
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-]{10,}$/;

    const errors = [];

    if (!firstName?.trim()) {
        errors.push('First name is required');
    }

    if (!email?.trim()) {
        errors.push('Email is required');
    } else if (!emailRegex.test(email)) {
        errors.push('Invalid email format');
    }

    if (phone && !phoneRegex.test(phone)) {
        errors.push('Invalid phone number format');
    }

    if (!subject?.trim()) {
        errors.push('Subject is required');
    }

    if (!message?.trim()) {
        errors.push('Message is required');
    }

    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            errors,
        });
    }

    next();
};

module.exports = { validateContactForm };
