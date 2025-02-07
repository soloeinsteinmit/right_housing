/**
 * @fileoverview Application form page component for Right Housing.
 * Handles housing application submissions and document uploads.
 */

import React, { useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button } from "@heroui/button";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";

import {
  ApplicationProvider,
  useApplication,
} from "./context/ApplicationContext";
import ApplicationHeader from "./partials/ApplicationHeader";
import ApplicationProgress from "./partials/ApplicationProgress";
import PersonalInfoForm from "./partials/PersonalInfoForm";
import BackgroundInfo from "./partials/BackgroundInfo";
import DocumentUpload from "./partials/DocumentUpload";
import ReviewSubmit from "./partials/ReviewSubmit";

// Form step components mapping
const FORM_STEPS = {
  1: PersonalInfoForm,
  2: BackgroundInfo,
  3: DocumentUpload,
  4: ReviewSubmit,
};

// Animation variants for form transitions
const formVariants = {
  enter: { x: 20, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -20, opacity: 0 },
};

/**
 * Navigation buttons component for form steps
 */
const NavigationButtons = React.memo(({ currentStep, isSubmitting, onPrev, onNext }) => (
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
        onPress={onPrev}
        aria-label="Previous Step"
        isDisabled={isSubmitting}
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
          onPress={onNext}
          aria-label="Next Step"
          isDisabled={isSubmitting}
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
          aria-label="Submit Application"
          isLoading={isSubmitting}
        >
          Submit Application
        </Button>
      )}
    </div>
  </motion.div>
));

NavigationButtons.displayName = "NavigationButtons";

/**
 * Help text component
 */
const HelpText = React.memo(() => (
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
));

HelpText.displayName = "HelpText";

/**
 * Main application form component that handles the form steps and submission
 */
const ApplicationForm = () => {
  const {
    state: { currentStep, isSubmitting },
    nextStep,
    prevStep,
    setSubmitting,
    setError,
  } = useApplication();

  const CurrentStepComponent = FORM_STEPS[currentStep];

  // SEO structured data for application form
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebForm",
    "name": "RIGHT Housing Application Form",
    "description": "Apply for RIGHT Housing's transitional housing and recovery support services. Complete our secure online application process.",
    "url": "https://righthousing.org/apply",
    "provider": {
      "@type": "NGO",
      "name": "RIGHT Housing Inc.",
      "description": "Providing transitional housing and comprehensive support services for individuals in recovery."
    },
    "step": [
      {
        "@type": "HowToStep",
        "name": "Personal Information",
        "text": "Fill out your personal details and contact information"
      },
      {
        "@type": "HowToStep",
        "name": "Background Information",
        "text": "Provide relevant background information for your application"
      },
      {
        "@type": "HowToStep",
        "name": "Document Upload",
        "text": "Upload required documentation to support your application"
      },
      {
        "@type": "HowToStep",
        "name": "Review and Submit",
        "text": "Review your application details and submit"
      }
    ]
  };

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      // Add form submission logic here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      nextStep();
    } catch (error) {
      setError(error.message);
    } finally {
      setSubmitting(false);
    }
  }, [setSubmitting, setError, nextStep]);

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Apply for RIGHT Housing | Recovery Housing Application</title>
        <meta 
          name="description" 
          content="Apply for RIGHT Housing's transitional housing and recovery support services. Our simple online application process helps you start your journey to recovery and independence."
        />
        <meta 
          name="keywords" 
          content="housing application, recovery housing apply, transitional housing application, RIGHT Housing application, recovery support application, housing assistance application, program application, recovery program apply, housing support application, application process, housing eligibility, recovery housing program, transitional housing program, support services application, recovery assistance application, housing program application, application requirements, recovery housing eligibility"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Apply for RIGHT Housing | Recovery Housing Application" />
        <meta 
          property="og:description" 
          content="Apply for RIGHT Housing's transitional housing and recovery support services. Our simple online application process helps you start your journey to recovery and independence."
        />

        {/* Twitter */}
        <meta name="twitter:title" content="Apply for RIGHT Housing | Recovery Housing Application" />
        <meta 
          name="twitter:description" 
          content="Apply for RIGHT Housing's transitional housing and recovery support services. Our simple online application process helps you start your journey to recovery and independence."
        />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="application-name" content="RIGHT Housing Application Portal" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <ApplicationHeader />
          <ApplicationProgress />

          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                variants={formVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <CurrentStepComponent />
              </motion.div>
            </AnimatePresence>

            <NavigationButtons
              currentStep={currentStep}
              isSubmitting={isSubmitting}
              onPrev={prevStep}
              onNext={nextStep}
            />
          </form>

          <HelpText />
        </div>
      </div>
    </>
  );
};

/**
 * Apply page component wrapped with ApplicationProvider
 * @returns {JSX.Element} The rendered Apply page component
 */
const Apply = () => (
  <ApplicationProvider>
    <ApplicationForm />
  </ApplicationProvider>
);

export default Apply;
