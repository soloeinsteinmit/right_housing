import React from "react";
import { motion } from "framer-motion";

// Animation variants
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const scaleInVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.3, duration: 0.5 },
  },
};

const impactStats = [
  { value: "500+", label: "Lives Changed" },
  { value: "150+", label: "Families Housed" },
  { value: "20+", label: "Communities Served" },
];

const BackgroundPattern = React.memo(() => (
  <div className="absolute inset-0 bg-success-600/5">
    <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
  </div>
));

const HeroContent = React.memo(() => (
  <motion.div variants={fadeInUpVariant} initial="hidden" animate="visible">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
      Stories of{" "}
      <span className="text-success-600">Impact & Transformation</span>
    </h1>
    <p className="text-xl text-gray-600 mb-8">
      Discover how Right Housing is changing lives and building stronger
      communities through sustainable housing solutions and unwavering support.
    </p>
  </motion.div>
));

const StatBadge = React.memo(({ value, label }) => (
  <div className="bg-white rounded-full px-6 py-2 shadow-sm">
    <span className="text-success-600">{value}</span> {label}
  </div>
));

const ImpactStats = React.memo(() => (
  <motion.div
    variants={scaleInVariant}
    initial="hidden"
    animate="visible"
    className="flex flex-wrap justify-center gap-4 text-sm font-medium"
  >
    {impactStats.map((stat, index) => (
      <StatBadge key={index} value={stat.value} label={stat.label} />
    ))}
  </motion.div>
));

const ImpactHero = () => {
  return (
    <section className="relative py-32 overflow-hidden mt-20">
      <BackgroundPattern />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <HeroContent />
          <ImpactStats />
        </div>
      </div>
    </section>
  );
};

export default React.memo(ImpactHero);
