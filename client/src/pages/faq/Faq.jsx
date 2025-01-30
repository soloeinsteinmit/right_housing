import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
  FileQuestion,
} from "lucide-react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

const NoResultsFound = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="text-center py-12"
  >
    <motion.div
      animate={{
        rotate: [0, 10, -10, 10, 0],
        y: [0, -10, 10, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="inline-block mb-6"
    >
      <FileQuestion className="w-16 h-16 text-success-500" />
    </motion.div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">
      No Results Found
    </h3>
    <p className="text-gray-600 max-w-md mx-auto">
      We couldn't find any FAQs matching your search. Try adjusting your search
      terms or browse through our categories.
    </p>
  </motion.div>
);

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openQuestions, setOpenQuestions] = useState([]);

  const categories = [
    { id: "all", name: "All Questions" },
    { id: "general", name: "General Information" },
    { id: "application", name: "Application Process" },
    { id: "eligibility", name: "Eligibility" },
    { id: "housing", name: "Housing Options" },
    { id: "support", name: "Support Services" },
    { id: "payment", name: "Payment & Financial" },
  ];

  const faqs = [
    {
      category: "general",
      question: "What is RIGHT Housing?",
      answer:
        "RIGHT Housing is a non-profit organization dedicated to providing recovery-supportive housing solutions for individuals in recovery from substance use disorders or transitioning from incarceration.",
    },
    {
      category: "general",
      question: "How long can I stay at a RIGHT House?",
      answer:
        "The length of stay varies based on individual needs and progress. Typically, residents can stay from 6 months to 2 years, with regular progress evaluations to ensure the program continues to meet their needs.",
    },
    {
      category: "application",
      question: "What is the application process?",
      answer:
        "The application process involves: 1) Finding a house with vacancy, 2) Completing the application form, 3) Scheduling an interview with current house members, 4) Background check and verification, 5) Final approval and move-in coordination.",
    },
    {
      category: "application",
      question: "What are the eligibility requirements?",
      answer:
        "Basic eligibility includes: 1) Commitment to recovery, 2) Willingness to follow house rules, 3) Ability to pay rent and fees, 4) No violent criminal history, 5) Participation in house meetings and activities.",
    },
    // Add more FAQs
  ];

  const toggleQuestion = (index) => {
    setOpenQuestions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Find answers to common questions about RIGHT Housing's programs,
            eligibility requirements, and application process.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 ">
          {/* Sidebar Navigation - Now Sticky */}
          <div className=" lg:col-span-1">
            <div className="sticky top-24">
              {/* Search Bar */}

              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full mb-3 focus:ring-2 focus:ring-success-500 focus:border-transparent"
                variant="bordered"
                size="lg"
                startContent={<Search className="w-5 h-5 text-gray-400" />}
              />

              {/* Categories */}
              <nav className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                      activeCategory === category.id
                        ? "bg-success-50 text-success-700 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </nav>

              {/* Contact Support */}
              <div className="mt-8 p-4 bg-success-50 rounded-lg">
                <h3 className="text-success-900 font-medium mb-2">
                  Need More Help?
                </h3>
                <p className="text-success-700 text-sm mb-4">
                  Our support team is here to assist you with any questions.
                </p>
                <Button
                  color="success"
                  variant="shadow"
                  className="w-full text-white"
                  endContent={<ArrowUpRight className="w-4 h-4" />}
                >
                  Contact Support
                </Button>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {filteredFaqs.length > 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white rounded-xl shadow-sm divide-y divide-gray-200"
                >
                  {filteredFaqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => toggleQuestion(index)}
                        className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-success-50/20"
                      >
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                        {openQuestions.includes(index) ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                      <AnimatePresence>
                        {openQuestions.includes(index) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="px-6 pb-4"
                          >
                            <p className="text-gray-600">{faq.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <NoResultsFound />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
