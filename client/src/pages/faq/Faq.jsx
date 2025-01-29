import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
  CircleDot,
} from "lucide-react";

// Import the same FAQ data and categories from the home section
const categories = [
  { id: "general", name: "General Questions", icon: CircleDot },
  { id: "application", name: "Application Process", icon: CircleDot },
  { id: "housing", name: "Housing & Accommodation", icon: CircleDot },
  { id: "support", name: "Support Services", icon: CircleDot },
  { id: "community", name: "Community & Rules", icon: CircleDot },
  { id: "financial", name: "Financial Matters", icon: CircleDot },
];

const faqs = [
  {
    category: "general",
    questions: [
      {
        question: "What is RIGHT Housing?",
        answer:
          "RIGHT Housing is a nonprofit organization providing transitional housing and support services for individuals in recovery, re-entry, or facing mental health challenges. We create supportive communities that foster healing and personal growth.",
      },
      {
        question: "How long can I stay at a RIGHT House?",
        answer:
          "The length of stay varies based on individual needs and progress. Typically, residents can stay from 6 months to 2 years, with regular progress evaluations to ensure the program continues to meet their needs.",
      },
      // Add more general questions
    ],
  },
  {
    category: "application",
    questions: [
      {
        question: "What is the application process?",
        answer:
          "The application process involves: 1) Finding a house with vacancy, 2) Completing the application form, 3) Scheduling an interview with current house members, 4) Background check and verification, 5) Final approval and move-in coordination.",
      },
      {
        question: "What are the eligibility requirements?",
        answer:
          "Basic eligibility includes: 1) Commitment to recovery, 2) Willingness to follow house rules, 3) Ability to pay rent and fees, 4) No violent criminal history, 5) Participation in house meetings and activities.",
      },
      // Add more application questions
    ],
  },
  // Add more categories with their questions
];

const Faq = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [openQuestions, setOpenQuestions] = useState(new Set());

  const toggleQuestion = (questionId) => {
    const newOpenQuestions = new Set(openQuestions);
    if (newOpenQuestions.has(questionId)) {
      newOpenQuestions.delete(questionId);
    } else {
      newOpenQuestions.add(questionId);
    }
    setOpenQuestions(newOpenQuestions);
  };

  const filteredFaqs = faqs
    .find((cat) => cat.category === selectedCategory)
    ?.questions.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 mt-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about RIGHT Housing's programs,
            application process, and community living.
          </p>
        </div>

        <div className="flex lg:flex-row gap-8 ">
          {/* Left Sidebar - Search and Categories */}
          <div className="lg:w-1/3">
            <div className="space-y-8">
              {/* Search Box */}
              <div className="bg-white rounded-xl shadow-sm p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-success-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-xl shadow-sm p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2 ${
                        selectedCategory === category.id
                          ? "bg-success-50 text-success-600"
                          : "hover:bg-gray-50 text-gray-600"
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      <span>{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Support */}
              <div className="bg-success-600 text-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-2">Need More Help?</h3>
                <p className="text-success-50 mb-4">
                  Our support team is here to assist you with any questions you
                  may have.
                </p>
                <button className="inline-flex items-center space-x-2 bg-white text-success-600 px-4 py-2 rounded-lg font-medium hover:bg-success-50 transition-colors">
                  <span>Contact Support</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - FAQ List */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {categories.find((cat) => cat.id === selectedCategory)?.name}
              </h2>

              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={false}
                    animate={{
                      backgroundColor: openQuestions.has(index)
                        ? "rgb(240 253 244)"
                        : "white",
                    }}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleQuestion(index)}
                      className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-gray-50"
                    >
                      <span className="font-medium text-gray-900">
                        {faq.question}
                      </span>
                      {openQuestions.has(index) ? (
                        <ChevronUp className="w-5 h-5 text-success-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: openQuestions.has(index) ? "auto" : 0,
                        opacity: openQuestions.has(index) ? 1 : 0,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-success-50/50">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
