import React, { memo, useCallback, useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import usePulseAnimation, {
  PULSE_COLORS,
} from "../../../hooks/usePulseAnimation";
import { motion } from "framer-motion";

// Memoized background pattern component
const BackgroundPattern = memo(() => (
  <div className="absolute inset-0 opacity-20">
    <svg
      className="w-full h-full"
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path
            d="M 50 0 L 0 0 0 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
));

// Memoized action button component
const ActionButton = memo(({ onClick, className, children }) => (
  <motion.button
    className={`inline-flex items-center justify-center gap-2 ${className} px-8 py-4 rounded-full transition-colors text-lg font-semibold group`}
    whileTap="tap"
    onClick={onClick}
  >
    <span>{children}</span>
    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
  </motion.button>
));

const CallToActionSection = () => {
  const navigate = useNavigate();
  const pulseVariant = usePulseAnimation({
    color: PULSE_COLORS.WARNING,
  });

  // Memoized navigation handlers
  const handleDonateClick = useCallback(() => {
    navigate("/donate");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [navigate]);

  const handleVolunteerClick = useCallback(() => {
    // navigate("/volunteer");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [navigate]);

  return (
    <div className="max-w-[1400px] mx-auto px-4">
      <div className="bg-success-800 rounded-3xl p-12 md:p-20 relative overflow-hidden">
        <BackgroundPattern />

        <div className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl max-[480px]:text-3xl font-bold mb-6 text-white">
              Ready to{" "}
              <span className="font-agu text-warning">Make a Difference</span>{" "}
              in Someone's{" "}
              <span className="font-agu text-warning">Recovery Journey</span>?
            </h2>
            <p className="text-xl max-[480px]:text-lg text-success-100 mb-12">
              Then support helps us provide essential housing and recovery
              services to those in need. Join us in transforming lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                // to="/donate"
                className="inline-flex items-center justify-center gap-2 bg-warning-500 hover:bg-warning-600 text-white px-8 py-4 rounded-full transition-colors text-lg font-semibold group"
                variants={pulseVariant}
                initial="initial"
                animate="animate"
                whileTap="tap"
                onClick={handleDonateClick}
              >
                <span>Donate Now</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
              <Link
                to="/volunteer"
                onClick={handleVolunteerClick}
                className="inline-flex items-center justify-center gap-2 bg-success-700 hover:bg-success-600 text-white px-8 py-4 rounded-full transition-colors text-lg font-semibold group"
              >
                <span>Become a Volunteer</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CallToActionSection);
