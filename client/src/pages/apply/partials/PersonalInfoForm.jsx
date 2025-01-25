import React from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, Home, Calendar } from "lucide-react";

const PersonalInfoForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-2xl shadow-sm"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Personal Information</h2>
      <div className="space-y-6">
        {/* Name Fields */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                name="firstName"
                value={formData?.firstName || ""}
                onChange={handleChange}
                className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-success-200 focus:border-success-500 transition-colors duration-300"
                placeholder="Enter your first name"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                name="lastName"
                value={formData?.lastName || ""}
                onChange={handleChange}
                className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-success-200 focus:border-success-500 transition-colors duration-300"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              name="email"
              value={formData?.email || ""}
              onChange={handleChange}
              className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-success-200 focus:border-success-500 transition-colors duration-300"
              placeholder="Enter your email address"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="tel"
              name="phone"
              value={formData?.phone || ""}
              onChange={handleChange}
              className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-success-200 focus:border-success-500 transition-colors duration-300"
              placeholder="Enter your phone number"
              required
            />
          </div>
        </div>

        {/* Additional Information */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Home className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="address"
              value={formData?.address || ""}
              onChange={handleChange}
              className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-success-200 focus:border-success-500 transition-colors duration-300"
              placeholder="Enter your current address"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date of Birth
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="date"
              name="dateOfBirth"
              value={formData?.dateOfBirth || ""}
              onChange={handleChange}
              className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-success-200 focus:border-success-500 transition-colors duration-300"
              required
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PersonalInfoForm;
