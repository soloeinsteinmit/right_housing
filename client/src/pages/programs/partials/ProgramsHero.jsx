import React from "react";
import { motion } from "framer-motion";
import { Users, Sparkles, Clock, Award } from "lucide-react";
import AnimatedScrollButton from "../../../components/common/AnimatedScrollButton";
import programsHero1 from "../../../assets/com_impact.jpg";
import programsHero2 from "../../../assets/com-impact2.jpg";
import programsHero3 from "../../../assets/drug.jpg";

const ProgramsHero = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-success-900 via-success-800 to-success-900 overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Neural Network Pattern */}
        <svg
          className="w-full h-full opacity-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <motion.path
              id="networkPath"
              d="M10,30 Q30,50 50,30 T90,30"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Animated Network Grid */}
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.use
              key={i}
              href="#networkPath"
              stroke="currentColor"
              className="text-warning-400"
              strokeWidth="0.2"
              fill="none"
              filter="url(#glow)"
              transform={`translate(0,${i * 20})`}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
            />
          ))}
        </svg>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-warning-400/30 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20],
                x: [-20, 20],
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto px-4 py-20 ">
        <div className="grid lg:grid-cols-12 gap-16 items-center justify-center  ">
          {/* Text Content */}
          <motion.div
            className="lg:col-span-6 text-center lg:text-left pt-16 "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-8xl font-bold leading-tight text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Transform
              <span className="block text-warning-400 mt-2">Your Future</span>
            </motion.h1>
            <motion.p
              className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Experience our innovative approach to recovery, reentry and mental
              health, designed to empower your journey towards lasting
              transformation.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex gap-8 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {[
                {
                  value: "500+",
                  label: "Lives Transformed",
                  icon: <Users className="w-6 h-6" />,
                },
                {
                  value: "85%",
                  label: "Success Rate",
                  icon: <Sparkles className="w-6 h-6" />,
                },
                {
                  value: "24/7",
                  label: "Support Available",
                  icon: <Clock className="w-6 h-6" />,
                },
                {
                  value: "4+",
                  label: "Years Experience",
                  icon: <Award className="w-6 h-6" />,
                },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-warning-400/20 flex items-center justify-center text-warning-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Scroll Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="text-center">
                <span className="block text-white/80 mb-4">Learn more</span>
                <AnimatedScrollButton
                  onClick={handleScroll}
                  tooltipText=""
                  hasTooltip={false}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="lg:col-span-6 relative h-[600px] "
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            {/* Main Image */}
            <motion.div
              className="absolute top-0 right-0 w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <img
                src={programsHero1}
                alt="Program Impact"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-success-900/50 to-transparent" />
            </motion.div>

            {/* Secondary Image */}
            <motion.div
              className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 1.5,
              }}
            >
              <img
                src={programsHero2}
                alt="Community Support"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-success-900/50 to-transparent" />
            </motion.div>

            {/* Third Image */}
            <motion.div
              className="absolute -bottom-20 right-5 w-1/2 h-1/2 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 2,
              }}
            >
              <img
                src={programsHero3}
                alt="Transformation Journey"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-success-900/50 to-transparent" />
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -inset-4 -z-10 bg-warning-400/10 rounded-2xl blur-2xl" />
            <div className="absolute -inset-4 -z-20 bg-gradient-to-br from-warning-900/50 to-success-900/50 rounded-2xl transform rotate-2" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsHero;
