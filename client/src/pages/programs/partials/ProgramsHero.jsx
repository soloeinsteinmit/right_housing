import React, { useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { Users, Sparkles, Clock, Award } from "lucide-react";
import AnimatedScrollButton from "../../../components/common/AnimatedScrollButton";
import programsHero1 from "../../../assets/prison1.jpg";
import programsHero2 from "../../../assets/mentalSuppor.jpg";
import programsHero3 from "../../../assets/drug.jpg";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

// Memoized components
const NetworkPattern = React.memo(() => (
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
));

const FloatingParticles = React.memo(() => (
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
));

const StatItem = React.memo(({ icon, value, label }) => (
  <div className="text-center">
    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-warning-400/20 flex items-center justify-center text-warning-400">
      {icon}
    </div>
    <div className="text-3xl font-bold text-white mb-1">{value}</div>
    <div className="text-sm text-white/80">{label}</div>
  </div>
));

const ProgramsHero = () => {
  // Memoize scroll handler
  const handleScroll = useCallback(() => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }, []);

  // Memoize stats data
  const stats = useMemo(
    () => [
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
    ],
    []
  );

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-success-900 via-success-800 to-success-900 overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <NetworkPattern />
        <FloatingParticles />
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-12 gap-16 items-center justify-center">
          {/* Text Content */}
          <motion.div
            className="lg:col-span-6 text-center lg:text-left pt-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-8xl font-bold leading-tight text-white mb-6"
              variants={textVariants}
              transition={{ delay: 0.2 }}
            >
              Transform
              <span className="block text-warning-400 mt-2">Your Future</span>
            </motion.h1>
            <motion.p
              className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-12"
              variants={textVariants}
              transition={{ delay: 0.4 }}
            >
              Experience our innovative approach to recovery, reentry and mental
              health, designed to empower your journey towards lasting
              transformation.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex gap-8 mb-12"
              variants={textVariants}
              transition={{ delay: 0.6 }}
            >
              {stats.map((stat) => (
                <StatItem key={stat.label} {...stat} />
              ))}
            </motion.div>

            {/* Scroll Button */}
            <motion.div
              variants={textVariants}
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
            className="lg:col-span-6 relative h-[600px]"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            {/* Main Image */}
            <motion.div
              className="absolute top-0 right-0 w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-2xl"
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <img
                src={programsHero1}
                alt="Recovery Program"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Secondary Images */}
            <motion.div
              className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-2xl overflow-hidden shadow-2xl"
              animate={{ y: [20, 0, 20] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <img
                src={programsHero2}
                alt="Support Services"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Decorative Element */}
            <motion.div
              className="absolute -bottom-8 right-8 w-2/5 h-2/5 rounded-2xl overflow-hidden shadow-2xl"
              animate={{ y: [10, -10, 10] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <img
                src={programsHero3}
                alt="Additional Services"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ProgramsHero);
