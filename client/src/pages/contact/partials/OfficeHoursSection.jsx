import React from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Phone,
  HeartPulse,
  Users,
  Brain,
  Home,
  BatteryPlus,
} from "lucide-react";

// Animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const slideInVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: { delay: index * 0.1 },
  }),
};

const supportHours = [
  {
    day: "Monday - Friday",
    hours: "8:00 AM - 8:00 PM",
    type: "Full Services",
  },
  { day: "Saturday", hours: "9:00 AM - 5:00 PM", type: "Limited Services" },
  { day: "Sunday", hours: "10:00 AM - 4:00 PM", type: "Limited Services" },
  {
    day: "24/7 Crisis Support",
    hours: "Always Available",
    type: "Emergency Services",
  },
];

const supportServices = [
  {
    icon: <BatteryPlus className="w-6 h-6" />,
    title: "Recovery Support",
    description:
      "Comprehensive addiction recovery programs and mental health services",
    availability: "24/7 Crisis Support",
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Housing Assistance",
    description:
      "Emergency shelter and transitional housing placement services",
    availability: "Regular Hours + Emergency",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Counseling Services",
    description: "Individual and group therapy sessions for recovery support",
    availability: "By Appointment",
  },
];

const BackgroundPattern = React.memo(() => (
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-64 h-64 bg-success-100 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 right-0 w-64 h-64 bg-warning-100 rounded-full filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />
  </div>
));

const SectionHeader = React.memo(() => (
  <motion.div
    variants={fadeInVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <h2 className="text-4xl max-[480px]:text-3xl font-bold text-gray-900 mb-4">
      Support Hours & Services
    </h2>
    <p className="text-xl max-[480px]:text-lg text-gray-600 max-w-2xl mx-auto">
      Our doors are always open for those seeking help. With 24/7 crisis support
      and comprehensive recovery services, we're here when you need us most.
    </p>
  </motion.div>
));

const ScheduleItem = React.memo(({ schedule, index }) => (
  <motion.div
    custom={index}
    variants={slideInVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-gray-100 last:border-0"
  >
    <div>
      <span className="text-gray-900 font-medium">{schedule.day}</span>
      <span className="text-sm text-success-600 block sm:inline sm:ml-2">
        ({schedule.type})
      </span>
    </div>
    <span className="font-semibold text-gray-700">{schedule.hours}</span>
  </motion.div>
));

const EmergencyContact = React.memo(() => (
  <div className="mt-8 bg-success-50 rounded-xl p-6">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-success-100 rounded-xl flex items-center justify-center flex-shrink-0">
        <Phone className="w-6 h-6 text-success-600" />
      </div>
      <div>
        <h4 className="font-bold text-gray-900 mb-2">24/7 Crisis Support</h4>
        <p className="text-gray-600 mb-3">
          Immediate assistance available for housing and recovery emergencies
        </p>
        <a
          href="tel:1-800-RIGHT-HOUSE"
          className="text-lg font-bold text-success-600 hover:text-success-700 transition-colors"
        >
          1-800-RIGHT-HOUSE
        </a>
      </div>
    </div>
  </div>
));

const ServiceCard = React.memo(({ service, index }) => (
  <motion.div
    custom={index}
    variants={slideInVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="group"
  >
    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-warning-50 transition-colors">
      <div className="w-12 h-12 bg-warning-100 rounded-xl flex items-center justify-center flex-shrink-0">
        {service.icon}
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-bold text-gray-900">{service.title}</h4>
          <span className="text-xs px-2 py-1 bg-warning-100 text-warning-700 rounded-full">
            {service.availability}
          </span>
        </div>
        <p className="text-gray-600">{service.description}</p>
      </div>
    </div>
  </motion.div>
));

const OfficeHoursSection = () => {
  return (
    <section className="bg-gray-50 py-16 relative overflow-hidden">
      <BackgroundPattern />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader />

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Hours of Operation Card */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-success-100 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-success-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Hours of Operation
              </h3>
            </div>

            <div className="space-y-6">
              {supportHours.map((schedule, index) => (
                <ScheduleItem key={index} schedule={schedule} index={index} />
              ))}
            </div>

            <EmergencyContact />
          </motion.div>

          {/* Support Services Card */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-warning-100 rounded-xl flex items-center justify-center">
                <HeartPulse className="w-6 h-6 text-warning-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Recovery Services
              </h3>
            </div>

            <div className="space-y-6">
              {supportServices.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}

              <div className="mt-8 p-6 bg-warning-50 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-2">
                  Need Immediate Help?
                </h4>
                <p className="text-gray-600">
                  Don't hesitate to reach out. Our recovery support team is here
                  to assist you 24/7, providing guidance and support when you
                  need it most.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(OfficeHoursSection);
