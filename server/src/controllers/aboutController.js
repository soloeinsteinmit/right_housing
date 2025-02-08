const getInvolvedEmailService = require('../services/getInvolvedEmailService');

/**
 * Handle submissions from the Get Involved form
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
const handleGetInvolvedSubmission = async (req, res) => {
    try {
        const formData = req.body;
        
        // Validate required fields
        const requiredFields = ['name', 'email', 'type', 'message'];
        const missingFields = requiredFields.filter(field => !formData[field]);
        
        if (missingFields.length > 0) {
            return res.status(400).json({
                success: false,
                message: `Missing required fields: ${missingFields.join(', ')}`
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email format'
            });
        }

        // Validate interest type
        const validTypes = ['volunteer', 'support', 'partner', 'other'];
        if (!validTypes.includes(formData.type)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid interest type'
            });
        }

        // Add device and location information
        formData.deviceInfo = req.headers['user-agent'];
        formData.location = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

        // Send email
        const result = await getInvolvedEmailService.sendEmail(formData);

        res.status(200).json({
            success: true,
            message: 'Thank you for your interest! We will get back to you soon.',
            data: result
        });

    } catch (error) {
        console.error('Error in handleGetInvolvedSubmission:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to process your request. Please try again later.',
            error: error.message
        });
    }
};

module.exports = {
    handleGetInvolvedSubmission
};
