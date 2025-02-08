const BaseEmailService = require("./baseEmailService");

class HousingApplicationEmailService extends BaseEmailService {
  constructor() {
    super();
    this.logger = this.getLogger();
    this.livingTypes = {
      temporary: "Temporary Housing",
      treatment: "Treatment Facility",
      shelter: "Shelter",
      friends: "Staying with Friends/Family",
      other: "Other Situation",
    };

    this.employmentTypes = {
      "full-time": "Full-time Employment",
      "part-time": "Part-time Employment",
      seeking: "Actively Job Seeking",
      unable: "Unable to Work",
      other: "Other Employment Status",
    };
  }

  /**
   * Create email template for housing application
   * @private
   * @param {Object} formData - The housing application form data
   * @returns {string} Formatted HTML content
   */
  createEmailTemplate(formData) {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      currentAddress,
      dateOfBirth,
      background,
      livingStatus,
      employmentStatus,
      currentSituation,
      interest,
      deviceInfo,
      location,
    } = formData;

    const formattedDOB = new Date(dateOfBirth).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>RIGHT Housing Application</title>
          <link href="https://fonts.googleapis.com/css2?family=Vollkorn:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">
          <style>
              * {
                  font-family: 'Vollkorn', Arial, serif;
              }
          </style>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Vollkorn', Arial, serif; line-height: 1.6; background-color: #f8f9fa;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
              <!-- Header -->
              <div style="background-color: #10B981; padding: 20px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; padding-bottom: 5px; font-size: 24px; border-bottom: 2px solid #FFD700; font-family: 'Vollkorn', Arial, serif; font-weight: 600;">
                      RIGHT Housing Inc. - Interest Application
                  </h1>
                  <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 16px; font-family: 'Vollkorn', Arial, serif; font-style: italic;">
                      Where Every Door Leads to Opportunity
                  </p>
              </div>

              <!-- Main Content -->
              <div style="padding: 30px; background-color: #ffffff;">
                  <!-- Personal Information -->
                  <div style="background-color: #f8fdfb; border-left: 4px solid #10B981; padding: 20px; margin-bottom: 20px;">
                      <h3 style="color: #10B981; margin: 0 0 15px 0; font-size: 18px;">Personal Information</h3>
                      <table style="width: 100%; border-collapse: collapse;">
                          <tr>
                              <td style="padding: 8px 0; color: #666666; width: 140px;"><strong>Name:</strong></td>
                              <td style="padding: 8px 0; color: #333333;">${firstName} ${lastName}</td>
                          </tr>
                          <tr>
                              <td style="padding: 8px 0; color: #666666;"><strong>Date of Birth:</strong></td>
                              <td style="padding: 8px 0; color: #333333;">${formattedDOB}</td>
                          </tr>
                          <tr>
                              <td style="padding: 8px 0; color: #666666;"><strong>Email:</strong></td>
                              <td style="padding: 8px 0; color: #333333;"><a href="mailto:${email}" style="color: #10B981; text-decoration: none;">${email}</a></td>
                          </tr>
                          <tr>
                              <td style="padding: 8px 0; color: #666666;"><strong>Phone:</strong></td>
                              <td style="padding: 8px 0; color: #333333;">${phoneNumber}</td>
                          </tr>
                          <tr>
                              <td style="padding: 8px 0; color: #666666;"><strong>Address:</strong></td>
                              <td style="padding: 8px 0; color: #333333;">${currentAddress}</td>
                          </tr>
                      </table>
                  </div>

                  <!-- Background Information -->
                  <div style="background-color: #f8fdfb; border-left: 4px solid #FFD700; padding: 20px; margin-bottom: 20px;">
                      <h3 style="color: #10B981; margin: 0 0 15px 0; font-size: 18px;">Background Information</h3>
                      <div style="margin-bottom: 15px;">
                          <strong style="color: #666666;">Background Summary:</strong>
                          <p style="margin: 5px 0; color: #333333; white-space: pre-wrap;">${
                            background || "Not provided"
                          }</p>
                      </div>
                      <table style="width: 100%; border-collapse: collapse;">
                          <tr>
                              <td style="padding: 8px 0; color: #666666;"><strong>Living Situation:</strong></td>
                              <td style="padding: 8px 0; color: #333333;">${
                                this.livingTypes[livingStatus] ||
                                "Not specified"
                              }</td>
                          </tr>
                          <tr>
                              <td style="padding: 8px 0; color: #666666;"><strong>Employment:</strong></td>
                              <td style="padding: 8px 0; color: #333333;">${
                                this.employmentTypes[employmentStatus] ||
                                "Not specified"
                              }</td>
                          </tr>
                      </table>
                  </div>

                  <!-- Additional Information -->
                  <div style="background-color: #f8fdfb; border-left: 4px solid #10B981; padding: 20px; margin-bottom: 20px;">
                      <h3 style="color: #10B981; margin: 0 0 15px 0; font-size: 18px;">Additional Information</h3>
                      <div style="margin-bottom: 15px;">
                          <strong style="color: #666666;">Current Situation:</strong>
                          <p style="margin: 5px 0; color: #333333; white-space: pre-wrap;">${
                            currentSituation || "Not provided"
                          }</p>
                      </div>
                      <div>
                          <strong style="color: #666666;">Interest & Goals:</strong>
                          <p style="margin: 5px 0; color: #333333; white-space: pre-wrap;">${
                            interest || "Not provided"
                          }</p>
                      </div>
                  </div>
              </div>

              <!-- Footer -->
              <div style="background-color: #10B981; color: #ffffff; padding: 20px;">
                  <div style="text-align: center; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 15px; margin-bottom: 15px;">
                      <p style="margin: 0; font-size: 14px;">
                          This is an automated notification from RIGHT Housing Inc.
                      </p>
                      <p style="margin: 10px 0 0 0; font-size: 13px;">
                          <strong>Action Required:</strong> Please review ${firstName} ${lastName}'s housing application within 48 hours
                      </p>
                  </div>
                  <div style="font-size: 12px; color: rgba(255,255,255,0.9);">
                      <p style="margin: 0;">
                          <strong>Submission Details:</strong><br/>
                          Device: ${deviceInfo || "Unknown Device"}<br/>
                          Location: ${location || "Location not available"}<br/>
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
   * Send housing application email
   * @param {Object} formData - The form data
   * @returns {Promise<Object>} Result of the email sending operation
   */
  async sendEmail(formData) {
    const { firstName, lastName, email } = formData;

    try {
      this.logger.info("Attempting to send housing application email", {
        fromEmail: email,
        toEmail: process.env.TO_EMAIL,
      });

      const mailOptions = {
        from: {
          name: `${firstName} ${lastName} via RIGHT Housing Website`,
          address: process.env.SMTP_USER,
        },
        replyTo: email,
        to: process.env.TO_EMAIL,
        subject: `New Housing Application: ${firstName} ${lastName}`,
        html: this.createEmailTemplate(formData),
        headers: {
          "X-Form-Type": "Housing-Application",
          "X-Sender-Name": `${firstName} ${lastName}`,
          "X-Sender-Email": email,
        },
      };

      const info = await this.transporter.sendMail(mailOptions);

      this.logger.info("Housing application email sent successfully", {
        messageId: info.messageId,
        response: info.response,
      });

      return {
        messageId: info.messageId,
        response: info.response,
      };
    } catch (error) {
      this.logger.error("Failed to send housing application email", {
        error: error.message,
        code: error.code,
        command: error.command,
      });
      throw error;
    }
  }
}

module.exports = new HousingApplicationEmailService();
