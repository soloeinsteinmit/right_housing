import { memo, useCallback } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/button";

// Animation variants
const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.15,
      ease: "easeOut",
    },
  }),
};

const quoteIconVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      delay: 0.3,
      duration: 0.4,
      type: "spring",
    },
  },
};

const decorativeVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6 },
  },
};

const stories = [
  {
    quote:
      "Thanks to the generous donations, I now have a safe place to call home. It's changed my life completely.",
    author: "Sarah M.",
    role: "Program Beneficiary",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
  },
  {
    quote:
      "The support we received helped us get back on our feet. We're forever grateful.",
    author: "James & Family",
    role: "Housing Recipients",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80",
  },
  {
    quote:
      "Seeing the direct impact of donations on families is truly inspiring. Every contribution matters.",
    author: "Dr. Emily Chen",
    role: "Program Director",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
  },
];

const SectionHeader = memo(() => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, margin: "-50px" }}
    variants={fadeInVariant}
    className="text-center mb-16"
  >
    <h2 className="text-4xl max-[480px]:text-3xl font-bold text-gray-900 mb-4">
      Stories of Impact
    </h2>
    <p className="text-xl max-[480px]:text-lg text-gray-600 max-w-2xl mx-auto">
      See how your donations make a real difference in people's lives
    </p>
  </motion.div>
));

SectionHeader.displayName = "SectionHeader";

const StoryCard = memo(({ story, index }) => (
  <motion.div
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    className="p-6 relative transition-shadow duration-300 border border-success-200"
  >
    {/* Quote Icon */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={quoteIconVariants}
      viewport={{ once: true }}
      className="absolute -top-4 -left-4 w-8 h-8 bg-success-500 rounded-full flex items-center justify-center text-white shadow-lg"
    >
      <Quote className="w-4 h-4" />
    </motion.div>

    {/* Story Content */}
    <div className="mb-6">
      <p className="text-gray-700 italic mb-4">{story.quote}</p>
      <div className="flex items-center gap-4">
        <img
          src={story.image}
          alt={story.author}
          className="w-12 h-12 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{story.author}</h4>
          <p className="text-sm text-gray-600">{story.role}</p>
        </div>
      </div>
    </div>

    {/* Decorative Elements */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={decorativeVariants}
      transition={{ delay: index * 0.15 + 0.5 }}
      viewport={{ once: true }}
      className="absolute bottom-0 left-0 w-full h-1 bg-success-500/20 origin-left"
    />
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={decorativeVariants}
      transition={{ delay: index * 0.15 + 0.7 }}
      viewport={{ once: true }}
      className="absolute bottom-0 left-0 w-1/3 h-1 bg-success-500 origin-left"
    />
  </motion.div>
));

StoryCard.displayName = "StoryCard";

const CtaSection = memo(() => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate("/impact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [navigate]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeInVariant}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true, margin: "-50px" }}
      className="text-center mt-16"
    >
      <p className="text-xl text-gray-600 mb-8">
        Join us in creating more inspiring stories of transformation and hope
      </p>
      <Button
        color="success"
        variant="shadow"
        size="lg"
        className="text-white"
        onPress={handleClick}
      >
        Discover More Success Stories
      </Button>
    </motion.div>
  );
});

CtaSection.displayName = "CtaSection";

const ImpactStories = () => {
  return (
    <section className="py-24 bg-success-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeader />

        {/* Stories Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto max-[670px]:ml-3">
          {stories.map((story, index) => (
            <StoryCard key={story.author} story={story} index={index} />
          ))}
        </div>

        <CtaSection />
      </div>
    </section>
  );
};

ImpactStories.displayName = "ImpactStories";

export default memo(ImpactStories);
