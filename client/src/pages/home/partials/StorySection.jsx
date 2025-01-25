import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Heart, Home, Users, ArrowUpRight } from "lucide-react";
import StoryBackgroundPattern from "../../../assets/StoryBackgroundPattern";

const StorySection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const storyCards = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Recovery Journey",
      description:
        "From struggle to strength, we guide individuals through their personal transformation.",
      stats: "80% Success Rate",
      color: "from-success-400 to-success-600",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Safe Haven",
      description:
        "More than housing - we create spaces where healing and growth flourish.",
      stats: "1000+ Lives Changed",
      color: "from-success-500 to-success-700",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Support",
      description: "Building networks of care that extend beyond our walls.",
      stats: "15+ Partner Organizations",
      color: "from-success-300 to-success-500",
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
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

  const glowVariants = {
    initial: { scale: 1, opacity: 0.5 },
    animate: {
      scale: 1.2,
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      ref={ref}
      className="relative overflow-hidden bg-success-900/95 text-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <StoryBackgroundPattern className="w-full h-full text-success-200" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative max-w-[1400px] mx-auto px-4 py-24"
      >
        {/* Header Section */}
        <motion.div
          variants={cardVariants}
          className="text-center mb-20 relative"
        >
          <motion.div
            variants={glowVariants}
            initial="initial"
            animate="animate"
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-success-400 rounded-full blur-3xl opacity-20"
          />
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-success-200 to-white bg-clip-text text-transparent">
            Where Hope Meets Action
          </h2>
          <p className="text-xl text-success-100 max-w-3xl mx-auto leading-relaxed">
            Every individual who walks through our doors carries a unique story.
            Our mission is to help write their next chapter of success.
          </p>
        </motion.div>

        {/* Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {storyCards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group"
            >
              {/* Card Background with Gradient */}
              <div className="absolute inset-0 bg-success-800/50 rounded-3xl transform transition-transform duration-500 group-hover:scale-[1.02]" />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 rounded-3xl transform transition-opacity duration-500 group-hover:opacity-20`}
              />

              {/* Card Content */}
              <div className="relative p-8">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-success-700/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-success-200"
                >
                  {card.icon}
                </motion.div>

                <h3 className="text-2xl font-bold mb-4 text-success-100">
                  {card.title}
                </h3>
                <p className="text-success-200 leading-relaxed mb-6">
                  {card.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-success-300 font-semibold">
                    {card.stats}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-success-300 hover:text-success-200"
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div variants={cardVariants} className="mt-20 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-success-200 hover:bg-success-300 text-success-900 font-semibold px-8 py-4 rounded-full transition-colors duration-300"
          >
            <span>Discover Our Impact</span>
            <ArrowUpRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default StorySection;
