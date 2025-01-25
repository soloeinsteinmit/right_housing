import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Quote, Heart, Lightbulb, Target, Users } from "lucide-react";
import FounderStoryPattern from "../../../assets/FounderStoryPattern";

const FounderStory = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const timelineEvents = [
    {
      year: "2015",
      title: "The Awakening",
      description:
        "After witnessing the struggles of individuals in recovery trying to rebuild their lives, Sarah Chen recognized the critical gap in supportive housing services.",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      year: "2016",
      title: "First Steps",
      description:
        "Launched pilot program with 5 residents, establishing core principles of comprehensive support and community-based recovery.",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      year: "2018",
      title: "Growing Impact",
      description:
        "Expanded to 3 locations, serving 50+ residents. Developed innovative support programs integrating mental health, career development, and life skills.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      year: "2020",
      title: "Community Force",
      description:
        "RIGHT Housing becomes a leading force in recovery housing, with 200+ successful program graduates and strong community partnerships.",
      icon: <Users className="w-6 h-6" />,
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

  return (
    <div ref={ref} className="relative overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <FounderStoryPattern className="w-full h-full text-success-600" />
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
            className="inline-flex items-center justify-center mb-6"
          >
            <Quote className="w-12 h-12 text-success-400 transform -scale-x-100" />
          </motion.div>

          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-success-600 to-success-800 bg-clip-text text-transparent">
            Our Founder's Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The story of RIGHT Housing began with a vision to transform lives
            through supportive housing and comprehensive recovery services.
          </p>
        </motion.div>

        {/* Founder's Image and Quote */}
        <motion.div
          variants={containerVariants}
          className="flex flex-col md:flex-row items-center gap-12 mb-20"
        >
          <motion.div variants={itemVariants} className="md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-success-400 to-success-600 rounded-3xl transform rotate-6" />
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=800"
                alt="Sarah Chen - Founder"
                className="relative z-10 w-full h-[600px] object-cover rounded-3xl"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-white px-6 py-3 rounded-full shadow-lg"
              >
                <span className="text-success-600 font-semibold">
                  Sarah Chen, Founder & CEO
                </span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:w-1/2">
            <blockquote className="text-2xl font-medium leading-relaxed mb-8 text-gray-700">
              <span className="text-success-500">"</span>
              Every person deserves not just a house, but a true home—a place where
              they can heal, grow, and build a foundation for lasting recovery. This
              belief has driven every decision we've made at RIGHT Housing.
              <span className="text-success-500">"</span>
            </blockquote>
            <p className="text-gray-600 leading-relaxed mb-8">
              Sarah's personal experience with family members struggling with
              addiction led her to recognize the vital connection between stable
              housing and successful recovery. This insight became the cornerstone
              of RIGHT Housing's innovative approach.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-success-50 px-4 py-2 rounded-full">
                <span className="text-success-700 font-medium">
                  Social Impact Leader
                </span>
              </div>
              <div className="bg-success-50 px-4 py-2 rounded-full">
                <span className="text-success-700 font-medium">
                  Recovery Advocate
                </span>
              </div>
              <div className="bg-success-50 px-4 py-2 rounded-full">
                <span className="text-success-700 font-medium">
                  Community Builder
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <motion.div variants={containerVariants} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-success-200" />

          {/* Timeline Events */}
          <div className="space-y-24">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                variants={itemVariants}
                className={`flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-12 h-12 bg-success-600 rounded-full flex items-center justify-center text-white shadow-lg"
                  >
                    {event.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="text-success-600 font-bold text-lg mb-2">
                      {event.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24"
        >
          <motion.div
            variants={itemVariants}
            className="bg-success-50 p-8 rounded-2xl text-center"
          >
            <div className="text-4xl font-bold text-success-600 mb-2">1000+</div>
            <div className="text-gray-700 font-medium">Lives Transformed</div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-success-50 p-8 rounded-2xl text-center"
          >
            <div className="text-4xl font-bold text-success-600 mb-2">85%</div>
            <div className="text-gray-700 font-medium">Recovery Success Rate</div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-success-50 p-8 rounded-2xl text-center"
          >
            <div className="text-4xl font-bold text-success-600 mb-2">12</div>
            <div className="text-gray-700 font-medium">Community Locations</div>
          </motion.div>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-24"
        >
          <blockquote className="text-2xl font-medium text-gray-700 max-w-4xl mx-auto leading-relaxed">
            <span className="text-success-500">"</span>
            Our vision for the future is to create a world where every person in
            recovery has access to the support, community, and opportunities they
            need to rebuild their lives.
            <span className="text-success-500">"</span>
          </blockquote>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FounderStory;
