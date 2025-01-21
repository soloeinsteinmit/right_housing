import { motion } from "framer-motion";
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

  return (
    <div className="min-h-screen bg-white">
      <ContactHero />

      <ContactForm />
      <OfficeHoursSection />

      <MapSection />
      <FAQSection />
      <section className="py-20 bg-success-900 text-white">
        <CallToActionSection />
      </section>
    </div>
  );
};

export default Contact;
