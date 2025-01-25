import React from "react";
import { motion } from "framer-motion";

const AnitaStoryPattern = ({ className }) => {
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
          id="healingPattern"
          width="50"
          height="50"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(30)"
        >
          <path
            d="M25,0 Q50,25 25,50 Q0,25 25,0"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeOpacity="0.1"
          />
        </pattern>

        <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="100%" height="100%" fill="url(#healingPattern)" />

      {/* Animated healing symbols */}
      <motion.g
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <circle cx="30%" cy="20%" r="100" fill="url(#glowGradient)" />
        <circle cx="70%" cy="80%" r="120" fill="url(#glowGradient)" />
      </motion.g>
    </motion.svg>
  );
};

export default AnitaStoryPattern;
