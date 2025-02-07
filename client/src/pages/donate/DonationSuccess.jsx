/**
 * @fileoverview Donation success page component.
 * Displayed after a successful donation payment.
 */

import { memo } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Heart, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

const checkmarkVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    }
  }
};

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const buttonVariants = {
  hover: { scale: 1.02 },
  tap: { scale: 0.98 }
};

const FloatingHeart = memo(({ index }) => (
  <motion.div
    className="absolute text-success-200"
    initial={{
      x: Math.random() * 400 - 200,
      y: Math.random() * 400 - 200,
      scale: 0,
    }}
    animate={{
      y: [-20, 20],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 2 + index,
      repeat: Infinity,
      repeatType: "reverse",
      delay: index * 0.2,
    }}
  >
    <Heart className="w-8 h-8" />
  </motion.div>
));

FloatingHeart.displayName = "FloatingHeart";

const NextSteps = memo(() => (
  <motion.div
    variants={fadeInUpVariant}
    initial="hidden"
    animate="visible"
    transition={{ delay: 0.4 }}
    className="bg-success-50 rounded-xl p-6 mb-8"
  >
    <h2 className="text-success-700 font-semibold mb-2">What Happens Next?</h2>
    <ul className="text-success-600 text-sm text-left space-y-2">
      <li>• You'll receive a confirmation email shortly</li>
      <li>• A tax receipt will be sent for your records</li>
      <li>• Your donation will be put to work immediately</li>
      <li>• We'll keep you updated on our impact</li>
    </ul>
  </motion.div>
));

NextSteps.displayName = "NextSteps";

const ReturnHomeButton = memo(() => (
  <Link to="/">
    <motion.button
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      className="inline-flex items-center gap-2 px-6 py-3 bg-success-600 text-white rounded-xl font-medium hover:bg-success-700 transition-colors"
    >
      <ArrowLeft className="w-4 h-4" />
      Return Home
    </motion.button>
  </Link>
));

ReturnHomeButton.displayName = "ReturnHomeButton";

/**
 * DonationSuccess component shown after successful donation.
 * Displays confirmation and thank you message to donors.
 *
 * @component
 * @returns {JSX.Element} The rendered DonationSuccess component
 */
const DonationSuccess = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-success-50 to-success-100 flex items-center justify-center p-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 text-center relative overflow-hidden"
      >
        {/* Success Animation */}
        <motion.div
          variants={checkmarkVariants}
          initial="hidden"
          animate="visible"
          className="w-24 h-24 mx-auto mb-6 text-success-500"
        >
          <CheckCircle className="w-full h-full" strokeWidth={1.5} />
        </motion.div>

        {/* Floating Hearts */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <FloatingHeart key={i} index={i} />
          ))}
        </div>

        <motion.h1
          variants={fadeInUpVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-gray-900 mb-4"
        >
          Thank You for Your Generosity!
        </motion.h1>

        <motion.p
          variants={fadeInUpVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="text-gray-600 mb-8"
        >
          Your donation has been successfully processed. Together, we're making a
          difference in providing safe and stable housing for those in need.
        </motion.p>

        <NextSteps />
        <ReturnHomeButton />
      </motion.div>
    </div>
  );
};

DonationSuccess.displayName = "DonationSuccess";

export default memo(DonationSuccess);
