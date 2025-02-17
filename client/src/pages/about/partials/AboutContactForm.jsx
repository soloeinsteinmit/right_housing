import React, { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "sonner";
import teamLead from "../../../assets/woman1.jpg";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { Select, SelectItem } from "@heroui/select";
import { Send } from "lucide-react";
import endpoint from "../../../config.js";

const STORAGE_KEY = "about_contact_form_data";

const loadFormData = () => {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);
    return savedData
      ? JSON.parse(savedData)
      : {
          name: "",
          email: "",
          phone: "",
          message: "",
          type: "volunteer",
        };
  } catch (error) {
    console.error("Error loading form data:", error);
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
      type: "volunteer",
    };
  }
};

const saveFormData = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving form data:", error);
  }
};

const clearFormData = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Error clearing form data:", error);
  }
};

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
  const [formData, setFormData] = useState(loadFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    saveFormData(formData);
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const apiUrl = endpoint.replace(/\/$/, ""); // Remove trailing slash if present
      // const apiUrl = import.meta.env.VITE_API_URL.replace(/\/$/, ""); // Remove trailing slash if present
      await toast.promise(
        axios.post(`${apiUrl}/api/about/get-involved`, formData, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }),
        {
          loading: "Sending your message...",
          success: (response) => {
            clearFormData();
            setFormData({
              name: "",
              email: "",
              phone: "",
              message: "",
              type: "volunteer",
            });
            return (
              response.data?.message ||
              "Thank you for your message. We'll be in touch soon!"
            );
          },
          error: (err) => {
            console.error("Form submission error:", err);
            throw new Error(
              err.response?.data?.message ||
                "Failed to send message. Please try again."
            );
          },
        }
      );
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = useMemo(
    () => (e) => {
      const value = e.target.type === "select-one" ? e : e.target.value;
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: value,
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
      <Toaster
        position="top-center"
        expand={true}
        richColors
        toastOptions={{
          style: {
            fontSize: "16px",
            fontWeight: "500",
          },
          className: "my-toast-class",
          duration: 4000,
        }}
      />
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
                    className="w-full text-white"
                    size="lg"
                    variant="shadow"
                    isDisabled={isSubmitting}
                    startContent={
                      isSubmitting && (
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                      )
                    }
                    endContent={!isSubmitting && <Send className="w-4 h-4" />}
                  >
                    {isSubmitting ? "Sending..." : "Get Involved"}
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
