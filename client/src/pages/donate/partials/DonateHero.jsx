import { motion, useScroll } from "framer-motion";
import { Heart, Users, Home, ArrowRight } from "lucide-react";
import { useRef } from "react";
import usePulseAnimation, {
  PULSE_COLORS,
} from "../../../hooks/usePulseAnimation";
import { useNavigate } from "react-router-dom";

const DonateHero = () => {
  const donationRef = useRef(null);
  const navigate = useNavigate();
  const pulseVariant = usePulseAnimation({
    color: PULSE_COLORS.SUCCESS,
    duration: 2,
  });

  const scrollToNextSection = () => {
    const heroSection = document.getElementById("hero-section");
    const nextSection = heroSection.nextElementSibling;

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Professional animated background
  const BackgroundAnimation = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full opacity-[0.4]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Floating Hearts */}
        {[...Array(5)].map((_, i) => (
          <motion.path
            key={i}
            d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.1"
            className="text-success-500"
            initial={{
              scale: 0.5,
              x: -50 + i * 25,
              y: -20 + i * 10,
              opacity: 0.2,
            }}
            animate={{
              y: [-20 + i * 10, -10 + i * 10, -20 + i * 10],
              opacity: [0.2, 0.4, 0.2],
              scale: [0.5, 0.6, 0.5],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Pulsing Circles */}
        {[...Array(4)].map((_, i) => (
          <motion.circle
            key={`circle-${i}`}
            cx={25 + i * 20}
            cy={40}
            r="1"
            fill="currentColor"
            className="text-warning-500"
            initial={{ scale: 0, opacity: 0.2 }}
            animate={{
              scale: [0, 2, 0],
              opacity: [0.2, 0, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
      </svg>
    </div>
  );

  const impactStats = [
    {
      icon: <Users className="w-10 h-10" />,
      number: "5,000+",
      label: "Lives Impacted",
      color: "primary",
      description: "Supporting families in need",
    },
    {
      icon: <Home className="w-10 h-10" />,
      number: "1,200+",
      label: "Homes Provided",
      color: "success",
      description: "Safe and stable housing",
    },
    {
      icon: <Heart className="w-10 h-10" />,
      number: "$2.5M+",
      label: "Donations Received",
      color: "warning",
      description: "100% goes to housing",
    },
  ];

  return (
    <section
      className="flex items-center justify-center relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 max-md:pt-32 overflow-hidden"
      id="hero-section"
    >
      <BackgroundAnimation />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl max-[480px]:text-4xl md:text-7xl font-bold text-gray-900 mb-6">
              Make a{" "}
              <span className="text-success-600 relative">
                Difference
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 100 10"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <path
                    d="M 0,5 Q 25,0 50,5 T 100,5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </motion.svg>
              </span>
            </h1>
            <p className="text-xl max-[480px]:text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Your generosity can transform lives. Every donation brings us
              closer to providing safe, stable housing for those in need.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-6">
              <motion.button
                variants={pulseVariant}
                initial="initial"
                animate="animate"
                whileTap="tap"
                onClick={scrollToNextSection}
                className="px-8 py-4 bg-success-600 hover:bg-success-500 transition-color duration-300 text-white rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-success-600/20"
              >
                Donate Now
                <Heart className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-800 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => {
                  navigate("/impact");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Witness Lives Transformed
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Impact Stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="grid md:grid-cols-3 gap-8 mt-20"
          >
            {impactStats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: "easeOut",
                    },
                  },
                }}
                className="relative bg-white rounded-2xl p-8 shadow-xl transform hover:-translate-y-1 transition-transform duration-300"
              >
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-${stat.color}-50 rounded-bl-full opacity-50`}
                />
                <div
                  className={`absolute bottom-0 left-0 w-32 h-32 bg-${stat.color}-50 rounded-tr-full opacity-50`}
                />

                <div className="relative">
                  <div
                    className={`w-20 h-20 mb-6 rounded-2xl bg-${stat.color}-100 flex items-center justify-center text-${stat.color}-600 transform hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.icon}
                  </div>

                  <h3 className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-lg font-semibold text-gray-800 mb-2">
                    {stat.label}
                  </p>
                  <p className="text-gray-600">{stat.description}</p>

                  <div
                    className={`absolute bottom-[-2px] left-0 w-full h-1 bg-${stat.color}-500 rounded-b-2xl opacity-20`}
                  />
                  <motion.div
                    className={`absolute bottom-[-2px] left-0 h-1 bg-${stat.color}-500 rounded-bl-2xl`}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DonateHero;
