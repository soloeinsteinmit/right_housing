import React from "react";
import { motion } from "framer-motion";

const FaqBackgroundPattern = ({ className }) => {
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
          id="questionPattern"
          width="50"
          height="50"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <path
            d="M25,0 L50,25 L25,50 L0,25 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeOpacity="0.1"
          />
        </pattern>

        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <linearGradient id="fadeGradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="100%" height="100%" fill="url(#questionPattern)" />

      {/* Animated elements */}
      <motion.circle
        cx="20%"
        cy="30%"
        r="100"
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
        cx="80%"
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

export default FaqBackgroundPattern;
