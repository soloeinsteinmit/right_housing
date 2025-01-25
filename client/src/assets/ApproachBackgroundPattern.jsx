import React from "react";
import { motion } from "framer-motion";

const ApproachBackgroundPattern = ({ className }) => {
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
          id="hexagonPattern"
          width="50"
          height="86.6"
          patternUnits="userSpaceOnUse"
          patternTransform="scale(2) rotate(0)"
        >
          <path
            d="M25,0 L50,14.4 L50,43.2 L25,57.6 L0,43.2 L0,14.4 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.1"
          />
        </pattern>
        
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <linearGradient id="fadeGradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.1"/>
          <stop offset="100%" stopColor="currentColor" stopOpacity="0"/>
        </linearGradient>
      </defs>

      <rect width="100%" height="100%" fill="url(#hexagonPattern)" />
      
      {/* Animated elements */}
      <motion.circle
        cx="20%"
        cy="30%"
        r="120"
        fill="url(#fadeGradient)"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        filter="url(#glow)"
      />
      <motion.circle
        cx="80%"
        cy="70%"
        r="150"
        fill="url(#fadeGradient)"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.05, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        filter="url(#glow)"
      />
    </motion.svg>
  );
};

export default ApproachBackgroundPattern;
