import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HeartHandshake,
  Users2,
  Building,
  Handshake,
  ArrowUpRight,
  CircleDot
} from "lucide-react";

const partners = [
  "Local Government Agencies",
  "Treatment Centers",
  "Mental Health Providers",
  "Social Services",
  "Community Organizations",
  "Healthcare Providers"
];

const impactStats = [
  {
    number: "85%",
    label: "Recovery Success Rate",
    description: "Of our residents maintain sobriety after one year"
  },
  {
    number: "200+",
    label: "Community Partners",
    description: "Working together to create lasting change"
  },
  {
    number: "1000+",
    label: "Lives Transformed",
    description: "Through our housing and support programs"
  }
];

const CommunityImpact = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-success-50/50 to-warning-50/30" />
      <div className="absolute inset-0">
        <div className="absolute w-[800px] h-[800px] -top-[400px] -right-[400px] rounded-full bg-success-100/20" />
        <div className="absolute w-[600px] h-[600px] -bottom-[300px] -left-[300px] rounded-full bg-warning-100/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 mb-4"
          >
            <CircleDot className="w-4 h-4 text-success-600" />
            <span className="text-success-600 font-medium">COMMUNITY IMPACT</span>
            <CircleDot className="w-4 h-4 text-success-600" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            How Our Work Strengthens Communities
          </motion.h2>
        </div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-white rounded-2xl p-8 shadow-lg overflow-hidden group"
            >
              {/* Decorative Elements */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-success-50 rounded-full transform group-hover:scale-150 transition-transform duration-500" />
              <div className="absolute right-0 top-0 w-16 h-16 bg-success-100/50 rounded-full transform group-hover:scale-150 transition-transform duration-700 delay-100" />
              
              <div className="relative">
                <h3 className="text-5xl font-bold text-success-600 mb-2">{stat.number}</h3>
                <p className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</p>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner Organizations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-12 shadow-lg mb-20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Partner Organizations</h3>
              <p className="text-gray-600 max-w-2xl">
                We collaborate with a diverse network of organizations to provide comprehensive support and resources to our residents.
              </p>
            </div>
            <Link
              to="/partners"
              className="inline-flex items-center text-success-600 font-medium mt-6 md:mt-0 group"
            >
              View All Partners
              <ArrowUpRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-success-50 rounded-full flex items-center justify-center mb-4">
                  <Building className="w-8 h-8 text-success-600" />
                </div>
                <p className="text-gray-900 font-medium">{partner}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Volunteer Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-success-600 rounded-2xl p-12 text-white overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "32px 32px"
            }} />
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <div className="flex items-center space-x-4 mb-4">
                <HeartHandshake className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Volunteer Opportunities</h3>
              </div>
              <p className="text-success-50 max-w-2xl mb-6">
                Make a difference in your community by volunteering with RIGHT Housing. 
                We offer various opportunities to support our mission and help transform lives.
              </p>
              <Link
                to="/volunteer"
                className="inline-flex items-center bg-white text-success-600 px-6 py-3 rounded-lg font-medium group hover:bg-success-50 transition-colors"
              >
                Join Our Volunteer Team
                <ArrowUpRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-success-500/50 backdrop-blur-sm rounded-lg p-4">
                <Users2 className="w-6 h-6 mb-2" />
                <p className="font-medium">Mentorship Programs</p>
              </div>
              <div className="bg-success-500/50 backdrop-blur-sm rounded-lg p-4">
                <Building className="w-6 h-6 mb-2" />
                <p className="font-medium">House Maintenance</p>
              </div>
              <div className="bg-success-500/50 backdrop-blur-sm rounded-lg p-4">
                <Handshake className="w-6 h-6 mb-2" />
                <p className="font-medium">Community Events</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityImpact;
