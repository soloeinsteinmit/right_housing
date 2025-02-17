import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, AlertCircle } from "lucide-react";
import { Checkbox } from "@heroui/checkbox";
import { useApplication } from "../context/ApplicationContext";
import { livingTypes, employmentTypes } from "../partials/BackgroundInfo";

const ReviewSubmit = () => {
  const { state } = useApplication();
  const { formData } = state;

  const isComplete = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phone &&
      formData.address &&
      formData.dateOfBirth
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-2xl shadow-sm"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Review & Submit</h2>

      <div className="space-y-8">
        {/* Personal Information Review */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Personal Information
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="text-base text-gray-900">
                {formData.firstName ? formData.firstName + " " : "N/A"}{" "}
                {formData.lastName}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-base text-gray-900">
                {formData.email || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="text-base text-gray-900">
                {formData.phone || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Date of Birth</p>
              <p className="text-base text-gray-900">
                {formData.dateOfBirth || "N/A"}
              </p>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-gray-500">Current Address</p>
              <p className="text-base text-gray-900">
                {formData.address || "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* Background Information Review */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Background & Current Situation
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Background</p>
              <p className="text-base text-gray-900 whitespace-pre-line">
                {formData.background || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Current Living Situation</p>
              <p className="text-base text-gray-900">
                {formData.livingStatus !== "other"
                  ? livingTypes[formData.livingStatus]
                  : "Other Situation" || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Employment Status</p>
              <p className="text-base text-gray-900">
                {formData.employmentTypes !== "other"
                  ? employmentTypes[formData.employmentStatus]
                  : "Other Employment" || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Current Situation Details</p>
              <p className="text-base text-gray-900 whitespace-pre-line">
                {formData.currentSituationDetails || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Interest in Program</p>
              <p className="text-base text-gray-900 whitespace-pre-line">
                {formData.interest || "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* Completion Status */}
        <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
          {isComplete() ? (
            <CheckCircle className="h-6 w-6 text-success-600 flex-shrink-0" />
          ) : (
            <AlertCircle className="h-6 w-6 text-warning-600 flex-shrink-0" />
          )}
          <div>
            <h4 className="text-base font-medium text-gray-900">
              {isComplete()
                ? "Application Ready for Submission"
                : "Required Information Missing"}
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              {isComplete()
                ? "You have completed all required fields. Please review your information before submitting."
                : "Please complete all required fields marked with an asterisk (*) before submitting."}
            </p>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="space-y-4">
          <Checkbox isRequired color="success">
            I confirm that all information provided is accurate and complete to
            the best of my knowledge.
          </Checkbox>
          <Checkbox isRequired color="success">
            I understand that providing false information may result in the
            rejection of my application.
          </Checkbox>
        </div>
      </div>
    </motion.section>
  );
};

export default ReviewSubmit;
