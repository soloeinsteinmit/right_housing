import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, ArrowDown } from "lucide-react";
import AnimatedScrollButton from "../../../components/common/AnimatedScrollButton";
import { useEffect, useRef } from "react";

const ContactHero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      description: "Get in touch via email",
      value: "support@righthouseinc.org",
      link: "mailto:support@righthouseinc.org",
      color: "success",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      description: "Speak with our team",
      value: "1-800-RIGHT-HOUSE",
      link: "tel:1-800-RIGHT-HOUSE",
      color: "warning",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Us",
      description: "Come to our office",
      value: "123 Recovery Street, San Francisco",
      link: "https://maps.google.com",
      color: "primary",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const scrollToNextSection = () => {
    const heroSection = document.getElementById("contact-hero");
    const nextSection = heroSection.nextElementSibling;

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Minimalistic wave animation
  const MinimalisticBackground = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="w-full h-full opacity-[0.15]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Top Curved Lines */}
          {[...Array(3)].map((_, i) => (
            <motion.path
              key={i}
              d={`M 0 ${10 + i * 5} Q 50 ${25 + Math.sin(i) * 10} 100 ${
                10 + i * 5
              }`}
              fill="none"
              stroke="#22c55e"
              strokeWidth="0.2"
              initial={{ pathLength: 0, opacity: 0.3 }}
              animate={{
                pathLength: [0, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Top Floating Dots */}
          {[...Array(5)].map((_, i) => (
            <motion.circle
              key={i}
              r="0.3"
              fill="#22c55e"
              initial={{
                x: 20 + i * 15,
                y: 5 + i * 3,
              }}
              animate={{
                y: [5 + i * 3, 0 + i * 3, 5 + i * 3],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Curved Lines */}
          {[...Array(3)].map((_, i) => (
            <motion.path
              key={i + 3}
              d={`M 0 ${85 + i * 5} Q 50 ${75 + Math.sin(i) * 10} 100 ${
                85 + i * 5
              }`}
              fill="none"
              stroke="#22c55e"
              strokeWidth="0.2"
              initial={{ pathLength: 0, opacity: 0.3 }}
              animate={{
                pathLength: [0, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Floating Dots */}
          {[...Array(5)].map((_, i) => (
            <motion.circle
              key={i + 5}
              r="0.3"
              fill="#22c55e"
              initial={{
                x: 20 + i * 15,
                y: 70 + i * 3,
              }}
              animate={{
                y: [70 + i * 3, 65 + i * 3, 70 + i * 3],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-success-50/5 to-transparent" />
      </div>
    );
  };

  return (
    <section
      id="contact-hero"
      ref={sectionRef}
      className="relative bg-gray-50 flex items-center pt-40"
    >
      {/* Minimalistic Animated Background */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ opacity }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-success-50/30 to-warning-50/20"
          style={{ y: backgroundY }}
        />
        <MinimalisticBackground />
      </motion.div>

      <div className="container mx-auto px-4 py-24 relative">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help you on your journey to recovery. Reach out to us
            through any of these channels.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {contactInfo.map((info) => (
            <motion.a
              key={info.title}
              href={info.link}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-white rounded-3xl shadow-lg overflow-hidden"
              target={`${info.title == "Visit Us" ? "_blank" : "_self"}`}
            >
              {/* Card Background Pattern */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              >
                <div className={`absolute inset-0 bg-${info.color}-500`} />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, ${
                      info.color === "success"
                        ? "#22c55e"
                        : info.color === "warning"
                        ? "#f59e0b"
                        : "#3b82f6"
                    } 1px, transparent 0)`,
                    backgroundSize: "20px 20px",
                  }}
                />
              </div>

              {/* Card Content */}
              <div className="relative p-8">
                <div
                  className={`w-16 h-16 mb-6 rounded-2xl bg-${info.color}-100 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className={`text-${info.color}-600`}>{info.icon}</div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-600 mb-4">{info.description}</p>

                <div
                  className={`inline-flex items-center gap-2 text-${info.color}-600 font-semibold group-hover:gap-3 transition-all`}
                >
                  <span>{info.value}</span>
                  <ArrowDown className="w-4 h-4 transform -rotate-45 group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Hover Border */}
                <div
                  className={`absolute bottom-0 left-0 w-full h-1 bg-${info.color}-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex w-full items-center justify-center mt-16"
        >
          <AnimatedScrollButton onClick={scrollToNextSection} />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
