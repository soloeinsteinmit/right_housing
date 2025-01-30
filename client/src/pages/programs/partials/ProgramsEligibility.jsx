import React from "react";
import { motion } from "framer-motion";
import {
  UserCheck,
  Calendar,
  HeartHandshake,
  ClipboardCheck,
  Wallet,
  FileCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const eligibilityCriteria = [
  {
    id: "history",
    title: "Substance Abuse History",
    description:
      "Individuals must have a history of substance abuse or addiction (this can include drugs, alcohol, or both).",
    icon: <HeartHandshake className="w-6 h-6" />,
    color: "from-rose-500 to-orange-500",
  },
  {
    id: "commitment",
    title: "Commitment to Sobriety",
    description:
      "Residents must continue seeing their therapist, doctor, or treatment center to stay on track with their treatment plan.",
    icon: <UserCheck className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "age",
    title: "Age Requirements",
    description: "Residents must be at least 18 years old.",
    icon: <Calendar className="w-6 h-6" />,
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "rules",
    title: "Willingness to Follow Rules",
    description:
      "This includes attending house meetings, observing a curfew, and completing household chores.",
    icon: <ClipboardCheck className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "financial",
    title: "Financial Ability",
    description:
      "Sober living homes charge fees for room and board, and individuals may need to demonstrate the financial ability to cover these costs or have a stable source of income.",
    icon: <Wallet className="w-6 h-6" />,
    color: "from-amber-500 to-yellow-500",
  },
  {
    id: "admission",
    title: "Admission Process",
    description:
      "Admission interviews or intake assessments are common to ensure that the individual is a good fit for the program.",
    icon: <FileCheck className="w-6 h-6" />,
    color: "from-cyan-500 to-sky-500",
  },
];

const ProgramsEligibility = () => {
  return (
    <section className="relative py-24 bg-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute w-full h-full opacity-5"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {[...Array(10)].map((_, i) => (
            <motion.path
              key={i}
              d={`M${-10 + i * 20},100 Q${50},${50 + Math.sin(i) * 20} ${
                110 + i * 20
              },0`}
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </svg>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Eligibility Requirements
            </h2>
            <p className="text-xl text-gray-600">
              We maintain specific eligibility criteria to ensure the safety and
              success of all our residents. Review the requirements below to
              determine if our program is the right fit for you.
            </p>
          </motion.div>
        </div>

        {/* Eligibility Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eligibilityCriteria.map((criteria, index) => (
            <motion.div
              key={criteria.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {/* Card Header with Gradient */}
                <div className={`h-2 bg-gradient-to-r ${criteria.color}`} />

                <div className="p-8">
                  {/* Icon with Gradient Background */}
                  <div
                    className={`absolute -top-4 right-8 w-12 h-12 rounded-xl bg-gradient-to-br ${criteria.color} p-3 shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-300`}
                  >
                    <div className="text-white">{criteria.icon}</div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-4">
                    {criteria.title}
                  </h3>
                  <p className="text-gray-600">{criteria.description}</p>
                </div>

                {/* Hover Effect Corner */}
                <div
                  className={`absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl ${criteria.color} transform translate-y-full translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-300 rounded-tl-3xl`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left side - Content */}
              <div className="p-12 bg-gradient-to-br from-success-600 to-success-500">
                <div className="text-white">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl font-bold mb-4"
                  >
                    Ready to Begin Your Journey?
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-success-50 text-lg mb-8"
                  >
                    Take the first step towards a better future. Our team is
                    here to guide you through the admission process.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-success-200" />
                      <span className="text-success-50">
                        Confidential Assessment
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-success-200" />
                      <span className="text-success-50">
                        Personalized Support Plan
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-success-200" />
                      <span className="text-success-50">24/7 Support</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Right side - Actions */}
              <div className="p-12 bg-white">
                <div className="h-full flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <Link
                      to="/apply"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                      className="block w-full px-8 py-4 rounded-xl bg-success-600 text-white font-semibold text-center shadow-lg shadow-success-500/30 hover:shadow-xl hover:shadow-success-500/40 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Start Your Application
                    </Link>
                    <Link
                      to="/contact"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                      className="block w-full px-8 py-4 rounded-xl border-2 border-success-100 text-success-700 font-semibold text-center hover:bg-success-50 transition-colors duration-300"
                    >
                      Contact Our Team
                    </Link>
                    <p className="text-center text-gray-500 text-sm">
                      Questions? Call us at{" "}
                      <a
                        href="tel:1234567890"
                        className="text-success-600 font-semibold hover:text-success-700"
                      >
                        (123) 456-7890
                      </a>
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsEligibility;
