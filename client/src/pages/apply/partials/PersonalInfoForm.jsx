import React from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, Home, Calendar } from "lucide-react";
import { Input } from "@heroui/input";
import { DatePicker } from "@heroui/date-picker";

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
      <h2 className="text-2xl font-bold mb-6 text-gray-900">
        Personal Information
      </h2>
      <div className="flex flex-col gap-6 ">
        {/* Name Fields */}
        <div className="grid md:grid-cols-2 gap-6">
          <Input
            label="First Name"
            placeholder="Enter your first name"
            onChange={handleChange}
            value={formData?.firstName || ""}
            isRequired
            type="text"
            size="lg"
            variant="bordered"
            labelPlacement="outside"
            startContent={<User className="h-5 w-5 text-gray-400" />}
          />
          <Input
            label="Last Name"
            placeholder="Enter your last name"
            onChange={handleChange}
            value={formData?.lastName || ""}
            isRequired
            type="text"
            size="lg"
            variant="bordered"
            labelPlacement="outside"
            startContent={<User className="h-5 w-5 text-gray-400" />}
          />
        </div>

        {/* Contact Information */}
        <Input
          label="Email Address"
          placeholder="Enter your email address"
          onChange={handleChange}
          value={formData?.email || ""}
          isRequired
          type="email"
          size="lg"
          variant="bordered"
          labelPlacement="outside"
          className="w-full"
          startContent={<Mail className="h-5 w-5 text-gray-400" />}
        />
        <Input
          label="Phone Number"
          placeholder="Enter your phone number"
          onChange={handleChange}
          value={formData?.phone || ""}
          isRequired
          type="text"
          size="lg"
          variant="bordered"
          labelPlacement="outside"
          className="w-full"
          startContent={<Phone className="h-5 w-5 text-gray-400" />}
        />

        {/* Additional Information */}
        <Input
          label="Current Address"
          placeholder="Enter your current address"
          onChange={handleChange}
          value={formData?.address || ""}
          isRequired
          type="text"
          size="lg"
          variant="bordered"
          labelPlacement="outside"
          className="w-full"
          startContent={<Home className="h-5 w-5 text-gray-400" />}
        />

        <div className="flex flex-col gap-1">
          <span className="text-base font-medium text-gray-700">
            Date of Birth
          </span>
          <DatePicker
            startContent={<Calendar className="h-5 w-5 text-gray-400" />}
            className="w-full text-gray-900"
            // label="Date of Birth"
            // onChange={handleChange}
            // value={formData?.dateOfBirth || ""}
            size="lg"
            // isRequired
            variant="bordered"
            labelPlacement="outside"
            aria-label="Date of Birth"
            color="success"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default PersonalInfoForm;
