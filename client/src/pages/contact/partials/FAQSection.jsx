import { motion } from "framer-motion";
import { useState } from "react";

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "How do I qualify for housing assistance?",
      answer:
        "Eligibility is based on various factors including income level, current housing situation, and specific needs. Contact us to schedule an assessment with our housing specialists.",
    },
    {
      question: "What documents do I need to apply?",
      answer:
        "Generally, you'll need identification, proof of income, current housing information, and any relevant documentation about your situation. Our team will guide you through the specific requirements.",
    },
    {
      question: "How long does the process take?",
      answer:
        "The timeline varies depending on your specific situation and the type of assistance needed. We strive to process applications as quickly as possible, especially for emergency situations.",
    },
    {
      question: "What types of housing assistance do you offer?",
      answer:
        "We offer a comprehensive range of housing solutions including emergency shelter, transitional housing, permanent supportive housing, and rental assistance programs. Each program is tailored to meet different needs and circumstances.",
    },
    {
      question: "Can I get help with my utility bills?",
      answer:
        "Yes, we offer utility assistance as part of our housing support programs. This can include help with electricity, water, gas, and other essential utilities depending on your eligibility and available resources.",
    },
  ];

  return (
    <section className="bg-white py-16 relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/patterns/plus.svg')] opacity-5" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-success-50 rounded-full filter blur-3xl opacity-30 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-warning-50 rounded-full filter blur-3xl opacity-30 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find quick answers to common questions about our housing support
            services. Can't find what you're looking for? Don't hesitate to contact us.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <motion.button
                className={`w-full text-left bg-white px-6 py-4 rounded-xl border ${
                  expandedIndex === index
                    ? "border-success-200 shadow-lg"
                    : "border-gray-200 hover:border-success-200"
                } transition-all duration-200`}
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h4>
                  <span
                    className={`transform transition-transform duration-200 ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className={`w-5 h-5 ${
                        expandedIndex === index
                          ? "text-success-600"
                          : "text-gray-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </div>
              </motion.button>
              <motion.div
                initial={false}
                animate={{
                  height: expandedIndex === index ? "auto" : 0,
                  opacity: expandedIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 bg-gray-50 rounded-b-xl">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-8 bg-success-50 rounded-2xl"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help you find the answers you need.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-success-600 text-white px-6 py-3 rounded-full hover:bg-success-700 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
