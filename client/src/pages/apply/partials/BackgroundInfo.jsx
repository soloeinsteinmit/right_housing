import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const BackgroundInfo = ({ onNext, onPrev }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-2xl mx-auto"
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Background & Current Situation
          </h2>
          <p className="text-gray-600">
            Help us understand your journey and current circumstances so we can better assist you.
          </p>
        </div>

        <div className="space-y-6">
          {/* Recovery Journey */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Recovery Journey
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-success-500 focus:border-transparent"
              placeholder="Please share your recovery journey (optional)"
            />
          </div>

          {/* Current Living Situation */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Living Situation
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-success-500 focus:border-transparent">
              <option value="">Select your current living situation</option>
              <option value="temporary">Temporary Housing</option>
              <option value="treatment">Treatment Facility</option>
              <option value="shelter">Shelter</option>
              <option value="friends">Staying with Friends/Family</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Employment Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Employment Status
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-success-500 focus:border-transparent">
              <option value="">Select your employment status</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="seeking">Actively Job Seeking</option>
              <option value="unable">Unable to Work</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Support System */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Support System
            </label>
            <textarea
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-success-500 focus:border-transparent"
              placeholder="Describe your current support system (family, friends, counselors, etc.)"
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-8">
          <button
            onClick={onPrev}
            className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-success-500"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Previous
          </button>
          <button
            onClick={onNext}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-success-600 hover:bg-success-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-success-500"
          >
            Next
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BackgroundInfo;
