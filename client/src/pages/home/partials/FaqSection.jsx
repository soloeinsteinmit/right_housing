import React, { useEffect, useRef, useState } from "react";
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
import FaqBackgroundPattern from "../../../assets/FaqBackgroundPattern";

const FaqSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "eligibility", label: "Eligibility" },
    { id: "programs", label: "Programs" },
    { id: "support", label: "Support" },
    { id: "housing", label: "Housing" },
  ];

  const faqs = [
    {
      id: 1,
      question:
        "What are the eligibility requirements for RIGHT Housing programs?",
      answer:
        "Our programs are designed to support individuals in recovery seeking stable housing. Basic requirements include: being 18 or older, commitment to recovery, participation in support programs, and meeting income guidelines. Each program may have specific additional requirements.",
      category: "eligibility",
    },
    {
      id: 2,
      question: "How long can residents stay in the housing program?",
      answer:
        "Program duration varies based on individual needs and progress. Typical stays range from 6-24 months, with extensions available based on case management evaluation and continued program participation.",
      category: "housing",
    },
    {
      id: 3,
      question: "What support services are available to residents?",
      answer:
        "We offer comprehensive support including: mental health counseling, addiction recovery support, job training, financial literacy education, life skills workshops, and community building activities. Services are tailored to each resident's needs.",
      category: "support",
    },
    {
      id: 4,
      question: "How does the application process work?",
      answer:
        "The application process involves: completing an initial application form, attending an information session, participating in screening interviews, and meeting with our case management team. We aim to make decisions within 2-3 weeks of completed applications.",
      category: "programs",
    },
    {
      id: 5,
      question: "Are there costs associated with the housing program?",
      answer:
        "Residents typically contribute 30% of their income toward housing costs. Additional program services are provided at no cost. Financial assistance and sliding scale options are available based on individual circumstances.",
      category: "housing",
    },
    {
      id: 6,
      question: "What ongoing support is available after program completion?",
      answer:
        "We provide comprehensive aftercare support including: alumni programs, continued access to counseling services, job placement assistance, and community events. Our goal is to ensure lasting success for all program graduates.",
      category: "support",
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
      {/* Background Pattern */}
      {/* <div className="absolute inset-0">
        <FaqBackgroundPattern className="w-full h-full text-success-600" />
      </div> */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative max-w-[1400px] mx-auto px-4 py-24"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center mb-6 bg-success-50 text-success-600 px-4 py-2 rounded-full"
          >
            <HelpCircle className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold">Common Questions</span>
          </motion.div>

          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-success-600 to-success-800 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our housing programs,
            eligibility requirements, and support services.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="max-w-2xl mx-auto">
            {/* Search Input */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-success-500 focus:ring-2 focus:ring-success-200 transition-colors duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    selectedCategory === category.id
                      ? "bg-success-600 text-white"
                      : "bg-success-50 text-success-600 hover:bg-success-100"
                  }`}
                >
                  <Tag className="w-4 h-4 mr-2" />
                  {category.label}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQ List */}
        <motion.div variants={containerVariants} className="max-w-3xl mx-auto">
          {filteredFaqs.map((faq) => (
            <motion.div key={faq.id} variants={itemVariants} className="mb-4">
              <motion.button
                onClick={() =>
                  setExpandedId(expandedId === faq.id ? null : faq.id)
                }
                className="w-full flex items-center justify-between p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <span className="text-lg font-medium text-gray-900 text-left">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: expandedId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-success-600" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {expandedId === faq.id && (
                  <motion.div
                    variants={answerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-success-50 rounded-2xl mt-2">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-success-600 hover:bg-success-700 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-300"
          >
            <span>Contact Our Support Team</span>
            <ArrowUpRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FaqSection;
