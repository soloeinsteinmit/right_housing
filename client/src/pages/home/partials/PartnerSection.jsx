import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Building2,
  Users2,
  HandHeart,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import PartnerBackgroundPattern from "../../../assets/PartnerBackgroundPattern";

const partners = [
  {
    name: "City Housing Authority",
    logo: "https://placehold.co/200x80/e2e8f0/475569?text=CHA",
    type: "Government",
  },
  {
    name: "Recovery Foundation",
    logo: "https://placehold.co/200x80/e2e8f0/475569?text=RF",
    type: "Non-Profit",
  },
  {
    name: "Community Health Network",
    logo: "https://placehold.co/200x80/e2e8f0/475569?text=CHN",
    type: "Healthcare",
  },
  {
    name: "Urban Development Corp",
    logo: "https://placehold.co/200x80/e2e8f0/475569?text=UDC",
    type: "Corporate",
  },
  {
    name: "Mental Wellness Institute",
    logo: "https://placehold.co/200x80/e2e8f0/475569?text=MWI",
    type: "Healthcare",
  },
  {
    name: "Social Services Alliance",
    logo: "https://placehold.co/200x80/e2e8f0/475569?text=SSA",
    type: "Non-Profit",
  },
  // Add more partners to ensure smooth scrolling
  {
    name: "Housing Authority",
    logo: "https://placehold.co/200x80/e2e8f0/475569?text=HA",
    type: "Government",
  },
  {
    name: "Wellness Center",
    logo: "https://placehold.co/200x80/e2e8f0/475569?text=WC",
    type: "Healthcare",
  },
];

// Double the partners array for seamless loop
const doubledPartners = [...partners, ...partners];

const PartnerSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const stats = [
    {
      icon: <Building2 className="w-6 h-6" />,
      value: "50+",
      label: "Partner Organizations",
      description: "Working together for community impact",
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      value: "10,000+",
      label: "Lives Impacted",
      description: "Through collaborative efforts",
    },
    {
      icon: <HandHeart className="w-6 h-6" />,
      value: "$25M+",
      label: "Resources Mobilized",
      description: "For housing and recovery programs",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: "85%",
      label: "Success Rate",
      description: "In joint program initiatives",
    },
  ];

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <div ref={ref} className="relative overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <PartnerBackgroundPattern className="w-full h-full text-success-600" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative px-4 pb-24"
      >
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-10 max-w-[1400px] mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center mb-6 bg-success-50 text-success-600 px-4 py-2 rounded-full"
          >
            <HandHeart className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold">
              Our Partners in Impact
            </span>
          </motion.div>

          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-success-600 to-success-800 bg-clip-text text-transparent">
            Together We Create Change
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Collaborating with leading organizations to transform lives through
            innovative housing solutions and comprehensive support services.
          </p>
        </motion.div>

        {/* Stats Grid */}
        {/* <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-success-50 to-success-100/50 rounded-2xl transform transition-transform duration-500 group-hover:scale-[1.02]" />
              <div className="relative p-6">
                <div className="bg-success-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-success-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-success-900 mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold text-success-700 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-success-600">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Marquee Partners Section */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Marquee Container */}
          <div className="overflow-hidden relative">
            <motion.div
              animate={{
                x: [0, -50 * partners.length], // Adjust based on partner card width
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex whitespace-nowrap"
            >
              {doubledPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 mx-5 w-fit max-w-[350px]"
                >
                  <div className="p-6">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-20 w-full object-contain mb-4"
                    />
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">
                        {partner.name}
                      </div>
                      <div className="text-sm text-success-600">
                        {partner.type}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-10 max-w-[1400px] mx-auto space-x-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-warning-500 hover:bg-warning-600 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-300"
          >
            <span>See all Partners</span>
            <ArrowUpRight className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-success-600 hover:bg-success-700 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-300"
          >
            <span>Become a Partner</span>
            <ArrowUpRight className="w-5 h-5" />
          </motion.button>
          <p className="mt-4 text-gray-600">
            Join us in making a difference in our community
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PartnerSection;
