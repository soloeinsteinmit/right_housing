import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import HeroSection from "./partials/HeroSection";
import MissionSection from "./partials/MissionSection";
import TeamSection from "./partials/TeamSection";
import ImpactSection from "./partials/ImpactSection";
import CallToActionSection from "../home/partials/CallToActionSection";
import AboutContactForm from "./partials/AboutContactForm";
import React, { useEffect } from "react";
import AnitaStory from "./partials/AnitaStory";

/**
 * About page component that showcases our organization's story, mission, team, and impact.
 * Features a modern, interactive design with smooth animations and engaging visuals.
 *
 * @component
 * @returns {JSX.Element} The rendered About page component
 */
const About = () => {
  // SEO structured data for About page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About RIGHT Housing Inc. - Our Mission and Impact",
    description:
      "Learn about RIGHT Housing's mission to empower individuals through transitional housing, recovery support, and comprehensive services. Meet our dedicated team and discover our impact.",
    mainEntity: {
      "@type": "NGO",
      name: "RIGHT Housing Inc.",
      foundingDate: "2023",
      description:
        "A nonprofit organization dedicated to providing transitional housing and comprehensive support services for individuals in recovery and reentry.",
      founder: {
        "@type": "Person",
        name: "Anita",
        jobTitle: "Founder & Executive Director",
        description:
          "Former Population Health Manager turned social impact leader",
      },
      knowsAbout: [
        "Transitional Housing",
        "Recovery Support",
        "Reentry Services",
        "Community Development",
        "Mental Health Support",
      ],
    },
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>
          About RIGHT Housing Inc. | Our Mission and Impact in Recovery Support
        </title>
        <meta
          name="description"
          content="Discover RIGHT Housing's mission to empower individuals through transitional housing and comprehensive support services. Learn about our team, values, and impact in recovery support."
        />
        <meta
          name="keywords"
          content="RIGHT Housing mission, nonprofit organization, recovery support services, transitional housing program, community impact, housing solutions, NGO leadership, social services organization, recovery community, rehabilitation services, reentry support, mental health services, addiction recovery support, housing nonprofit, community development, social impact organization, supportive housing services, behavioral health support, recovery housing mission, housing assistance programs, community outreach"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="About RIGHT Housing Inc. | Our Mission and Impact in Recovery Support"
        />
        <meta
          property="og:description"
          content="Discover RIGHT Housing's mission to empower individuals through transitional housing and comprehensive support services. Learn about our team, values, and impact in recovery support."
        />

        {/* Twitter */}
        <meta
          name="twitter:title"
          content="About RIGHT Housing Inc. | Our Mission and Impact in Recovery Support"
        />
        <meta
          name="twitter:description"
          content="Discover RIGHT Housing's mission to empower individuals through transitional housing and comprehensive support services. Learn about our team, values, and impact in recovery support."
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

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
    </>
  );
};

export default About;
