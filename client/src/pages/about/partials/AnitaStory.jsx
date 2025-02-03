import React, { useMemo, useEffect, useRef, useState } from "react";
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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

// Memoized components
const StoryImage = React.memo(() => (
  <motion.div
    variants={imageVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl"
  >
    <img
      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600&h=800"
      alt="Anita - Founder"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
  </motion.div>
));

const StoryQuote = React.memo(() => (
  <motion.blockquote
    variants={textVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="text-2xl font-serif italic text-gray-700 mb-8 relative"
  >
    <div className="absolute -left-8 -top-8 text-8xl text-success-200">"</div>
    Camden showed me a side of the world few ever truly see—where simple
    mistakes or misfortunes could unravel a person's life in an instant.
    <div className="absolute -right-8 bottom-0 text-8xl text-success-200">
      "
    </div>
  </motion.blockquote>
));

const StoryContent = React.memo(({ pulseVariant, setIsModalOpen }) => (
  <motion.div
    variants={textVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.4 }}
    className="prose prose-lg text-gray-600 max-w-none text-lg"
  >
    <p>
      In my time as a Population Health Manager in Camden, I witnessed firsthand
      how the simplest of mistakes or wrong choices could spiral into
      homelessness and life-altering tragedies for individuals. I saw people I
      knew by name—real faces, real stories—struggling with homelessness and
      isolation. It became clear that their needs weren’t just physical; they
      needed hope, support, and a chance to rebuild.
    </p>
    <br />
    <p>
      These weren't just patients seeking medical care—they were individuals
      looking for a chance to rebuild their lives. Their struggles taught me
      that healing goes far beyond physical health; it's about restoring hope
      and dignity.
    </p>
    <br />
    <p>
      Through my background in healthcare operations and project management, I
      learned that sustainable change requires more than temporary solutions. It
      demands a comprehensive system of support, understanding, and opportunity.
    </p>
    {/* Read More Button */}
    <motion.button
      variants={pulseVariant}
      onClick={() => setIsModalOpen(true)}
      className="px-8 py-4 mt-4 bg-success-600 transition-colors hover:bg-success-500 text-white rounded-xl font-semibold inline-flex items-center gap-2 shadow-lg shadow-success-600/20"
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
  </motion.div>
));

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
      title: "Health Operations Director",
      location: "Reset Kidney",
      description: "Creating sustainable solutions for long-term healing",
      icon: <HandHeart className="w-6 h-6" />,
    },
    {
      title: "Project Manager",
      location: "Support Programs",
      description: "Building pathways for recovery and reentry",
      icon: <Home className="w-6 h-6" />,
    },
    {
      title: "Social Impactor",
      location: "RIGHT Housing",
      description: "Transforming lives through mind-body wellness",
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

  // Memoize the decorative elements array
  const decorativeElements = useMemo(
    () => [
      { top: "10%", left: "5%", size: "lg", color: "success" },
      { top: "80%", left: "15%", size: "sm", color: "warning" },
      { top: "30%", right: "10%", size: "md", color: "success" },
      { top: "70%", right: "5%", size: "lg", color: "warning" },
    ],
    []
  );

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
            <StoryImage />
            <div className="absolute -bottom-4 -right-4 z-10 bg-white px-6 py-3 rounded-full shadow-lg">
              <span className="text-success-600 font-semibold ">
                Anita Parker, Founder & Visionary
              </span>
            </div>
          </motion.div>

          {/* Story Column */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="prose prose-lg">
              <StoryQuote />
              <StoryContent
                pulseVariant={pulseVariant}
                setIsModalOpen={setIsModalOpen}
              />
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

export default React.memo(AnitaStory);
