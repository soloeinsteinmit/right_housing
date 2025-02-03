import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Heart,
  Briefcase,
  Users,
  Clock,
  Bed,
  UserCheck,
  Calendar,
  Presentation,
  Brain,
  Utensils,
  Stethoscope,
  GraduationCap,
  Handshake,
  UserPlus,
  ClipboardCheck,
  Activity,
} from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const sparkleVariants = {
  animate: {
    scale: [0.8, 1, 0.8],
    rotate: [0, 15, 0],
  },
};

const programs = [
  {
    id: "residential",
    title: "Residential Services",
    icon: <Home className="w-6 h-6" />,
    description:
      "Safe, sober housing solutions with 24/7 support and community engagement.",
    services: [
      {
        name: "Safe, Sober Housing",
        icon: <Bed />,
        desc: "Includes private and shared rooms, living spaces, and amenities.",
      },
      {
        name: "24/7 Support",
        icon: <Clock />,
        desc: "Around-the-clock care and guidance from staff to ensure a safe, supportive atmosphere.",
      },
      {
        name: "Substance-Free Environment",
        icon: <UserCheck />,
        desc: "A drug- and alcohol-free home to support recovery.",
      },
      {
        name: "Weekly House Meetings",
        icon: <Calendar />,
        desc: "Regular meetings for residents to check in, share progress, and support each other.",
      },
      {
        name: "Sober Social Events",
        icon: <Users />,
        desc: "Regular events like movie nights, game nights, or group outings to foster a sense of community and allow for socializing in a sober environment.",
      },
      {
        name: "Workshops and Guest Speakers",
        icon: <Presentation />,
        desc: "Hosting guest speakers from various fields, including recovery experts, local employers, or inspirational individuals in recovery.",
      },
    ],
  },
  {
    id: "recovery",
    title: "Recovery and Wellness Programs",
    icon: <Heart className="w-6 h-6" />,
    description:
      "Holistic wellness practices promoting emotional, mental, and physical health.",
    services: [
      {
        name: "Mind-Body Wellness",
        icon: <Brain />,
        desc: "Offerings like yoga, meditation, and other holistic wellness practices designed to promote emotional, mental, and physical health.",
      },
      {
        name: "Nutritional Support",
        icon: <Utensils />,
        desc: "Healthy meal options and nutritional counseling to support residents' well-being.",
      },
      {
        name: "Therapeutic Support",
        icon: <Stethoscope />,
        desc: "Access to on-site or partnered mental health services, such as therapy or counseling sessions.",
      },
      {
        name: "Mindfulness Classes",
        icon: <Brain />,
        desc: "Programs designed to help residents manage stress, anxiety, and triggers.",
      },
      {
        name: "Physical Fitness",
        icon: <Activity />,
        desc: "Access to fitness routines, group exercise classes, or partnerships with local gyms to encourage physical health.",
      },
    ],
  },
  {
    id: "job-ready",
    title: "Job-Ready Programs",
    icon: <Briefcase className="w-6 h-6" />,
    description: "Comprehensive career development and job placement support.",
    services: [
      {
        name: "Apprenticeships",
        icon: <GraduationCap />,
        desc: "Connections with local businesses offering hands-on experience for residents.",
      },
      {
        name: "Job Skill Workshops",
        icon: <Presentation />,
        desc: "Training in key job skills, such as resume building, interview preparation, and professional communication.",
      },
      {
        name: "Employer Partnerships",
        icon: <Handshake />,
        desc: "Direct connections to local employers willing to hire individuals in recovery and reentry.",
      },
      {
        name: "Job Placement Assistance",
        icon: <Briefcase />,
        desc: "Personalized job search support, including resume reviews and interview coaching.",
      },
      {
        name: "Career Counseling",
        icon: <ClipboardCheck />,
        desc: "One-on-one coaching sessions to help residents explore career paths, set goals, and plan for long-term professional success.",
      },
    ],
  },
  {
    id: "peer-support",
    title: "Peer Support Programs",
    icon: <Users className="w-6 h-6" />,
    description: "Building community through mentorship and mutual support.",
    services: [
      {
        name: "Peer Mentorship",
        icon: <UserPlus />,
        desc: "Pairing residents with mentors who have experienced similar recovery or reentry journeys and can offer support, guidance, and encouragement.",
      },
      {
        name: "Group Support Circles",
        icon: <Users />,
        desc: "Regular peer-led support group meetings where residents can share their experiences and offer mutual support.",
      },
      {
        name: "Community Volunteer Days",
        icon: <Heart />,
        desc: "Opportunities for residents to give back to the community, fostering a sense of purpose and helping others.",
      },
      {
        name: "Alumni Network",
        icon: <Users />,
        desc: "A community for past residents to stay connected, receive ongoing support, and share successes and challenges.",
      },
    ],
  },
];

// Memoized components
const SparkleEffect = React.memo(() => (
  <motion.div
    className="absolute -right-2 -top-2"
    initial={{ scale: 0, rotate: 0 }}
    animate={sparkleVariants.animate}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
        fill="currentColor"
        className="text-success-400"
      />
    </svg>
  </motion.div>
));

const AnimatedSVGBackground = React.memo(() => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none h-full">
    <svg
      className="absolute w-full h-full opacity-20"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {/* Flowing Lines */}
      {[...Array(6)].map((_, i) => (
        <motion.path
          key={`flow-${i}`}
          d={`M${-20 + i * 30},0 Q${50 + Math.sin(i) * 20},${50} ${
            100 + i * 30
          },100`}
          stroke="currentColor"
          className="text-success-500"
          strokeWidth="0.3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: [0, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Floating Circles */}
      {[...Array(8)].map((_, i) => (
        <motion.circle
          key={`circle-${i}`}
          cx={20 + i * 15}
          cy={30 + (i % 3) * 20}
          r="1"
          fill="currentColor"
          className="text-success-400"
          initial={{ scale: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.5, 0],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Connected Dots */}
      <g>
        {[...Array(6)].map((_, i) => (
          <motion.g key={`dot-group-${i}`}>
            <motion.circle
              cx={15 + i * 20}
              cy={99}
              r="0.5"
              fill="currentColor"
              className="text-success-500"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
            {i < 5 && (
              <motion.line
                x1={15 + i * 20}
                y1={99}
                x2={35 + i * 20}
                y2={99}
                stroke="currentColor"
                className="text-success-400"
                strokeWidth="0.1"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            )}
          </motion.g>
        ))}
      </g>
    </svg>
  </div>
));

const ProgramButton = React.memo(({ program, isSelected, onClick }) => (
  <motion.button
    onClick={onClick}
    className={`w-full group relative text-left p-6 rounded-xl transition-all duration-300 ${
      isSelected
        ? "bg-white shadow-lg shadow-success-100/50 border-success-100 border"
        : "hover:bg-white/50"
    }`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="flex items-center gap-4">
      <div
        className={`p-3 rounded-lg ${
          isSelected
            ? "bg-success-50 text-success-600"
            : "bg-gray-100 text-gray-600 group-hover:bg-success-50 group-hover:text-success-600"
        }`}
      >
        {program.icon}
      </div>
      <div>
        <h3
          className={`font-semibold text-lg mb-1 ${
            isSelected ? "text-success-900" : "text-gray-900"
          }`}
        >
          {program.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 pr-2">
          {program.description}
        </p>
      </div>
    </div>
  </motion.button>
));

const ServiceCard = React.memo(({ service }) => (
  <motion.div
    variants={containerVariants}
    className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="flex items-start gap-4">
      <div className="p-2 rounded-lg bg-success-50 text-success-600">
        {service.icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-2 text-lg">
          {service.name}
        </h3>
        <p className="text-gray-600 text-base">{service.desc}</p>
      </div>
    </div>
  </motion.div>
));

const ProgramsServices = () => {
  const [selectedProgram, setSelectedProgram] = useState(programs[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleProgramSelect = useCallback((program) => {
    setIsAnimating(true);
    setSelectedProgram(program);
    setTimeout(() => setIsAnimating(false), 500);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <AnimatedSVGBackground />

      <div className="relative grid grid-cols-12 min-h-screen gap-0 items-center">
        {/* Left Panel - Program Titles */}
        <div className="col-span-4 h-full bg-gray-50/50 border-r border-gray-200 px-16 py-16 overflow-y-auto flex justify-center items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <div className="mb-12">
              <div className="relative inline-block max-w-[385px]">
                <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-success-600 to-success-400 bg-clip-text text-transparent">
                  Our Programs & Services
                </h2>
                <SparkleEffect />
              </div>
              <p className="text-gray-600">
                We offer housing solutions and support services to help people
                get back on their feet. We cater to individuals recovering from
                addiction or who have recently been released from prison.
              </p>
            </div>

            <div className="space-y-4">
              {programs.map((program) => (
                <ProgramButton
                  key={program.id}
                  program={program}
                  isSelected={selectedProgram?.id === program.id}
                  onClick={() => handleProgramSelect(program)}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Panel - Program Details */}
        <div className="col-span-8 p-12 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProgram?.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-5xl mx-auto"
            >
              <div className="mb-12">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-4 mb-6"
                >
                  <div className="p-3 rounded-lg bg-success-50 text-success-600">
                    {selectedProgram?.icon}
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">
                    {selectedProgram?.title}
                  </h2>
                </motion.div>
                <p className="text-xl text-gray-600">
                  {selectedProgram?.description}
                </p>
              </div>

              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid md:grid-cols-2 gap-6"
              >
                {selectedProgram?.services.map((service) => (
                  <ServiceCard key={service.name} service={service} />
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProgramsServices);
