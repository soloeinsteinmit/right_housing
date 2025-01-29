import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, AlertCircle } from "lucide-react";

const ReviewSubmit = ({ formData }) => {
  const isComplete = () => {
    return (
      formData?.firstName &&
      formData?.lastName &&
      formData?.email &&
      formData?.phone &&
      formData?.address &&
      formData?.dateOfBirth &&
      formData?.documents?.length >= 3
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
          <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="text-base text-gray-900">
                {formData?.firstName} {formData?.lastName}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-base text-gray-900">{formData?.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="text-base text-gray-900">{formData?.phone}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Date of Birth</p>
              <p className="text-base text-gray-900">{formData?.dateOfBirth}</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-gray-500">Current Address</p>
              <p className="text-base text-gray-900">{formData?.address}</p>
            </div>
          </div>
        </div>

        {/* Background Information Review */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Background & Current Situation</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Recovery Journey</p>
              <p className="text-base text-gray-900">
                {formData?.recoveryJourney}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Current Living Situation</p>
              <p className="text-base text-gray-900">{formData?.livingSituation}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Employment Status</p>
              <p className="text-base text-gray-900">{formData?.employmentStatus}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Support System</p>
              <p className="text-base text-gray-900">{formData?.supportSystem}</p>
            </div>
          </div>
        </div>

        {/* Documents Review */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Uploaded Documents</h3>
          <div className="space-y-2">
            {formData?.documents?.map((doc, index) => (
              <div
                key={index}
                className="flex items-center p-3 bg-gray-50 rounded-lg"
              >
                <CheckCircle className="h-5 w-5 text-success-500 mr-3" />
                <span className="text-sm text-gray-700">{doc.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Completion Status */}
        <div
          className={`p-4 rounded-lg ${
            isComplete()
              ? "bg-success-50 text-success-700"
              : "bg-warning-50 text-warning-700"
          }`}
        >
          <div className="flex items-center">
            {isComplete() ? (
              <CheckCircle className="h-5 w-5 mr-2" />
            ) : (
              <AlertCircle className="h-5 w-5 mr-2" />
            )}
            <p className="text-sm font-medium">
              {isComplete()
                ? "Your application is complete and ready to submit!"
                : "Please complete all required fields before submitting."}
            </p>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded text-success-600 focus:ring-success-500"
                required
              />
            </div>
            <div className="ml-3">
              <label htmlFor="terms" className="text-sm text-gray-700">
                I confirm that all the information provided is accurate and complete. I understand that providing false information may result in the rejection of my application.
              </label>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ReviewSubmit;
