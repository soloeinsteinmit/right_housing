/**
 * @fileoverview Donation cancellation page component.
 * Displayed when a donation payment is cancelled.
 */

import { motion } from "framer-motion";
import { XCircle, ArrowLeft, RefreshCcw } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * DonationCancel component shown when donation is cancelled.
 * Provides options to retry donation or contact support.
 *
 * @component
 * @returns {JSX.Element} The rendered DonationCancel component
 */
const DonationCancel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 text-center relative overflow-hidden"
      >
        {/* Cancel Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="w-24 h-24 mx-auto mb-6 text-gray-400"
        >
          <XCircle className="w-full h-full" strokeWidth={1.5} />
        </motion.div>

        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: Math.random() * 400 - 200,
                y: Math.random() * 400 - 200,
              }}
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.1,
              }}
            >
              <div className="w-8 h-8 border-2 border-gray-900 rounded-full" />
            </motion.div>
          ))}
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-gray-900 mb-4"
        >
          Donation Cancelled
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 mb-8"
        >
          No worries! Your donation was not processed. If you experienced any
          issues or have questions, please don't hesitate to contact us.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-50 rounded-xl p-6 mb-8"
        >
          <h2 className="text-gray-900 font-semibold mb-2">Common Issues</h2>
          <ul className="text-gray-600 text-sm text-left space-y-2">
            <li>• Card declined or insufficient funds</li>
            <li>• Connection timeout</li>
            <li>• Browser compatibility issues</li>
            <li>• Incorrect card information</li>
          </ul>
        </motion.div>

        <div className="flex justify-center gap-4">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-xl font-medium hover:bg-gray-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Return Home
            </motion.button>
          </Link>
          <Link to="/donate">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-success-600 text-white rounded-xl font-medium hover:bg-success-700 transition-colors"
            >
              <RefreshCcw className="w-4 h-4" />
              Try Again
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default DonationCancel;
