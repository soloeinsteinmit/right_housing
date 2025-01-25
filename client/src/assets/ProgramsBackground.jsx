import React from "react";
import { motion } from "framer-motion";

const ProgramsBackground = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Healing Pattern */}
        <pattern
          id="healingPattern"
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(30)"
        >
          <motion.path
            d="M20,0 L40,20 L20,40 L0,20 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeOpacity="0.1"
            initial={{ strokeDasharray: 160, strokeDashoffset: 160 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </pattern>

        {/* Recovery Circles */}
        <pattern
          id="recoveryCircles"
          x="0"
          y="0"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <motion.circle
            cx="30"
            cy="30"
            r="15"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeOpacity="0.1"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </pattern>

        {/* Growth Lines */}
        <pattern
          id="growthLines"
          x="0"
          y="0"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <motion.line
            x1="0"
            y1="40"
            x2="80"
            y2="40"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeOpacity="0.1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </pattern>

        {/* Radial Gradient */}
        <radialGradient
          id="glowGradient"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background Layers */}
      <rect width="100%" height="100%" fill="url(#healingPattern)" />
      <rect width="100%" height="100%" fill="url(#recoveryCircles)" />
      <rect width="100%" height="100%" fill="url(#growthLines)" />

      {/* Animated Elements */}
      <g>
        {[...Array(3)].map((_, i) => (
          <motion.circle
            key={i}
            cx={200 + i * 300}
            cy={500}
            r="100"
            fill="url(#glowGradient)"
            initial={{ scale: 1, opacity: 0.3 }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 4,
              delay: i * 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </g>

      {/* Flowing Path */}
      <motion.path
        d="M0,500 Q250,450 500,500 T1000,500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    </svg>
  );
};

export default ProgramsBackground;
