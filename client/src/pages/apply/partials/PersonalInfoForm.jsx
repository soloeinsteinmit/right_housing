import React from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, Home, Calendar } from "lucide-react";
import { Input } from "@heroui/input";
import { DatePicker } from "@heroui/date-picker";
import { parseDate, getLocalTimeZone } from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";
import { useApplication } from "../context/ApplicationContext";

const PersonalInfoForm = () => {
  const { state, updateFormData } = useApplication();
  const { formData } = state;
  const formatter = useDateFormatter({ dateStyle: "long" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  // This handles converting DatePicker's MM-DD-YYYY to long format for storage
  const handleDateChange = (date) => {
    if (date) {
      const formattedDate = formatter.format(date.toDate(getLocalTimeZone()));
      updateFormData({ dateOfBirth: formattedDate });
    } else {
      updateFormData({ dateOfBirth: "" });
    }
  };

  // This function converts from stored long format back to MM-DD-YYYY for DatePicker
  const parseMMDDYY = (dateString) => {
    // Convert from "February 12, 2023" back to date object
    const date = new Date(dateString);

    // Format as MM-DD-YYYY for DatePicker
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();

    return parseDate(`${year}-${month}-${day}`);
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
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
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
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
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
          name="email"
          onChange={handleChange}
          value={formData.email}
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
          name="phone"
          onChange={handleChange}
          value={formData.phone}
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
          name="address"
          onChange={handleChange}
          value={formData.address}
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
            placeholder="Select your date of birth"
            onChange={handleDateChange}
            showMonthAndYearPickers
            value={
              formData.dateOfBirth ? parseMMDDYY(formData.dateOfBirth) : null
            }
            isRequired
            size="lg"
            variant="bordered"
            startContent={<Calendar className="h-5 w-5 text-gray-400" />}
            aria-label="Date of Birth"
            color="success"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default PersonalInfoForm;
