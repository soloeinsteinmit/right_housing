const { BaseEmailService } = require('../../src/services/baseEmailService');

// Initialize email service
const emailService = new BaseEmailService();

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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
        message: 'Invalid email format'
      });
    }

    // Format application data for email
    const formatSection = (section, title) => {
      if (!section) return '';
      return `
        <h3>${title}</h3>
        ${Object.entries(section)
          .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
          .join('\n')}
      `;
    };

    // Send email
    await emailService.sendEmail({
      to: process.env.FROM_EMAIL,
      subject: 'New Housing Application',
      html: `
        <h2>New Housing Application</h2>
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phoneNumber}</p>
        <p><strong>Current Address:</strong> ${formData.currentAddress}</p>
        <p><strong>Date of Birth:</strong> ${formData.dateOfBirth}</p>
        ${formatSection(formData.employment, 'Employment Information')}
        ${formatSection(formData.income, 'Income Information')}
        ${formatSection(formData.references, 'References')}
        ${formatSection(formData.additionalInfo, 'Additional Information')}
      `
    });

    res.status(200).json({ 
      success: true,
      message: 'Application submitted successfully'
    });
  } catch (error) {
    console.error('Error submitting application:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to submit application',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};
