import React from "react";
import { Shield, Lock, Eye, UserCheck } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Information Collection",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.`,
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Security",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Information Usage",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Your Rights",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.`,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-[1000px] mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">
            Last updated: January 19, 2025
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-3xl p-8 mb-8 shadow-sm">
          <p className="text-gray-600 leading-relaxed">
            At Right Housing, we take your privacy seriously. This Privacy Policy
            explains how we collect, use, and protect your personal information.
            Please read this policy carefully to understand our practices regarding
            your personal data.
          </p>
        </div>

        {/* Policy Sections */}
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
          <h2 className="text-2xl font-semibold mb-4">Questions?</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about our Privacy Policy, please contact us:
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>Email: privacy@righthousing.org</li>
            <li>Phone: (555) 123-4567</li>
            <li>Address: 123 Privacy Ave, City, ST 12345</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
