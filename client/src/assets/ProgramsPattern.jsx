import React from "react";
import { motion } from "framer-motion";

const ProgramsPattern = ({ className }) => {
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
        <pattern
          id="programsPattern"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <path
            d="M20,0 L40,20 L20,40 L0,20 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeOpacity="0.1"
          />
          <circle
            cx="20"
            cy="20"
            r="1.5"
            fill="currentColor"
            fillOpacity="0.1"
          />
        </pattern>

        <linearGradient id="programsFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>

        <filter id="programsGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="100%" height="100%" fill="url(#programsPattern)" />

      {/* Animated elements */}
      <motion.g
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <circle cx="25%" cy="30%" r="80" fill="url(#programsFade)" />
        <circle cx="75%" cy="70%" r="100" fill="url(#programsFade)" />
      </motion.g>
    </motion.svg>
  );
};

export default ProgramsPattern;
