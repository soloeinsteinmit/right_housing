import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Input, Textarea } from "@heroui/input";
import { Select, SelectSection, SelectItem } from "@heroui/select";

const BackgroundInfo = () => {
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
            label="Tell us about your background (Optional)"
            placeholder="Share a brief summary of your background and life experiences"
            minRows={4}
            className="w-full"
            labelPlacement="outside"
            autoFocus
          />

          {/* Current Situation */}
          <Select
            variant="bordered"
            size="lg"
            label="Current Living Situation (Optional)"
            placeholder="Select your current living situation"
            className="w-full"
            labelPlacement="outside"
          >
            <SelectItem value="temporary">Temporary Housing</SelectItem>
            <SelectItem value="treatment">Treatment Facility</SelectItem>
            <SelectItem value="shelter">Shelter</SelectItem>
            <SelectItem value="friends">Staying with Friends/Family</SelectItem>
            <SelectItem value="other">
              Other (Specify in Current Situation)
            </SelectItem>
          </Select>

          <Select
            variant="bordered"
            size="lg"
            label="Employment Status (Optional)"
            placeholder="Select your employment status"
            className="w-full"
            labelPlacement="outside"
          >
            <SelectItem value="full-time">Full-time</SelectItem>
            <SelectItem value="part-time">Part-time</SelectItem>
            <SelectItem value="seeking">Actively Job Seeking</SelectItem>
            <SelectItem value="unable">Unable to Work</SelectItem>
            <SelectItem value="other">
              Other (Specify in Current Situation)
            </SelectItem>
          </Select>

          {/* Current Support */}

          <Textarea
            variant="bordered"
            size="lg"
            placeholder="Describe your current situation and any support you currently receive"
            minRows={4}
            className="w-full"
            label="Current Situation (Optional)"
            labelPlacement="outside"
          />

          {/* Interest */}

          <Textarea
            variant="bordered"
            size="lg"
            placeholder="Tell us why you're interested in our housing program and what you hope to achieve"
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
