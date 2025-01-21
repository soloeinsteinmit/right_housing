import { motion } from "framer-motion";
import { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "What recovery support services do you offer?",
      answer:
        "We provide comprehensive recovery support including addiction recovery programs, mental health services, counseling, and support groups. Our services are designed to support both individual and group recovery journeys, with 24/7 crisis support available.",
    },
    {
      question: "How does the housing transition program work?",
      answer:
        "Our housing transition program begins with an initial assessment to understand your needs. We then create a personalized plan that includes temporary housing, recovery support, life skills training, and assistance in finding permanent housing. Our team provides continuous support throughout your journey to independence.",
    },
    {
      question: "What should I expect during the intake process?",
      answer:
        "The intake process starts with a confidential assessment of your situation and needs. You'll meet with our support team to discuss your recovery goals, housing needs, and any immediate concerns. We'll then develop a personalized support plan and connect you with appropriate services and resources.",
    },
    {
      question: "Do you offer emergency housing assistance?",
      answer:
        "Yes, we provide 24/7 emergency housing assistance for individuals in crisis. Our emergency services include immediate shelter placement, crisis intervention, and connection to long-term support services. Contact our crisis line at 1-800-RIGHT-HOUSE for immediate assistance.",
    },
    {
      question: "What ongoing support is available after housing placement?",
      answer:
        "We provide comprehensive aftercare support including regular check-ins, continued access to recovery services, life skills development, job placement assistance, and community integration support. Our goal is to ensure long-term success in your recovery and housing stability.",
    },
    {
      question: "How do you support mental health alongside recovery?",
      answer:
        "Mental health support is integrated into all our programs. We offer individual counseling, group therapy, psychiatric services, and crisis intervention. Our team works collaboratively to address both recovery and mental health needs in a holistic manner.",
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
            Recovery Support FAQ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers about our recovery programs and housing transition support. We're here to help you on your journey to stability and independence.
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

        {/* Support Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          {/* Crisis Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-success-50 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-success-100 rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-success-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  24/7 Crisis Support
                </h3>
                <p className="text-gray-600">
                  Immediate assistance available
                </p>
              </div>
            </div>
            <a
              href="tel:1-800-RIGHT-HOUSE"
              className="inline-flex items-center gap-2 bg-success-600 text-white px-6 py-3 rounded-full hover:bg-success-700 transition-colors w-full justify-center"
            >
              Call 1-800-RIGHT-HOUSE
            </a>
          </motion.div>

          {/* General Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-warning-50 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-warning-100 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-warning-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  General Inquiries
                </h3>
                <p className="text-gray-600">
                  Questions about our programs
                </p>
              </div>
            </div>
            <button
              className="inline-flex items-center gap-2 bg-warning-600 text-white px-6 py-3 rounded-full hover:bg-warning-700 transition-colors w-full justify-center"
            >
              Contact Support Team
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
