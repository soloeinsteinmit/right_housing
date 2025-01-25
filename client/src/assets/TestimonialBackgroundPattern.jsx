import React from "react";
import { motion } from "framer-motion";

const TestimonialBackgroundPattern = ({ className }) => {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <defs>
        <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="currentColor" fillOpacity="0.07" />
        </pattern>

        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <mask id="gradientMask">
          <radialGradient id="radialGradient">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <rect width="100%" height="100%" fill="url(#radialGradient)" />
        </mask>
      </defs>

      <rect width="100%" height="100%" fill="url(#dots)" />

      {/* Animated elements */}
      <motion.circle
        cx="30%"
        cy="40%"
        r="100"
        fill="currentColor"
        fillOpacity="0.03"
        animate={{
          cy: ["40%", "45%", "40%"],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.circle
        cx="70%"
        cy="60%"
        r="150"
        fill="currentColor"
        fillOpacity="0.02"
        animate={{
          cy: ["60%", "55%", "60%"],
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </motion.svg>
  );
};

export default TestimonialBackgroundPattern;
