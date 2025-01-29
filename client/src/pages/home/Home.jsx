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
import WhatIsRightHousing from "./partials/WhatIsRightHousing";
import HowToApply from "./partials/HowToApply";
import ThreePillars from "./partials/ThreePillars";
import FindWhatYouNeed from "./partials/FindWhatYouNeed";
import CommunityImpact from "./partials/CommunityImpact";

/**
 * Home component with hero section and main content.
 * Provides an engaging landing page experience with grid-based statistics.
 *
 * @component
 * @returns {JSX.Element} The rendered Home component
 */
const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* What is RIGHT Housing Section */}
      <section className="bg-gray-50 pt-32">
        <WhatIsRightHousing />
      </section>

      {/* Three Pillars Section */}
      <ThreePillars />

      {/* How to Apply Section */}
      <HowToApply />

      {/* Find What You Need Section */}
      <FindWhatYouNeed />

      {/* Community Impact Section */}
      {/* <CommunityImpact /> */}

      {/* Testimonials Section */}
      <section className="py-20 bg-success-900">
        <TestimonialsSection />
      </section>

      {/* FAQs Section */}
      <section className="bg-success-50">
        <FaqSection />
      </section>

      <PartnerSection />

      {/* Call to Action Section */}
      <section className="py-20 bg-success-900 text-white">
        <CallToActionSection />
      </section>
      <ScrollControls />
    </main>
  );
};

export default Home;
