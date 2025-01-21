import { motion } from "framer-motion";
import { useState } from "react";
import { Input, Textarea } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import { Send, Clock, Calendar, MapPin } from "lucide-react";
import usePulseAnimation, {
  PULSE_COLORS,
} from "../../../hooks/usePulseAnimation";

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    interests: [],
    availability: [],
    experience: "",
    motivation: "",
  });

  const pulseVariant = usePulseAnimation({
    color: PULSE_COLORS.SUCCESS,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically submit the form data to your backend
    console.log("Form submitted:", formData);
    // Show success message or redirect
  };

  const interestOptions = [
    "Housing Support",
    "Education & Training",
    "Community Outreach",
    "Administrative Support",
    "Maintenance & Repairs",
    "Resident Support",
  ];

  const availabilityOptions = [
    "Weekday Mornings",
    "Weekday Afternoons",
    "Weekday Evenings",
    "Weekend Mornings",
    "Weekend Afternoons",
    "Weekend Evenings",
  ];

  return (
    <section className="py-20 bg-gray-50" id="volunteer-form">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Join Our Volunteer Team
              </h2>
              <p className="text-gray-600">
                Fill out the form below to start your journey as a volunteer.
                We'll get back to you within 48 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  variant="bordered"
                />
                <Input
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  variant="bordered"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  variant="bordered"
                />
                <Input
                  label="Phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  variant="bordered"
                />
              </div>

              {/* Address */}
              <div className="space-y-6">
                <Input
                  label="Street Address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  variant="bordered"
                />
                <div className="grid md:grid-cols-3 gap-6">
                  <Input
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    variant="bordered"
                  />
                  <Input
                    label="State"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    variant="bordered"
                  />
                  <Input
                    label="ZIP Code"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                    variant="bordered"
                  />
                </div>
              </div>

              {/* Interests and Availability */}
              <div className="grid md:grid-cols-2 gap-6">
                <Select
                  label="Areas of Interest"
                  multiple
                  name="interests"
                  value={formData.interests}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, interests: value }))
                  }
                  required
                  variant="bordered"
                >
                  {interestOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </Select>

                <Select
                  label="Availability"
                  multiple
                  name="availability"
                  value={formData.availability}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, availability: value }))
                  }
                  required
                  variant="bordered"
                >
                  {availabilityOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </Select>
              </div>

              {/* Experience and Motivation */}
              <div className="space-y-6">
                <Textarea
                  label="Relevant Experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="Tell us about any relevant experience you have..."
                  rows={4}
                  variant="bordered"
                />
                <Textarea
                  label="Why do you want to volunteer?"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  placeholder="Share what motivates you to volunteer with us..."
                  rows={4}
                  variant="bordered"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                variants={pulseVariant}
                initial="initial"
                animate="animate"
                whileTap="tap"
                type="submit"
                className="w-full py-4 bg-success-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-success-600/20"
              >
                Submit Application
                <Send className="w-5 h-5" />
              </motion.button>

              {/* Additional Information */}
              <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-success-600" />
                  <span>Response within 48 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-success-600" />
                  <span>Flexible scheduling</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-success-600" />
                  <span>Multiple locations available</span>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerForm;
