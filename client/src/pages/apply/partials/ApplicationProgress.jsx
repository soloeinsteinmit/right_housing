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
    title: "Documents",
    icon: FileText,
  },
  {
    number: 4,
    title: "Review & Submit",
    icon: CheckCircle,
  },
];

const ApplicationProgress = React.memo(() => {
  const { state: { currentStep } } = useApplication();

  return (
    <div className="bg-gray-50 px-8 py-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        {formSteps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div className="flex items-center">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                  currentStep >= step.number
                    ? "bg-success-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {currentStep > step.number ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  step.number
                )}
              </div>
              <div className="ml-4">
                <p
                  className={`text-sm font-medium ${
                    currentStep >= step.number
                      ? "text-gray-900"
                      : "text-gray-500"
                  }`}
                >
                  {step.title}
                </p>
              </div>
            </div>
            {index < formSteps.length - 1 && (
              <div className="w-24 h-0.5 mx-4 bg-gray-200">
                <div
                  className={`h-full bg-success-600 transition-all duration-300 ${
                    currentStep > step.number ? "w-full" : "w-0"
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
