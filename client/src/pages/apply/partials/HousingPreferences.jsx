import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const HousingPreferences = ({ onNext, onPrev }) => {
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
            Housing Preferences
          </h2>
          <p className="text-gray-600">
            Help us find the best housing solution that matches your needs and preferences.
          </p>
        </div>

        <div className="space-y-6">
          {/* Preferred Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Location
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-success-500 focus:border-transparent">
              <option value="">Select preferred location</option>
              <option value="downtown">Downtown Area</option>
              <option value="suburban">Suburban Area</option>
              <option value="outskirts">City Outskirts</option>
              <option value="any">No Preference</option>
            </select>
          </div>

          {/* Transportation Needs */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Transportation Needs
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-success-600" />
                <span className="ml-2">Near public transportation</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-success-600" />
                <span className="ml-2">Walking distance to shopping</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-success-600" />
                <span className="ml-2">Close to medical facilities</span>
              </label>
            </div>
          </div>

          {/* Room Preference */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Room Preference
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-success-500 focus:border-transparent">
              <option value="">Select room preference</option>
              <option value="private">Private Room</option>
              <option value="shared">Shared Room</option>
              <option value="any">No Preference</option>
            </select>
          </div>

          {/* Accessibility Needs */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Accessibility Needs
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-success-600" />
                <span className="ml-2">Wheelchair accessible</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-success-600" />
                <span className="ml-2">Ground floor only</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-success-600" />
                <span className="ml-2">Other accessibility needs</span>
              </label>
            </div>
          </div>

          {/* Additional Requirements */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Requirements or Preferences
            </label>
            <textarea
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-success-500 focus:border-transparent"
              placeholder="Please share any other housing requirements or preferences"
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

export default HousingPreferences;
