import { Helmet } from "react-helmet-async";
import LegalDocumentLayout from "../../components/legal/LegalDocumentLayout";

const PrivacyPolicy = () => {
  // SEO structured data for privacy policy
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "RIGHT Housing Privacy Policy",
    "description": "Our privacy policy outlines how RIGHT Housing collects, uses, and protects your personal information when using our services and website.",
    "publisher": {
      "@type": "Organization",
      "name": "RIGHT Housing Inc.",
      "url": "https://righthousing.org"
    },
    "dateModified": "2025-01-23",
    "about": {
      "@type": "Thing",
      "name": "Privacy Policy",
      "description": "Information about data collection, usage, and protection practices"
    },
    "mainEntity": {
      "@type": "WebPageElement",
      "name": "Privacy Policy Content",
      "hasPart": [
        {
          "@type": "WebPageElement",
          "name": "Information Collection",
          "description": "Details about personal and automatically collected information"
        },
        {
          "@type": "WebPageElement",
          "name": "Information Usage",
          "description": "How we use and protect your information"
        },
        {
          "@type": "WebPageElement",
          "name": "Information Sharing",
          "description": "Our policies on sharing information with third parties"
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>RIGHT Housing Privacy Policy | Data Protection & Privacy Information</title>
        <meta 
          name="description" 
          content="Learn about RIGHT Housing's privacy policy, including how we collect, use, and protect your personal information when using our recovery housing and support services."
        />
        <meta 
          name="keywords" 
          content="RIGHT Housing privacy policy, data protection policy, privacy information, personal data protection, information security, data collection policy, privacy practices, data usage policy, information sharing policy, privacy rights, data security measures, confidentiality policy, personal information protection, privacy guidelines, data privacy, information protection, privacy statement, data handling policy, privacy terms, data safeguards"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RIGHT Housing Privacy Policy | Data Protection & Privacy Information" />
        <meta 
          property="og:description" 
          content="Learn about RIGHT Housing's privacy policy, including how we collect, use, and protect your personal information when using our recovery housing and support services."
        />

        {/* Twitter */}
        <meta name="twitter:title" content="RIGHT Housing Privacy Policy | Data Protection & Privacy Information" />
        <meta 
          name="twitter:description" 
          content="Learn about RIGHT Housing's privacy policy, including how we collect, use, and protect your personal information when using our recovery housing and support services."
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
        title="Privacy Policy"
        lastUpdated="January 23, 2025"
      >
        <h2>1. Introduction</h2>
        <p>
          Right Housing ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
        </p>

        <h2>2. Information We Collect</h2>
        <h3>2.1 Personal Information</h3>
        <p>
          We may collect personal information that you voluntarily provide to us when you:
        </p>
        <ul>
          <li>Fill out forms on our website</li>
          <li>Make a donation</li>
          <li>Sign up for our newsletter</li>
          <li>Contact us for support</li>
          <li>Apply for housing assistance</li>
        </ul>

        <h3>2.2 Automatically Collected Information</h3>
        <p>
          When you visit our website, we automatically collect certain information about your device and usage of the website.
        </p>

        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Process your donations and applications</li>
          <li>Communicate with you about our services</li>
          <li>Improve our website and services</li>
          <li>Send you updates and newsletters (with your consent)</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>4. Information Sharing</h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share your information with:
        </p>
        <ul>
          <li>Service providers who assist in our operations</li>
          <li>Legal authorities when required by law</li>
          <li>Partners who help provide housing services</li>
        </ul>

        <h2>5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of marketing communications</li>
        </ul>

        <h2>6. Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
        </p>

        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at{" "}
          <a href="mailto:legal@righthousing.org">legal@righthousing.org</a>.
        </p>
      </LegalDocumentLayout>
    </>
  );
};

export default PrivacyPolicy;
