import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Input, Textarea } from "@heroui/input";
import { Select, SelectSection, SelectItem } from "@heroui/select";

const BackgroundInfo = ({ onNext, onPrev }) => {
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
            Background & Current Situation
          </h2>
          <p className="text-gray-600">
            Help us understand your journey and current circumstances so we can
            better assist you.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Recovery Journey */}
          <Textarea
            variant="bordered"
            size="lg"
            placeholder="Please share your recovery journey (optional)"
            label="Recovery Journey"
            labelPlacement="outside"
            minRows={4}
          />

          {/* Current Living Situation */}
          <Select
            variant="bordered"
            size="lg"
            placeholder="Select your current living situation"
            label="Current Living Situation"
            labelPlacement="outside"
          >
            <SelectItem value="temporary">Temporary Housing</SelectItem>
            <SelectItem value="treatment">Treatment Facility</SelectItem>
            <SelectItem value="shelter">Shelter</SelectItem>
            <SelectItem value="friends">Staying with Friends/Family</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </Select>

          {/* Employment Status */}
          <Select
            variant="bordered"
            size="lg"
            placeholder="Select your employment status"
            label="Employment Status"
            labelPlacement="outside"
          >
            <SelectItem value="full-time">Full-time</SelectItem>
            <SelectItem value="part-time">Part-time</SelectItem>
            <SelectItem value="seeking">Actively Job Seeking</SelectItem>
            <SelectItem value="unable">Unable to Work</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </Select>

          {/* Support System */}
          <Textarea
            variant="bordered"
            size="lg"
            placeholder="Describe your current support system (family, friends, counselors, etc.)"
            label="Support System"
            labelPlacement="outside"
            minRows={4}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default BackgroundInfo;
