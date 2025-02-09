const BaseEmailService = require("./baseEmailService");

class VolunteerEmailService extends BaseEmailService {
  constructor() {
    super();
    this.logger = this.getLogger();
    this.interestTypes = {
      "Housing Support": "Housing Support Programs",
      "Education & Training": "Education and Training Programs",
      "Community Outreach": "Community Outreach Activities",
      "Administrative Support": "Administrative Support",
      "Maintenance & Repairs": "Maintenance and Repairs",
      "Resident Support": "Resident Support Services",
    };

    this.availabilityTypes = {
      "Weekday Mornings": "Weekday (8AM - 12PM)",
      "Weekday Afternoons": "Weekday (12PM - 4PM)",
      "Weekday Evenings": "Weekday (4PM - 8PM)",
      "Weekend Mornings": "Weekend (8AM - 12PM)",
      "Weekend Afternoons": "Weekend (12PM - 4PM)",
      "Weekend Evenings": "Weekend (4PM - 8PM)",
    };
  }

  /**
   * Format location data for email
   * @private
   * @param {Object} location - Location data from form submission
   * @returns {string} Formatted location string
   */
  formatLocation(location) {
    if (!location) return "Location not provided";

    // Handle IP address format (e.g. ::1)
    if (location === "::1") return "Local Development";

    if (location.latitude && location.longitude) {
      return `${location.latitude.toFixed(6)}, ${location.longitude.toFixed(
        6
      )}`;
    }

    if (typeof location === "string") {
      return location;
    }

    return "Location format unknown";
  }

  /**
   * Format device info data for email
   * @private
   * @param {Object} deviceInfo - Device info data from form submission
   * @returns {string} Formatted device info string
   */
  formatDeviceInfo(deviceInfo) {
    if (!deviceInfo) return "Device info not provided";

    if (typeof deviceInfo === "string") {
      return deviceInfo;
    }

    return "Device info format unknown";
  }

  /**
   * Create email template for volunteer form
   * @private
   * @param {Object} formData - The volunteer form data
   * @returns {string} Formatted HTML content
   */
  createEmailTemplate(formData) {
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
      zipCode,
      interests,
      availability,
      experience,
      motivation,
      deviceInfo,
      location,
    } = formData;

    const interestsList = interests
      .map((interest) => this.interestTypes[interest] || interest)
      .join("<br/>");

    const availabilityList = availability
      .map((time) => this.availabilityTypes[time] || time)
      .join("<br/>");

    const formattedLocation = this.formatLocation(location);
    // const formattedDeviceInfo = this.formatDeviceInfo(deviceInfo);

    return `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>RIGHT Housing - Volunteer Application</title>
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
                      RIGHT Housing Inc. - Volunteer Application
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
                              <td style="padding: 8px 0; color: #666666;"><strong>Email:</strong></td>
                              <td style="padding: 8px 0; color: #333333;"><a href="mailto:${email}" style="color: #10B981; text-decoration: none;">${email}</a></td>
                          </tr>
                          <tr>
                              <td style="padding: 8px 0; color: #666666;"><strong>Phone:</strong></td>
                              <td style="padding: 8px 0; color: #333333;">${phone}</td>
                          </tr>
                      </table>
                  </div>

                  <!-- Address -->
                  <div style="background-color: #f8fdfb; border-left: 4px solid #FFD700; padding: 20px; margin-bottom: 20px;">
                      <h3 style="color: #10B981; margin: 0 0 15px 0; font-size: 18px;">Address</h3>
                      <p style="margin: 5px 0; color: #333333;">
                          ${address}<br/>
                          ${city}, ${state} ${zipCode}
                      </p>
                  </div>

                  <!-- Preferences -->
                  <div style="background-color: #f8fdfb; border-left: 4px solid #10B981; padding: 20px; margin-bottom: 20px;">
                      <h3 style="color: #10B981; margin: 0 0 15px 0; font-size: 18px;">Volunteering Preferences</h3>
                      <table style="width: 100%; border-collapse: collapse;">
                          <tr>
                              <td style="padding: 8px 0; color: #666666; width: 140px;"><strong>Interests:</strong></td>
                              <td style="padding: 8px 0; color: #333333;">${interestsList}</td>
                          </tr>
                          <tr>
                              <td style="padding: 8px 0; color: #666666;"><strong>Availability:</strong></td>
                              <td style="padding: 8px 0; color: #333333;">${availabilityList}</td>
                          </tr>
                      </table>
                  </div>

                  <!-- Experience & Motivation -->
                  <div style="background-color: #f8fdfb; border-left: 4px solid #FFD700; padding: 20px; margin-bottom: 20px;">
                      <h3 style="color: #10B981; margin: 0 0 15px 0; font-size: 18px;">Volunteer Preferences</h3>
                      <div style="margin-bottom: 15px;">
                          <strong style="color: #666666;">Areas of Interest:</strong>
                          <p style="margin: 5px 0; color: #333333;">${interestsList}</p>
                      </div>
                      <div style="margin-bottom: 15px;">
                          <strong style="color: #666666;">Availability:</strong>
                          <p style="margin: 5px 0; color: #333333;">${availabilityList}</p>
                      </div>
                  </div>

                  <!-- Additional Information -->
                  <div style="background-color: #f8fdfb; border-left: 4px solid #10B981; padding: 20px; margin-bottom: 20px;">
                      <h3 style="color: #10B981; margin: 0 0 15px 0; font-size: 18px;">Additional Information</h3>
                      <div style="margin-bottom: 15px;">
                          <strong style="color: #666666;">Relevant Experience:</strong>
                          <p style="margin: 5px 0; color: #333333; white-space: pre-wrap; word-wrap: break-word; hyphens: auto; -ms-hyphens: auto; -webkit-hyphens: auto; -moz-hyphens: auto;">${
                            experience || "Not provided"
                          }</p>
                      </div>
                      <div>
                          <strong style="color: #666666;">Motivation to Volunteer:</strong>
                          <p style="margin: 5px 0; color: #333333; white-space: pre-wrap; word-wrap: break-word; hyphens: auto; -ms-hyphens: auto; -webkit-hyphens: auto; -moz-hyphens: auto;">${
                            motivation || "Not provided"
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
                          <strong>Action Required:</strong> Please review ${firstName} ${lastName}'s volunteer application within 48 hours
                      </p>
                  </div>
                  <div style="font-size: 12px; color: rgba(255,255,255,0.9);">
                      <p style="margin: 0;">
                          <strong>Submission Details:</strong><br/>
                          Device: ${deviceInfo || "Unknown Device"}<br/>
                          Location: ${formattedLocation}<br/>
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
   * Send volunteer application email
   * @param {Object} formData - The form data
   * @returns {Promise<Object>} Result of the email sending operation
   */
  async sendEmail(formData) {
    const { firstName, lastName, email } = formData;

    try {
      this.logger.info("Attempting to send volunteer application email", {
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
        subject: `New Volunteer Application: ${firstName} ${lastName}`,
        html: this.createEmailTemplate(formData),
        headers: {
          "X-Form-Type": "Volunteer-Application",
          "X-Sender-Name": `${firstName} ${lastName}`,
          "X-Sender-Email": email,
        },
      };

      const info = await this.transporter.sendMail(mailOptions);

      this.logger.info("Volunteer application email sent successfully", {
        messageId: info.messageId,
        response: info.response,
      });

      return {
        messageId: info.messageId,
        response: info.response,
      };
    } catch (error) {
      this.logger.error("Failed to send volunteer application email", {
        error: error.message,
        code: error.code,
        command: error.command,
      });
      throw error;
    }
  }
}

module.exports = new VolunteerEmailService();
