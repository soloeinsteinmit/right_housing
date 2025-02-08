const { sendEmail } = require("../services/emailService");
const NewsletterSubscriber = require("../models/NewsletterSubscriber");
const axios = require("axios");

const handleNewsletterSubscription = async (req, res) => {
  try {
    const { email, recaptchaToken } = req.body;

    if (!email || !recaptchaToken) {
      return res.status(400).json({
        success: false,
        message: "Email and reCAPTCHA token are required",
      });
    }

    // Verify reCAPTCHA token
    try {
      const recaptchaResponse = await axios.post(
        "https://www.google.com/recaptcha/api/siteverify",
        null,
        {
          params: {
            secret: process.env.RECAPTCHA_SECRET_KEY,
            response: recaptchaToken,
          },
        }
      );

      if (!recaptchaResponse.data.success) {
        return res.status(400).json({
          success: false,
          message: "reCAPTCHA verification failed",
        });
      }
    } catch (error) {
      console.error("reCAPTCHA verification error:", error);
      return res.status(400).json({
        success: false,
        message: "Failed to verify reCAPTCHA",
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // Check if email already exists
    let subscriber = await NewsletterSubscriber.findOne({ where: { email } });

    if (subscriber) {
      if (subscriber.isActive) {
        return res.status(400).json({
          success: false,
          message: "This email is already subscribed to our newsletter",
        });
      } else {
        // Reactivate subscription
        subscriber.isActive = true;
        await subscriber.save();
      }
    } else {
      // Create new subscriber
      subscriber = await NewsletterSubscriber.create({ email });
    }

    // Send confirmation email
    await sendEmail({
      to: email,
      subject: "Welcome to RIGHT Housing Newsletter!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #10B981; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; }
            .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
            .button { display: inline-block; padding: 10px 20px; background-color: #10B981; color: white; text-decoration: none; border-radius: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Welcome to RIGHT Housing Newsletter!</h1>
            </div>
            <div class="content">
              <p>Thank you for subscribing to our newsletter! We're excited to keep you updated with our latest news, events, and opportunities.</p>
              <p>You'll receive regular updates about:</p>
              <ul>
                <li>New housing opportunities</li>
                <li>Community events</li>
                <li>Volunteer programs</li>
                <li>Success stories</li>
              </ul>
              <p>If you wish to unsubscribe at any time, click the button below:</p>
              <p style="text-align: center;">
                <a href="${process.env.FRONTEND_URL}/newsletter/unsubscribe/${subscriber.unsubscribeToken}" class="button">
                  Unsubscribe
                </a>
              </p>
            </div>
            <div class="footer">
              <p>RIGHT Housing Inc. - Where Every Door Leads to Opportunity</p>
              <p>This email was sent to ${email}</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Successfully subscribed to newsletter",
    });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to process subscription. Please try again later.",
    });
  }
};

const handleUnsubscribe = async (req, res) => {
  try {
    const { token } = req.params;

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Unsubscribe token is required",
      });
    }

    const subscriber = await NewsletterSubscriber.findOne({
      where: { unsubscribeToken: token },
    });

    if (!subscriber) {
      return res.status(404).json({
        success: false,
        message: "Invalid unsubscribe token",
      });
    }

    if (!subscriber.isActive) {
      return res.status(400).json({
        success: false,
        message: "This email is already unsubscribed",
      });
    }

    subscriber.isActive = false;
    await subscriber.save();

    // Send confirmation email
    await sendEmail({
      to: subscriber.email,
      subject: "Unsubscribed from RIGHT Housing Newsletter",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #10B981; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; }
            .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Unsubscribed from RIGHT Housing Newsletter</h1>
            </div>
            <div class="content">
              <p>You have been successfully unsubscribed from our newsletter.</p>
              <p>We're sorry to see you go! If you change your mind, you can always subscribe again through our website.</p>
            </div>
            <div class="footer">
              <p>RIGHT Housing Inc. - Where Every Door Leads to Opportunity</p>
              <p>This email was sent to ${subscriber.email}</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Successfully unsubscribed from newsletter",
    });
  } catch (error) {
    console.error("Newsletter unsubscribe error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to process unsubscribe request. Please try again later.",
    });
  }
};

module.exports = {
  handleNewsletterSubscription,
  handleUnsubscribe,
};
