/**
 * @fileoverview Application form page component for Right Housing.
 * Handles housing application submissions and document uploads.
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/button";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";

import ApplicationHeader from "./partials/ApplicationHeader";
import ApplicationProgress from "./partials/ApplicationProgress";
import PersonalInfoForm from "./partials/PersonalInfoForm";
import BackgroundInfo from "./partials/BackgroundInfo";
import DocumentUpload from "./partials/DocumentUpload";
import ReviewSubmit from "./partials/ReviewSubmit";

/**
 * Apply page component with multi-step application form.
 * Handles document uploads and application submission.
 *
 * @component
 * @returns {JSX.Element} The rendered Apply page component
 */
const Apply = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    dateOfBirth: "",
    documents: [],
  });

  const steps = {
    1: PersonalInfoForm,
    2: BackgroundInfo,
    3: DocumentUpload,
    4: ReviewSubmit,
  };

  const CurrentStepComponent = steps[currentStep];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
      // window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      // window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <ApplicationHeader />

        {/* Progress Bar */}
        <ApplicationProgress currentStep={currentStep} />

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <CurrentStepComponent
              formData={formData}
              setFormData={setFormData}
            />
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-between mt-8"
          >
            {currentStep > 1 && (
              <Button
                type="button"
                variant="bordered"
                color="success"
                startContent={<ArrowLeft className="w-4 h-4" />}
                onClick={handlePrevious}
              >
                Previous
              </Button>
            )}

            <div className="ml-auto">
              {currentStep < 4 ? (
                <Button
                  type="button"
                  color="success"
                  variant="shadow"
                  className="text-white"
                  endContent={<ArrowRight className="w-4 h-4" />}
                  onClick={handleNext}
                >
                  Next Step
                </Button>
              ) : (
                <Button
                  type="submit"
                  color="success"
                  variant="shadow"
                  className="text-white"
                  endContent={<Send className="w-4 h-4" />}
                >
                  Submit Application
                </Button>
              )}
            </div>
          </motion.div>
        </form>

        {/* Help Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          Need help with your application?{" "}
          <a href="#" className="text-success-600 hover:text-success-700">
            Contact our support team
          </a>
        </motion.p>
      </div>
    </div>
  );
};

export default Apply;
