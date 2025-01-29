import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/button";

const WhatIsRightHousing = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
      <motion.div
        className="grid md:grid-cols-2 gap-16 items-center justify-items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left side - Content */}
        <div className="space-y-8 max-w-xl">
          {/* Title */}
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left"
          >
            <h3 className="text-success-600 text-lg font-medium mb-2">
              RIGHT Housing, Inc.
            </h3>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What is RIGHT Housing?
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-lg leading-relaxed text-center md:text-left"
          >
            RIGHT Housing, Inc. is a 501(c)(3) nonprofit organization that
            provides transitional housing and comprehensive support services.
          </motion.p>

          {/* Key Points */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-start space-x-4">
              <svg
                className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-gray-600">
                Supporting individuals through recovery with comprehensive
                addiction treatment support.
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <svg
                className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <p className="text-gray-600">
                Facilitating successful re-entry for formerly incarcerated
                individuals through structured support.
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <svg
                className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              <p className="text-gray-600">
                Providing mental health support and resources for sustainable
                well-being and growth.
              </p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left"
          >
            <Button
              onPress={() => {
                navigate("/about");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              color="success"
              className="text-white"
              radius="sm"
              size="lg"
            >
              Learn More About Us
            </Button>
          </motion.div>
        </div>

        {/* Right side - Building SVG */}
        <motion.div
          variants={itemVariants}
          className="relative w-full max-w-md"
        >
          <svg
            className="w-full h-auto"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Decorative background */}
            <motion.circle
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              cx="200"
              cy="200"
              r="150"
              className="fill-amber-100/20"
            />

            {/* House structure */}
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              d="M50 350 L200 150 L350 350 Z"
              stroke="#F59E0B"
              strokeWidth="3"
              className="drop-shadow-md"
            />

            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              d="M75 350 L75 200 L325 200 L325 350"
              stroke="#1F2937"
              strokeWidth="3"
              className="drop-shadow-md"
            />

            {/* Door with golden frame */}
            <motion.rect
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
              x="175"
              y="270"
              width="50"
              height="80"
              className="fill-gray-800"
            />
            <motion.rect
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
              x="173"
              y="268"
              width="54"
              height="84"
              className="fill-none stroke-amber-500"
              strokeWidth="2"
            />

            {/* Windows with golden frames */}
            {[
              [100, 230],
              [250, 230],
            ].map(([x, y], i) => (
              <React.Fragment key={i}>
                <motion.rect
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.2 + i * 0.2 }}
                  x={x}
                  y={y}
                  width="40"
                  height="40"
                  className="fill-gray-800"
                />
                <motion.rect
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.4 + i * 0.2 }}
                  x={x - 2}
                  y={y - 2}
                  width="44"
                  height="44"
                  className="fill-none stroke-amber-500"
                  strokeWidth="2"
                />
              </React.Fragment>
            ))}

            {/* Trees with golden highlights */}
            {[
              [40, 350],
              [360, 350],
            ].map(([x, y], i) => (
              <motion.g
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.5 + i * 0.2 }}
              >
                <circle
                  cx={x}
                  cy={y - 30}
                  r="20"
                  className="fill-success-600"
                />
                <circle
                  cx={x}
                  cy={y - 30}
                  r="22"
                  className="fill-none stroke-amber-500"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                />
                <rect
                  x={x - 5}
                  y={y - 20}
                  width="10"
                  height="20"
                  className="fill-gray-800 stroke-amber-500"
                  strokeWidth="1"
                />
              </motion.g>
            ))}
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhatIsRightHousing;
