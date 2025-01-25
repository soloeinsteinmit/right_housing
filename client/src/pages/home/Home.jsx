/**
 * @fileoverview Home page component with enhanced hero section.
 * Features a full-screen hero section with dynamic content and grid layout.
 */

import React from "react";
// Import images
import HeroSection from "./partials/HeroSection";
import StorySection from "./partials/StorySection";
import ApproachSection from "./partials/ApproachSection";
import PartnerSection from "./partials/PartnerSection";
import CallToActionSection from "./partials/CallToActionSection";
import ScrollControls from "../../components/common/ScrollControls";
import TestimonialsSection from "./partials/TestimonialsSection";
import FaqSection from "./partials/FaqSection";

/**
 * Home component with hero section and main content.
 * Provides an engaging landing page experience with grid-based statistics.
 *
 * @component
 * @returns {JSX.Element} The rendered Home component
 */
const Home = () => {
  return (
    <div className="relative ">
      {/* Hero Section */}
      <HeroSection />
      {/* Story Section */}
      <section className="py-20 bg-white">
        <StorySection />
      </section>
      {/* Approach Section */}
      <section className="mb-20 bg-success-50">
        <ApproachSection />
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-success-900">
        <TestimonialsSection />
      </section>
      {/* Partners Section */}
      <section className=" bg-white">
        <PartnerSection />
      </section>
      {/* FAQs Section */}
      {/* // TODO: ISSUES HERE. DISPPERATING CARDS AFTER FILTERING */}
      <section className="bg-success-50">
        <FaqSection />
      </section>
      {/* Call to Action Section */}
      <section className="py-20 bg-success-900 text-white">
        <CallToActionSection />
      </section>
      <ScrollControls />
    </div>
  );
};

export default Home;
