import React, { useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/button";
import usePulseAnimation, {
  PULSE_COLORS,
} from "../../../hooks/usePulseAnimation";
import happy_peoples from "../../../assets/happy_peoples.avif";

// Memoized SVG components
const WavePath = React.memo(({ d, delay = 0, className }) => (
  <motion.path
    d={d}
    stroke="currentColor"
    strokeWidth="0.5"
    fill="none"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 2, delay, repeat: Infinity }}
    className={className}
  />
));

const UnderlinePath = React.memo(() => (
  <motion.svg
    className="absolute -bottom-2 left-0 w-full"
    viewBox="0 0 100 10"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ delay: 1, duration: 1 }}
  >
    <path
      d="M0,5 C25,0 75,10 100,5"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      className="text-success-500"
    />
  </motion.svg>
));

const ThreePillars = () => {
  const navigate = useNavigate();
  const pulseVariant = usePulseAnimation({
    color: PULSE_COLORS.SUCCESS,
  });

  // Memoize sections data
  const sections = useMemo(
    () => [
      {
        id: "origins",
        title: "Born from Experience, Driven by Purpose",
        subtitle: "Our Origins",
        content: `In the heart of our communities, we have seen how quickly life can unravel—how a single misstep, an unexpected hardship, or an unforgiving system can push individuals into homelessness, isolation, or despair. Too often, those struggling with addiction, reentry, or mental health challenges find themselves without a place to turn, without the support they need to rebuild.

      RIGHT Housing was born from this reality—not just as a shelter, but as a foundation for renewal. We believe that a home is more than just four walls; it is a space where healing begins, where dignity is restored, and where hope is rekindled. Our mission is simple yet profound: to provide stability, support, and a second chance to those seeking to rise above their circumstances.
      
      Every person deserves an opportunity to reclaim their future. At RIGHT Housing, we are committed to walking alongside them—one step, one story, and one transformed life at a time.`,
        image:
          "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&w=1200&q=55",
        position: "left",
      },
      {
        id: "recovery",
        title: "The Path to Recovery",
        subtitle: "Breaking the Cycle",
        content: `Recovery isn't just about overcoming addiction – it's about rediscovering your worth, your strength, and your place in the world. We understand that the journey to sobriety is deeply personal, filled with both triumphs and challenges. Our community stands as a testament to the power of shared experiences and mutual support.

      Here, you'll find more than just a program – you'll find a family of individuals who understand your struggles, celebrate your victories, and support you through every step of your recovery journey. Through structured support, peer connections, and a stable environment, we help you rebuild not just your life, but your sense of purpose.`,
        image:
          "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&w=1200&q=55",
        position: "right",
        highlight: "73% of our residents maintain long-term recovery",
      },
      {
        id: "reentry",
        title: "Breaking Barriers, Building Futures",
        subtitle: "A New Chapter",
        content: `The journey after incarceration is about more than finding housing – it's about reclaiming your dignity and your place in society. We understand that the stigma and barriers you face can seem insurmountable, but we believe in your potential to write a new chapter in your life story.

      Our reentry support program provides more than just shelter; we offer a comprehensive support system that includes job training, legal assistance, and community connections. Here, your past doesn't define you – it's your commitment to change and growth that matters.`,
        image:
          "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&w=1200&q=55",
        position: "left",
        highlight: "Over 200 individuals successfully reintegrated",
      },
      {
        id: "mental-health",
        title: "Healing Hearts and Minds",
        subtitle: "Mental Wellness Journey",
        content: `Mental health challenges can make you feel like you're fighting an invisible battle alone. At RIGHT Housing, we create a space where it's okay to not be okay, where your struggles are acknowledged, and your journey to wellness is supported with compassion and understanding.

      Our approach to mental health support combines professional care with peer support, creating an environment where healing happens naturally. We believe in treating the whole person – mind, body, and spirit – because true wellness comes from addressing all aspects of your well-being.`,
        image:
          "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&w=1200&q=55",
        position: "right",
        highlight: "85% report improved mental well-being",
      },
    ],
    []
  );

  // Memoized background waves
  const BackgroundWaves = useMemo(
    () => (
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <WavePath
            d="M0,50 C20,60 40,40 60,50 S80,60 100,50"
            className="text-success-400"
          />
          <WavePath
            d="M0,30 C20,40 40,20 60,30 S80,40 100,30"
            delay={0.5}
            className="text-amber-400"
          />
        </svg>
      </div>
    ),
    []
  );

  // Memoized section renderer
  const renderSection = useCallback(
    (section, index) => (
      <div
        key={section.id}
        className={`relative py-32 ${
          index % 2 === 0 ? "bg-success-50/50" : "bg-warning-50/50"
        }`}
      >
        {/* Connecting Line */}
        <div className="absolute inset-0 flex justify-center">
          <div className="w-px bg-gradient-to-b from-success-200 via-amber-200 to-success-200" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`grid lg:grid-cols-2 gap-16 items-center ${
              section.position === "right"
                ? "lg:grid-flow-row"
                : "lg:grid-flow-row-dense"
            }`}
          >
            {/* Content */}
            <motion.div
              initial={{
                opacity: 0,
                x: section.position === "right" ? -50 : 50,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`text-${
                section.position === "right" ? "right" : "left"
              } lg:text-left space-y-6`}
            >
              <div className="inline-block">
                <span className="text-success-500 font-medium text-sm tracking-wider uppercase">
                  {section.subtitle}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                {section.title}
              </h3>
              <div className="text-xl text-gray-600 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
              {section.highlight && (
                <div className="inline-block bg-success-50 border border-success-200 rounded-lg px-6 py-4">
                  <p className="text-success-700 font-medium">
                    {section.highlight}
                  </p>
                </div>
              )}
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`relative ${
                section.position === "right"
                  ? "lg:order-first"
                  : "lg:order-last"
              }`}
            >
              {/* Background Decorative Elements */}
              <div className="absolute -inset-4 z-0">
                {/* Tilted Background */}
                <div className="absolute inset-0 transform -rotate-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-success-100 to-amber-100 rounded-2xl" />
                </div>
                <div className="absolute inset-0 transform rotate-3">
                  <div className="absolute inset-0 bg-gradient-to-l from-success-50 to-amber-50 rounded-2xl" />
                </div>
              </div>

              {/* Main Image Container */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                {/* Decorative Pattern Overlay */}
                <div className="absolute inset-0 z-20 mix-blend-soft-light opacity-30">
                  <div className="absolute inset-0 bg-gradient-to-br from-success-500/20 to-amber-500/20" />
                  <svg
                    className="absolute inset-0 w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <pattern
                      id="pattern-circles"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle
                        cx="10"
                        cy="10"
                        r="1.5"
                        fill="currentColor"
                        className="text-success-200"
                      />
                    </pattern>
                    <rect
                      x="0"
                      y="0"
                      width="100%"
                      height="100%"
                      fill="url(#pattern-circles)"
                    />
                  </svg>
                </div>

                {/* Side Accent Lines */}
                <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-success-500/50 via-amber-500/50 to-success-500/50" />
                <div className="absolute right-0 top-0 h-full w-1.5 bg-gradient-to-b from-amber-500/50 via-success-500/50 to-amber-500/50" />

                {/* Top Corner Accents */}
                <div className="absolute top-0 left-0 w-32 h-32">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-success-500 to-transparent" />
                  <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-success-500 to-transparent" />
                </div>
                <div className="absolute top-0 right-0 w-32 h-32">
                  <div className="absolute top-0 right-0 w-full h-[3px] bg-gradient-to-l from-amber-500 to-transparent" />
                  <div className="absolute top-0 right-0 w-[3px] h-full bg-gradient-to-b from-amber-500 to-transparent" />
                </div>

                {/* Main Image */}
                <div className="relative">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-[500px] object-cover"
                  />

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
                </div>

                {/* Bottom Corner Accents */}
                <div className="absolute bottom-0 left-0 w-32 h-32">
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-success-500 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-[3px] h-full bg-gradient-to-t from-success-500 to-transparent" />
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32">
                  <div className="absolute bottom-0 right-0 w-full h-[3px] bg-gradient-to-l from-amber-500 to-transparent" />
                  <div className="absolute bottom-0 right-0 w-[3px] h-full bg-gradient-to-t from-amber-500 to-transparent" />
                </div>
              </div>

              {/* Floating Background Elements */}
              <div className="absolute -top-12 -left-12 w-48 h-48 z-0">
                <div className="absolute inset-0 bg-success-500/10 rounded-full blur-3xl transform -rotate-12" />
              </div>
              <div className="absolute -bottom-12 -right-12 w-56 h-56 z-0">
                <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-3xl transform rotate-12" />
              </div>

              {/* Decorative Lines */}
              <div className="absolute -inset-px z-20">
                <svg
                  className="absolute top-0 left-0 w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,0 L100,100"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-success-500/20"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d="M100,0 L0,100"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-amber-500/20"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    ),
    []
  );

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section with Full-width Image */}
      <div className="relative h-screen min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            // src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=55"
            src={happy_peoples}
            alt="Community support"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
        </div>

        {BackgroundWaves}

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <h2 className="text-success-400 text-lg font-medium mb-4 uppercase tracking-wider">
              What Makes RIGHT Housing Exist?
            </h2> */}
            <motion.h3
              className="text-5xl font-bold text-white mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Transforming Lives Through
              <span className="relative">
                <span className="relative z-10">
                  {" "}
                  Recovery, Reentry, & Mental Health
                </span>
                {/* <UnderlinePath /> */}
              </span>
            </motion.h3>
            <p className="text-xl text-gray-200 leading-relaxed">
              At RIGHT Housing, we believe in the power of second chances and
              the strength of community to transform lives. Every person
              deserves the opportunity to rebuild, recover, and thrive.
            </p>
            <motion.button
              // to="/donate"
              className="inline-flex items-center gap-2 bg-success text-white px-8 py-3 rounded-full hover:bg-success-600 transition-colors mt-5"
              variants={pulseVariant}
              initial="initial"
              animate="animate"
              whileTap="tap"
              onClick={() => {
                navigate("/donate");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Help Lift Someone Up
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Flowing Sections */}
      <AnimatePresence>
        {sections.map((section, index) => renderSection(section, index))}
      </AnimatePresence>

      {/* Call to Action */}
      <div className="relative py-24 bg-gradient-to-b from-warning-50/50 to-warning-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Join Us in Making a Difference
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Together, we can create more than just housing – we can build
            communities where recovery, reintegration, and mental wellness
            flourish.
          </p>
          <Button
            onPress={() => {
              navigate("/apply");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            color="success"
            size="lg"
            radius="sm"
            className="text-white group"
            endContent={
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            }
          >
            Begin Your Journey Today
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default React.memo(ThreePillars);
