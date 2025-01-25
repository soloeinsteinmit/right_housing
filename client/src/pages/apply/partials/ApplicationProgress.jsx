import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, User, FileText, Send } from "lucide-react";

const ApplicationProgress = ({ currentStep }) => {
  const steps = [
    { id: 1, title: "Personal Info", icon: User },
    { id: 2, title: "Documents", icon: FileText },
    { id: 3, title: "Review & Submit", icon: Send },
  ];

  return (
    <div className="max-w-3xl mx-auto mb-12">
      <div className="flex justify-between">
        {steps.map((step, index) => {
          const StepIcon = step.icon;
          const isCompleted = currentStep > step.id;
          const isCurrent = currentStep === step.id;

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
                  {step.title}
                </span>
              </motion.div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="flex-1 flex items-center">
                  <div
                    className={`h-0.5 w-full ${
                      currentStep > step.id + 1
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
