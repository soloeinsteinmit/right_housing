import React from "react";
import { motion } from "framer-motion";

const FounderStoryPattern = ({ className }) => {
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
          id="storyPattern"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <path
            d="M30,0 L60,30 L30,60 L0,30 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeOpacity="0.1"
          />
          <circle
            cx="30"
            cy="30"
            r="2"
            fill="currentColor"
            fillOpacity="0.1"
          />
        </pattern>

        <linearGradient id="fadeGradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="100%" height="100%" fill="url(#storyPattern)" />

      {/* Animated elements */}
      <motion.circle
        cx="25%"
        cy="30%"
        r="120"
        fill="url(#fadeGradient)"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.circle
        cx="75%"
        cy="70%"
        r="150"
        fill="url(#fadeGradient)"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.05, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </motion.svg>
  );
};

export default FounderStoryPattern;
