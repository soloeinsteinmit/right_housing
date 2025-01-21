import { useState } from "react";
import { Mail, Phone, MessageSquare, Calendar, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Input, Textarea } from "@heroui/input";
import { Tooltip } from "@heroui/tooltip";
import { Info } from "lucide-react";
import { Select, SelectSection, SelectItem } from "@heroui/select";

import React from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferredContact: "email",
    bestTime: "morning",
  });

  const [activeStep, setActiveStep] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formSteps = [
    { number: 1, title: "Personal Info" },
    { number: 2, title: "Contact Details" },
    { number: 3, title: "Message" },
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-success-50/30 to-warning-50/30" />
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Let's Start a Conversation
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're seeking support, looking to volunteer, or want to
            learn more about our programs, we're here to help every step of the
            way.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Form Container */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Progress Steps */}
            <div className="bg-gray-50 px-8 py-6">
              <div className="flex justify-between items-center">
                {formSteps.map((step, index) => (
                  <div key={step.number} className="flex items-center">
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                        activeStep >= step.number
                          ? "bg-success-600 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {step.number}
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">
                        {step.title}
                      </p>
                    </div>
                    {index < formSteps.length - 1 && (
                      <div className="w-24 h-0.5 mx-4 bg-gray-200">
                        <div
                          className={`h-full bg-success-600 transition-all duration-300 ${
                            activeStep > step.number ? "w-full" : "w-0"
                          }`}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 lg:p-12">
              {/* Step 1: Personal Info */}
              <div className={activeStep === 1 ? "block" : "hidden"}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    {/* <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label> */}
                    <Input
                      type="text"
                      label="First Name"
                      labelPlacement="outside"
                      placeholder="Jane"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className=""
                      isRequired
                      size="lg"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      label="Last Name"
                      labelPlacement="outside"
                      placeholder="Doe"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className=""
                      //isRequired
                      size="lg"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Contact Details */}
              <div className={activeStep === 2 ? "block" : "hidden"}>
                <div className="flex flex-col gap-6">
                  <div>
                    <Input
                      type="email"
                      label="Email Address"
                      labelPlacement="outside"
                      placeholder="jane@example.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className=""
                      isRequired
                      size="lg"
                      startContent={<Mail className="w-5 h-5 text-gray-400" />}
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      label="Phone Number"
                      labelPlacement="outside"
                      placeholder="123-456-7890"
                      name="phoneNumber"
                      value={formData.phone}
                      onChange={handleChange}
                      className=""
                      isRequired
                      size="lg"
                      startContent={<Phone className="w-5 h-5 text-gray-400" />}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-2">
                      <label className="block text-base font-medium text-gray-700">
                        Preferred Contact Method
                      </label>
                      <Tooltip
                        content={
                          <div className="max-w-xs p-3 text-sm text-gray-600">
                            We will use this contact method to reach out to you
                            about your application.
                          </div>
                        }
                        placement="top"
                        showArrow
                        className="flex items-center"
                      >
                        <Info className="w-4 h-4 text-gray-400" />
                      </Tooltip>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() =>
                          handleChange({
                            target: {
                              name: "preferredContact",
                              value: "email",
                            },
                          })
                        }
                        className={`p-4 rounded-xl border ${
                          formData.preferredContact === "email"
                            ? "border-success-500 bg-success-50"
                            : "border-gray-300"
                        } flex items-center gap-3 hover:border-success-500 transition-colors`}
                      >
                        <Mail className="w-5 h-5" />
                        <span>Email</span>
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          handleChange({
                            target: {
                              name: "preferredContact",
                              value: "phone",
                            },
                          })
                        }
                        className={`p-4 rounded-xl border ${
                          formData.preferredContact === "phone"
                            ? "border-success-500 bg-success-50"
                            : "border-gray-300"
                        } flex items-center gap-3 hover:border-success-500 transition-colors`}
                      >
                        <Phone className="w-5 h-5" />
                        <span>Phone</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Message */}
              <div className={activeStep === 3 ? "block" : "hidden"}>
                <div className="flex flex-col gap-6">
                  <div>
                    <Input
                      type="text"
                      label="Subject"
                      labelPlacement="outside"
                      placeholder="Your subject goes here"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className=""
                      isRequired
                      size="lg"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      label="Your Message"
                      labelPlacement="outside"
                      placeholder="Your message goes here"
                      value={formData.message}
                      onChange={handleChange}
                      maxRows={10}
                      minRows={6}
                      className=""
                      isRequired
                      size="lg"
                    />
                  </div>
                  <div>
                    <Select
                      label="Best Time to Contact"
                      labelPlacement="outside"
                      placeholder="Select an option"
                      value={formData.bestTime}
                      onChange={handleChange}
                      className=""
                      size="lg"
                      isRequired
                      startContent={
                        <Calendar className="w-5 h-5 text-gray-400" />
                      }
                    >
                      <SelectItem value="morning">
                        Morning (8AM - 12PM)
                      </SelectItem>
                      <SelectItem value="afternoon">
                        Afternoon (12PM - 4PM)
                      </SelectItem>
                      <SelectItem value="evening">
                        Evening (4PM - 8PM)
                      </SelectItem>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="mt-8 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                  className={`px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors ${
                    activeStep === 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={activeStep === 1}
                >
                  Previous
                </button>
                {activeStep < 3 ? (
                  <button
                    type="button"
                    onClick={() => setActiveStep(Math.min(3, activeStep + 1))}
                    className="px-6 py-3 bg-success-600 text-white rounded-xl hover:bg-success-700 transition-colors flex items-center gap-2"
                  >
                    Next
                    <Send className="w-4 h-4" />
                  </button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="px-8 py-3 bg-success-600 text-white rounded-xl hover:bg-success-700 transition-colors flex items-center gap-2"
                  >
                    Submit
                    <Send className="w-4 h-4" />
                  </motion.button>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactForm;
