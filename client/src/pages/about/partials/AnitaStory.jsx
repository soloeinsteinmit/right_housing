import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Heart,
  HandHeart,
  Home,
  Users,
  Sparkles,
  Star,
  Quote,
  BookOpen,
} from "lucide-react";
import AnitaStoryPattern from "../../../assets/AnitaStoryPattern";
import FounderStoryModal from "../../../components/modals/FounderStoryModal";
import usePulseAnimation, {
  PULSE_COLORS,
} from "../../../hooks/usePulseAnimation";

const AnitaStory = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pulseVariant = usePulseAnimation({
    color: PULSE_COLORS.SUCCESS,
  });

  const milestones = [
    {
      title: "Population Health Manager",
      location: "Camden",
      description:
        "Witnessing life's fragility and the impact of compassionate care",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      title: "Healthcare Operations",
      location: "Community Health Center",
      description: "Creating sustainable solutions for long-term healing",
      icon: <HandHeart className="w-6 h-6" />,
    },
    {
      title: "Project Management",
      location: "Support Programs",
      description: "Building pathways for recovery and renewed hope",
      icon: <Home className="w-6 h-6" />,
    },
    {
      title: "Community Builder",
      location: "RIGHT Housing",
      description: "Transforming lives through compassion and support",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  const impactPoints = [
    {
      title: "Compassionate Care",
      description:
        "Every interaction is an opportunity to restore hope and dignity",
      icon: <Heart className="w-8 h-8" />,
    },
    {
      title: "Sustainable Solutions",
      description:
        "Creating lasting change through comprehensive support systems",
      icon: <Sparkles className="w-8 h-8" />,
    },
    {
      title: "Community Impact",
      description:
        "Building stronger communities through individual empowerment",
      icon: <Star className="w-8 h-8" />,
    },
  ];

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

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} className="relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <AnitaStoryPattern className="w-full h-full text-success-600" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative max-w-[1400px] mx-auto px-4"
      >
        {/* Header */}
        {/* <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-success-600 to-success-800 bg-clip-text text-transparent">
            Meet Anita
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A journey of compassion, transformation, and unwavering dedication to healing
          </p>
        </motion.div> */}

        <motion.div variants={itemVariants} className="text-center my-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center mb-6"
          >
            <Quote className="w-12 h-12 text-success-400 transform -scale-x-100" />
          </motion.div>

          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-success-600 to-success-800 bg-clip-text text-transparent">
            Meet Anita - Our Founder's Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A journey of compassion, transformation, and unwavering dedication
            to healing
          </p>
        </motion.div>

        {/* Main Story Section */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
        >
          {/* Image Column */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-success-400 to-success-600 rounded-3xl transform rotate-3" />
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600&h=800"
              alt="Anita - Founder"
              className="relative z-10 w-full h-[600px] object-cover rounded-3xl"
            />
            <div className="absolute -bottom-4 -right-4 z-10 bg-white px-6 py-3 rounded-full shadow-lg">
              <span className="text-success-600 font-semibold ">
                Anita Parker, Founder & Visionary
              </span>
            </div>
          </motion.div>

          {/* Story Column */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="prose prose-lg">
              <blockquote className="text-2xl font-medium text-gray-700 mb-6">
                <span className="text-success-500">"</span>
                Camden showed me a side of the world few ever truly see—where
                simple mistakes or misfortunes could unravel a person's life in
                an instant.
                <span className="text-success-500">"</span>
              </blockquote>

              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  As a Population Health Manager in Camden, I witnessed
                  firsthand the delicate balance between hope and despair. Every
                  day brought new stories of resilience, of people facing
                  unimaginable hardships with quiet dignity.
                </p>
                <p>
                  These weren't just patients seeking medical care—they were
                  individuals looking for a chance to rebuild their lives. Their
                  struggles taught me that healing goes far beyond physical
                  health; it's about restoring hope and dignity.
                </p>
                <p>
                  Through my background in healthcare operations and project
                  management, I learned that sustainable change requires more
                  than temporary solutions. It demands a comprehensive system of
                  support, understanding, and opportunity.
                </p>
                {/* Read More Button */}
                <motion.button
                  variants={pulseVariant}
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 bg-success-600 text-white rounded-xl font-semibold inline-flex items-center gap-2 shadow-lg shadow-success-600/20"
                  // whileHover={{ scale: 1.05 }}
                  initial="initial"
                  animate="animate"
                  whileTap="tap"
                >
                  <BookOpen className="w-5 h-5" />
                  <span className="font-semibold text-base">
                    Read Our Founder's Full Journey
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div variants={containerVariants} className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            A Journey of Transformation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                variants={itemVariants}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-success-100 rounded-full flex items-center justify-center text-success-600 mb-4">
                  {milestone.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {milestone.title}
                </h4>
                <div className="text-success-600 font-medium mb-2">
                  {milestone.location}
                </div>
                <p className="text-gray-600">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Section */}
        <motion.div variants={containerVariants} className="text-center mb-20">
          <h3 className="text-3xl font-bold mb-12 text-gray-900">
            Creating Lasting Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactPoints.map((point) => (
              <motion.div
                key={point.title}
                variants={itemVariants}
                className="bg-success-50 p-8 rounded-2xl"
              >
                <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center text-success-600 mx-auto mb-4">
                  {point.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {point.title}
                </h4>
                <p className="text-gray-600">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing Quote */}
        <motion.div variants={itemVariants} className="text-center pb-20">
          <blockquote className="text-2xl font-medium text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
            <span className="text-success-500">"</span>
            In Camden, I found my purpose: to help others see that a better
            future isn't just a dream, but a possibility that begins with one
            simple, compassionate step.
            <span className="text-success-500">"</span>
          </blockquote>
        </motion.div>

        {/* Story Modal */}
        <FounderStoryModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </motion.div>
    </div>
  );
};

export default AnitaStory;
