import React from "react";
import { UserCircle, History, FileText, CheckCircle } from "lucide-react";
import { useApplication } from "../context/ApplicationContext";

const formSteps = [
  {
    number: 1,
    title: "Personal Information",
    icon: UserCircle,
  },
  {
    number: 2,
    title: "Background Info",
    icon: History,
  },
  {
    number: 3,
    title: "Review & Submit",
    icon: CheckCircle,
  },
];

const ApplicationProgress = React.memo(() => {
  const { state } = useApplication();
  const { currentStep } = state;

  return (
    <div className="bg-gray-50 px-8 py-6 max-w-4xl mx-auto max-sm:px-2">
      <div className="flex justify-between items-center max-lg:flex-wrap max-lg:gap-3 max-sm:flex-col max-sm:justify-start max-sm:items-start">
        {formSteps.map((formStep, index) => (
          <div key={formStep.number} className="flex items-center max-sm:w-full">
            <div className="flex items-center">
              <div
                className={`flex items-center justify-center min-w-10 min-h-10 rounded-full font-semibold ${
                  currentStep >= formStep.number
                    ? "bg-success-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {currentStep > formStep.number ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  formStep.number
                )}
              </div>
              <div className="ml-4">
                <p
                  className={`text-sm max-sm:w-max font-medium ${
                    currentStep >= formStep.number
                      ? "text-gray-900"
                      : "text-gray-500"
                  }`}
                >
                  {formStep.title}
                </p>
              </div>
            </div>
            {index < formSteps.length - 1 && (
              <div className="w-24 h-0.5 max-sm:w-full mx-4 bg-gray-200">
                <div
                  className={`h-full bg-success-600 transition-all duration-300 ${
                    currentStep > formStep.number ? "w-full" : "w-0"
                  }`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

ApplicationProgress.displayName = "ApplicationProgress";

export default ApplicationProgress;
