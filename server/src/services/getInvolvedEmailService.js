const BaseEmailService = require("./baseEmailService");

class GetInvolvedEmailService extends BaseEmailService {
  constructor() {
    super();
    this.logger = this.getLogger();
    this.interestTypes = {
      volunteer: "Volunteering",
      support: "Supporting Our Mission",
      partner: "Becoming a Partner",
      other: "Other",
    };
  }

  /**
   * Create email template for Get Involved form
   * @private
   * @param {Object} formData - The Get Involved form data
   * @returns {string} Formatted HTML content
   */
  createEmailTemplate(formData) {
    const { name, email, phone, type, message, deviceInfo, location } =
      formData;

    return `
     <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>RIGHT Housing Get Involved Form</title>
                <link href="https://fonts.googleapis.com/css2?family=Vollkorn:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">
                <style>
                    * {
                        font-family: 'Vollkorn', Arial, serif;
                    }
                </style>
            </head>
            <body style="margin: 0; padding: 0; font-family: 'Vollkorn', Arial, serif; line-height: 1.6; background-color: #f8f9fa;">
                <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                    <!-- Header with Logo Background -->
                    <div style="background-color: #10B981; padding: 20px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; padding-bottom: 2px; font-size: 24px; border-bottom: 2px solid #FFD700; font-family: 'Vollkorn', Arial, serif; font-weight: 600;">
                            RIGHT Housing Inc. - Get Involved
                        </h1>
                        <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 16px; font-family: 'Vollkorn', Arial, serif; font-style: italic;">
                            Where Every Door Leads to Opportunity
                        </p>
                    </div>

                    <!-- Main Content -->
                    <div style="padding: 30px; background-color: #ffffff;">
                        <div style="margin-bottom: 30px;">
                            <h2 style="color: #10B981; margin: 0 0 15px 0; font-size: 20px; border-bottom: 2px solid #FFD700; padding-bottom: 10px; font-family: 'Vollkorn', Arial, serif; font-weight: 600;">
                                New Get Involved Request
                            </h2>
                            <p style="color: #666666; margin: 0; font-family: 'Vollkorn', Arial, serif;">
                                Someone is interested in getting involved with RIGHT Housing.
                            </p>
                        </div>

                        <!-- Personal Information Section -->
                        <div style="background-color: #f8fdfb; border-left: 4px solid #10B981; padding: 20px; margin-bottom: 20px;">
                            <h3 style="color: #10B981; margin: 0 0 15px 0; font-size: 18px; font-family: 'Vollkorn', Arial, serif; font-weight: 600;">Personal Information</h3>
                            <table style="width: 100%; border-collapse: collapse; font-family: 'Vollkorn', Arial, serif;">
                                <tr>
                                    <td style="padding: 8px 0; color: #666666; width: 140px;"><strong>Name:</strong></td>
                                    <td style="padding: 8px 0; color: #333333;">${name}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; color: #666666;"><strong>Email:</strong></td>
                                    <td style="padding: 8px 0; color: #333333;"><a href="mailto:${email}" style="color: #10B981; text-decoration: none;">${email}</a></td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; color: #666666;"><strong>Phone:</strong></td>
                                    <td style="padding: 8px 0; color: #333333;">${
                                      phone || "Not provided"
                                    }</td>
                                </tr>
                            </table>
                        </div>

                        <!-- Interest Section -->
                        <div style="background-color: #f8fdfb; border-left: 4px solid #FFD700; padding: 20px; margin-bottom: 20px;">
                            <h3 style="color: #10B981; margin: 0 0 15px 0; font-size: 18px; font-family: 'Vollkorn', Arial, serif; font-weight: 600;">Area of Interest</h3>
                            <p style="color: #333333; font-family: 'Vollkorn', Arial, serif; font-weight: 500; background-color: #ffffff; padding: 10px; border: 1px solid #e1e1e1; border-radius: 4px;">
                                ${this.interestTypes[type]}
                            </p>
                        </div>

                        <!-- Message Section -->
                        <div style="background-color: #f8fdfb; border-left: 4px solid #10B981; padding: 20px; margin-bottom: 20px;">
                            <h3 style="color: #10B981; margin: 0 0 15px 0; font-size: 18px; font-family: 'Vollkorn', Arial, serif; font-weight: 600;">Message</h3>
                            <p style="margin: 5px 0; color: #333333; white-space: pre-wrap; background-color: #ffffff; padding: 15px; border: 1px solid #e1e1e1; border-radius: 4px; font-family: 'Vollkorn', Arial, serif;">${message}</p>
                        </div>

                        <!-- Quick Action Buttons -->
                        <div style="text-align: center; margin-top: 30px;">
                            <a href="mailto:${email}" style="display: inline-block; background-color: #10B981; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 5px; margin: 0 10px; font-family: 'Vollkorn', Arial, serif; font-weight: 500;">Reply to Sender</a>
                        </div>
                    </div>

                    <!-- Footer -->
                    <div style="background-color: #10B981; color: #ffffff; padding: 20px;">
                        <div style="text-align: center; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 15px; margin-bottom: 15px;">
                            <p style="margin: 0; font-size: 14px; font-family: 'Vollkorn', Arial, serif;">
                                This is an automated notification from RIGHT Housing Inc.
                            </p>
                            <p style="margin: 10px 0 0 0; font-size: 13px; font-family: 'Vollkorn', Arial, serif;">
                                <strong>Action Required:</strong> Please respond to ${name}'s Get Involved request within 48 hours
                            </p>
                        </div>
                        <div style="font-size: 12px; color: rgba(255,255,255,0.9); font-family: 'Vollkorn', Arial, serif;">
                            <p style="margin: 0;">
                                <strong>Submission Details:</strong><br/>
                                Device: ${deviceInfo || "Unknown Device"}<br/>
                                Location: ${
                                  location || "Location not available"
                                }<br/>
                                Time: ${new Date().toLocaleString("en-US", {
                                  timeZone: "America/New_York",
                                })} EST
                            </p>
                        </div>
                    </div>
                </div>
            </body>
            </html>
    `;
  }

  /**
   * Send email for Get Involved form submissions
   * @public
   * @param {Object} formData - The Get Involved form data
   * @returns {Promise<Object>} Result of the email sending operation
   */
  async sendEmail(formData) {
    const { name, email } = formData;

    try {
      this.logger.info("Attempting to send Get Involved form email", {
        fromEmail: email,
        toEmail: process.env.TO_EMAIL,
        type: formData.type,
      });

      const mailOptions = {
        from: {
          name: `${name} via RIGHT Housing Website`,
          address: process.env.SMTP_USER,
        },
        replyTo: email,
        to: process.env.TO_EMAIL,
        subject: `Get Involved: ${this.interestTypes[formData.type]} - ${name}`,
        html: this.createEmailTemplate(formData),
        headers: {
          "X-Form-Type": "Get-Involved",
          "X-Sender-Name": name,
          "X-Sender-Email": email,
          "X-Interest-Type": formData.type,
        },
      };

      const info = await this.transporter.sendMail(mailOptions);

      this.logger.info("Get Involved form email sent successfully", {
        messageId: info.messageId,
        response: info.response,
      });

      return {
        success: true,
        messageId: info.messageId,
        response: info.response,
      };
    } catch (error) {
      this.logger.error("Failed to send Get Involved form email", {
        error: error.message,
        stack: error.stack,
      });
      throw new Error(`Failed to send email: ${error.message}`);
    }
  }
}

module.exports = new GetInvolvedEmailService();
