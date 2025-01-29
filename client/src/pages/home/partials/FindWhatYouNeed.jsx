import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Users, 
  Handshake,
  Building2,
  Heart,
  Home,
  FileText,
  ChevronRight
} from "lucide-react";

const categories = [
  {
    title: "Become a Member",
    description: "Start your journey to recovery and stability with our supportive community.",
    icon: Users,
    link: "/apply",
    color: "success"
  },
  {
    title: "Become a Partner",
    description: "Join our network of organizations making a difference in recovery housing.",
    icon: Handshake,
    link: "/partner",
    color: "amber"
  },
  {
    title: "Stakeholders & Partners",
    description: "Learn about our collaborations and how we work together for change.",
    icon: Building2,
    link: "/stakeholders",
    color: "success"
  },
  {
    title: "Support our Cause",
    description: "Help us provide more opportunities for individuals seeking recovery.",
    icon: Heart,
    link: "/donate",
    color: "amber"
  },
  {
    title: "Info for Neighbors",
    description: "Understand how our houses positively impact your community.",
    icon: Home,
    link: "/community",
    color: "success"
  },
  {
    title: "Resources & Forms",
    description: "Access important documents and information for your journey.",
    icon: FileText,
    link: "/resources",
    color: "amber"
  }
];

const FindWhatYouNeed = () => {
  return (
    <section className="relative py-24 bg-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full opacity-[0.15]" 
          style={{ 
            backgroundImage: "radial-gradient(circle at 1px 1px, rgb(17 94 89 / 0.2) 1px, transparent 0)",
            backgroundSize: "40px 40px" 
          }} 
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-success-600 font-medium mb-2">QUICK ACCESS</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            Find What You Need
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're seeking support, looking to contribute, or wanting to learn more,
            we've organized everything you need in one place.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={category.link}
                className="block h-full bg-white rounded-2xl shadow-lg overflow-hidden group"
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-${category.color}-50 p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`w-full h-full text-${category.color}-600`} />
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-success-600 transition-colors">
                    {category.title}
                  </h4>
                  <p className="text-gray-600 mb-6">
                    {category.description}
                  </p>

                  {/* Call to Action */}
                  <div className={`text-${category.color}-600 font-medium inline-flex items-center group-hover:translate-x-2 transition-transform`}>
                    Learn More
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className={`h-1 w-full bg-gradient-to-r from-${category.color}-500 to-${category.color}-600`} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindWhatYouNeed;
