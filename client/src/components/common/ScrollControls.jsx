import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaRocket, FaRobot, FaTimes } from "react-icons/fa";
import { Tooltip } from "@heroui/tooltip";

const ScrollControls = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAI, setShowAI] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="relative"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: { scale: 0, rotate: -45 },
              animate: {
                scale: 1,
                rotate: 0,
                transition: { type: "spring", stiffness: 260, damping: 20 },
              },
              exit: {
                scale: 0,
                rotate: 45,
                transition: { duration: 0.3 },
              },
              hover: {
                y: -5,
                scale: 1.1,
                transition: {
                  duration: 0.3,
                  yoyo: Infinity,
                },
              },
            }}
            whileHover="hover"
          >
            <Tooltip content="Back to top" placement="left">
              <button
                onClick={scrollToTop}
                className="bg-success-600 text-white p-4 rounded-full shadow-lg hover:bg-success-700 focus:outline-none focus:ring-2 focus:ring-success-500 focus:ring-offset-2"
              >
                <FaRocket className="text-2xl" />
                <motion.div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-warning-500 rounded-full blur-sm"
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </button>
            </Tooltip>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="relative"
        initial={{ scale: 0, rotate: 180 }}
        animate={{
          scale: 1,
          rotate: 0,
          transition: { type: "spring", stiffness: 200, damping: 20 },
        }}
      >
        <Tooltip
          content={showAI ? "Close AI Assistant" : "Open AI Assistant"}
          placement="left"
        >
          <button
            onClick={() => setShowAI(!showAI)}
            className="bg-warning-600 text-white p-4 rounded-full shadow-lg hover:bg-warning-700 focus:outline-none focus:ring-2 focus:ring-warning-500 focus:ring-offset-2"
          >
            <motion.div
              animate={{ rotate: showAI ? 180 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {showAI ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaRobot className="text-2xl" />
              )}
            </motion.div>
          </button>
        </Tooltip>
      </motion.div>

      <AnimatePresence>
        {showAI && (
          <motion.div
            className="fixed bottom-28 right-8 w-96 bg-white rounded-xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="bg-warning-600 p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FaRobot className="text-xl" />
                <h3 className="font-semibold">AI Assistant</h3>
              </div>
              <motion.button
                whileHover={{ rotate: 90 }}
                onClick={() => setShowAI(false)}
                className="text-white hover:text-warning-200"
              >
                <FaTimes />
              </motion.button>
            </div>

            <div className="p-4 h-96 flex flex-col">
              <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                {/* Chat messages would go here */}
                <div className="bg-warning-50 p-3 rounded-lg max-w-[80%]">
                  <p className="text-sm">Hello! How can I help you today?</p>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full p-3 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-warning-500"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-warning-600 hover:text-warning-700">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </motion.div>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollControls;
