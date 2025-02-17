import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  memo,
  useCallback,
} from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Quote, Star, ChevronRight, ChevronLeft } from "lucide-react";
import TestimonialBackgroundPattern from "../../../assets/TestimonialBackgroundPattern";
import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/button";

// Memoized star rating component
const StarRating = memo(({ rating }) => (
  <div className="flex gap-1 mb-4">
    {[...Array(rating)].map((_, i) => (
      <Star key={i} className="w-5 h-5 text-success-400 fill-current" />
    ))}
  </div>
));

// Memoized navigation buttons component
const NavigationButtons = memo(({ onPaginate }) => (
  <div className="flex justify-center gap-4 mt-8">
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => onPaginate(-1)}
      className="p-2 rounded-full bg-success-900 hover:bg-success-800 text-success-200"
    >
      <ChevronLeft className="w-6 h-6" />
    </motion.button>
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => onPaginate(1)}
      className="p-2 rounded-full bg-success-900 hover:bg-success-800 text-success-200"
    >
      <ChevronRight className="w-6 h-6" />
    </motion.button>
  </div>
));

// Memoized progress dots component
const ProgressDots = memo(({ total, activeIndex, onDotClick }) => (
  <div className="flex justify-center gap-2 mt-4">
    {[...Array(total)].map((_, index) => (
      <motion.button
        key={index}
        onClick={() => onDotClick(index)}
        className={`w-2 h-2 rounded-full ${
          index === activeIndex ? "bg-success-400" : "bg-success-800"
        }`}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      />
    ))}
  </div>
));

// Memoized testimonial content component
const TestimonialContent = memo(({ testimonial, itemVariants }) => (
  <motion.div variants={itemVariants} className="mb-6">
    <StarRating rating={testimonial.rating} />
    <blockquote className="text-2xl max-[480px]:text-xl font-medium leading-relaxed mb-6 relative">
      <span className="text-success-400">"</span>
      {testimonial.quote}
      <span className="text-success-400">"</span>
    </blockquote>
    <div className="flex items-center gap-4">
      <div>
        <div className="font-semibold text-success-200">
          {testimonial.author}
        </div>
        <div className="text-success-400 text-sm font-elite">
          {testimonial.journey}
        </div>
      </div>
    </div>
  </motion.div>
));

const TestimonialsSection = () => {
  const controls = useAnimation();
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  // Memoize testimonials data
  const testimonials = useMemo(
    () => [
      {
        quote:
          "RIGHT Housing didn't just give me a place to stay – they gave me back my dignity and hope. Through their support, I've rebuilt my life from the ground up.",
        author: "Sarah M.",
        journey: "Recovery Journey | 2 Years",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
        rating: 5,
        highlight: "Rebuilt my life",
      },
      {
        quote:
          "The holistic approach to recovery changed everything. From mental health support to job training, they equipped me with tools for lasting success.",
        author: "Marcus J.",
        journey: "Career Development | 18 Months",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
        rating: 5,
        highlight: "Lasting success",
      },
      {
        quote:
          "Being part of this community showed me I'm not alone. The peer support and understanding I found here have been invaluable to my recovery.",
        author: "Rachel K.",
        journey: "Community Member | 1 Year",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
        rating: 5,
        highlight: "Not alone",
      },
    ],
    []
  );

  // Memoize animation variants
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.3,
          delayChildren: 0.2,
        },
      },
    }),
    []
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 12,
        },
      },
    }),
    []
  );

  const slideVariants = useMemo(
    () => ({
      enter: (direction) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      }),
      center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
      },
      exit: (direction) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      }),
    }),
    []
  );

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const swipeConfidenceThreshold = 10000;
  const swipePower = useCallback((offset, velocity) => {
    return Math.abs(offset) * velocity;
  }, []);

  const paginate = useCallback(
    (newDirection) => {
      const newIndex =
        (activeIndex + newDirection + testimonials.length) %
        testimonials.length;
      setActiveIndex(newIndex);
    },
    [activeIndex, testimonials.length]
  );

  const handleNavigate = useCallback(() => {
    navigate("/impact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [navigate]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden bg-success-950 text-white"
    >
      <div className="absolute inset-0">
        <TestimonialBackgroundPattern className="w-full h-full text-success-200" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative max-w-[1400px] mx-auto px-4 py-24"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center mb-6"
          >
            <Quote className="w-12 h-12 max-[480px]:w-10 max-[480px]:h-10 text-success-400 transform -scale-x-100" />
          </motion.div>

          <h2 className="text-5xl max-[480px]:text-4xl font-bold mb-6 bg-gradient-to-r from-success-400 to-success-200 bg-clip-text text-transparent">
            Voices of <span className="font-agu">Transformation</span>
          </h2>
          <p className="text-xl max-[480px]:text-lg text-success-200 max-w-3xl mx-auto leading-relaxed">
            Real stories from individuals who have found hope, healing, and a
            new beginning through our programs.
          </p>
        </motion.div>

        <div className="relative cursor-grab">
          <motion.div
            key={activeIndex}
            custom={activeIndex}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="flex flex-col md:flex-row items-center gap-12 p-8"
          >
            <motion.div
              variants={itemVariants}
              className="relative w-64 h-64 flex-shrink-0"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-success-400 to-success-600 rounded-3xl transform rotate-6" />
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].author}
                className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-xl"
                loading="lazy"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-success-500 text-white px-4 py-2 rounded-full text-sm font-semibold font-elite"
              >
                {testimonials[activeIndex].journey}
              </motion.div>
            </motion.div>

            <div className="flex-1">
              <TestimonialContent
                testimonial={testimonials[activeIndex]}
                itemVariants={itemVariants}
              />
            </div>
          </motion.div>

          <NavigationButtons onPaginate={paginate} />
          <ProgressDots
            total={testimonials.length}
            activeIndex={activeIndex}
            onDotClick={setActiveIndex}
          />

          <div className="text-center mt-8">
            <Button
              onPress={handleNavigate}
              size="lg"
              color="success"
              variant="shadow"
              className="text-white"
            >
              View all Impact Stories
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default memo(TestimonialsSection);
