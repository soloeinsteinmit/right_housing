import React from "react";
import { motion } from "framer-motion";
import { Input, Textarea } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import { useApplication } from "../context/ApplicationContext";

export const livingTypes = {
  temporary: "Temporary Housing",
  treatment: "Treatment Facility",
  shelter: "Shelter",
  friends: "Staying with Friends/Family",
  // other: "Other Situation",
};

export const employmentTypes = {
  "full-time": "Full-time Employment",
  "part-time": "Part-time Employment",
  seeking: "Actively Job Seeking",
  unable: "Unable to Work",
  // other: "Other Employment Status",
};

const BackgroundInfo = () => {
  const { state, updateFormData } = useApplication();
  const { formData } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  const handleSelectChange = (name, value) => {
    updateFormData({ [name]: value });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white p-8 rounded-2xl shadow-sm"
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Background Information
          </h2>
          <p className="text-gray-600">
            Please share some information about yourself to help us better
            understand your needs. All fields are optional but will help us
            provide better assistance.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Background Information */}
          <Textarea
            variant="bordered"
            size="lg"
            name="background"
            label="Tell us about your background (Optional)"
            placeholder="Share a brief summary of your background and life experiences"
            value={formData.background}
            onChange={handleChange}
            minRows={4}
            className="w-full"
            labelPlacement="outside"
            autoFocus
          />

          {/* Current Living Status */}
          <Select
            variant="bordered"
            size="lg"
            name="livingStatus"
            label="Current Living Situation (Optional)"
            placeholder="Select your current living situation"
            selectedKeys={formData.livingStatus ? [formData.livingStatus] : []}
            onSelectionChange={(keys) =>
              handleSelectChange("livingStatus", Array.from(keys)[0])
            }
            className="w-full"
            labelPlacement="outside"
          >
            {Object.entries(livingTypes).map(([key, value]) => (
              <SelectItem key={key} value={key}>
                {value}
              </SelectItem>
            ))}
            <SelectItem key="other" value="other">
              Other (Specify in Current Situation)
            </SelectItem>
          </Select>

          <Select
            variant="bordered"
            size="lg"
            name="employmentStatus"
            label="Employment Status (Optional)"
            placeholder="Select your employment status"
            selectedKeys={
              formData.employmentStatus ? [formData.employmentStatus] : []
            }
            onSelectionChange={(keys) =>
              handleSelectChange("employmentStatus", Array.from(keys)[0])
            }
            className="w-full"
            labelPlacement="outside"
          >
            {Object.entries(employmentTypes).map(([key, value]) => (
              <SelectItem key={key} value={key}>
                {value}
              </SelectItem>
            ))}
            <SelectItem key="other" value="other">
              Other (Specify in Current Situation)
            </SelectItem>
          </Select>

          {/* Current Support */}
          <Textarea
            variant="bordered"
            size="lg"
            name="currentSituationDetails"
            placeholder="Describe your current situation and any support you currently receive"
            value={formData.currentSituationDetails}
            onChange={handleChange}
            minRows={4}
            className="w-full"
            label="Current Situation (Optional)"
            labelPlacement="outside"
          />

          {/* Interest */}
          <Textarea
            variant="bordered"
            size="lg"
            name="interest"
            placeholder="Tell us why you're interested in our housing program and what you hope to achieve"
            value={formData.interest}
            onChange={handleChange}
            minRows={4}
            className="w-full"
            label="Why are you interested? (Optional)"
            labelPlacement="outside"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default BackgroundInfo;
