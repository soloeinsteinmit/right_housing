import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import houseImage from "../../../assets/housing.jpg"; // You'll need to add this image

const HowToApply = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: 1,
      title: "Complete Interest Form",
      description:
        "Fill out a brief interest form to get started with your journey.",
      details: [
        "Basic contact information",
        "Brief background and current situation",
        "Preferred location and housing needs",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      number: 2,
      title: "Access Full Application",
      description:
        "Upon interest form approval, complete the detailed application.",
      details: [
        "Detailed recovery history",
        "References and support network",
        "Income and financial information",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
    },
    {
      number: 3,
      title: "Interview or Assessments Intake",
      description:
        "Admission interviews or intake assessments are common to ensure that the individual is a good fit for the program.",
      details: [
        "Personal interview with our staff",
        "Assessment of individual needs and goals",
        "Review of program expectations and policies",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
    },
    {
      number: 4,
      title: "Acceptance",
      description:
        "Receive notification of acceptance and prepare for move-in.",
      details: [
        "Review and sign house agreements",
        "Understand financial responsibilities",
        "Plan your move-in date",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      number: 5,
      title: "Move in",
      description: "Begin your journey in your new supportive community.",
      details: [
        "Get settled in your new home",
        "Meet your housemates",
        "Start participating in house activities",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-96 h-96 bg-success-100/20 rounded-full blur-3xl -top-48 -left-48" />
        <div className="absolute w-96 h-96 bg-amber-100/20 rounded-full blur-3xl -bottom-48 -right-48" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-success-500 text-lg font-medium mb-2"
          >
            FIND A RIGHT HOUSE TODAY
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900"
          >
            Here's how to apply.
          </motion.h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Steps */}
          <div className="space-y-8">
            <div className="relative">
              {/* Vertical line connecting steps */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-success-200 via-amber-200 to-success-200" />

              {/* Steps */}
              {steps.map((step) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: step.number * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <button
                    onClick={() => setActiveStep(step.number)}
                    className={`relative z-10 flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 ${
                      activeStep === step.number
                        ? "bg-white shadow-xl border border-amber-200 transform scale-105"
                        : "hover:bg-white/50 hover:scale-102"
                    }`}
                  >
                    {/* Step number circle with animated border */}
                    <div className="relative flex-shrink-0 w-16 h-16">
                      <div
                        className={`absolute inset-0 rounded-full ${
                          activeStep === step.number ? "animate-spin-slow" : ""
                        }`}
                        style={{
                          background:
                            "linear-gradient(45deg, #10B981, #F59E0B, #10B981)",
                          opacity: activeStep === step.number ? 1 : 0.3,
                        }}
                      />
                      <div
                        className={`absolute inset-0.5 rounded-full flex items-center justify-center ${
                          activeStep === step.number ? "bg-white" : "bg-gray-50"
                        }`}
                      >
                        <span className="absolute text-2xl font-bold text-amber-500">
                          {activeStep !== step.number ? (
                            step.number
                          ) : (
                            <div
                              className={`text-success-900 opacity-0 group-hover:opacity-100 transition-opacity ${
                                activeStep === step.number ? "opacity-100" : ""
                              }`}
                            >
                              {step.icon}
                            </div>
                          )}
                        </span>
                      </div>
                    </div>

                    <div className="text-left">
                      <h4 className="text-xl font-semibold text-gray-900">
                        {step.title}
                      </h4>
                      <p className="mt-1 text-gray-600">{step.description}</p>

                      {/* Additional details that show when step is active */}
                      {activeStep === step.number && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 space-y-2"
                        >
                          {step.details.map((detail, index) => (
                            <div
                              key={index}
                              className="flex items-start space-x-2"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                              <p className="text-gray-600">{detail}</p>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Interest Form Button */}
            {activeStep === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-xl border border-amber-200"
              >
                <h4 className="text-xl font-semibold mb-4">
                  Ready to start your journey?
                </h4>
                <p className="text-gray-600 mb-6">
                  Complete our interest form to begin the application process.
                  This helps us understand your needs and match you with the
                  right housing options.
                </p>
                <Link
                  to="/apply"
                  className="inline-flex items-center px-6 py-3 bg-success-500 text-white rounded-lg font-medium hover:bg-success-600 transition-colors duration-200"
                >
                  Complete Interest Form
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </motion.div>
            )}
          </div>

          {/* Right side - House Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-success-500 via-amber-500 to-success-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>

              {/* Main image with overlay */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={houseImage}
                  alt="RIGHT Housing property"
                  className="w-full h-[600px] object-cover "
                  // className="w-full h-[600px] object-cover transform hover:scale-110 transition-transform duration-700"
                />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 hover:-translate-y-0 transition-transform duration-300">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
                  >
                    <h4 className="text-2xl font-semibold mb-2 text-white">
                      Start Your Journey to RIGHT Housing
                    </h4>
                    <p className="text-gray-200 mb-4">
                      Complete the interest form below to begin your path
                      towards recovery-supportive housing.
                    </p>
                    <Link
                      // to="/houses"
                      to="/apply"
                      className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 group"
                    >
                      {/* View Available Houses */}
                      Complete Interest Form
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-1 translate-x-4 translate-y-4 bg-gradient-to-r from-success-200 to-warning-200 rounded-3xl -z-10" />

            {/* Additional decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-success-500/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-amber-500/20 rounded-full blur-2xl animate-pulse delay-1000" />
          </motion.div>
        </div>
      </div>

      {/* Add keyframes for gradient animation */}
      <style jsx>{`
        @keyframes gradient-xy {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-xy {
          animation: gradient-xy 15s ease infinite;
          background-size: 400% 400%;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HowToApply;
