import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Users,
  Home,
  Heart,
  Target,
  ChartBar,
  Handshake,
} from "lucide-react";
import com_impact from "../../../assets/com-impact2.jpg";
import milestone from "../../../assets/milestone.jpg";
import housing from "../../../assets/housing.jpg";
import growth from "../../../assets/team.jpg";
// import timeline1 from "../../../assets/timeline1.jpg";
// import timeline2 from "../../../assets/timeline2.jpg";
// import timeline3 from "../../../assets/timeline3.jpg";
// import timeline4 from "../../../assets/timeline4.jpg";

const ImpactSection = () => {
  const impactCards = [
    {
      title: "Expanding Recovery Support",
      description:
        "Increasing our capacity to provide comprehensive recovery services and support programs to more individuals in need.",
      icon: <Heart className="w-6 h-6" />,
      color: "text-rose-600",
      stat: "500+",
      statLabel: "People Supported",
      progress: 85,
      progressColor: "bg-rose-600",
    },
    {
      title: "Housing Network Growth",
      description:
        "Building partnerships to expand our housing network and create more opportunities for stable, supportive living environments.",
      icon: <Home className="w-6 h-6" />,
      color: "text-blue-600",
      stat: "150",
      statLabel: "Housing Partners",
      progress: 65,
      progressColor: "bg-blue-600",
    },
    {
      title: "Community Integration",
      description:
        "Strengthening community connections and support systems to ensure successful long-term recovery outcomes.",
      icon: <Users className="w-6 h-6" />,
      color: "text-violet-600",
      stat: "85%",
      statLabel: "Success Rate",
      progress: 90,
      progressColor: "bg-violet-600",
    },
  ];

  const timelineData = [
    {
      year: "2021",
      title: "Foundation & Vision",
      description:
        "Established RIGHT Housing with a vision to transform lives through comprehensive housing support and recovery programs. Launched our first transitional housing facility.",
      image: com_impact,
    },
    {
      year: "2022",
      title: "Expanding Support Services",
      description:
        "Introduced holistic support programs including mental health services, job training, and financial literacy. Partnered with local organizations to strengthen our support network.",
      image: housing,
    },
    {
      year: "2023",
      title: "Community Growth",
      description:
        "Expanded our reach to serve more individuals in transition. Implemented personalized goal-setting programs and enhanced our recovery support services.",
      image: growth,
    },
    {
      year: "2024",
      title: "Transformative Impact",
      description:
        "Achieved an 80% success rate in transitioning individuals to independent living. Established comprehensive aftercare programs to ensure sustained success.",
      image: milestone,
    },
  ];

  const futureGoals = [
    {
      title: "Expanding Housing Solutions",
      description:
        "Developing additional housing facilities to serve more individuals in need of support and recovery services.",
    },
    {
      title: "Enhanced Support Programs",
      description:
        "Strengthening our holistic support system with expanded mental health services and career development programs.",
    },
    {
      title: "Community Partnerships",
      description:
        "Building stronger networks with local organizations to provide more comprehensive support and opportunities.",
    },
    {
      title: "Sustainable Impact",
      description:
        "Implementing innovative programs to ensure long-term success and independence for program participants.",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-success-50 to-warning-50 opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track our journey of creating positive change and building stronger
            communities through comprehensive housing support and recovery
            programs.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-success-200" />

          {/* Timeline Items */}
          <div className="space-y-24">
            {timelineData.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.1,
                }}
                className="relative"
              >
                {/* Year Marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 z-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 bg-success-600 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </motion.div>
                </div>

                {/* Content */}
                <div
                  className={`grid md:grid-cols-2 gap-8 ${
                    index % 2 === 0 ? "md:text-right" : ""
                  }`}
                >
                  {/* Text Content */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: index * 0.2 + 0.3,
                    }}
                    className={index % 2 === 0 ? "md:order-1" : "md:order-2"}
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                      <span className="inline-block text-success-600 font-bold mb-2">
                        {impact.year}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {impact.title}
                      </h3>
                      <p className="text-gray-600 mb-6">{impact.description}</p>
                    </div>
                  </motion.div>

                  {/* Image/Illustration */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: index * 0.2 + 0.4,
                    }}
                    className={index % 2 === 0 ? "md:order-2" : "md:order-1"}
                  >
                    <div className="relative">
                      <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                        <img
                          src={impact.image}
                          alt={impact.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Decorative Element */}
                      <div className="absolute inset-0 transform translate-x-4 translate-y-4 bg-gradient-to-r from-success-200 to-warning-200 rounded-2xl -z-10" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Goals Section */}
        <div className="container mx-auto px-4 mt-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Future Goals & Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to creating lasting change drives us forward.
              Here's how we're planning to expand our impact in the coming
              years.
            </p>
          </motion.div>

          <div className="relative max-w-7xl mx-auto">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-success-50/30 to-warning-50/30 rounded-3xl -z-10" />
            <div className="absolute inset-0 bg-[url('/patterns/plus.svg')] opacity-5 rounded-3xl -z-10" />

            {/* Cards Grid */}
            <div className="grid md:grid-cols-3 gap-0.5 bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
              {impactCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white p-8 hover:bg-gray-50 transition-all duration-300"
                >
                  {/* Top Accent Line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 ${card.progressColor} opacity-70`}
                  />

                  {/* Icon Container */}
                  <div className="mb-8">
                    <div
                      className={`w-16 h-16 ${card.progressColor} ${card.color} bg-opacity-10 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      {card.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <h3
                      className={`text-2xl font-bold text-gray-900 group-hover:${card.color} transition-colors`}
                    >
                      {card.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {card.description}
                    </p>

                    {/* Stats Section */}
                    <div className="pt-6 border-t border-gray-100">
                      <div className="flex items-baseline gap-3">
                        <span className={`text-4xl font-bold ${card.color}`}>
                          {card.stat}
                        </span>
                        <span className="text-sm text-gray-500 font-medium">
                          {card.statLabel}
                        </span>
                      </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Progress</span>
                        <span className={`${card.color} font-medium`}>
                          {card.progress}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: "0%" }}
                          whileInView={{ width: `${card.progress}%` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className={`h-full ${card.progressColor} opacity-80`}
                        />
                      </div>
                    </div>

                    {/* Hover Indicator */}
                    <div
                      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 ${card.progressColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
