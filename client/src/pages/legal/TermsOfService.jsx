import React from "react";
import { FileText, Scale, AlertCircle, Handshake } from "lucide-react";

const TermsOfService = () => {
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Agreement to Terms",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.`,
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "User Responsibilities",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua:

• Responsibility 1: Ut enim ad minim veniam
• Responsibility 2: Quis nostrud exercitation ullamco
• Responsibility 3: Duis aute irure dolor in reprehenderit
• Responsibility 4: Excepteur sint occaecat cupidatat

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Limitations and Disclaimers",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.`,
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Service Terms",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

1. Term 1: Lorem ipsum dolor sit amet
2. Term 2: Consectetur adipiscing elit
3. Term 3: Sed do eiusmod tempor incididunt
4. Term 4: Ut labore et dolore magna aliqua

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-[1000px] mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600">
            Last updated: January 19, 2025
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-3xl p-8 mb-8 shadow-sm">
          <p className="text-gray-600 leading-relaxed">
            Welcome to Right Housing. By accessing or using our services, you
            agree to be bound by these Terms of Service. Please read these terms
            carefully before using our services.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-success-50 rounded-xl text-success-700">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-semibold">{section.title}</h2>
              </div>
              <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-success-50 rounded-3xl p-8 mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            Questions or Concerns?
          </h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about our Terms of Service, please contact
            our legal team:
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>Email: legal@righthousing.org</li>
            <li>Phone: (555) 123-4567</li>
            <li>Address: 123 Legal Ave, City, ST 12345</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
