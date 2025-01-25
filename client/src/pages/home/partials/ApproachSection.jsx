import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Brain, Briefcase, Users, Sparkles, ArrowUpRight } from "lucide-react";
import ApproachBackgroundPattern from "../../../assets/ApproachBackgroundPattern";
import { useNavigate } from "react-router-dom";

const ApproachSection = () => {
  const controls = useAnimation();
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const approaches = [
    {
      icon: <Brain className="w-10 h-10" />,
      title: "Mind-Body Wellness",
      subtitle: "Healing Through Harmony",
      description:
        "Experience our holistic approach to recovery, combining mental health services, mindfulness practices, and therapeutic support for complete well-being.",
      features: [
        "Mental Health Support",
        "Yoga & Mindfulness",
        "Therapeutic Care",
      ],
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "Career Pathways",
      subtitle: "Building Future Success",
      description:
        "Transform your future through our comprehensive job training programs, skill-building workshops, and career development opportunities.",
      features: ["Skills Training", "Job Placement", "Career Coaching"],
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Community Support",
      subtitle: "Together We Thrive",
      description:
        "Join a vibrant community where peer support, shared experiences, and collective growth create lasting bonds and sustainable recovery.",
      features: ["Peer Support Groups", "Social Activities", "Family Programs"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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

  const featureVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
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
      <div className="absolute inset-0">
        <ApproachBackgroundPattern className="w-full h-full text-success-600" />
      </div>

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
            <Sparkles className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold">
              Our Innovative Approach
            </span>
          </motion.div>

          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-success-600 to-success-800 bg-clip-text text-transparent">
            Empowering Change Through Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe in a comprehensive approach that addresses every aspect
            of recovery and growth. Our three pillars of support work together
            to create lasting transformation.
          </p>
        </motion.div>

        {/* Approach Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-success-50 to-success-100/50 rounded-3xl transform transition-transform duration-500 group-hover:scale-[1.02]" />

              <div className="relative p-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-success-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-success-600 transform transition-transform duration-300 group-hover:shadow-lg"
                >
                  {approach.icon}
                </motion.div>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-success-900">
                    {approach.title}
                  </h3>
                  <p className="text-success-600 font-medium">
                    {approach.subtitle}
                  </p>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {approach.description}
                </p>

                <motion.ul className="space-y-3">
                  {approach.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      variants={featureVariants}
                      className="flex items-center text-success-700"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + featureIndex * 0.1 }}
                        className="w-2 h-2 bg-success-500 rounded-full mr-3"
                      />
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div variants={itemVariants} className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-success-600 hover:bg-success-700 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-300"
            onClick={() => navigate("/programs")}
          >
            <span>Learn More About Our Programs</span>
            <ArrowUpRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ApproachSection;
