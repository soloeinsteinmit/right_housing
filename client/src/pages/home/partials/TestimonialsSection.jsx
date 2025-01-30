import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Quote, Star, ChevronRight, ChevronLeft } from "lucide-react";
import TestimonialBackgroundPattern from "../../../assets/TestimonialBackgroundPattern";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@heroui/button";

const TestimonialsSection = () => {
  const controls = useAnimation();
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const testimonials = [
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
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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
  };

  const slideVariants = {
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
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    const newIndex =
      (activeIndex + newDirection + testimonials.length) % testimonials.length;
    setActiveIndex(newIndex);
  };

  return (
    <div
      ref={ref}
      className="relative overflow-hidden bg-success-950 text-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <TestimonialBackgroundPattern className="w-full h-full text-success-200" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative max-w-[1400px] mx-auto px-4 py-24"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center mb-6"
          >
            <Quote className="w-12 h-12 text-success-400 transform -scale-x-100" />
          </motion.div>

          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-success-400 to-success-200 bg-clip-text text-transparent">
            Voices of Transformation
          </h2>
          <p className="text-xl text-success-200 max-w-3xl mx-auto leading-relaxed">
            Real stories from individuals who have found hope, healing, and a
            new beginning through our programs.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
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
            {/* Image Section */}
            <motion.div
              variants={itemVariants}
              className="relative w-64 h-64 flex-shrink-0"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-success-400 to-success-600 rounded-3xl transform rotate-6" />
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].author}
                className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-xl"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-success-500 text-success-950 px-4 py-2 rounded-full text-sm font-semibold"
              >
                {testimonials[activeIndex].journey}
              </motion.div>
            </motion.div>

            {/* Content Section */}
            <div className="flex-1">
              <motion.div variants={itemVariants} className="mb-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-success-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-2xl font-medium leading-relaxed mb-6 relative">
                  <span className="text-success-400">"</span>
                  {testimonials[activeIndex].quote}
                  <span className="text-success-400">"</span>
                </blockquote>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="font-semibold text-success-200">
                      {testimonials[activeIndex].author}
                    </div>
                    <div className="text-success-400 text-sm">
                      {testimonials[activeIndex].journey}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="p-2 rounded-full bg-success-900 hover:bg-success-800 text-success-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="p-2 rounded-full bg-success-900 hover:bg-success-800 text-success-200"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  index === activeIndex ? "bg-success-400" : "bg-success-800"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              onPress={() => {
                navigate("/impact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              size="lg"
              color="success"
              variant="shadow"
              className="text-white"
            >
              View all Impact Stories
            </Button>
            {/* <Link
              to={"/impact"}
              className="text-success-200 text-center text-lg relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-success-200 after:transition-all after:duration-300 hover:after:w-full"
            >
              View all Impact Stories
            </Link> */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TestimonialsSection;
