import React, { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Users,
  Briefcase,
  Heart,
  Utensils,
  GraduationCap,
  HandshakeIcon,
  UsersRound,
  Calendar,
  MessageCircle,
} from "lucide-react";
import { GrYoga } from "react-icons/gr";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Memoized components
const ProgramButton = React.memo(
  ({ program, isActive, onClick, programKey }) => (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all
      ${
        isActive
          ? `bg-${program.color}-600 text-white`
          : `bg-white text-gray-600 hover:bg-${program.color}-50`
      }`}
    >
      {program.icon}
      {program.title}
    </motion.button>
  )
);

const ProgramSection = React.memo(({ section, index, activeTab, programs }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative bg-white rounded-2xl overflow-hidden"
  >
    {/* Background Pattern */}
    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 opacity-50" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.8),transparent)] opacity-40" />

    {/* Decorative Elements */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-success-100/20 to-success-50/10 blur-2xl transform translate-x-8 -translate-y-8 group-hover:translate-x-4 transition-transform duration-500" />
    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-warning-100/20 to-warning-50/10 blur-2xl transform -translate-x-8 translate-y-8 group-hover:-translate-x-4 transition-transform duration-500" />

    {/* Content Container */}
    <div className="relative p-8">
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div
          className={`w-12 h-12 rounded-xl bg-${programs[activeTab].color}-100/50
          backdrop-blur-sm flex items-center justify-center text-${programs[activeTab].color}-600
          transform group-hover:scale-110 transition-transform duration-300`}
        >
          {section.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {section.title}
          </h3>
          <div className="h-px w-16 bg-gradient-to-r from-success-500 to-warning-500" />
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-6 line-clamp-6">{section.description}</p>

      {/* Details */}
      <div className="space-y-4">
        {/* Frequency */}
        <div
          className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/80 backdrop-blur-sm
          border border-gray-100 transform hover:-translate-y-1 transition-transform duration-300"
        >
          <div className="w-10 h-10 rounded-lg bg-success-100/50 flex items-center justify-center text-success-600">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-sm font-medium text-gray-900">
              Frequency
            </span>
            <span className="text-sm text-gray-600">{section.frequency}</span>
          </div>
        </div>

        {/* Outcome/Benefit */}
        <div
          className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/80 backdrop-blur-sm
          border border-gray-100 transform hover:-translate-y-1 transition-transform duration-300"
        >
          {section.partners ? (
            <div className="min-w-10 h-10 rounded-lg bg-blue-100/50 flex items-center justify-center text-blue-600">
              <Users className="w-5 h-5" />
            </div>
          ) : (
            <div className="min-w-10 h-10 rounded-lg bg-warning-100/50 flex items-center justify-center text-warning-600">
              <Heart className="w-5 h-5" />
            </div>
          )}

          <div>
            <span className="block text-sm font-medium text-gray-900">
              {section.outcome
                ? "Outcome"
                : section.benefits
                ? "Benefits"
                : section.partners
                ? "Partners"
                : "Feature"}
            </span>
            <span className="text-sm text-gray-600">
              {section.outcome ||
                section.benefits ||
                section.partners ||
                section.feature}
            </span>
          </div>
        </div>
      </div>
    </div>
    {/* Bottom Gradient Border */}
    <div
      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-success-500 via-warning-500 to-success-500
      transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
    />
  </motion.div>
));

const HolisticApproach = () => {
  const [activeTab, setActiveTab] = useState("mind-body");

  // Memoize programs data
  const programs = useMemo(
    () => ({
      "mind-body": {
        title: "Mind-Body Wellness Programs",
        icon: <Brain className="w-6 h-6" />,
        color: "success",
        sections: [
          {
            title: "Mindfulness and Meditation Groups",
            icon: <GrYoga className="w-6 h-6" />,
            description:
              "Guided mindfulness meditation or guided journaling sessions to help residents stay present and manage cravings, anxiety, or negative emotions. Include group sharing, where residents can discuss their thoughts or struggles in a safe environment.",
            frequency: "Daily or several times a week",
            benefits: "Promotes emotional balance and resilience",
          },
          {
            title: "Holistic Healing Workshops",
            icon: <Heart className="w-6 h-6" />,
            description:
              "A range of workshops that explore various alternative healing methods like yoga, meditation, Tai Chi, and breathwork. These practices can help residents manage stress, enhance emotional regulation, and stay grounded during their recovery journey.",
            frequency: "Weekly or bi-weekly sessions",
            partners:
              "Local wellness centers, certified yoga instructors, mental health professionals",
          },
          {
            title: "Nutritional Support and Cooking Classes",
            icon: <Utensils className="w-6 h-6" />,
            description:
              "Provide residents with the knowledge and skills needed to make healthier food choices, emphasizing how proper nutrition supports recovery. Host cooking classes and nutrition seminars led by dietitians, teaching residents how to prepare simple, healthy meals.",
            frequency: "Monthly workshops or bi-weekly cooking classes",
            feature:
              "Residents could work in the community kitchen to prepare meals for the home, reinforcing teamwork and personal responsibility",
          },
        ],
      },
      "job-ready": {
        title: "Job-Ready Programs",
        icon: <Briefcase className="w-6 h-6" />,
        color: "warning",
        sections: [
          {
            title: "Paid and Unpaid Apprenticeships",
            icon: <GraduationCap className="w-6 h-6" />,
            description:
              "We work with local businesses, trades, and service industries to provide apprenticeships for residents. This could include fields like construction, hospitality, retail, administrative work, or customer service.",
            frequency: "Ongoing",
            outcome:
              "Residents gain real-world experience, earn an income (if applicable), and establish professional relationships that may lead to permanent employment.",
          },
          {
            title: "Job Shadowing and Mentorship",
            icon: <HandshakeIcon className="w-6 h-6" />,
            description:
              "Develop job shadowing opportunities where residents can observe professionals in their field of interest. Include mentorship relationships to help guide them through the learning process and foster career growth.",
            frequency: "Bi-monthly or quarterly",
            outcome:
              "Residents get exposure to their desired industry, learn practical aspects of a job, and build a network of contacts for future opportunities.",
          },
          {
            title: "Life Skills Workshops",
            icon: <Brain className="w-6 h-6" />,
            description:
              "Partner with community leaders or therapists to host workshops focusing on non-employment-related life skills, such as conflict resolution, communication techniques, and stress management.",
            frequency: "Monthly or quarterly",
            outcome:
              "Improved interpersonal relationships, increased ability to manage conflict effectively, enhanced communication skills, better stress coping mechanisms, and a more positive outlook on personal and community interactions.",
          },
        ],
      },
      community: {
        title: "Community Building & Peer Support",
        icon: <Users className="w-6 h-6" />,
        color: "success",
        sections: [
          {
            title: "Wellness and Social Connection Events",
            icon: <Calendar className="w-6 h-6" />,
            description:
              "Regular social events and activities plus inspiring guest speakers and recovery panels.",
            frequency: "Bi-weekly or monthly",
            benefits:
              "Strengthens social skills and provides sober recreational opportunities",
          },
          {
            title: "Peer Mentorship Program",
            icon: <UsersRound className="w-6 h-6" />,
            description:
              "Pair residents with peer mentors who are further along in their recovery journey. Mentors can provide guidance, encouragement, and share their personal experiences. Mentorship can also be a reciprocal learning experience, with the mentor benefiting from the opportunity to practice leadership skills.",
            frequency: "Ongoing, weekly check-ins",
            benefits:
              "Builds strong, supportive relationships and fosters a sense of purpose and responsibility.",
          },
          {
            title: "Support Group Circles",
            icon: <MessageCircle className="w-6 h-6" />,
            description:
              "Weekly or bi-weekly peer-led support groups where residents can come together to discuss their recovery, challenges, successes, and strategies for staying sober. Themed sessions, such as 'Coping with Triggers,' are offered to provide a safe space for vulnerability and shared wisdom.",
            frequency: "Weekly or bi-weekly",
            benefits:
              "Provides a sense of belonging, improved self-esteem, accountability and practical advice",
          },
        ],
      },
    }),
    []
  );

  // Memoize tab change handler
  const handleTabChange = useCallback((key) => {
    setActiveTab(key);
  }, []);

  return (
    <section className="py-28 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Holistic Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe in nurturing the whole person through comprehensive
            programs that address mind, body, career, and community.
          </p>
        </motion.div>

        {/* Program Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(programs).map(([key, program]) => (
            <ProgramButton
              key={key}
              program={program}
              isActive={activeTab === key}
              onClick={() => handleTabChange(key)}
              programKey={key}
            />
          ))}
        </div>

        {/* Active Program Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs[activeTab].sections.map((section, index) => (
            <ProgramSection
              key={section.title}
              section={section}
              index={index}
              activeTab={activeTab}
              programs={programs}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(HolisticApproach);
