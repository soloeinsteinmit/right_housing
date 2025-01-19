/**
 * @fileoverview Home page component with enhanced hero section.
 * Features a full-screen hero section with dynamic content and grid layout.
 */

import React from "react";
// Import images
import HeroSection from "./partials/HeroSection";
import ImpactSection from "./partials/ImpactSection";
import ProgramsSection from "./partials/ProgramsSection";
import TestimonialsSection from "./partials/TestimonialsSection";
import PartnerSection from "./partials/PartnerSection";
import CallToActionSection from "./partials/CallToActionSection";

/**
 * Home component with hero section and main content.
 * Provides an engaging landing page experience with grid-based statistics.
 *
 * @component
 * @returns {JSX.Element} The rendered Home component
 */
const Home = () => {
  return (
    <div className="min-h-screen bg-default-50 pt-20">
      {/* Hero Section */}
      <HeroSection />

      {/* Impact Stats Section */}
      <section className="py-20 bg-white">
        <ImpactSection />
      </section>

      {/* Our Programs Section */}
      <section className="py-20 bg-success-50">
        <ProgramsSection />
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <TestimonialsSection />
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-success-50">
        <PartnerSection />
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-success-900 text-white">
        <CallToActionSection />
      </section>
    </div>
  );
};

export default Home;
