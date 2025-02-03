import React, { useMemo } from "react";
import { motion } from "framer-motion";
import man1 from "../../../assets/man1.jpg";
import man2 from "../../../assets/man2.jpg";
import woman1 from "../../../assets/woman1.jpg";
import woman2 from "../../../assets/woman2.jpg";
import { Button } from "@heroui/button";
import { useNavigate } from "react-router-dom";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Memoized components
const TeamMemberCard = React.memo(({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group"
  >
    <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
      {/* Image Container */}
      <div className="relative">
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-success-900 via-success-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end">
          {/* Bio - Revealed on Hover */}
          <div className="opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden p-5">
            <p className="text-white text-sm">{member.bio}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Name and Role */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
          <p className="text-success-600 font-medium">{member.role}</p>
        </div>

        {/* Quote */}
        <div className="mb-4 relative">
          <div className="absolute -left-2 -top-2 text-4xl text-success-200 opacity-50">
            "
          </div>
          <p className="text-gray-600 italic text-sm pl-4">{member.quote}</p>
        </div>

        {/* Expertise Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {member.expertise.map((skill, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 bg-success-50 text-success-700 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="#"
          className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-success-600 transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </motion.a>
      </div>
    </div>
  </motion.div>
));

const JoinTeamCTA = React.memo(({ navigate }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    viewport={{ once: true }}
    className="mt-20 text-center"
  >
    <div className="bg-white rounded-3xl p-12 shadow-lg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Join Our Mission</h3>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          We're seeking passionate individuals dedicated to empowering others
          through recovery and transition support. Join us in making a lasting
          difference in people's lives.
        </p>
        <Button
          onPress={() => {
            navigate("/volunteer");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          size="lg"
          color="success"
          radius="full"
          variant="shadow"
          className="text-white"
        >
          Explore Opportunities
        </Button>
      </div>
    </div>
  </motion.div>
));

const TeamSection = () => {
  const navigate = useNavigate();

  // Memoize team data
  const team = useMemo(
    () => [
      {
        name: "Anita Parker",
        role: "Founder & Executive Director",
        image: woman1,
        bio: "With extensive experience in recovery programs and transitional housing, Anita leads our mission to transform lives through comprehensive support and empowerment.",
        expertise: ["Program Development", "Recovery Support", "Community Outreach"],
        quote: "Every individual deserves a chance to rebuild their life with dignity and support.",
      },
      {
        name: "Michael Chen",
        role: "Recovery Programs Director",
        image: man1,
        bio: "Michael specializes in developing holistic recovery programs that address mental health, addiction recovery, and life skills development.",
        expertise: ["Addiction Recovery", "Mental Health Support", "Life Skills Training"],
        quote: "Recovery is a journey we take together, one step at a time.",
      },
      {
        name: "Dr. Emily Rodriguez",
        role: "Transition Support Director",
        image: woman2,
        bio: "Emily leads our transition support programs, ensuring seamless integration from temporary to permanent housing with comprehensive aftercare.",
        expertise: ["Housing Transition", "Case Management", "Family Support"],
        quote: "Supporting transitions that lead to lasting independence.",
      },
      {
        name: "Solomon Eshun",
        role: "Tech Advocate",
        image: man2,
        bio: "Solomon ensures a strong digital presence by developing and managing the organization's website, host applications, and online platforms. He leverages cutting-edge technology to enhance user engagement, streamline operations, and safeguard data security.",
        expertise: ["Digital Strategy", "Tech Integration", "Data Security", "AI & Automation", "Platform Managment"],
        quote: "Innovative solutions drive impactful change.",
      },
    ],
    []
  );

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated professionals committed to empowering individuals through
            recovery, reintegration, and sustainable independence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>

        <JoinTeamCTA navigate={navigate} />
      </div>
    </section>
  );
};

export default React.memo(TeamSection);
