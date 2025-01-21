import { motion } from "framer-motion";
import ContactHero from "./partials/ContactHero";
import MapSection from "./partials/MapSection";
import OfficeHoursSection from "./partials/OfficeHoursSection";
import FAQSection from "./partials/FAQSection";
import CallToActionSection from "../home/partials/CallToActionSection";

/**
 * Contact page component with animated backgrounds and HeroUI components.
 * Features a modern design with smooth animations and interactive elements.
 */
const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white"
    >
      {/* Hero Section with Contact Form */}
      <ContactHero />

      {/* Map Section */}
      <MapSection />

      {/* Office Hours & Support Section */}
      <OfficeHoursSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Call to Action Section */}
      <section className="py-20 bg-success-900 text-white">
        <CallToActionSection />
      </section>
    </motion.div>
  );
};

export default Contact;
