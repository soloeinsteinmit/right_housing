import { motion } from "framer-motion";
import HeroSection from "./partials/HeroSection";
import MissionSection from "./partials/MissionSection";
import TeamSection from "./partials/TeamSection";
import ImpactSection from "./partials/ImpactSection";
import CallToActionSection from "../home/partials/CallToActionSection";
import AboutContactForm from "./partials/AboutContactForm";
import React, { useEffect } from "react";
// import FounderStory from "./partials/FounderStory";
import AnitaStory from "./partials/AnitaStory";

/**
 * About page component that showcases our organization's story, mission, team, and impact.
 * Features a modern, interactive design with smooth animations and engaging visuals.
 *
 * @component
 * @returns {JSX.Element} The rendered About page component
 */
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white"
    >
      {/* Hero Section */}
      <HeroSection />

      {/* Mission & Values Section */}
      <MissionSection />

      {/* Founder's Stories */}
      <AnitaStory />

      {/* Impact Timeline Section */}
      <ImpactSection />

      {/* Team Section */}
      <TeamSection />

      <AboutContactForm />

      {/* Call to Action Section */}
      <section className="py-20 bg-success-900 text-white">
        <CallToActionSection />
      </section>
    </motion.div>
  );
};

export default About;
