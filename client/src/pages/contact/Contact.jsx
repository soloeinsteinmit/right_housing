import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import ContactHero from "./partials/ContactHero";
import MapSection from "./partials/MapSection";
import OfficeHoursSection from "./partials/OfficeHoursSection";
import FAQSection from "./partials/FAQSection";
import CallToActionSection from "../home/partials/CallToActionSection";
import { useState } from "react";
import { Mail, Phone, MessageSquare, Calendar, Send } from "lucide-react";
import ContactForm from "./partials/ContactForm";

/**
 * Contact page component with animated backgrounds and HeroUI components.
 * Features a modern design with smooth animations and interactive elements.
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferredContact: "email",
    bestTime: "morning",
  });

  const [activeStep, setActiveStep] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formSteps = [
    { number: 1, title: "Personal Info" },
    { number: 2, title: "Contact Details" },
    { number: 3, title: "Message" },
  ];

  // SEO structured data for Contact page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact RIGHT Housing Inc.",
    "description": "Get in touch with RIGHT Housing for housing support, recovery services, or program information. We're here to help you start your journey to recovery and independence.",
    "mainEntity": {
      "@type": "Organization",
      "name": "RIGHT Housing Inc.",
      "description": "Providing transitional housing and comprehensive support services for individuals in recovery and reentry.",
      "url": "https://righthousing.org",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-XXX-XXX-XXXX",
        "contactType": "customer service",
        "areaServed": "Camden",
        "availableLanguage": "English",
        "hoursAvailable": "Mo-Fr 09:00-17:00"
      },
      "location": {
        "@type": "Place",
        "name": "RIGHT Housing Main Office",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Camden",
          "addressRegion": "NJ",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "XX.XXXXX",
          "longitude": "-XX.XXXXX"
        }
      }
    }
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Contact RIGHT Housing | Get Support for Recovery & Housing Services</title>
        <meta 
          name="description" 
          content="Contact RIGHT Housing for information about our transitional housing, recovery support, and comprehensive services. We're here to help you start your journey to recovery and independence."
        />
        <meta 
          name="keywords" 
          content="contact RIGHT Housing, housing support contact, recovery services contact, RIGHT Housing location, Camden housing support, contact recovery services, housing assistance contact, support services contact, RIGHT Housing address, RIGHT Housing phone, RIGHT Housing email, recovery support contact, transitional housing inquiry, program information, housing application, support services inquiry, recovery program contact, Camden housing assistance, housing support office, recovery support office"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact RIGHT Housing | Get Support for Recovery & Housing Services" />
        <meta 
          property="og:description" 
          content="Contact RIGHT Housing for information about our transitional housing, recovery support, and comprehensive services. We're here to help you start your journey to recovery and independence."
        />

        {/* Twitter */}
        <meta name="twitter:title" content="Contact RIGHT Housing | Get Support for Recovery & Housing Services" />
        <meta 
          name="twitter:description" 
          content="Contact RIGHT Housing for information about our transitional housing, recovery support, and comprehensive services. We're here to help you start your journey to recovery and independence."
        />

        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

        {/* Additional Meta Tags for Local SEO */}
        <meta name="geo.region" content="US-NJ" />
        <meta name="geo.placename" content="Camden" />
        <meta name="geo.position" content="XX.XXXXX;-XX.XXXXX" />
        <meta name="ICBM" content="XX.XXXXX, -XX.XXXXX" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <ContactHero />
        <MapSection />
        <OfficeHoursSection />
        <ContactForm 
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          formSteps={formSteps}
        />
        <FAQSection />
        <CallToActionSection />
      </div>
    </>
  );
};

export default Contact;
