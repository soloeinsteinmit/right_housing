import { motion } from "framer-motion";
import {
  Home,
  Info,
  BookOpen,
  FileText,
  Heart,
  Mail,
  Users,
  Shield,
  FileCheck,
  ChevronRight,
  HandHeart,
  Image,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sitemap = () => {
  const siteStructure = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/", icon: <Home className="w-5 h-5" /> },
        {
          name: "About Us",
          path: "/about",
          icon: <Info className="w-5 h-5" />,
        },
        {
          name: "Our Programs",
          path: "/programs",
          icon: <BookOpen className="w-5 h-5" />,
        },
        {
          name: "Impact Stories",
          path: "/impact",
          icon: <Heart className="w-5 h-5" />,
        },
        {
          name: "Gallery",
          path: "/gallery",
          icon: <Image className="w-5 h-5" />,
        },
        {
          name: "Contact Us",
          path: "/contact",
          icon: <Mail className="w-5 h-5" />,
        },
      ],
    },
    {
      title: "Get Involved",
      links: [
        {
          name: "Volunteer",
          path: "/volunteer",
          icon: <HandHeart className="w-5 h-5" />,
        },
        {
          name: "Donate",
          path: "/donate",
          icon: <Heart className="w-5 h-5" />,
        },
        {
          name: "Apply for Housing",
          path: "/apply",
          icon: <FileText className="w-5 h-5" />,
        },
      ],
    },
    {
      title: "Legal & Support",
      links: [
        {
          name: "Privacy Policy",
          path: "/privacy-policy",
          icon: <Shield className="w-5 h-5" />,
        },
        {
          name: "Terms of Service",
          path: "/terms-of-service",
          icon: <FileCheck className="w-5 h-5" />,
        },
        {
          name: "Application Status",
          path: "/application-status",
          icon: <Users className="w-5 h-5" />,
        },
      ],
    },
    {
      title: "Support & Resources",
      links: [
        {
          name: "FAQs",
          path: "/faq",
          icon: <Info className="w-5 h-5" />,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 pt-36">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Site Navigation
            </h1>
            <p className="text-xl text-gray-600">
              Find everything you need to navigate our website
            </p>
          </motion.div>

          {/* Content */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {siteStructure.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group h-fit"
              >
                <div className="relative bg-white p-8 rounded-xl shadow-lg overflow-hidden">
                  {/* Decorative Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-success-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-500" />

                  {/* Decorative Corner Accents */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-success-200 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-success-200 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Section Title */}
                  <div className="relative">
                    <motion.h3
                      className="text-2xl font-bold text-gray-900 mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      {section.title}
                      <div className="h-1 w-16 bg-success-500 mt-3 rounded-full group-hover:w-24 transition-all duration-300 ease-out" />
                    </motion.h3>
                  </div>

                  {/* Links */}
                  <ul className="relative space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + linkIndex * 0.05 }}
                      >
                        <Link
                          to={link.path}
                          className="group/link flex items-center gap-3 p-3 rounded-lg hover:bg-success-50/50 transition-all duration-300"
                        >
                          <span className="p-2 rounded-lg bg-success-50 text-success-600 group-hover/link:bg-success-100 group-hover/link:text-success-700 transition-colors duration-300">
                            {link.icon}
                          </span>
                          <span className="text-lg font-medium text-gray-700 group-hover/link:text-success-700 transition-colors duration-300">
                            {link.name}
                          </span>
                          <motion.span
                            className="ml-auto text-success-500 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"
                            initial={{ x: -10 }}
                            animate={{ x: 0 }}
                          >
                            <ChevronRight className="w-5 h-5" />
                          </motion.span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-success-400/0 to-success-400/0 group-hover:from-success-400/5 group-hover:to-transparent transition-all duration-500 rounded-xl pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Help */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 bg-white p-8 rounded-2xl shadow-lg text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help Finding Something?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to assist you in finding the information you
              need.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-success-600 text-white rounded-xl hover:bg-success-700 transition-colors"
            >
              Contact Support
              <Mail className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
