import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import teamLead from "../../../assets/woman1.jpg";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { Select, SelectItem } from "@heroui/select";
import { Send } from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Memoized components
const FormInput = React.memo(
  ({
    type,
    placeholder,
    label,
    name,
    value,
    onChange,
    isRequired,
    size = "lg",
  }) => (
    <Input
      type={type}
      placeholder={placeholder}
      label={label}
      labelPlacement="outside"
      name={name}
      value={value}
      onChange={onChange}
      isRequired={isRequired}
      size={size}
    />
  )
);

const ContactInfo = React.memo(() => (
  <div className="space-y-6">
    <div>
      <h5 className="text-lg font-semibold mb-2">Contact Information</h5>
      <p className="text-success-100">
        Feel free to reach out to us through any of these channels:
      </p>
    </div>

    <div>
      <h6 className="font-medium mb-1">Main Office</h6>
      <p className="text-success-100">123 Recovery Street, Suite 101</p>
      <p className="text-success-100">San Francisco, CA 94105</p>
    </div>

    <div>
      <h6 className="font-medium mb-1">Contact</h6>
      <p className="text-success-100">Phone: (555) 123-4567</p>
      <p className="text-success-100">Email: info@righthousing.org</p>
    </div>

    <div>
      <h6 className="font-medium mb-1">Hours</h6>
      <p className="text-success-100">Monday - Friday: 9:00 AM - 6:00 PM</p>
      <p className="text-success-100">Weekend: By Appointment</p>
    </div>
  </div>
));

const AboutContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    type: "volunteer",
  });

  // Memoize form handlers
  const handleSubmit = useMemo(
    () => (e) => {
      e.preventDefault();
      console.log("Form submitted:", formData);
    },
    [formData]
  );

  const handleChange = useMemo(
    () => (e) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );

  // Memoize select options
  const selectOptions = useMemo(
    () => [
      { value: "volunteer", label: "Volunteering" },
      { value: "support", label: "Supporting Our Mission" },
      { value: "partner", label: "Becoming a Partner" },
      { value: "other", label: "Other" },
    ],
    []
  );

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Form Card */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-5">
              {/* Left Column - Form */}
              <div className="md:col-span-3 p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Get Involved
                </h3>
                <p className="text-gray-600 mb-8">
                  Join our mission to support recovery and create positive
                  change in our community.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <FormInput
                    type="text"
                    placeholder="John Doe"
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    isRequired
                  />

                  <FormInput
                    type="email"
                    placeholder="jane@example.com"
                    label="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isRequired
                  />

                  <FormInput
                    type="tel"
                    placeholder="123-456-7890"
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />

                  <div>
                    <Select
                      name="type"
                      label="I'm interested in"
                      labelPlacement="outside"
                      placeholder="Select an option"
                      value={formData.type}
                      onChange={handleChange}
                      size="lg"
                      isRequired
                    >
                      {selectOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      label="Message"
                      labelPlacement="outside"
                      placeholder="Enter your message"
                      value={formData.message}
                      onChange={handleChange}
                      isRequired
                      size="lg"
                      minRows={5}
                      maxRows={8}
                    />
                  </div>

                  <Button
                    color="success"
                    type="submit"
                    className="w-full text-white transition-transform duration-300 hover:scale-105"
                    size="lg"
                    variant="shadow"
                    endContent={<Send className="text-white w-4 h-4" />}
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Right Column - Info */}
              <div className="md:col-span-2 relative bg-success-600 p-8 lg:p-12 text-white">
                {/* Contact Person Image */}
                <div className="mb-8">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-white/20">
                    <img
                      src={teamLead}
                      alt="Contact Person"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-semibold">Sarah Johnson</h4>
                    <p className="text-success-100">
                      Community Outreach Director
                    </p>
                  </div>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 80 80"
                    preserveAspectRatio="none"
                  >
                    <pattern
                      id="dots"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle cx="2" cy="2" r="1" fill="currentColor" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#dots)" />
                  </svg>
                </div>

                <div className="relative">
                  <ContactInfo />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(AboutContactForm);
