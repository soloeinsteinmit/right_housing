import { memo } from "react";
import { motion } from "framer-motion";
import { Heart, Users, Calendar } from "lucide-react";
import usePulseAnimation, {
  PULSE_COLORS,
} from "../../../hooks/usePulseAnimation";

// Animation variants
const backgroundVariants = {
  right: {
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.2, 0.3],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
  },
  left: {
    scale: [1.1, 1, 1.1],
    opacity: [0.2, 0.3, 0.2],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
  },
};

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    number: "500+",
    label: "Active Volunteers",
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    number: "2,000+",
    label: "Hours Contributed",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    number: "1,000+",
    label: "Lives Impacted",
  },
];

const StatCard = memo(({ stat, index }) => (
  <motion.div
    key={stat.label}
    initial="hidden"
    animate="visible"
    variants={fadeInUpVariant}
    transition={{ delay: 0.2 * index }}
    className="bg-white rounded-xl p-6 shadow-lg"
  >
    <div className="flex items-center justify-center mb-4">
      <div className="w-16 h-16 rounded-full bg-success-50 flex items-center justify-center text-success-600">
        {stat.icon}
      </div>
    </div>
    <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
    <p className="text-gray-600">{stat.label}</p>
  </motion.div>
));

StatCard.displayName = "StatCard";

const VolunteerHero = () => {
  const pulseVariant = usePulseAnimation({
    color: PULSE_COLORS.SUCCESS,
  });

  const scrollToForm = () => {
    document
      .getElementById("volunteer-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-success-50 to-white">
      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute right-0 top-20 w-72 h-72 bg-success-100 rounded-full"
          variants={backgroundVariants}
          animate="right"
        />
        <motion.div
          className="absolute -left-20 bottom-0 w-96 h-96 bg-success-50 rounded-full"
          variants={backgroundVariants}
          animate="left"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariant}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl max-[480px]:text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Make a{" "}
              <span className="text-success-600 relative inline-block">
                Difference
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-success-200"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </span>
            </h1>
            <p className="text-xl max-[480px]:text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Join our community of dedicated volunteers and help us create
              lasting change. Your time and skills can transform lives and
              strengthen our mission.
            </p>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {stats.map((stat, index) => (
                <StatCard key={stat.label} stat={stat} index={index} />
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              variants={pulseVariant}
              initial="initial"
              animate="animate"
              whileTap="tap"
              onClick={scrollToForm}
              className="px-8 py-4 bg-success-600 text-white rounded-xl font-semibold inline-flex items-center gap-2 shadow-lg shadow-success-600/20"
            >
              Become a Volunteer
              <Heart className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

VolunteerHero.displayName = "VolunteerHero";

export default memo(VolunteerHero);
