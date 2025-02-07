/**
 * @fileoverview Home page component with enhanced hero section and SEO optimization.
 * Features a full-screen hero section with dynamic content and grid layout.
 */

import React from "react";
import { Helmet } from "react-helmet-async";
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
 * Home component with hero section, main content, and SEO optimization.
 * Provides an engaging landing page experience with grid-based statistics.
 *
 * @component
 * @returns {JSX.Element} The rendered Home component
 */
const Home = () => {
  // SEO structured data for the home page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "RIGHT Housing Inc. - Transitional Housing Solutions",
    description:
      "Empowering individuals on their journey to recovery and reentry through stable housing and comprehensive support.",
    provider: {
      "@type": "NGO",
      name: "RIGHT Housing Inc.",
      slogan: "Where Every Door Leads to Opportunity",
    },
    offers: {
      "@type": "Offer",
      itemOffered: [
        {
          "@type": "Service",
          name: "Transitional Housing",
          description:
            "Safe and supportive housing for individuals in recovery",
        },
        {
          "@type": "Service",
          name: "Recovery Support",
          description: "Comprehensive recovery and reintegration services",
        },
        {
          "@type": "Service",
          name: "Job Training",
          description: "Employment preparation and skill development",
        },
      ],
    },
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>
          RIGHT Housing Inc. - Transitional Housing Solutions | Where Every Door
          Leads to Opportunity
        </title>
        <meta
          name="description"
          content="Empowering individuals on their journey to recovery and reentry through stable housing and comprehensive support."
        />
        <meta
          name="keywords"
          content="transitional housing, recovery support, job training, RIGHT Housing, rehabilitation programs, community support, housing assistance, addiction recovery, reintegration services, supportive housing, housing solutions, recovery housing, sober living, mental health support, life skills training, employment assistance, financial literacy, case management, holistic support, community reintegration, housing nonprofit, social services, rehabilitation center, recovery community, crisis intervention, substance abuse recovery, affordable housing, emergency shelter, housing advocacy, supportive services, NGO"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="RIGHT Housing Inc. - Transitional Housing Solutions"
        />
        <meta
          property="og:description"
          content="Empowering individuals on their journey to recovery and reentry through stable housing and comprehensive support."
        />

        {/* Twitter */}
        <meta
          name="twitter:title"
          content="RIGHT Housing Inc. - Transitional Housing Solutions"
        />
        <meta
          name="twitter:description"
          content="Empowering individuals on their journey to recovery and reentry through stable housing and comprehensive support."
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

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

        {/* Testimonials Section */}
        <section className="py-20 bg-success-900">
          <TestimonialsSection />
        </section>

        {/* Find What You Need Section */}
        <FindWhatYouNeed />

        {/* Community Impact Section */}
        {/* <CommunityImpact /> */}

        {/* FAQs Section */}
        <section className="bg-success-50">
          <FaqSection />
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-success-900 text-white">
          <CallToActionSection />
        </section>
        <ScrollControls />
      </main>
    </>
  );
};

export default Home;
