import React, { useState, useCallback } from "react";
import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const handleRecaptchaChange = useCallback((token) => {
    setRecaptchaToken(token);
    setStatus({ type: "", message: "" });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setStatus({
        type: "error",
        message: "Please enter your email address",
      });
      return;
    }

    if (!recaptchaToken) {
      setStatus({
        type: "error",
        message: "Please complete the reCAPTCHA verification",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, recaptchaToken }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Thank you for subscribing to our newsletter!",
        });
        setEmail("");
        setRecaptchaToken("");
        if (window.grecaptcha) {
          window.grecaptcha.reset();
        }
      } else {
        throw new Error(data.message || "Failed to subscribe");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-6 text-warning-400">
        Stay Updated
      </h3>
      <p className="text-success-100 mb-4">
        Subscribe to our newsletter for the latest updates and news.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setStatus({ type: "", message: "" });
          }}
          className="w-full px-4 py-2 rounded-full bg-success-800 border border-success-700 focus:outline-none focus:border-warning-400 text-white placeholder-success-300"
          disabled={isLoading}
        />

        <div className="flex justify-center">
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
            onChange={handleRecaptchaChange}
            theme="dark"
          />
        </div>

        {status.type === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-sm"
          >
            {status.message}
          </motion.p>
        )}

        <Button
          type="submit"
          className="w-full text-white"
          color="warning"
          radius="full"
          isLoading={isLoading}
        >
          Subscribe
        </Button>

        {status.type === "success" && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-success-300 text-sm mt-2"
          >
            {status.message}
          </motion.p>
        )}
      </form>
    </div>
  );
};

export default React.memo(Newsletter);
