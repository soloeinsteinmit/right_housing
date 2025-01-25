import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  FileText,
  UserCheck,
  Brain,
  Activity,
  Home,
  ArrowRight,
} from "lucide-react";
import { caseManagementImages } from "./caseManagementImages";

const services = [
  {
    id: "intake",
    title: "Intake and Assessment",
    subtitle: "Your First Step",
    icon: <FileText className="w-6 h-6" />,
    description:
      "Case managers conduct an initial intake and assessment to understand the resident's history, current needs, goals, and any challenges they may be facing.",
    details: [
      {
        title: "Comprehensive Needs Assessment",
        content:
          "Case managers conduct an initial intake and assessment to understand the resident's history, current needs, goals, and any challenges they may be facing (e.g., substance use, mental health, legal issues, etc.).",
      },
      {
        title: "Personalized Recovery Plan",
        content:
          "Based on the assessment, a tailored recovery plan is created to set clear, achievable goals and identify the necessary steps for residents to follow during their stay.",
      },
    ],
    color: "from-emerald-500 to-teal-500",
    accent: "emerald",
  },
  {
    id: "recovery",
    title: "Recovery Support",
    subtitle: "Guided Journey",
    icon: <UserCheck className="w-6 h-6" />,
    description:
      "Ongoing support and guidance throughout the recovery journey with personalized strategies and regular monitoring.",
    details: [
      {
        title: "Individualized Recovery Coaching",
        content:
          "Case managers provide ongoing support to residents, offering guidance, encouragement, and motivation throughout their recovery journey.",
      },
      {
        title: "Relapse Prevention Planning",
        content:
          "Helping residents develop personalized relapse prevention strategies, identify triggers, and create coping mechanisms.",
      },
      {
        title: "Monitoring Progress",
        content:
          "Regular check-ins to assess progress in their recovery, discuss challenges, and adjust recovery plans as necessary.",
      },
    ],
    color: "from-blue-500 to-indigo-500",
    accent: "blue",
  },
  {
    id: "mentalHealth",
    title: "Mental Health Services",
    subtitle: "Healing Mind",
    icon: <Brain className="w-6 h-6" />,
    description:
      "Comprehensive mental health support including therapy referrals and coordinated care for dual diagnosis.",
    details: [
      {
        title: "Counseling and Therapy Referrals",
        content:
          "Connecting residents with licensed therapists, counselors, or support groups (e.g., cognitive behavioral therapy, trauma-informed therapy, group therapy, or individual counseling).",
      },
      {
        title: "Dual Diagnosis Support",
        content:
          "For residents with co-occurring mental health issues (e.g., anxiety, depression), case managers coordinate care between addiction treatment and mental health services.",
      },
      {
        title: "Support for Medication Management",
        content:
          "Ensuring residents are receiving appropriate medication for any mental health or substance use conditions.",
      },
    ],
    color: "from-purple-500 to-pink-500",
    accent: "purple",
  },
  {
    id: "health",
    title: "Health and Wellness",
    subtitle: "Total Wellbeing",
    icon: <Activity className="w-6 h-6" />,
    description:
      "Our case managers help residents access healthcare services, nutritional support, and fitness plans.",
    details: [
      {
        title: "Healthcare Access",
        content:
          "Facilitating access to medical services and ensuring residents receive necessary healthcare.",
      },
      {
        title: "Nutritional Support",
        content:
          "Providing guidance on healthy eating habits and connecting with nutritional resources.",
      },
      {
        title: "Fitness Planning",
        content:
          "Developing personalized fitness plans to support overall well-being and recovery.",
      },
    ],
    color: "from-orange-500 to-amber-500",
    accent: "orange",
  },
  {
    id: "housing",
    title: "Housing Support",
    subtitle: "Your New Home",
    icon: <Home className="w-6 h-6" />,
    description:
      "Our case managers help residents transition from sober living to independent housing.",
    details: [
      {
        title: "Housing Transition",
        content:
          "Supporting the transition process from sober living environments to independent housing arrangements.",
      },
      {
        title: "Life Skills Development",
        content:
          "Teaching essential independent living skills necessary for successful community integration.",
      },
      {
        title: "Resource Connection",
        content:
          "Connecting residents with housing resources and support services in their target communities.",
      },
    ],
    color: "from-rose-500 to-red-500",
    accent: "rose",
  },
];

const getAccentColors = (service, isActive) => {
  const colors = {
    intake: {
      border: "#10B981",
      bg: "#ECFDF5",
      text: "#047857",
      iconBg: "#D1FAE5",
    },
    recovery: {
      border: "#6366F1",
      bg: "#EEF2FF",
      text: "#4F46E5",
      iconBg: "#E0E7FF",
    },
    mentalHealth: {
      border: "#8B5CF6",
      bg: "#F5F3FF",
      text: "#7C3AED",
      iconBg: "#EDE9FE",
    },
    health: {
      border: "#F59E0B",
      bg: "#FFFBEB",
      text: "#D97706",
      iconBg: "#FEF3C7",
    },
    housing: {
      border: "#EF4444",
      bg: "#FEF2F2",
      text: "#DC2626",
      iconBg: "#FEE2E2",
    },
  };

  return colors[service.id] || colors.intake;
};

const ServiceButton = ({ service, isActive, onClick }) => {
  const colors = getAccentColors(service, isActive);

  return (
    <motion.button
      onClick={onClick}
      className="w-full text-left p-4 transition-all duration-300 border-l-4 relative group "
      style={{
        borderColor: isActive ? colors.border : "transparent",
        background: isActive
          ? `linear-gradient(to right, ${colors.bg}, transparent)`
          : "transparent",
      }}
      whileHover={{ x: 6, duration: 0.3 }}
      whileTap={{ x: 2 }}
    >
      <div className="flex items-center gap-4">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
          style={{
            color: isActive ? colors.text : "#9CA3AF",
            background: isActive ? colors.iconBg : "#F3F4F6",
          }}
        >
          {service.icon}
        </div>
        <div>
          <h3
            className="font-medium"
            style={{
              color: isActive ? colors.text : "#374151",
            }}
          >
            {service.title}
          </h3>
          <p
            className="text-sm"
            style={{
              color: isActive ? colors.text : "#6B7280",
            }}
          >
            {service.subtitle}
          </p>
        </div>
      </div>
    </motion.button>
  );
};

const ServiceContent = ({ service }) => {
  const colors = getAccentColors(service);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="h-full"
    >
      <div className="relative h-full">
        <div className="grid grid-cols-12 gap-8">
          {/* Content */}
          <div className="col-span-7">
            {/* Header */}
            <div className="mb-12">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-full mb-6"
                style={{
                  background: colors.bg,
                  color: colors.text,
                }}
              >
                {service.icon}
                <span className="font-medium">{service.subtitle}</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {service.title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Details Grid */}
            <div className="grid gap-8">
              {service.details.map((detail, idx) => (
                <motion.div
                  key={detail.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="relative z-10">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {detail.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {detail.content}
                    </p>
                  </div>
                  <div
                    className="absolute top-0 left-0 w-1 h-full rounded-full transform -translate-x-6"
                    style={{
                      background: `linear-gradient(to bottom, ${colors.border}, ${colors.text})`,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="col-span-5 relative">
            <div className="sticky top-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
              >
                <div
                  className="absolute inset-0 rounded-2xl transform rotate-3 scale-95 opacity-20"
                  style={{
                    background: `linear-gradient(to bottom right, ${colors.border}, ${colors.text})`,
                  }}
                />
                <div
                  className="absolute inset-0 rounded-2xl transform -rotate-3 scale-105 opacity-10"
                  style={{
                    background: `linear-gradient(to top right, ${colors.border}, ${colors.text})`,
                  }}
                />
                <img
                  src={caseManagementImages[service.id].path}
                  alt={caseManagementImages[service.id].alt}
                  className="relative rounded-2xl w-full h-auto object-cover shadow-xl transform hover:scale-[1.02] transition-transform duration-300"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProgramsCaseManagement = () => {
  const [activeService, setActiveService] = useState(services[0].id);

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-60" />
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: `${20 + i * 30}%`,
                left: `${10 + i * 20}%`,
                width: `${300 + i * 100}px`,
                height: `${300 + i * 100}px`,
                background: `linear-gradient(120deg, var(--success-100), var(--success-50))`,
                borderRadius: "38% 62% 63% 37% / 41% 44% 56% 59%",
                opacity: 0.1,
                transform: `rotate(${i * 45}deg)`,
              }}
              animate={{
                borderRadius: [
                  "38% 62% 63% 37% / 41% 44% 56% 59%",
                  "45% 55% 57% 43% / 38% 47% 53% 62%",
                  "38% 62% 63% 37% / 41% 44% 56% 59%",
                ],
                rotate: [i * 45, (i + 1) * 45, i * 45],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      {/* Section Header */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-success-50 text-success-700 px-4 py-2 rounded-full mb-6"
          >
            <ClipboardList className="w-5 h-5" />
            <span className="font-medium">Case Management</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Your Journey, Our Support
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Our case managers work closely with residents to provide
            individualized support and connect them to various resources,
            addressing their physical, emotional, social, and financial needs.
          </motion.p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-12 gap-16 max-w-8xl mx-auto">
          {/* Left Side - Content */}
          <div className="lg:col-span-8 lg:order-1 order-2">
            <AnimatePresence mode="wait">
              {services.map(
                (service) =>
                  activeService === service.id && (
                    <ServiceContent key={service.id} service={service} />
                  )
              )}
            </AnimatePresence>
          </div>

          {/* Right Side - Navigation */}
          <div className="lg:col-span-4 lg:order-2 order-1 lg:border-l border-gray-200">
            <div className="lg:pl-8 space-y-1">
              {services.map((service) => (
                <ServiceButton
                  key={service.id}
                  service={service}
                  isActive={activeService === service.id}
                  onClick={() => setActiveService(service.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsCaseManagement;
