import React from "react";
import { ArrowUpRight, Heart } from "lucide-react";
import AnimatedScrollButton from "../../../components/common/AnimatedScrollButton";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { HandCoins } from "lucide-react";
import usePulseAnimation, {
  PULSE_COLORS,
} from "../../../hooks/usePulseAnimation";

// Import images
import drug from "../../../assets/drug.jpg";
import homeless1 from "../../../assets/prison1.jpg";
import { Button } from "@heroui/button";
import SmileEmoji from "../../../assets/SmileEmoji";
import HeartEmoji from "../../../assets/heart_emoji";
import handgreeting from "../../../assets/handgreeting1.png";
import BackgroundPattern from "../../../assets/HandsBackgroundPattern";
import StatsBackgroundPattern from "../../../assets/StatBackgroundPattern";

function HeroSection() {
  const navigate = useNavigate();
  const pulseVariant = usePulseAnimation({
    color: PULSE_COLORS.WARNING,
  });

  const cards = [
    {
      type: "stat",
      title: "60%",
      // title: "80%",
      description:
        // "Success rate in transitioning individuals to stable, independent living through our comprehensive support programs.",
        "Early support increases the chances of successful reintegration into society.",
      btnText: "Our Impact Stories",
      className: "bg-success-900 w-[260px] h-[380px] text-white",
    },
    {
      type: "health",
      title: "Recovery Support",
      description:
        "Supporting individuals in their journey to recovery and reintegration with comprehensive support.",
      image: drug,
      className: "bg-[#14171F] text-white w-[260px] h-[350px]",
    },
    {
      type: "join",
      title: "Join 500+",
      description: "Lives Transformed",
      btnText: "Support Our Mission",
      className: "bg-success-100 w-[260px] h-[250px]",
    },
    {
      type: "education",
      title: "Reentry Assistance",
      description:
        // "Helping individuals recently released from prison transition back into society.",
        "Helping formerly incarcerated individuals transition back into society.",
      image: homeless1,
      className: "bg-[#14171F] text-white w-[260px] h-[350px]",
    },
    {
      type: "explore",
      btnText: "Explore Our Impact",
      className: "bg-[#CDFF6B] hover:bg-[#b8ff42] w-[260px] h-[70px]",
    },
    {
      type: "help",
      title: "Every Door Leads to Opportunity",
      icon: <SmileEmoji className="w-14" />,
      className: "bg-default-900 text-white w-[260px] h-[120px]",
    },
    {
      type: "donate",
      title: "Transform Lives",
      description:
        "Join our mission to provide comprehensive housing support and essential resources for those in transition.",
      btnText: "Support Now",
      className: "bg-[#14171F] text-white w-[260px] h-full",
    },
    {
      type: "impact",
      title: "Holistic Support",
      description:
        "Comprehensive care for mental, physical, and emotional well-being",
      btnText: "Our Approach",
      className: "bg-emerald-700 text-white w-[260px] h-[300px]",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

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

  return (
    <div
      id="hero-section"
      className="max-w-[1600px] mx-auto px-4 py-10 relative overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 -z-1 opacity-50">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left Side Pattern */}
          <g className="left-pattern">
            <motion.path
              d="M50,100 L250,100 A150,150 0 0,1 400,250 L400,600 L50,600 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-success-600"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
            <motion.path
              d="M80,130 L230,130 A120,120 0 0,1 370,250 L370,570 L80,570 Z"
              fill="currentColor"
              className="text-success-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
          </g>

          {/* Right Side Pattern */}
          <g className="right-pattern">
            <motion.path
              d="M800,100 L1000,100 L1000,600 L650,600 A150,150 0 0,1 800,450 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-warning-500"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
            <motion.path
              d="M830,130 L970,130 L970,570 L680,570 A120,120 0 0,1 830,420 Z"
              fill="currentColor"
              className="text-warning-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
          </g>

          {/* Architectural Lines */}
          <g className="architectural-details">
            {[...Array(8)].map((_, i) => (
              <motion.line
                key={i}
                x1={200 + i * 100}
                y1="0"
                x2={200 + i * 100}
                y2="800"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-success-200"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 4,
                }}
              />
            ))}
            {[...Array(6)].map((_, i) => (
              <motion.line
                key={i}
                x1="0"
                y1={150 + i * 100}
                x2="1200"
                y2={150 + i * 100}
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-success-200"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 4,
                }}
              />
            ))}
          </g>

          {/* Subtle Accent Shapes */}
          <g className="accent-shapes">
            <motion.circle
              cx="600"
              cy="400"
              r="200"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-success-300"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.2 }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
            <motion.circle
              cx="600"
              cy="400"
              r="150"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-warning-300"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.2 }}
              transition={{
                duration: 3,
                delay: 0.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          </g>
        </svg>
      </div>

      {/* Hero Text */}
      <motion.div
        className="relative text-center max-w-3xl mx-auto mb-12 z-50 pt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* radial circle */}
        <div className="absolute left-[-100px] top-[-800px] h-[1000px] w-[1000px] bg-gradient-to-r from-success-100 to-success-200 rounded-full blur-2xl opacity-50 -z-10"></div>

        <div className="space-y-6 max-w-[1000px]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold leading-tight relative"
            variants={itemVariants}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block"
            >
              Transitional Housing
            </motion.span>{" "}
            <motion.div className="relative inline-block">
              for{" "}
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline-block text-success-600"
              >
                Men and Women
              </motion.span>
              {/* Decorative accent lines */}
              {/* <motion.svg
                className="absolute -right-4 -top-4 w-12 h-12 text-success-500"
                viewBox="0 0 48 48"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <motion.path
                  d="M 0,24 L 48,24 M 24,0 L 24,48"
                  stroke="currentColor"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </motion.svg> */}
              {/* Glowing orb effect */}
              <motion.div
                className="absolute -inset-x-8 -inset-y-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: [0, 0.15, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background:
                    "radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)",
                  filter: "blur(8px)",
                  pointerEvents: "none",
                }}
              />
              {/* Floating particles */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-success-400"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 3) * 20}%`,
                    }}
                    animate={{
                      y: [-10, 10, -10],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600"
            variants={itemVariants}
          >
            Empowering individuals on their journey to recovery and reentry
            through stable housing and comprehensive support
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4 items-center justify-center"
          >
            <motion.button
              // to="/donate"
              className="inline-flex items-center gap-2 bg-warning text-white px-8 py-4 rounded-full hover:bg-warning-600 transition-colors"
              variants={pulseVariant}
              initial="initial"
              animate="animate"
              whileTap="tap"
              onClick={() => {
                navigate("/donate");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <HandCoins className="w-5 h-5" /> Donate Now
            </motion.button>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-gray-100 text-gray-900 px-8 py-4 rounded-full hover:bg-gray-200 transition-colors"
            >
              ▶ Watch Video
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        className="flex justify-center mt-18"
        variants={cardContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 place-items-start">
          {/* First Column */}
          <motion.div className="space-y-3 z-40" variants={cardVariants}>
            {/* Stat Card */}
            <div
              className={`rounded-[32px] overflow-hidden ${cards[0].className}`}
            >
              <div className="h-full flex justify-between flex-col relative">
                <StatsBackgroundPattern />
                <div className="p-6 mt-9 relative z-10">
                  <h2 className="text-6xl font-bold mb-4">{cards[0].title}</h2>
                  <p className="mb-6 text-default-200 text-base font-normal flex-grow">
                    {cards[0].description}
                  </p>
                </div>

                <Button
                  className="flex justify-between gap-2 h-[60px] bg-default-50/10 text-white border-1 border-default-50/10 rounded-3xl transition-all m-2 px-3 relative z-10"
                  size="lg"
                  onPress={() => {
                    navigate("/impact");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  endContent={
                    <div className="bg-warning rounded-full">
                      <ArrowUpRight className="w-6 h-6 m-3 text-success-800" />
                    </div>
                  }
                >
                  {cards[0].btnText}
                </Button>
              </div>
            </div>
            {/* Help Card */}
            <div
              className={`rounded-[32px] overflow-hidden ${cards[5].className}`}
            >
              <div className="p-4 flex items-center justify-center gap-2  h-full">
                <span className="text-xl">{cards[5].icon}</span>
                <span className="text-xl font-semibold">{cards[5].title}</span>
              </div>
            </div>
          </motion.div>

          {/* Second Column */}
          <motion.div
            className="space-y-3 flex flex-col items-end justify-end h-full"
            variants={cardVariants}
          >
            {/* Health Card */}
            <div
              className={`rounded-[32px] overflow-hidden relative ${cards[1].className}`}
            >
              <img
                src={cards[1].image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="p-4 h-full flex flex-col justify-end relative z-10">
                <p className="text-base text-default-300 font-semibold mb-2">
                  {cards[1].title}
                </p>
                <p className="text-white text-lg">{cards[1].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Middle Column */}
          <motion.div
            className="space-y-3 flex flex-col items-end justify-end h-full"
            variants={cardVariants}
          >
            {/* Join Card */}
            <div className="mb-6 w-full  flex items-center justify-center">
              <AnimatedScrollButton onClick={scrollToNextSection} />
            </div>
            <div
              className={`rounded-[32px] overflow-hidden ${cards[2].className}`}
            >
              <div className=" flex flex-col h-full justify-between">
                <div className="mt-8 p-5">
                  <h3 className="text-3xl text-center font-bold text-default-900">
                    {cards[2].title} <br />
                    {cards[2].description}
                  </h3>
                </div>
                {/* <button className="flex items-center gap-2 text-gray-900 group">
              {cards[2].btnText}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button> */}
                <Button
                  onPress={() => {
                    navigate("/donate");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="flex justify-between gap-2 h-[60px] bg-success-300/40 border-1 border-default-50/10 rounded-3xl m-2 px-3"
                  size="lg"
                  endContent={
                    <div className="bg-default-900 rounded-full">
                      {/* <ArrowUpRight className="w-6 h-6 m-3 text-success-800" /> */}
                      <ArrowUpRight className="w-6 h-6 m-3 text-success-50" />
                    </div>
                  }
                >
                  {cards[2].btnText}
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Fourth Column */}
          <motion.div
            className="space-y-3 flex flex-col items-end justify-end h-full"
            variants={cardVariants}
          >
            {/* Education Card */}
            <div
              className={`rounded-[32px] overflow-hidden relative ${cards[3].className}`}
            >
              <img
                src={cards[3].image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="p-4 h-full flex flex-col justify-end relative z-10">
                <h3 className="text-base text-default-300 font-semibold mb-2">
                  {cards[3].title}
                </h3>
                <p className="text-white text-lg">{cards[3].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Fifth Column */}
          <motion.div className="space-y-3" variants={cardVariants}>
            {/* hands Card */}
            <div
              className={`rounded-[32px] overflow-hidden ${cards[0].className}`}
            >
              <div className="relative h-full px-2 flex flex-col justify-end items-start bg-warning-500 overflow-hidden">
                <BackgroundPattern />
                <img
                  src={handgreeting}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <Button
                  className="flex justify-between gap-2 h-[60px] w-full bg-default-900/50 text-white border-1 border-default-50/10 rounded-3xl transition-all my-2 px-3"
                  size="lg"
                  onPress={() => {
                    navigate("/gallery");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  endContent={
                    <div className="bg-warning-900 rounded-full">
                      <ArrowUpRight className="w-6 h-6 m-3 text-warning" />
                    </div>
                  }
                >
                  See Hope in Action
                </Button>
              </div>
            </div>
            {/* Help Card */}
            <div
              className={`rounded-[32px] overflow-hidden ${cards[5].className}`}
            >
              <div className="p-4 flex items-center justify-center bg-warning-900 gap-3 h-full">
                <span className="text-xl">
                  {/* {cards[5].icon} */}
                  <HeartEmoji className="w-14" />
                </span>
                <span className="text-xl font-semibold text-warning-500">
                  Every Helping Hand Makes a Difference
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* <div className="mt-6 w-full  flex items-center justify-center">
    <AnimatedScrollButton />
  </div> */}
    </div>
  );
}

export default HeroSection;
