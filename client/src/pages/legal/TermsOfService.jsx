import React from "react";
import { Helmet } from "react-helmet-async";
import LegalDocumentLayout from "../../components/legal/LegalDocumentLayout";

const TermsOfService = () => {
  // SEO structured data for terms of service
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "RIGHT Housing Terms of Service",
    "description": "Terms and conditions for using RIGHT Housing's services, including housing assistance, support services, and website usage.",
    "publisher": {
      "@type": "Organization",
      "name": "RIGHT Housing Inc.",
      "url": "https://righthousing.org"
    },
    "dateModified": "2025-01-23",
    "about": {
      "@type": "Thing",
      "name": "Terms of Service",
      "description": "Legal terms and conditions governing the use of our services"
    },
    "mainEntity": {
      "@type": "WebPageElement",
      "name": "Terms of Service Content",
      "hasPart": [
        {
          "@type": "WebPageElement",
          "name": "Service Terms",
          "description": "Terms and conditions for using our services"
        },
        {
          "@type": "WebPageElement",
          "name": "User Responsibilities",
          "description": "User obligations and responsibilities"
        },
        {
          "@type": "WebPageElement",
          "name": "Payment Terms",
          "description": "Terms related to donations and payments"
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>RIGHT Housing Terms of Service | Service Usage Terms & Conditions</title>
        <meta 
          name="description" 
          content="Read RIGHT Housing's terms of service for information about using our recovery housing services, support programs, and website. Understand your rights and responsibilities."
        />
        <meta 
          name="keywords" 
          content="RIGHT Housing terms, service terms, usage terms, legal terms, terms and conditions, service agreement, user agreement, legal agreement, service policy, usage policy, terms of use, service conditions, user terms, legal terms and conditions, service rules, usage guidelines, legal requirements, service terms and conditions, user responsibilities, service policies"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RIGHT Housing Terms of Service | Service Usage Terms & Conditions" />
        <meta 
          property="og:description" 
          content="Read RIGHT Housing's terms of service for information about using our recovery housing services, support programs, and website. Understand your rights and responsibilities."
        />

        {/* Twitter */}
        <meta name="twitter:title" content="RIGHT Housing Terms of Service | Service Usage Terms & Conditions" />
        <meta 
          name="twitter:description" 
          content="Read RIGHT Housing's terms of service for information about using our recovery housing services, support programs, and website. Understand your rights and responsibilities."
        />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="article:modified_time" content="2025-01-23" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <LegalDocumentLayout
        title="Terms of Service"
        lastUpdated="January 23, 2025"
      >
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using the Right Housing website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
        </p>

        <h2>2. Services Description</h2>
        <p>
          Right Housing provides transitional housing services and related support to individuals in need. Our services include:
        </p>
        <ul>
          <li>Temporary housing assistance</li>
          <li>Support services and counseling</li>
          <li>Resource connection and referrals</li>
          <li>Online donation processing</li>
          <li>Volunteer coordination</li>
        </ul>

        <h2>3. User Responsibilities</h2>
        <p>When using our services, you agree to:</p>
        <ul>
          <li>Provide accurate and complete information</li>
          <li>Maintain the confidentiality of any account credentials</li>
          <li>Notify us of any unauthorized use of your account</li>
          <li>Use our services in compliance with applicable laws</li>
          <li>Respect the privacy and rights of others</li>
        </ul>

        <h2>4. Donations and Payments</h2>
        <p>
          All donations made through our website are processed securely. By making a donation, you:
        </p>
        <ul>
          <li>Authorize us to charge your payment method</li>
          <li>Confirm that you are the authorized user of the payment method</li>
          <li>Acknowledge that donations are non-refundable unless required by law</li>
        </ul>

        <h2>5. Intellectual Property</h2>
        <p>
          All content on our website, including text, graphics, logos, and images, is the property of Right Housing and is protected by copyright and other intellectual property laws.
        </p>

        <h2>6. Disclaimer of Warranties</h2>
        <p>
          Our services are provided "as is" without any warranties, express or implied. We do not guarantee that our services will be uninterrupted or error-free.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          Right Housing shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
        </p>

        <h2>8. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the updated terms on our website.
        </p>

        <h2>9. Contact Information</h2>
        <p>
          If you have questions about these Terms of Service, please contact us at{" "}
          <a href="mailto:legal@righthousing.org">legal@righthousing.org</a>.
        </p>
      </LegalDocumentLayout>
    </>
  );
};

export default TermsOfService;
