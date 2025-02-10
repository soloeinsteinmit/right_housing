import React, { useEffect, useRef, useState, useCallback, memo } from "react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  Search,
  HelpCircle,
  ChevronDown,
  Tag,
  ArrowUpRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

const FaqSection = () => {
  const controls = useAnimation();
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedId, setExpandedId] = useState(null);
  const [displayedFaqs, setDisplayedFaqs] = useState([]);

  // Memoized category data
  const categories = [
    { id: "all", label: "All Questions" },
    { id: "housing", label: "Housing" },
    { id: "rules", label: "Rules" },
    { id: "services", label: "Services" },
    { id: "program", label: "Program" },
  ];

  // Memoized FAQ data
  const faqs = [
    {
      id: 1,
      question: "What type of housing do you offer?",
      answer:
        "We offer men only and women only homes to ensure comfort and safety for all residents.",
      category: "housing",
    },
    {
      id: 2,
      question: "Is it shared or private housing?",
      answer:
        "We offer both private and shared spaces to accommodate different needs and preferences.",
      category: "housing",
    },
    {
      id: 3,
      question: "Is it furnished or unfurnished?",
      answer:
        "All our housing units come furnished to help residents focus on their recovery journey.",
      category: "housing",
    },
    {
      id: 4,
      question: "What are the length of stay requirements?",
      answer:
        "The length of stay may depend on the our house's policies, the resident's needs, and their progress in recovery. Stay can range from 30 days to 12 months.",
      category: "program",
    },
    {
      id: 5,
      question: "How long can I stay in the program?",
      answer:
        "The length of stay may depend on the our house's policies, the resident's needs, and their progress in recovery. Stay can range from 30 days to 12 months.",
      category: "program",
    },
    {
      id: 6,
      question: "What kind of support services do you offer?",
      answer:
        "We provide comprehensive services including: Recovery support, Job readiness programs, Life skills development, Health & Wellness Services, Housing, Community & Social Integration, Relapse Prevention Planning, and case management.",
      category: "services",
    },
    {
      id: 7,
      question: "What are the rules and policies?",
      answer:
        "Our key rules include:\n• Zero Tolerance for Drugs & Alcohol – Residents must remain completely sober\n• Random Drug & Alcohol Testing\n• No Possession of Drugs, Alcohol, or Paraphernalia\n• Nightly Curfew Compliance\n• Required Attendance at House Meetings\n• Chores & Household Responsibilities\n• Respect for Housemates & Staff\n• No Overnight Guests\n• Recovery Program Participation\n• Employment & Daily Activity Requirements",
      category: "rules",
    },
    {
      id: 8,
      question: "Is the program accredited or licensed?",
      answer:
        "Yes, our program is certified to ensure we maintain high standards of care and support.",
      category: "program",
    },
  ];

  // Memoized category filter button
  const CategoryButton = memo(({ category, isSelected, onClick }) => (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
        isSelected
          ? "bg-success-600 text-white"
          : "bg-success-50 text-success-600 hover:bg-success-100"
      }`}
    >
      <Tag className="w-4 h-4 mr-2" />
      <span>{category.label}</span>
    </motion.button>
  ));

  // Initialize displayed FAQs
  useEffect(() => {
    setDisplayedFaqs(faqs);
  }, []);

  // Handle search and category filtering
  useEffect(() => {
    const filterFaqs = () => {
      return faqs.filter((faq) => {
        const matchesSearch =
          searchTerm === "" ||
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory =
          selectedCategory === "all" || faq.category === selectedCategory;

        return matchesSearch && matchesCategory;
      });
    };

    const filteredResults = filterFaqs();
    setDisplayedFaqs(filteredResults);
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const answerVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div ref={ref} className="relative overflow-hidden bg-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative max-w-[1400px] mx-auto px-4 py-24"
      >
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-20 max-[480px]:mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center mb-6 bg-success-50 text-success-600 px-4 py-2 rounded-full"
          >
            <HelpCircle className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold font-elite">
              Common Questions
            </span>
          </motion.div>

          <h2 className="text-5xl max-[480px]:text-4xl font-bold mb-6 bg-gradient-to-r from-success-600 to-success-800 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl max-[480px]:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our housing programs,
            eligibility requirements, and support services.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="max-w-2xl mx-auto">
            {/* Search Input */}
            <div className="relative mb-6">
              <Input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className=""
                size="lg"
                radius="full"
                startContent={<Search className="w-5 h-5 text-gray-400" />}
                variant="bordered"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <CategoryButton
                  key={category.id}
                  category={category}
                  isSelected={selectedCategory === category.id}
                  onClick={() => setSelectedCategory(category.id)}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          variants={containerVariants}
          className="max-w-3xl mx-auto space-y-4"
        >
          {displayedFaqs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="mb-4">
                <HelpCircle className="w-16 h-16 mx-auto text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No matching questions found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or selecting a different
                category
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-success-50 text-success-600 hover:bg-success-100 transition-colors duration-300"
              >
                <ArrowUpRight className="w-4 h-4 mr-2" />
                View all questions
              </button>
            </motion.div>
          ) : (
            <>
              {displayedFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-full">
                    <button
                      onClick={() =>
                        setExpandedId(expandedId === faq.id ? null : faq.id)
                      }
                      className="w-full flex items-center justify-between p-6"
                    >
                      <h3 className="text-lg font-medium text-gray-900 text-left pr-4">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: expandedId === faq.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-success-600 flex-shrink-0" />
                      </motion.div>
                    </button>

                    <AnimatePresence mode="wait">
                      {expandedId === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2">
                            <div className="bg-success-50 p-6 rounded-xl">
                              <p className="text-gray-700 leading-relaxed  whitespace-pre-line">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </>
          )}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16 space-x-5"
        >
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <Button
            onPress={() => {
              navigate("/faq");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            color="warning"
            size="lg"
            radius="full"
            className="text-white max-[503px]:mb-4"
            endContent={<ArrowUpRight className="w-5 h-5" />}
          >
            See all FAQs
          </Button>
          <Button
            onPress={() => {
              navigate("/contact");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            color="success"
            size="lg"
            radius="full"
            className="text-white"
            endContent={<ArrowUpRight className="w-5 h-5" />}
          >
            <span>Contact Our Support Team</span>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default memo(FaqSection);
