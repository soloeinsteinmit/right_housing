import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import teamLead from "../../../assets/woman1.jpg"; // Using existing team lead image
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { Select, SelectSection, SelectItem } from "@heroui/select";
import { Send } from "lucide-react";

function AboutContactForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    type: "volunteer",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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
                  {/* Name Input */}
                  <div>
                    {/* <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label> */}
                    <Input
                      type="text"
                      placeholder="John Doe"
                      label="Full Name"
                      labelPlacement="outside"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className=""
                      isRequired
                      size="lg"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <Input
                      placeholder="jane@example.com"
                      label="Email Address"
                      labelPlacement="outside"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className=""
                      isRequired
                      size="lg"
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <Input
                      type="tel"
                      placeholder="123-456-7890"
                      label="Phone Number"
                      labelPlacement="outside"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className=""
                      size="lg"
                      //   variant="bordered"
                    />
                  </div>

                  {/* Interest Type */}
                  <div>
                    <Select
                      name="type"
                      label="I'm interested in"
                      labelPlacement="outside"
                      placeholder="Select an option"
                      value={formData.type}
                      onChange={handleChange}
                      className=""
                      size="lg"
                      isRequired
                    >
                      <SelectItem value="volunteer">Volunteering</SelectItem>
                      <SelectItem value="support">
                        Supporting Our Mission
                      </SelectItem>
                      <SelectItem value="partner">
                        Becoming a Partner
                      </SelectItem>
                    </Select>
                  </div>

                  {/* Message Input */}
                  <div>
                    <Textarea
                      name="message"
                      label="Message"
                      labelPlacement="outside"
                      placeholder="Enter your message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className=""
                      isRequired
                      size="lg"
                      minRows={5}
                      maxRows={8}
                    />
                  </div>

                  {/* Submit Button */}
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
                  <h4 className="text-2xl font-bold mb-6">
                    Contact Information
                  </h4>

                  <div className="space-y-6">
                    <div>
                      <p className="font-medium mb-2">Address</p>
                      <p className="opacity-90">
                        123 Recovery Street
                        <br />
                        San Francisco, CA 94105
                      </p>
                    </div>

                    <div>
                      <p className="font-medium mb-2">Phone</p>
                      <p className="opacity-90">+1 (800) RIGHT-HOUSE</p>
                    </div>

                    <div>
                      <p className="font-medium mb-2">Email</p>
                      <p className="opacity-90">support@righthouseinc.org</p>
                    </div>

                    <div>
                      <p className="font-medium mb-2">Hours</p>
                      <p className="opacity-90">
                        Monday - Friday: 8am - 8pm
                        <br />
                        Saturday: 9am - 5pm
                        <br />
                        Sunday: 10am - 4pm
                      </p>
                    </div>

                    <Button
                      to="/contact"
                      onPress={() => navigate("/contact")}
                      className=""
                      radius="sm"
                      variant="faded"
                      color="success"
                      size="lg"
                    >
                      Visit Contact Page
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutContactForm;
