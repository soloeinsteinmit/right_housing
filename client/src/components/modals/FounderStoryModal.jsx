import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Quote, ArrowRight } from "lucide-react";

const FounderStoryModal = ({ isOpen, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.2,
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.2,
        delay: 0.1
      }
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
  };

  const storyParagraphs = [
    {
      text: "In my time as a Population Health Manager in Camden, I bore witness to the fragility of life and how quickly things can spiral out of control. Camden, with its pressing needs and stark realities, showed me a side of the world few ever truly see—where simple mistakes or misfortunes could unravel a person's life in an instant. I saw men and women, through no fault of their own, facing unimaginable hardships. Homelessness, poverty, and isolation weren't just statistics—they were faces I knew by name, people I saw every day, whose stories weighed heavily on my heart.",
      highlight: true,
    },
    {
      text: "When they walked through the doors of our health center, it wasn't just their physical health they needed care for—it was their spirit. These were individuals who had been knocked down by life's relentless tide, and all they were looking for was a lifeline, a hand to help them weather the storm. And in those moments, I realized how powerful our role was—not just in healing bodies, but in restoring hope.",
    },
    {
      text: "It was working with these resilient individuals that truly changed me. I learned that life's fragility isn't just about the physical body, but about the quiet battles people fight in their minds, the uncertainty in their hearts. Yet, I also discovered something remarkable: the transformative power of compassion. It was in the smallest acts of kindness, in the way a hand on the shoulder could reassure someone that they weren't alone, that I saw how deeply our support could impact their journey.",
      highlight: true,
    },
    {
      text: "Every day, I poured myself into not just tending to their immediate needs, but in empowering them to rebuild their lives from the ground up. With my background in healthcare operations and project management, I understood that true change required more than just temporary fixes—it demanded a system, a sustainable solution that would give them a real chance at something better. I worked tirelessly to create pathways for healing—pathways that not only addressed their health but also their hope for the future.",
    },
    {
      text: "Camden became more than just a place to work—it became a mission, a calling that ignited a fire in me I didn't know existed. The work was hard, the stories heartbreaking, but it was in those small, seemingly insignificant moments—when someone walked away with a smile after a long conversation, when a resident found their first job in years, when a family moved into a home after months of searching—that I realized how much change was possible, no matter the odds.",
      highlight: true,
    },
    {
      text: "It taught me that everyone deserves a chance to rise above their circumstances, no matter how deep the struggle. And sometimes, the smallest efforts—the quiet acts of kindness, the steadfast support, the belief in someone's potential—are the sparks that can ignite the greatest transformations. In Camden, I found my purpose: to help others see that a better future isn't just a dream, but a possibility that begins with one simple, compassionate step.",
    },
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 overflow-hidden"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop with click handler */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl"
                onClick={(e) => e.stopPropagation()} // Prevent clicks from reaching backdrop
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors duration-200"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>

                {/* Content */}
                <div className="p-8 md:p-12">
                  {/* Header */}
                  <div className="text-center mb-12">
                    <Quote className="w-12 h-12 text-success-400 mx-auto mb-6" />
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-success-600 to-success-800 bg-clip-text text-transparent">
                      A Journey of Purpose
                    </h2>
                    <p className="text-xl text-gray-600">
                      The story behind RIGHT Housing's founding mission
                    </p>
                  </div>

                  {/* Story Content */}
                  <div className="space-y-8">
                    {storyParagraphs.map((paragraph, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`text-lg leading-relaxed ${
                          paragraph.highlight
                            ? "p-6 bg-success-50 rounded-2xl border-l-4 border-success-500"
                            : "text-gray-600"
                        }`}
                      >
                        <p>{paragraph.text}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-12 text-center">
                    <div className="inline-flex items-center justify-center space-x-2 text-success-600 font-medium">
                      <span>Anita Parker</span>
                      <ArrowRight className="w-4 h-4" />
                      <span>Founder, RIGHT Housing</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FounderStoryModal;
