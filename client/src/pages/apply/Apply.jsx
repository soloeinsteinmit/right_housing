/**
 * @fileoverview Application form page component for Right Housing.
 * Handles housing application submissions and document uploads.
 */

import React, { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button } from "@heroui/button";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";
import { toast, Toaster } from "sonner";
import axios from "axios";

import {
  ApplicationProvider,
  useApplication,
} from "./context/ApplicationContext";
import ApplicationHeader from "./partials/ApplicationHeader";
import ApplicationProgress from "./partials/ApplicationProgress";
import PersonalInfoForm from "./partials/PersonalInfoForm";
import BackgroundInfo from "./partials/BackgroundInfo";
import ReviewSubmit from "./partials/ReviewSubmit";
import endpoint from "../../config.js";

// Form step components mapping
const FORM_STEPS = {
  1: PersonalInfoForm,
  2: BackgroundInfo,
  3: ReviewSubmit,
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
const NavigationButtons = React.memo(
  ({ currentStep, isSubmitting, onPrev, onNext, onSubmit }) => {
    // console.log("Current Step:", currentStep); // Debug log

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between mt-8"
      >
        {/* Previous button - only show if not on first step */}
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

        {/* Next/Submit button */}
        <div className={`${currentStep <= 1 ? "ml-auto" : ""}`}>
          {currentStep < 3 ? (
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
              onPress={onSubmit}
            >
              Submit Application
            </Button>
          )}
        </div>
      </motion.div>
    );
  }
);

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

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfC0sh2xRTDALqT837g_p1rPI3QX0pW7jCJDiaJXQ6RMFuOZQ/viewform?usp=dialog";

/**
 * Main application form component that handles the form steps and submission
 */
const ApplicationForm = () => {
  const {
    state,
    updateFormData,
    nextStep,
    prevStep,
    setSubmitting,
    setError,
    resetForm,
  } = useApplication();

  const { currentStep, isSubmitting, formData } = state;
  const [showRedirectAnimation, setShowRedirectAnimation] = useState(false);

  const StepComponent = FORM_STEPS[Number(currentStep) || 1];

  // Handle next step
  const handleNext = useCallback(() => {
    nextStep();
  }, [nextStep]);

  // Handle previous step
  const handlePrev = useCallback(() => {
    prevStep();
  }, [prevStep]);

  // Handle submit
  const handleSubmit = useCallback(
    async (e) => {
      if (e) e.preventDefault;
      if (currentStep !== 3) {
        handleNext();
        return;
      }

      try {
        setSubmitting(true);

        // Initial loading toast with ID
        const loadingToastId = toast.loading(
          "Processing your interest form...",
          {
            duration: Infinity, // Keep it until we dismiss it
          }
        );

        // Prepare form data for submission
        const submissionData = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: formData.phone,
          currentAddress: formData.address,
          dateOfBirth: formData.dateOfBirth,
          background: formData.background || "",
          livingStatus: formData.livingStatus || "",
          employmentStatus: formData.employmentStatus || "",
          currentSituation: formData.currentSituation || "",
          interest: formData.interest || "",
          deviceInfo: {
            userAgent: window.navigator.userAgent,
          },
          location: "::1", // Default to localhost IP
        };

        // Try to get user's location if available
        if (navigator.geolocation) {
          try {
            const position = await new Promise((resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve, reject, {
                timeout: 5000, // 5 second timeout
                maximumAge: 0, // Don't use cached position
                enableHighAccuracy: true,
              });
            });

            submissionData.location = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            };
          } catch (locationError) {
            console.log("Location access denied or timeout:", locationError);
            // Keep default ::1 location
          }
        }

        // Submit to backend
        // const apiUrl = import.meta.env.VITE_API_URL.replace(/\/$/, ""); // Remove trailing slash if present
        const apiUrl = endpoint.replace(/\/$/, ""); // Remove trailing slash if present
        await toast.promise(
          axios.post(`${apiUrl}/api/housing/apply`, submissionData, {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }),
          {
            loading: "Submitting your application...",
            success: "Your interest form has been submitted successfully!",
            error: "There was an error submitting your form. Please try again.",
          }
        );

        window.scrollTo({ top: 100, behavior: "smooth" });

        // Show redirect animation
        setShowRedirectAnimation(true);

        // Wait for animation
        await new Promise((r) => setTimeout(r, 2000));

        // Redirecting toast
        toast("Redirecting you to the application form...", {
          duration: 3000,
          icon: "🔄",
          style: {
            background: "#3B82F6", // blue
            color: "white",
          },
        });

        // Wait before opening Google Form
        await new Promise((r) => setTimeout(r, 2000));

        // Open Google Form in a new tab
        window.open(GOOGLE_FORM_URL, "_blank");

        // Reset the form and localStorage
        resetForm();
        setShowRedirectAnimation(false);
      } catch (error) {
        const errorMessage =
          error.response?.data?.message ||
          "There was an error submitting your form. Please try again.";

        toast.error(errorMessage, {
          duration: 4000,
          style: {
            background: "#EF4444", // error red
            color: "white",
          },
        });
        setError(error.message);
      } finally {
        setSubmitting(false);
      }
    },
    [currentStep, formData, setSubmitting, setError, resetForm, handleNext]
  );

  // SEO structured data for application form
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebForm",
    name: "RIGHT Housing Application Form",
    description:
      "Apply for RIGHT Housing's transitional housing and recovery support services. Complete our secure online application process.",
    url: "https://righthousing.org/apply",
    provider: {
      "@type": "NGO",
      name: "RIGHT Housing Inc.",
      description:
        "Providing transitional housing and comprehensive support services for individuals in recovery.",
    },
    step: [
      {
        "@type": "HowToStep",
        name: "Personal Information",
        text: "Fill out your personal details and contact information",
      },
      {
        "@type": "HowToStep",
        name: "Background Information",
        text: "Provide relevant background information for your application",
      },
      {
        "@type": "HowToStep",
        name: "Review and Submit",
        text: "Review your application details and submit",
      },
    ],
  };

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
        <meta
          property="og:title"
          content="Apply for RIGHT Housing | Recovery Housing Application"
        />
        <meta
          property="og:description"
          content="Apply for RIGHT Housing's transitional housing and recovery support services. Our simple online application process helps you start your journey to recovery and independence."
        />

        {/* Twitter */}
        <meta
          name="twitter:title"
          content="Apply for RIGHT Housing | Recovery Housing Application"
        />
        <meta
          name="twitter:description"
          content="Apply for RIGHT Housing's transitional housing and recovery support services. Our simple online application process helps you start your journey to recovery and independence."
        />

        {/* Additional Meta Tags */}
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large"
        />
        <meta
          name="application-name"
          content="RIGHT Housing Application Portal"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Toaster
        position="top-center"
        expand={true}
        richColors
        toastOptions={{
          style: {
            fontSize: "16px",
            fontWeight: "500",
          },
          className: "my-toast-class",
          duration: 4000,
        }}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <ApplicationHeader />
          <ApplicationProgress />

          <form
            onSubmit={(e) => e.preventDefault()}
            className="max-w-3xl mx-auto"
          >
            <AnimatePresence mode="wait">
              {showRedirectAnimation ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex flex-col items-center justify-center py-20"
                >
                  <motion.div
                    animate={{
                      rotate: 360,
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                    className="w-16 h-16 border-4 border-success-500 border-t-transparent rounded-full mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Preparing Your Application
                  </h3>
                  <p className="text-gray-600">
                    Please wait while we redirect you...
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={currentStep}
                  variants={formVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  {StepComponent && <StepComponent />}
                </motion.div>
              )}
            </AnimatePresence>

            {!showRedirectAnimation && (
              <NavigationButtons
                currentStep={Number(currentStep)}
                isSubmitting={isSubmitting}
                onPrev={handlePrev}
                onNext={handleNext}
                onSubmit={handleSubmit}
              />
            )}
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
