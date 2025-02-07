import { memo } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Home,
  Book,
  Users,
  Briefcase,
  Clock,
  Wrench,
  Star,
} from "lucide-react";

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const opportunities = [
  {
    icon: <Home className="w-6 h-6" />,
    title: "Housing Support",
    description:
      "Help with housing placement, maintenance, and resident support services",
    commitment: "4-6 hours/week",
  },
  {
    icon: <Book className="w-6 h-6" />,
    title: "Education & Training",
    description:
      "Conduct workshops on financial literacy, job skills, and life management",
    commitment: "2-4 hours/week",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community Outreach",
    description:
      "Engage with local communities and help identify those in need of housing support",
    commitment: "3-5 hours/week",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Administrative Support",
    description:
      "Assist with office tasks, data entry, and program coordination",
    commitment: "2-4 hours/week",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Maintenance & Repairs",
    description:
      "Help maintain and improve housing facilities for our residents",
    commitment: "4-8 hours/week",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Resident Support",
    description:
      "Provide companionship and assistance to housing program residents",
    commitment: "3-6 hours/week",
  },
];

const RatingStars = memo(() => (
  <div className="absolute top-4 right-4 flex">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className="w-4 h-4 text-warning-400"
        fill={i < 4 ? "currentColor" : "none"}
      />
    ))}
  </div>
));

RatingStars.displayName = "RatingStars";

const OpportunityCard = memo(({ opportunity, index }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUpVariant}
    transition={{ delay: 0.1 * index }}
    className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow relative group"
  >
    {/* Background Pattern */}
    <div className="absolute inset-0 bg-gradient-to-br from-success-50/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

    {/* Content */}
    <div className="relative">
      <div className="w-12 h-12 rounded-xl bg-success-100 flex items-center justify-center text-success-600 mb-4 group-hover:scale-110 transition-transform">
        {opportunity.icon}
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {opportunity.title}
      </h3>
      <p className="text-gray-600 mb-4">{opportunity.description}</p>

      <div className="flex items-center text-sm text-gray-500">
        <Clock className="w-4 h-4 mr-2" />
        <span>{opportunity.commitment}</span>
      </div>

      <RatingStars />
    </div>
  </motion.div>
));

OpportunityCard.displayName = "OpportunityCard";

const OpportunitiesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariant}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl max-[480px]:text-3xl font-bold text-gray-900 mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-xl max-[480px]:text-lg text-gray-600 max-w-3xl mx-auto">
              Discover meaningful ways to contribute your time and skills to our
              mission
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => (
              <OpportunityCard
                key={opportunity.title}
                opportunity={opportunity}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

OpportunitiesSection.displayName = "OpportunitiesSection";

export default memo(OpportunitiesSection);
