import React from "react";
import { motion } from "framer-motion";
import { HouseIcon } from "lucide-react";

const ApplicationHeader = () => {
  return (
    <section className="max-w-4xl mx-auto mb-16 text-center pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center justify-center mb-6 bg-success-50 text-success-600 px-4 py-2 rounded-full"
      >
        <HouseIcon className="w-5 h-5 mr-2" />
        <span className="text-sm font-semibold">Housing Application</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl font-bold mb-6 bg-gradient-to-r from-success-600 to-success-800 bg-clip-text text-transparent"
      >
        Start Your Journey to RIGHT Housing
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
      >
        Complete the interest form below to begin your path towards
        recovery-supportive housing. Our team is here to help you every step of
        the way.
      </motion.p>
    </section>
  );
};

export default ApplicationHeader;
