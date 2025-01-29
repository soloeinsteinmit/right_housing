import React from "react";
import { motion } from "framer-motion";
import { UserCircle, History, FileText, CheckCircle } from "lucide-react";

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
      name: "Documents",
      description: "Upload required documentation",
      icon: FileText,
    },
    {
      id: "04",
      name: "Review & Submit",
      description: "Review your application before submission",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            const isCompleted = currentStep > parseInt(step.id);
            const isCurrent = currentStep === parseInt(step.id);

            return (
              <React.Fragment key={step.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isCompleted
                        ? "bg-success-600"
                        : isCurrent
                        ? "bg-success-100"
                        : "bg-gray-100"
                    }`}
                  >
                    <StepIcon
                      className={`w-5 h-5 ${
                        isCompleted
                          ? "text-white"
                          : isCurrent
                          ? "text-success-600"
                          : "text-gray-400"
                      }`}
                    />
                  </div>
                  <span
                    className={`mt-2 text-sm ${
                      isCompleted
                        ? "text-success-600"
                        : isCurrent
                        ? "text-success-600"
                        : "text-gray-500"
                    }`}
                  >
                    {step.name}
                  </span>
                </motion.div>

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
    </div>
  );
};

export default ApplicationProgress;
