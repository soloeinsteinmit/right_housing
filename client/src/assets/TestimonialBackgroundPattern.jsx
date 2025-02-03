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
    </motion.svg>
  );
};

export default TestimonialBackgroundPattern;
