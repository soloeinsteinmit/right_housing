import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Users2, Home, Handshake } from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

// Memoized components
const ImpactCard = React.memo(({ icon: Icon, title, description, value, index }) => (
  <motion.div
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative bg-white rounded-2xl p-8 shadow-lg group hover:shadow-xl transition-shadow"
  >
    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-success-500 to-success-600 rounded-xl flex items-center justify-center text-white font-bold transform rotate-12 group-hover:rotate-0 transition-transform">
      {index + 1}
    </div>
    <div className="w-16 h-16 bg-success-100 rounded-2xl flex items-center justify-center mb-6">
      <Icon className="w-8 h-8 text-success-600" />
    </div>
    <h3 className="text-4xl font-bold text-gray-900 mb-2">{value}</h3>
    <p className="text-xl font-semibold text-gray-800 mb-2">{title}</p>
    <p className="text-gray-600">{description}</p>
  </motion.div>
));

const SectionHeader = React.memo(() => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-20"
  >
    <div className="inline-block">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
      <div className="h-2 w-full bg-gradient-to-r from-success-500 to-warning-500 rounded-full" />
    </div>
  </motion.div>
));

const ImpactSection = () => {
  // Memoize impact cards data
  const impactCards = useMemo(
    () => [
      {
        icon: Users2,
        value: "500+",
        title: "Lives Transformed",
        description:
          "Individuals successfully transitioned from recovery to independent living through our comprehensive support programs.",
      },
      {
        icon: Home,
        value: "300+",
        title: "Housing Solutions",
        description:
          "Safe and supportive housing units provided to individuals and families in need of a fresh start.",
      },
      {
        icon: Handshake,
        value: "50+",
        title: "Community Partners",
        description:
          "Strong partnerships with local organizations, employers, and service providers to ensure comprehensive support.",
      },
    ],
    []
  );

  // Memoize decorative elements
  const decorativeElements = useMemo(
    () => [
      { top: "10%", left: "5%", size: "lg", color: "success" },
      { top: "80%", left: "15%", size: "sm", color: "warning" },
      { top: "30%", right: "10%", size: "md", color: "success" },
      { top: "70%", right: "5%", size: "lg", color: "warning" },
    ],
    []
  );

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-success-50/20 to-warning-50/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-[0.03]" />
      </div>

      {/* Decorative Elements */}
      {decorativeElements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${
            element.size === "lg" ? "w-64 h-64" : element.size === "md" ? "w-48 h-48" : "w-32 h-32"
          } ${
            element.color === "success" ? "bg-success-500" : "bg-warning-500"
          } rounded-full opacity-[0.03] blur-3xl`}
          style={{
            top: element.top,
            left: element.left,
            right: element.right,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative">
        <SectionHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impactCards.map((card, index) => (
            <ImpactCard key={index} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(ImpactSection);
