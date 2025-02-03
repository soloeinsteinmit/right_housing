import React, { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

// Animation variants
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const faqs = [
  {
    question: "What type of housing do you offer?",
    answer:
      "We offer men only and women only homes to ensure comfort and safety for all residents.",
  },
  {
    question: "Is it shared or private housing?",
    answer:
      "We offer both private and shared spaces to accommodate different needs and preferences.",
  },
  {
    question: "Is it furnished or unfurnished?",
    answer:
      "All our housing units come furnished to help residents focus on their recovery journey.",
  },
  {
    question: "What are the length of stay requirements?",
    answer:
      "The length of stay may depend on the our house's policies, the resident's needs, and their progress in recovery. Stay can range from 30 days to 12 months.",
  },
  {
    question: "How long can I stay in the program?",
    answer:
      "The length of stay may depend on the our house's policies, the resident's needs, and their progress in recovery. Stay can range from 30 days to 12 months.",
  },
  {
    question: "What kind of support services do you offer?",
    answer:
      "We provide comprehensive services including: Recovery support, Job readiness programs, Life skills development, Health & Wellness Services, Housing, Community & Social Integration, Relapse Prevention Planning, and case management.",
  },
  {
    question: "What are the rules and policies?",
    answer:
      "Our key rules include:\n• Zero Tolerance for Drugs & Alcohol – Residents must remain completely sober\n• Random Drug & Alcohol Testing\n• No Possession of Drugs, Alcohol, or Paraphernalia\n• Nightly Curfew Compliance\n• Required Attendance at House Meetings\n• Chores & Household Responsibilities\n• Respect for Housemates & Staff\n• No Overnight Guests\n• Recovery Program Participation\n• Employment & Daily Activity Requirements",
  },
  {
    question: "Is the program accredited or licensed?",
    answer:
      "Yes, our program is certified to ensure we maintain high standards of care and support.",
  },
];

const BackgroundPattern = React.memo(() => (
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[url('/patterns/plus.svg')] opacity-5" />
    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-success-50 rounded-full filter blur-3xl opacity-30 -translate-y-1/2" />
    <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-warning-50 rounded-full filter blur-3xl opacity-30 translate-y-1/2" />
  </div>
));

const SectionHeader = React.memo(() => (
  <motion.div
    variants={fadeInUpVariants}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-center mb-12"
  >
    <h2 className="text-4xl font-bold text-gray-900 mb-4">
      Recovery Support FAQ
    </h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      Find answers about our recovery programs and housing transition
      support. We're here to help you on your journey to stability and
      independence.
    </p>
  </motion.div>
));

const FAQItem = React.memo(({ faq, index, isExpanded, onToggle }) => (
  <motion.div
    variants={fadeInUpVariants}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="mb-4"
  >
    <motion.button
      className={`w-full text-left bg-white px-6 py-4 rounded-xl border ${
        isExpanded
          ? "border-success-200 shadow-lg"
          : "border-gray-200 hover:border-success-200"
      } transition-all duration-200`}
      onClick={onToggle}
    >
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-semibold text-gray-900">{faq.question}</h4>
        <span
          className={`transform transition-transform duration-200 ${
            isExpanded ? "rotate-180" : ""
          }`}
        >
          <svg
            className={`w-5 h-5 ${isExpanded ? "text-success-600" : "text-gray-400"}`}
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
    <AnimatePresence>
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="px-6 py-4 bg-gray-50 rounded-b-xl">
            <p className="text-gray-600 whitespace-pre-line">{faq.answer}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
));

const SupportOption = React.memo(({ icon: Icon, title, description, actionText, actionLink, bgColor, iconBgColor, iconTextColor, buttonBgColor, buttonHoverBgColor, delay }) => (
  <motion.div
    variants={fadeInUpVariants}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className={`${bgColor} rounded-2xl p-8`}
  >
    <div className="flex items-center gap-4 mb-4">
      <div className={`w-12 h-12 ${iconBgColor} rounded-xl flex items-center justify-center`}>
        <Icon className={`w-6 h-6 ${iconTextColor}`} />
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
    {actionLink ? (
      <a
        href={actionLink}
        className={`inline-flex items-center gap-2 ${buttonBgColor} text-white px-6 py-3 rounded-full hover:${buttonHoverBgColor} transition-colors w-full justify-center`}
      >
        {actionText}
      </a>
    ) : (
      <button
        className={`inline-flex items-center gap-2 ${buttonBgColor} text-white px-6 py-3 rounded-full hover:${buttonHoverBgColor} transition-colors w-full justify-center`}
      >
        {actionText}
      </button>
    )}
  </motion.div>
));

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = useCallback((index) => {
    setExpandedIndex(prevIndex => prevIndex === index ? null : index);
  }, []);

  const supportOptions = useMemo(() => [
    {
      icon: Phone,
      title: "24/7 Crisis Support",
      description: "Immediate assistance available",
      actionText: "Call 1-800-RIGHT-HOUSE",
      actionLink: "tel:1-800-RIGHT-HOUSE",
      bgColor: "bg-success-50",
      iconBgColor: "bg-success-100",
      iconTextColor: "text-success-600",
      buttonBgColor: "bg-success-600",
      buttonHoverBgColor: "bg-success-700",
      delay: 0.3,
    },
    {
      icon: MessageCircle,
      title: "General Inquiries",
      description: "Questions about our programs",
      actionText: "Contact Support Team",
      bgColor: "bg-warning-50",
      iconBgColor: "bg-warning-100",
      iconTextColor: "text-warning-600",
      buttonBgColor: "bg-warning-600",
      buttonHoverBgColor: "bg-warning-700",
      delay: 0.4,
    },
  ], []);

  return (
    <section className="bg-white py-16 relative overflow-hidden">
      <BackgroundPattern />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader />

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isExpanded={expandedIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          {supportOptions.map((option, index) => (
            <SupportOption key={index} {...option} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(FAQSection);
