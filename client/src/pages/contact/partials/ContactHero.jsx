import { motion } from "framer-motion";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";

const ContactHero = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 -z-1 opacity-20">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-30" />
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Connection Lines Pattern */}
          <g className="connection-lines">
            {[...Array(12)].map((_, i) => (
              <motion.path
                key={i}
                d={`M${100 + i * 100},50 Q${200 + i * 80},400 ${100 + i * 100},750`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-success-300"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 3,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            ))}
          </g>

          {/* Floating Elements */}
          <g className="floating-elements">
            {[...Array(8)].map((_, i) => (
              <g key={i}>
                <motion.circle
                  cx={150 + i * 150}
                  cy={100 + (i % 3) * 300}
                  r="8"
                  fill="currentColor"
                  className="text-success-400"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <motion.rect
                  x={180 + i * 150}
                  y={150 + (i % 2) * 400}
                  width="12"
                  height="12"
                  fill="currentColor"
                  className="text-warning-400"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  transition={{
                    duration: 4,
                    delay: i * 0.3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </g>
            ))}
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-success-600 to-success-800">
                Let's Start Your
              </span>
              <br />
              <span className="text-gray-900">Housing Journey</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Have questions or need assistance? Our team is here to help you find the
              perfect housing solution tailored to your needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-success-50 text-success-700 px-6 py-3 rounded-full"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>24/7 Support Available</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-warning-50 text-warning-700 px-6 py-3 rounded-full"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Quick Response Time</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-success-500/20 to-warning-500/20 transform rotate-3 rounded-2xl" />
            <form onSubmit={handleSubmit} className="bg-white backdrop-blur-lg bg-opacity-95 rounded-2xl p-8 shadow-xl relative">
              <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6 mb-6">
                <Input
                  label="First Name"
                  placeholder="John"
                  required
                  className="w-full focus:ring-success-500"
                />
                <Input
                  label="Last Name"
                  placeholder="Doe"
                  required
                  className="w-full focus:ring-success-500"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                <Input
                  label="Email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="w-full focus:ring-success-500"
                />
                <Input
                  label="Subject"
                  placeholder="How can we help?"
                  required
                  className="w-full focus:ring-success-500"
                />
                <Textarea
                  label="Message"
                  placeholder="Tell us more about your inquiry..."
                  required
                  className="w-full focus:ring-success-500"
                  rows={6}
                />
                <motion.div className="flex justify-end" whileHover={{ scale: 1.02 }}>
                  <Button
                    type="submit"
                    className="bg-success-600 text-white px-8 py-3 rounded-full hover:bg-success-700 transition-colors"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
