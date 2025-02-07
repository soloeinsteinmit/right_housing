import React, { useState, useMemo, useCallback } from "react";
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
import { Helmet } from "react-helmet-async";

// Memoized NoResultsFound component
const NoResultsFound = React.memo(() => (
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
));

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openQuestions, setOpenQuestions] = useState([]);

  // Memoized categories
  const categories = useMemo(
    () => [
      { id: "all", name: "All Questions" },
      { id: "housing", name: "Housing" },
      { id: "rules", name: "Rules & Policies" },
      { id: "services", name: "Support Services" },
      { id: "program", name: "Program Details" },
      // new ones to come
      { id: "application", name: "Application Process(❌)" },
      { id: "eligibility", name: "Eligibility (❌) " },
      { id: "support", name: "Support Services(❌)" },
      { id: "payment", name: "Payment & Financial(❌)" },
    ],
    []
  );

  // Memoized FAQs
  const faqs = useMemo(
    () => [
      {
        category: "housing",
        question: "What type of housing do you offer?",
        answer:
          "We offer men only and women only homes to ensure comfort and safety for all residents.",
      },
      {
        category: "housing",
        question: "Is it shared or private housing?",
        answer:
          "We offer both private and shared spaces to accommodate different needs and preferences.",
      },
      {
        category: "housing",
        question: "Is it furnished or unfurnished?",
        answer:
          "All our housing units come furnished to help residents focus on their recovery journey.",
      },
      {
        category: "program",
        question: "What are the length of stay requirements?",
        answer:
          "The length of stay may depend on the our house's policies, the resident's needs, and their progress in recovery. Stay can range from 30 days to 12 months.",
      },
      {
        category: "program",
        question: "How long can I stay in the program?",
        answer:
          "The length of stay may depend on the our house's policies, the resident's needs, and their progress in recovery. Stay can range from 30 days to 12 months.",
      },
      {
        category: "services",
        question: "What kind of support services do you offer?",
        answer:
          "We provide comprehensive services including:\n• Recovery support\n• Job readiness programs\n• Life skills development\n• Health & Wellness Services\n• Housing assistance\n• Community & Social Integration\n• Relapse Prevention Planning\n• Case management",
      },
      {
        category: "rules",
        question: "What are the rules and policies?",
        answer:
          "Our key rules include:\n• Zero Tolerance for Drugs & Alcohol – Residents must remain completely sober\n• Random Drug & Alcohol Testing\n• No Possession of Drugs, Alcohol, or Paraphernalia\n• Nightly Curfew Compliance\n• Required Attendance at House Meetings\n• Chores & Household Responsibilities\n• Respect for Housemates & Staff\n• No Overnight Guests\n• Recovery Program Participation\n• Employment & Daily Activity Requirements",
      },
      {
        category: "program",
        question: "Is the program accredited or licensed?",
        answer:
          "Yes, our program is certified to ensure we maintain high standards of care and support.",
      },
    ],
    []
  );

  // SEO structured data for FAQ page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    about: {
      "@type": "Organization",
      name: "RIGHT Housing Inc.",
      description:
        "Providing transitional housing and comprehensive support services for individuals in recovery.",
    },
  };

  // Memoized toggle function
  const toggleQuestion = useCallback((index) => {
    setOpenQuestions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  }, []);

  // Memoized filtered FAQs
  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "all" || faq.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [faqs, activeCategory, searchQuery]);

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>
          RIGHT Housing FAQ | Recovery Housing & Support Services Information
        </title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about RIGHT Housing's recovery support services, transitional housing programs, eligibility requirements, and application process."
        />
        <meta
          name="keywords"
          content="RIGHT Housing FAQ, recovery housing questions, transitional housing FAQ, housing support FAQ, recovery support questions, program eligibility, housing assistance FAQ, support services FAQ, application process, program requirements, recovery program FAQ, housing program questions, community support FAQ, RIGHT Housing help, recovery housing information, transitional housing information, support services information, program costs, volunteer opportunities, recovery support FAQ"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="RIGHT Housing FAQ | Recovery Housing & Support Services Information"
        />
        <meta
          property="og:description"
          content="Find answers to frequently asked questions about RIGHT Housing's recovery support services, transitional housing programs, eligibility requirements, and application process."
        />

        {/* Twitter */}
        <meta
          name="twitter:title"
          content="RIGHT Housing FAQ | Recovery Housing & Support Services Information"
        />
        <meta
          name="twitter:description"
          content="Find answers to frequently asked questions about RIGHT Housing's recovery support services, transitional housing programs, eligibility requirements, and application process."
        />

        {/* Additional Meta Tags */}
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large"
        />
        <meta name="article:modified_time" content="2025-02-07" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-32">
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
              eligibility requirements, and support services.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation - Now Sticky */}
            <div className="lg:col-span-1">
              <div className="sticky top-5">
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
              <AnimatePresence>
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
                            <ChevronUp className="w-5 h-5 text-success-500" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-success-500" />
                          )}
                        </button>
                        <AnimatePresence mode="wait">
                          {openQuestions.includes(index) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="px-6 pb-4"
                            >
                              <p className="text-gray-600 whitespace-pre-line">
                                {faq.answer}
                              </p>
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
    </>
  );
};

export default React.memo(Faq);
