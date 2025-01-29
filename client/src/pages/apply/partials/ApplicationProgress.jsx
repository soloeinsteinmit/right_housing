import React from "react";
import { motion } from "framer-motion";
import { UserCircle, History, Home, FileText, CheckCircle } from "lucide-react";

const ApplicationProgress = ({ currentStep }) => {
  const steps = [
    {
      id: "01",
      name: "Personal Information",
      description: "Basic contact details and identification",
      icon: UserCircle,
    },
    {
      id: "02",
      name: "Background & Current Situation",
      description: "Share your journey and current circumstances",
      icon: History,
    },
    {
      id: "03",
      name: "Housing Preferences",
      description: "Location preferences and specific housing needs",
      icon: Home,
    },
    {
      id: "04",
      name: "Documents",
      description: "Upload required documentation",
      icon: FileText,
    },
    {
      id: "05",
      name: "Review & Submit",
      description: "Review your application before submission",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto mb-12">
      <div className="flex justify-between">
        {steps.map((step, index) => {
          const StepIcon = step.icon;
          const isCompleted = currentStep > parseInt(step.id);
          const isCurrent = currentStep === parseInt(step.id);

          return (
            <React.Fragment key={step.id}>
              {/* Step Item */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center relative"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isCompleted
                      ? "bg-success-600"
                      : isCurrent
                      ? "bg-success-500"
                      : "bg-gray-200"
                  } transition-colors duration-300`}
                >
                  {isCompleted ? (
                    <CheckCircle className="w-6 h-6 text-white" />
                  ) : (
                    <StepIcon
                      className={`w-5 h-5 ${
                        isCurrent ? "text-white" : "text-gray-500"
                      }`}
                    />
                  )}
                </div>
                <span
                  className={`mt-2 text-sm font-medium ${
                    isCurrent ? "text-success-600" : "text-gray-500"
                  }`}
                >
                  {step.name}
                </span>
              </motion.div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="flex-1 flex items-center">
                  <div
                    className={`h-0.5 w-full ${
                      currentStep > parseInt(step.id) + 1
                        ? "bg-success-600"
                        : "bg-gray-200"
                    } transition-colors duration-300`}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ApplicationProgress;
