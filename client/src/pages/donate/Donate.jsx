/**
 * @fileoverview Donation page component.
 * Handles donation form and Stripe payment integration.
 */

import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import DonateHero from "./partials/DonateHero";
import DonationOptions from "./partials/DonationOptions";
import ImpactStories from "./partials/ImpactStories";

/**
 * Donate component that handles donation collection and processing.
 * Integrates with Stripe for secure payment processing.
 *
 * @component
 * @returns {JSX.Element} The rendered Donate component
 */
const Donate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SEO structured data for donation page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "DonateAction",
    "name": "Donate to RIGHT Housing",
    "description": "Support RIGHT Housing's mission to provide transitional housing and recovery support services. Your donation helps transform lives and build stronger communities.",
    "recipient": {
      "@type": "NGO",
      "name": "RIGHT Housing Inc.",
      "description": "Providing transitional housing and comprehensive support services for individuals in recovery.",
      "url": "https://righthousing.org"
    },
    "potentialAction": {
      "@type": "DonateAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://righthousing.org/donate",
        "inLanguage": "en-US",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      }
    },
    "provider": {
      "@type": "PaymentService",
      "name": "Stripe",
      "serviceType": "Payment Processor"
    }
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Donate to RIGHT Housing | Support Recovery Housing & Services</title>
        <meta 
          name="description" 
          content="Support RIGHT Housing's mission to provide transitional housing and recovery support services. Your donation helps transform lives and build stronger communities through our comprehensive programs."
        />
        <meta 
          name="keywords" 
          content="donate to RIGHT Housing, support recovery housing, housing support donation, recovery services donation, community support donation, nonprofit donation, housing assistance donation, recovery program donation, charitable giving, support transitional housing, recovery support donation, housing program support, community impact donation, recovery assistance donation, nonprofit support, social impact donation, housing charity, recovery charity, support services donation, monthly donation, one-time donation"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Donate to RIGHT Housing | Support Recovery Housing & Services" />
        <meta 
          property="og:description" 
          content="Support RIGHT Housing's mission to provide transitional housing and recovery support services. Your donation helps transform lives and build stronger communities through our comprehensive programs."
        />

        {/* Twitter */}
        <meta name="twitter:title" content="Donate to RIGHT Housing | Support Recovery Housing & Services" />
        <meta 
          name="twitter:description" 
          content="Support RIGHT Housing's mission to provide transitional housing and recovery support services. Your donation helps transform lives and build stronger communities through our comprehensive programs."
        />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="application-name" content="RIGHT Housing Donation Portal" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="flex-grow">
        <DonateHero />
        <DonationOptions />
        <ImpactStories />
      </main>
    </>
  );
};

export default Donate;
