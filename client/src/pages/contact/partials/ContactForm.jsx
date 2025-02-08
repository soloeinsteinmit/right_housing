import React, { useState, useCallback, useMemo, useEffect } from "react";
import {
  Mail,
  Phone,
  Calendar,
  Send,
  Info,
  SendToBack,
  ArrowBigLeftDash,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input, Textarea } from "@heroui/input";
import { Tooltip } from "@heroui/tooltip";
import { Select, SelectItem } from "@heroui/select";
import axios from "axios";
import { toast } from "sonner";

// Animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const formSteps = [
  { number: 1, title: "Personal Info" },
  { number: 2, title: "Contact Details" },
  { number: 3, title: "Message" },
];

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  subject: "",
  message: "",
  preferredContact: "email",
  bestTime: "morning",
};

const STORAGE_KEY = "contact_form_data";
const STEP_STORAGE_KEY = "contact_form_step";

const loadFormData = () => {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);
    return savedData ? JSON.parse(savedData) : initialFormData;
  } catch (error) {
    console.error("Error loading form data:", error);
    return initialFormData;
  }
};

const loadActiveStep = () => {
  try {
    const savedStep = localStorage.getItem(STEP_STORAGE_KEY);
    return savedStep ? parseInt(savedStep, 10) : 1;
  } catch (error) {
    console.error("Error loading active step:", error);
    return 1;
  }
};

const saveFormData = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving form data:", error);
  }
};

const saveActiveStep = (step) => {
  try {
    localStorage.setItem(STEP_STORAGE_KEY, step.toString());
  } catch (error) {
    console.error("Error saving active step:", error);
  }
};

const clearFormData = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(STEP_STORAGE_KEY);
  } catch (error) {
    console.error("Error clearing form data:", error);
  }
};

const BackgroundPattern = React.memo(() => (
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-success-50/30 to-warning-50/30" />
    <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
  </div>
));

const FormHeader = React.memo(() => (
  <motion.div
    variants={fadeInVariants}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <h2 className="text-4xl max-[480px]:text-3xl font-bold text-gray-900 mb-4">
      Let's Start a Conversation
    </h2>
    <p className="text-xl max-[480px]:text-lg text-gray-600 max-w-2xl mx-auto">
      Whether you're seeking support, looking to volunteer, or want to learn
      more about our programs, we're here to help every step of the way.
    </p>
  </motion.div>
));

const ProgressSteps = React.memo(({ activeStep }) => (
  <div className="bg-gray-50 px-8 py-6">
    <div className="flex justify-between items-center max-md:flex-col max-md:gap-5 max-md:items-start ">
      {formSteps.map((step, index) => (
        <div key={step.number} className="flex items-center max-md:w-full">
          <div
            className={`flex items-center justify-center min-w-10 min-h-10 rounded-full font-semibold ${
              activeStep >= step.number
                ? "bg-success-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {step.number}
          </div>
          <div className="ml-4">
            <p className="text-sm max-md:w-max font-medium text-gray-900">
              {step.title}
            </p>
          </div>
          {index < formSteps.length - 1 && (
            <div className="w-24 h-0.5 max-md:w-full mx-4 bg-gray-200">
              <div
                className={`h-full bg-success-600 transition-all duration-300 ${
                  activeStep > step.number ? "w-full" : "w-0"
                }`}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
));

const ContactMethodButton = React.memo(
  ({ icon: Icon, label, value, selected, onChange }) => (
    <button
      type="button"
      onClick={() => onChange(value)}
      className={`p-4 rounded-xl border ${
        selected ? "border-success-500 bg-success-50" : "border-gray-300"
      } flex items-center gap-3 hover:border-success-500 transition-colors`}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </button>
  )
);

const PersonalInfoStep = React.memo(({ formData, onChange }) => (
  <div className="grid md:grid-cols-2 gap-6">
    <Input
      type="text"
      label="First Name"
      labelPlacement="outside"
      placeholder="Jane"
      name="firstName"
      value={formData.firstName}
      onChange={onChange}
      isRequired
      size="lg"
    />
    <Input
      type="text"
      label="Last Name"
      labelPlacement="outside"
      placeholder="Doe"
      name="lastName"
      value={formData.lastName}
      onChange={onChange}
      size="lg"
    />
  </div>
));

const ContactDetailsStep = React.memo(({ formData, onChange }) => (
  <div className="flex flex-col gap-6">
    <Input
      type="email"
      label="Email Address"
      labelPlacement="outside"
      placeholder="jane@example.com"
      name="email"
      value={formData.email}
      onChange={onChange}
      isRequired
      size="lg"
      startContent={<Mail className="w-5 h-5 text-gray-400" />}
    />
    <Input
      type="text"
      label="Phone Number"
      labelPlacement="outside"
      placeholder="123-456-7890"
      name="phoneNumber"
      value={formData.phoneNumber}
      onChange={onChange}
      isRequired
      size="lg"
      startContent={<Phone className="w-5 h-5 text-gray-400" />}
    />
    <div>
      <div className="flex items-center gap-1 mb-2">
        <label className="block text-base font-medium text-gray-700">
          Preferred Contact Method
        </label>
        <Tooltip
          content={
            <div className="max-w-xs p-3 text-sm text-gray-600">
              We will use this contact method to reach out to you about your
              application.
            </div>
          }
          placement="top"
          showArrow
          className="flex items-center"
        >
          <Info className="w-4 h-4 text-gray-400" />
        </Tooltip>
      </div>
      <div className="grid grid-cols-3 max-[900px]:grid-cols-1 gap-4">
        <ContactMethodButton
          icon={Mail}
          label="Email"
          value="email"
          selected={formData.preferredContact === "email"}
          onChange={(value) =>
            onChange({ target: { name: "preferredContact", value } })
          }
        />
        <ContactMethodButton
          icon={Phone}
          label="Phone"
          value="phone"
          selected={formData.preferredContact === "phone"}
          onChange={(value) =>
            onChange({ target: { name: "preferredContact", value } })
          }
        />
        <ContactMethodButton
          icon={SendToBack}
          label="Both Email & Phone"
          value="both"
          selected={formData.preferredContact === "both"}
          onChange={(value) =>
            onChange({ target: { name: "preferredContact", value } })
          }
        />
      </div>
    </div>
  </div>
));

const MessageStep = React.memo(({ formData, onChange }) => (
  <div className="flex flex-col gap-6">
    <Input
      type="text"
      label="Subject"
      labelPlacement="outside"
      placeholder="Your subject goes here"
      name="subject"
      value={formData.subject}
      onChange={onChange}
      isRequired
      size="lg"
    />
    <Textarea
      name="message"
      label="Your Message"
      labelPlacement="outside"
      placeholder="Your message goes here"
      value={formData.message}
      onChange={onChange}
      maxRows={10}
      minRows={6}
      isRequired
      size="lg"
    />
    <Select
      label="Best Time to Contact"
      labelPlacement="outside"
      placeholder="Select an option"
      value={formData.bestTime}
      onChange={onChange}
      size="lg"
      isRequired
      startContent={<Calendar className="w-5 h-5 text-gray-400" />}
    >
      <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
      <SelectItem value="afternoon">Afternoon (12PM - 4PM)</SelectItem>
      <SelectItem value="evening">Evening (4PM - 8PM)</SelectItem>
    </Select>
  </div>
));

const NavigationButtons = React.memo(
  ({ activeStep, onPrevious, onNext, isSubmitting, isTransitioning }) => {
    // console.log("[NavigationButtons] Rendering with activeStep:", activeStep);
    return (
      <div className="mt-8 flex justify-between items-center">
        {activeStep > 1 && (
          <motion.button
            type="button"
            onClick={onPrevious}
            className="px-8 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors flex items-center gap-2"
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting || isTransitioning}
          >
            <ArrowBigLeftDash className="w-4 h-4" />
            Previous
          </motion.button>
        )}

        {activeStep <= 2 ? (
          <motion.button
            type="button"
            onClick={onNext}
            className="px-8 py-3 bg-success-600 text-white rounded-xl hover:bg-success-700 transition-colors flex items-center gap-2 ml-auto"
            whileTap={{ scale: 0.98 }}
            disabled={isTransitioning}
          >
            Next
            <Send className="w-4 h-4" />
          </motion.button>
        ) : (
          <motion.button
            type="submit"
            className={`px-8 py-3 bg-success-600 text-white rounded-xl transition-all flex items-center gap-2 ml-auto ${
              isSubmitting || isTransitioning ? "opacity-75 cursor-not-allowed" : "hover:bg-success-700"
            }`}
            whileTap={isSubmitting || isTransitioning ? {} : { scale: 0.98 }}
            disabled={isSubmitting || isTransitioning}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                Submit
                <Send className="w-4 h-4" />
              </>
            )}
          </motion.button>
        )}
      </div>
    );
  }
);

const ContactForm = () => {
  const [formData, setFormData] = useState(loadFormData);
  const [activeStep, setActiveStep] = useState(loadActiveStep);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    saveFormData(formData);
  }, [formData]);

  useEffect(() => {
    saveActiveStep(activeStep);
  }, [activeStep]);

  const handleChange = useCallback((e) => {
    // console.log("[handleChange] Field changed:", e.target.name);
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const validateStep = useCallback(
    (step) => {
      // console.log("[validateStep] Validating step:", step);
      const stepValidation = {
        1: {
          fields: {
            firstName: "First Name",
            lastName: "Last Name",
          },
        },
        2: {
          fields: {
            email: "Email",
            phoneNumber: "Phone Number",
          },
          customValidation: () => {
            // console.log("[customValidation] Validating email format");
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
              return "Please enter a valid email address";
            }
            return null;
          },
        },
        3: {
          fields: {
            subject: "Subject",
            message: "Message",
            bestTime: "Best Time to Contact",
          },
        },
      };

      const validation = stepValidation[step];
      if (!validation) return { isValid: true };

      const missingFields = Object.entries(validation.fields)
        .filter(([key]) => !formData[key])
        .map(([_, label]) => label);

      // console.log("[validateStep] Missing fields:", missingFields);

      if (missingFields.length > 0) {
        return {
          isValid: false,
          error: `Please fill in all required fields: ${missingFields.join(
            ", "
          )}`,
        };
      }

      if (validation.customValidation) {
        const customError = validation.customValidation();
        if (customError) {
          return { isValid: false, error: customError };
        }
      }

      return { isValid: true };
    },
    [formData]
  );

  const handlePrevious = useCallback(() => {
    // console.log("[handlePrevious] Moving to previous step");
    setActiveStep((prev) => Math.max(1, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    // console.log("[handleNext] Attempting to move to next step from step:", activeStep);
    const { isValid, error } = validateStep(activeStep);

    if (!isValid) {
      // console.log("[handleNext] Validation failed:", error);
      toast.error(error, { duration: 4000 });
      return;
    }

    // console.log("[handleNext] Moving to next step");
    setIsTransitioning(true);
    setActiveStep((prev) => Math.min(3, prev + 1));
    // Reset transitioning state after animation completes
    setTimeout(() => setIsTransitioning(false), 300);
  }, [activeStep, validateStep]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      // console.log("[handleSubmit] Form submitted at step:", activeStep);

      // If we're not on step 3 or transitioning, just prevent form submission
      if (activeStep !== 3) {
        // console.log("[handleSubmit] Not on last step, preventing submission");
        e.stopPropagation();
        return;
      }

      if (isTransitioning) {
        // console.log("[handleSubmit] In transition, preventing submission");
        e.stopPropagation();
        return;
      }

      const { isValid, error } = validateStep(activeStep);
      if (!isValid) {
        // console.log("[handleSubmit] Validation failed:", error);
        toast.error(error, { duration: 4000 });
        return;
      }

      // console.log("[handleSubmit] Starting API submission");
      setIsSubmitting(true);

      try {
        await toast.promise(
          axios.post("http://localhost:2468/api/contact/submit", formData),
          {
            loading: "Sending your message...",
            success: () => {
              // console.log("[handleSubmit] API call successful, resetting form");
              clearFormData();
              setFormData(initialFormData);
              setActiveStep(1);
              return "Message sent successfully! We'll get back to you soon.";
            },
            error: (error) => {
              console.error("[handleSubmit] API call failed:", error);
              return (
                error.response?.data?.message ||
                "Failed to send message. Please try again later."
              );
            },
          },
          {
            duration: 5000,
          }
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    [activeStep, formData, validateStep, isTransitioning]
  );

  const renderActiveStep = useMemo(() => {
    switch (activeStep) {
      case 1:
        return <PersonalInfoStep formData={formData} onChange={handleChange} />;
      case 2:
        return (
          <ContactDetailsStep formData={formData} onChange={handleChange} />
        );
      case 3:
        return <MessageStep formData={formData} onChange={handleChange} />;
      default:
        return null;
    }
  }, [activeStep, formData, handleChange]);

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <BackgroundPattern />

      <div className="container mx-auto px-4 relative">
        <FormHeader />

        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <ProgressSteps activeStep={activeStep} />

            <form onSubmit={handleSubmit} className="relative p-8 lg:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderActiveStep}
                </motion.div>
              </AnimatePresence>

              <NavigationButtons
                activeStep={activeStep}
                onPrevious={handlePrevious}
                onNext={handleNext}
                isSubmitting={isSubmitting}
                isTransitioning={isTransitioning}
              />
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(ContactForm);
