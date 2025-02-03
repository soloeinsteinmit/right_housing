import React, { useMemo } from "react";
import { motion } from "framer-motion";
import community from "../../../assets/12.webp";

// Animation variants
const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

// Memoized SVG patterns
const SvgPatterns = React.memo(() => (
  <defs>
    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
      <motion.path
        d="M 10 0 L 0 0 0 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    </pattern>
    <pattern id="circles" width="20" height="20" patternUnits="userSpaceOnUse">
      <motion.circle
        cx="10"
        cy="10"
        r="2"
        fill="currentColor"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    </pattern>
    <pattern id="squares" width="15" height="15" patternUnits="userSpaceOnUse">
      <motion.rect
        width="5"
        height="5"
        x="5"
        y="5"
        fill="currentColor"
        initial={{ rotate: 0 }}
        animate={{ rotate: 180 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    </pattern>
  </defs>
));

// Memoized background layers
const BackgroundLayers = React.memo(() => (
  <>
    <rect
      width="100%"
      height="100%"
      fill="url(#grid)"
      className="text-success-600"
    />
    <rect
      width="100%"
      height="100%"
      fill="url(#circles)"
      className="text-success-400"
    />
    <rect
      width="100%"
      height="100%"
      fill="url(#squares)"
      className="text-warning-400"
    />
    <motion.path
      d="M 0 50 Q 25 45, 50 50 T 100 50 T 150 50"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.2"
      className="text-success-500"
      initial={{ x: -50 }}
      animate={{ x: 0 }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
    />
  </>
));

// Memoized animated shape
const AnimatedShape = React.memo(({ index }) => (
  <motion.div
    className="absolute"
    style={{
      top: `${20 + index * 15}%`,
      left: `${10 + index * 20}%`,
      width: "300px",
      height: "300px",
      background: `radial-gradient(circle, rgba(var(--success-200-rgb), 0.1) 0%, rgba(var(--success-500-rgb), 0.05) 100%)`,
      borderRadius: "50%",
    }}
    animate={{
      scale: [1, 1.2, 1],
      x: [0, 50, 0],
      y: [0, 30, 0],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      delay: index * 0.5,
    }}
  />
));

const HeroSection = () => {
  // Memoize array for shapes
  const shapes = useMemo(() => Array(5).fill(null), []);

  return (
    <section className="relative min-h-screen flex max-md:py-16 items-center overflow-hidden bg-gray-50">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-success-50/50 to-transparent" />

        {/* SVG Pattern Background */}
        <div className="absolute inset-0">
          <svg
            className="w-full h-full opacity-[0.03]"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice"
          >
            <SvgPatterns />
            <BackgroundLayers />
          </svg>
        </div>

        {/* Animated Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {shapes.map((_, i) => (
            <AnimatedShape key={i} index={i} />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="cursor-default"
          >
            <h1 className="text-7xl font-bold mb-6">
              <span className="text-gray-900">Transforming</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-success-600 to-success-800">
                Lives
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              At RIGHT Housing, we believe that true healing happens when the
              mind, body, and spirit are nurtured together. We provide
              transitional housing for men and women who are navigating
              recovery, reentry, or mental health challenges, offering more than
              just a roof over their heads.
            </p>
            <div className="flex flex-wrap gap-6 cursor-default">
              <motion.div className="flex items-center gap-3 bg-success-50 text-success-700 px-6 py-3 rounded-full">
                <span className="font-semibold">Holistic Support</span>
                <span className="w-px h-4 bg-success-200" />
                <span>Person-Centered Care</span>
              </motion.div>
              <motion.div className="flex items-center gap-3 bg-warning-50 text-warning-700 px-6 py-3 rounded-full">
                <span className="font-semibold">Empowerment</span>
                <span className="w-px h-4 bg-warning-200" />
                <span>Life-Changing Impact</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative cursor-default"
          >
            <div className="relative z-10">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={community}
                  alt="RIGHT Housing Community"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-success-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-success-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Communities Served</p>
                    <p className="text-xl font-bold text-gray-900">50+</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-warning-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-warning-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Team Members</p>
                    <p className="text-xl font-bold text-gray-900">100+</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 bg-gradient-to-r from-success-200 to-warning-200 rounded-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(HeroSection);
