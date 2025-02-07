/**
 * @fileoverview Programs page component for Right Housing.
 * Displays comprehensive information about our programs and services.
 */

import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@heroui/button";
import ProgramsHero from "./partials/ProgramsHero";
import HolisticApproach from "./partials/HolisticApproach";
import ProgramsServices from "./partials/ProgramsServices";
import ProgramsEligibility from "./partials/ProgramsEligibility";
import ProgramsCaseManagement from "./partials/ProgramsCaseManagement";

/**
 * Programs page component that showcases our comprehensive approach to recovery and reintegration.
 * Features various programs including mind-body wellness, job readiness, and community support.
 *
 * @returns {JSX.Element} The rendered Programs page component
 */
const Programs = () => {
  // SEO structured data for Programs page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "RIGHT Housing Recovery and Support Programs",
    "description": "Comprehensive programs offering transitional housing, recovery support, job training, and holistic services for individuals in recovery and reentry.",
    "itemListElement": [
      {
        "@type": "Service",
        "position": 1,
        "name": "Transitional Housing Program",
        "description": "Safe and supportive housing environment for individuals in recovery, featuring structured living and community support.",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "Service",
        "position": 2,
        "name": "Recovery Support Services",
        "description": "Comprehensive recovery support including counseling, peer support, and wellness programs.",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "Service",
        "position": 3,
        "name": "Job Readiness Program",
        "description": "Employment preparation, skill development, and career planning services.",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "Service",
        "position": 4,
        "name": "Case Management Services",
        "description": "Individualized support and guidance through recovery and reintegration journey.",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock"
        }
      }
    ],
    "provider": {
      "@type": "NGO",
      "name": "RIGHT Housing Inc.",
      "slogan": "Where Every Door Leads to Opportunity"
    }
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>RIGHT Housing Programs | Recovery Support & Transitional Housing Services</title>
        <meta 
          name="description" 
          content="Explore RIGHT Housing's comprehensive programs: transitional housing, recovery support, job training, and holistic services. Our structured approach helps individuals achieve lasting recovery and independence."
        />
        <meta 
          name="keywords" 
          content="recovery programs, transitional housing services, addiction recovery support, reentry programs, job training programs, life skills development, case management services, mental health support, substance abuse recovery, holistic wellness programs, recovery housing programs, employment assistance, rehabilitation services, supportive housing programs, recovery community, behavioral health services, structured living program, recovery support services, vocational training, wellness programs, peer support services, housing assistance program, recovery coaching, life skills training, community reintegration"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RIGHT Housing Programs | Recovery Support & Transitional Housing Services" />
        <meta 
          property="og:description" 
          content="Explore RIGHT Housing's comprehensive programs: transitional housing, recovery support, job training, and holistic services. Our structured approach helps individuals achieve lasting recovery and independence."
        />

        {/* Twitter */}
        <meta name="twitter:title" content="RIGHT Housing Programs | Recovery Support & Transitional Housing Services" />
        <meta 
          name="twitter:description" 
          content="Explore RIGHT Housing's comprehensive programs: transitional housing, recovery support, job training, and holistic services. Our structured approach helps individuals achieve lasting recovery and independence."
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="min-h-screen">
        <ProgramsHero />
        <HolisticApproach />
        <ProgramsServices />
        <ProgramsCaseManagement />
        <ProgramsEligibility />
      </main>
    </>
  );
};

export default Programs;
