import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

// Animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

const locations = [
  {
    name: "RIGHT Housing Recovery Center",
    address: "123 Recovery Street",
    city: "San Francisco, CA 94105",
    phone: "(415) 555-0123",
    hours: "24/7 Support Available",
    services: ["Housing Support", "Recovery Programs", "Counseling Services"],
  },
  {
    name: "Transition Support Office",
    address: "456 Hope Avenue",
    city: "San Francisco, CA 94110",
    phone: "(415) 555-0456",
    hours: "Mon-Fri: 8AM-8PM",
    services: ["Case Management", "Life Skills Training", "Job Placement"],
  },
];

const BackgroundPattern = React.memo(() => (
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[url('/patterns/dot-grid.svg')] opacity-5" />
    <div className="absolute inset-0 bg-gradient-to-br from-success-50/20 to-gray-50/20" />
  </div>
));

const SectionHeader = React.memo(() => (
  <motion.div
    variants={fadeInVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="text-center mb-12"
  >
    <h2 className="text-4xl font-bold text-gray-900 mb-4">
      Recovery Support Centers
    </h2>
    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
      Visit our support centers to learn about our comprehensive recovery
      programs and housing solutions. Our team is ready to assist you on your
      journey to stability and independence.
    </p>
  </motion.div>
));

const LocationCard = React.memo(({ location, index }) => (
  <motion.div
    variants={fadeInVariants}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
  >
    <div className="flex items-start gap-4 mb-6">
      <div className="w-12 h-12 bg-success-100 rounded-xl flex items-center justify-center flex-shrink-0">
        <MapPin className="w-6 h-6 text-success-600" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {location.name}
        </h3>
        <p className="text-gray-600">{location.address}</p>
        <p className="text-gray-600">{location.city}</p>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="flex items-center gap-2">
        <Clock className="w-5 h-5 text-success-600" />
        <span className="text-sm text-gray-600">{location.hours}</span>
      </div>
      <div className="flex items-center gap-2">
        <Phone className="w-5 h-5 text-success-600" />
        <span className="text-sm text-gray-600">{location.phone}</span>
      </div>
    </div>

    <div className="border-t border-gray-100 pt-4">
      <h4 className="text-sm font-semibold text-gray-900 mb-3">
        Available Services:
      </h4>
      <div className="flex flex-wrap gap-2">
        {location.services.map((service, idx) => (
          <span
            key={idx}
            className="text-xs px-3 py-1 bg-success-50 text-success-700 rounded-full"
          >
            {service}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
));

const MapContainer = React.memo(() => (
  <motion.div
    variants={scaleInVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="relative"
  >
    <div className="bg-gray-100 rounded-2xl h-[500px] relative overflow-hidden">
      <iframe
        title="RIGHT Housing Locations"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.95043677917!2d-122.43913267753918!3d37.77492951927382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858080b0f744d9%3A0x6cf7a313d6a53ec7!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-2xl"
      />

      <MapOverlay />
    </div>
  </motion.div>
));

const MapOverlay = React.memo(() => (
  <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-md">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-success-100 rounded-full flex items-center justify-center">
        <MapPin className="w-5 h-5 text-success-600" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">Get Directions</h4>
        <a
          href="https://goo.gl/maps/your-location-link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-success-600 hover:text-success-700"
        >
          View on Google Maps
        </a>
      </div>
    </div>
  </div>
));

const MapSection = () => {
  return (
    <section className="bg-white py-16 relative overflow-hidden">
      <BackgroundPattern />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader />

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {locations.map((location, index) => (
            <LocationCard key={index} location={location} index={index} />
          ))}
        </div>

        <MapContainer />
      </div>
    </section>
  );
};

export default React.memo(MapSection);
