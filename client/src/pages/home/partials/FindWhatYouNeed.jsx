import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  Home,
  Building2,
  Building,
  Heart,
  FileText,
  GraduationCap,
  ClipboardList,
  Network,
  ChevronRight,
} from "lucide-react";

const categories = [
  {
    title: "Become a Member",
    description:
      "Find a house, fill out the application, and call a house to schedule an interview.",
    icon: Users,
    link: "/apply",
    color: "success",
    cta: "Find a House",
  },
  {
    title: "Become a Landlord",
    description:
      "Rent your home as a RIGHT House and become a vital part in our mission to save lives.",
    icon: Building,
    link: "/landlord",
    color: "success",
    cta: "Learn More",
  },
  {
    title: "Stakeholders & Partners",
    description: "Request a meeting or presentation. Refer applicants.",
    icon: Building2,
    link: "/stakeholders",
    color: "success",
    cta: "Learn More",
  },
  {
    title: "Agencies & Foundations",
    description: "How to open new RIGHT Houses in your communities.",
    icon: Network,
    link: "/agencies",
    color: "success",
    cta: "Learn More",
  },
  {
    title: "Info for Neighbors",
    description:
      "We strive to be respectful neighbors and responsible citizens.",
    icon: Home,
    link: "/community",
    color: "success",
    cta: "Learn More",
  },
  {
    title: "Support our Cause",
    description:
      "There are many ways to give, including financial and house furnishings.",
    icon: Heart,
    link: "/donate",
    color: "success",
    cta: "Learn More",
  },
  {
    title: "Alumni Registration",
    description:
      "Sign up to join the national Alumni association and get connected with other Alumni in your area.",
    icon: GraduationCap,
    link: "/alumni",
    color: "success",
    cta: "Signup Today",
  },
  {
    title: "Annual Report",
    description:
      "RIGHT Housing, Inc. remains transparent with spending and is a reputable 501c3 nonprofit.",
    icon: ClipboardList,
    link: "/annual-report",
    color: "success",
    cta: "Read the Annual Report",
  },
  {
    title: "Manuals & Forms",
    description:
      "View and download the latest House and Chapter Manuals, along with other forms used to conduct weekly house meetings.",
    icon: FileText,
    link: "/resources",
    color: "success",
    cta: "View Resources",
  },
];

const FindWhatYouNeed = () => {
  return (
    <section className="relative py-24 bg-success-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-full h-full opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgb(17 94 89 / 0.2) 1px, transparent 0)",
            backgroundSize: "40px 40px",
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
          <h2 className="text-success-600 text-lg font-medium mb-2">
            CHECK OUT OUR RESOURCES
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            Find What You Need
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access everything you need to know about RIGHT Housing - from
            becoming a member to supporting our cause.
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
                className="block h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-success-50 p-3 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-full h-full text-success-600" />
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-bold text-success-600 mb-3">
                    {category.title}
                  </h4>
                  <p className="text-gray-600 mb-6">{category.description}</p>

                  {/* Call to Action */}
                  <div className="text-success-600 font-medium inline-flex items-center group-hover:translate-x-2 transition-transform">
                    {category.cta}
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindWhatYouNeed;
