import React, { useMemo, memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  HandHeart,
  Handshake,
  ChevronRight,
  ArrowUpRight,
  Coins,
} from "lucide-react";
import Marquee from "react-fast-marquee";

// Memoized category data
const categories = [
  {
    title: "Become a Member",
    description:
      "Complete the interest form to begin your path towards recovery-supportive housing.",
    icon: Users,
    link: "/apply",
    color: "success",
    cta: "Apply",
  },
  {
    title: "Become a Volunteer",
    description:
      "Join our community of dedicated volunteers and help us create lasting change.",
    icon: HandHeart,
    link: "/volunteer",
    color: "success",
    cta: "Volunteer",
  },
  {
    title: "Support our Cause",
    description:
      "There are many ways to give, including financial and house furnishings.",
    icon: Coins,
    link: "/donate",
    color: "success",
    cta: "Donate Now",
  },
];

// Memoized category card component
const CategoryCard = memo(({ category, index }) => {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        to={category.link}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="block h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
      >
        <div className="p-8">
          <div className="w-16 h-16 rounded-xl bg-success-50 p-3 mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-full h-full text-success-600" />
          </div>

          <h4 className="text-xl font-bold text-success-600 mb-3">
            {category.title}
          </h4>
          <p className="text-gray-600 mb-6">{category.description}</p>

          <div className="text-success-600 font-medium inline-flex items-center group-hover:translate-x-2 transition-transform">
            {category.cta}
            <ChevronRight className="w-5 h-5 ml-2" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
});

// Memoized background pattern component
const BackgroundPattern = memo(() => (
  <div className="absolute inset-0 overflow-hidden">
    <div
      className="absolute w-full h-full opacity-[0.15]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgb(17 94 89 / 0.2) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }}
    />
  </div>
));

// Memoized curved arrow SVG component
const CurvedArrow = memo(() => (
  <motion.svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute -right-24 bottom-0 transform translate-x-full translate-y-full text-success-600 opacity-30 -rotate-180"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 0.3, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <path
      d="M30 90 C 30 50, 90 50, 90 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="4 4"
      fill="none"
    />
    <path
      d="M80 10 L90 10 L90 20"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </motion.svg>
));

// Memoized section header component
const SectionHeader = memo(() => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <h2 className="text-success-600 text-lg max-[480px]:text-base font-medium mb-2">
      CHECK OUT OUR RESOURCES
    </h2>
    <h3 className="text-4xl max-[480px]:text-3xl font-bold text-gray-900 mb-6 max-[480px]:mb-4">
      Find What You Need
    </h3>
    <p className="text-xl max-[480px]:text-lg text-gray-600 max-w-3xl mx-auto">
      Access everything you need to know about RIGHT Housing - from becoming a
      member to supporting our cause.
    </p>
  </motion.div>
));

// Memoized partner logo component
const PartnerLogo = memo(({ partner }) => (
  <div className="mx-8 max-[480px]:mx-4">
    <img
      src={partner.logo}
      alt={partner.name}
      className="h-16  w-auto grayscale hover:grayscale-0 transition-all duration-300"
      loading="lazy"
    />
  </div>
));

// Memoized partners data
const partners = [
  {
    name: "Community Health Foundation",
    logo: "https://placehold.co/200x80?text=Partner+1",
  },
  {
    name: "Recovery Support Network",
    logo: "https://placehold.co/200x80?text=Partner+2",
  },
  {
    name: "Mental Health Alliance",
    logo: "https://placehold.co/200x80?text=Partner+3",
  },
  {
    name: "Housing First Initiative",
    logo: "https://placehold.co/200x80?text=Partner+4",
  },
  {
    name: "Wellness Foundation",
    logo: "https://placehold.co/200x80?text=Partner+5",
  },
  {
    name: "Recovery Resources",
    logo: "https://placehold.co/200x80?text=Partner+6",
  },
];

const FindWhatYouNeed = () => {
  // Memoize animation variants
  const animations = useMemo(
    () => ({
      fadeIn: {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
      },
    }),
    []
  );

  return (
    <>
      <section className="relative py-24 bg-success-50">
        <BackgroundPattern />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.title}
                category={category}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Supporters Section */}
      <section className="pb-24 bg-success-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto px-4">
              <div className="text-left relative">
                <div className="inline-flex items-center mb-4 bg-success-100 text-success-600 px-4 py-2 rounded-full">
                  <Handshake className="w-5 h-5 mr-2" />
                  <span className="text-sm font-semibold">
                    Partners & Supporters
                  </span>
                </div>
                <h3 className="text-4xl max-[480px]:text-3xl font-bold text-gray-900 mb-4 max-[480px]:mb-0">
                  Trusted by Leading <br />
                  <span className="text-success-600 relative">
                    Organizations
                    {/* <CurvedArrow /> */}
                  </span>
                </h3>
              </div>
              <div>
                <p className="text-lg text-gray-600">
                  We collaborate with forward-thinking organizations that share
                  our vision for recovery, reentry and mental wellness.
                  Together, we're building stronger communities and transforming
                  lives.
                </p>
              </div>
            </div>
          </motion.div>

          <Marquee
            gradient={true}
            speed={40}
            className="my-16"
            gradientColor={"#e8faf0"}
            autoFill={true}
          >
            {partners.map((partner) => (
              <PartnerLogo key={partner.name} partner={partner} />
            ))}
          </Marquee>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col mx-8 sm:flex-row gap-4 justify-center mt-12"
          >
            <Link
              to="/partners"
              className="inline-flex items-center justify-center gap-2 bg-success-600 hover:bg-success-700 text-white px-8 py-3 rounded-full transition-colors text-lg font-semibold group"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <span>Become a Partner</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link
              to="/partners/learn-more"
              className="inline-flex items-center justify-center gap-2 bg-success-100 hover:bg-success-200 text-success-700 px-8 py-3 rounded-full transition-colors text-lg font-semibold group"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <span>Learn More About Our Partners</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default memo(FindWhatYouNeed);
