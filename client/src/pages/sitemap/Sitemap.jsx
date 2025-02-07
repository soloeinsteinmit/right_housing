import { memo } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Home,
  Info,
  BookOpen,
  FileText,
  Heart,
  Mail,
  Users,
  Shield,
  FileCheck,
  ChevronRight,
  HandHeart,
  Image,
} from "lucide-react";
import { Link } from "react-router-dom";

// Animation variants
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeftVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const chevronVariant = {
  hidden: { x: -10 },
  visible: { x: 0 },
};

// Site structure data
const siteStructure = [
  {
    title: "Main Pages",
    links: [
      { name: "Home", path: "/", icon: <Home className="w-5 h-5" /> },
      {
        name: "About Us",
        path: "/about",
        icon: <Info className="w-5 h-5" />,
      },
      {
        name: "Our Programs",
        path: "/programs",
        icon: <BookOpen className="w-5 h-5" />,
      },
      {
        name: "Impact Stories",
        path: "/impact",
        icon: <Heart className="w-5 h-5" />,
      },
      {
        name: "Gallery",
        path: "/gallery",
        icon: <Image className="w-5 h-5" />,
      },
      {
        name: "Contact Us",
        path: "/contact",
        icon: <Mail className="w-5 h-5" />,
      },
    ],
  },
  {
    title: "Get Involved",
    links: [
      {
        name: "Volunteer",
        path: "/volunteer",
        icon: <HandHeart className="w-5 h-5" />,
      },
      {
        name: "Donate",
        path: "/donate",
        icon: <Heart className="w-5 h-5" />,
      },
      {
        name: "Apply",
        path: "/apply",
        icon: <FileText className="w-5 h-5" />,
      },
    ],
  },
  {
    title: "Legal & Support",
    links: [
      {
        name: "Privacy Policy",
        path: "/privacy-policy",
        icon: <Shield className="w-5 h-5" />,
      },
      {
        name: "Terms of Service",
        path: "/terms-of-service",
        icon: <FileCheck className="w-5 h-5" />,
      },
    ],
  },
  {
    title: "Support & Resources",
    links: [
      {
        name: "FAQs",
        path: "/faq",
        icon: <Info className="w-5 h-5" />,
      },
    ],
  },
];

const SectionTitle = memo(({ title, index }) => (
  <div className="relative">
    <motion.h3
      className="text-2xl font-bold text-gray-900 mb-6"
      variants={fadeInLeftVariant}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.2 }}
    >
      {title}
      <div className="h-1 w-16 bg-success-500 mt-3 rounded-full group-hover:w-24 transition-all duration-300 ease-out" />
    </motion.h3>
  </div>
));

SectionTitle.displayName = "SectionTitle";

const NavigationLink = memo(({ link, index, sectionIndex }) => (
  <motion.li
    variants={fadeInLeftVariant}
    initial="hidden"
    animate="visible"
    transition={{ delay: sectionIndex * 0.1 + index * 0.05 }}
  >
    <Link
      to={link.path}
      className="group/link flex items-center gap-3 p-3 rounded-lg hover:bg-success-50/50 transition-all duration-300"
    >
      <span className="p-2 rounded-lg bg-success-50 text-success-600 group-hover/link:bg-success-100 group-hover/link:text-success-700 transition-colors duration-300">
        {link.icon}
      </span>
      <span className="text-lg font-medium text-gray-700 group-hover/link:text-success-700 transition-colors duration-300">
        {link.name}
      </span>
      <motion.span
        className="ml-auto text-success-500 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"
        variants={chevronVariant}
        initial="hidden"
        animate="visible"
      >
        <ChevronRight className="w-5 h-5" />
      </motion.span>
    </Link>
  </motion.li>
));

NavigationLink.displayName = "NavigationLink";

const SectionCard = memo(({ section, index }) => (
  <motion.div
    variants={fadeInUpVariant}
    initial="hidden"
    animate="visible"
    transition={{ delay: index * 0.1 }}
    className="relative group h-fit"
  >
    <div className="relative bg-white p-8 rounded-xl shadow-lg overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-success-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-500" />

      {/* Decorative Corner Accents */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-success-200 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-success-200 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <SectionTitle title={section.title} index={index} />

      {/* Links */}
      <ul className="relative space-y-4">
        {section.links.map((link, linkIndex) => (
          <NavigationLink
            key={link.name}
            link={link}
            index={linkIndex}
            sectionIndex={index}
          />
        ))}
      </ul>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-success-400/0 to-success-400/0 group-hover:from-success-400/5 group-hover:to-transparent transition-all duration-500 rounded-xl pointer-events-none" />
    </div>
  </motion.div>
));

SectionCard.displayName = "SectionCard";

const QuickHelp = memo(() => (
  <motion.div
    variants={fadeInUpVariant}
    initial="hidden"
    animate="visible"
    transition={{ delay: 0.4 }}
    className="mt-12 bg-white p-8 rounded-2xl shadow-lg text-center"
  >
    <h3 className="text-2xl font-bold text-gray-900 mb-4">
      Need Help Finding Something?
    </h3>
    <p className="text-gray-600 mb-6">
      Our team is here to assist you in finding the information you need.
    </p>
    <Link
      to="/contact"
      className="inline-flex items-center gap-2 px-6 py-3 bg-success-600 text-white rounded-xl hover:bg-success-700 transition-colors"
    >
      Contact Support
      <Mail className="w-4 h-4" />
    </Link>
  </motion.div>
));

QuickHelp.displayName = "QuickHelp";

const Sitemap = () => {
  // SEO structured data for sitemap
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "RIGHT Housing Sitemap | Complete Website Navigation",
    "description": "Navigate through RIGHT Housing's complete website structure. Find all our pages including housing services, support programs, resources, and legal information.",
    "publisher": {
      "@type": "Organization",
      "name": "RIGHT Housing Inc.",
      "url": "https://righthousing.org"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": siteStructure.flatMap((section, index) =>
        section.links.map((link, linkIndex) => ({
          "@type": "ListItem",
          "position": index * 10 + linkIndex + 1,
          "name": link.name,
          "url": `https://righthousing.org${link.path}`
        }))
      )
    }
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>RIGHT Housing Sitemap | Complete Website Navigation</title>
        <meta 
          name="description" 
          content="Navigate through RIGHT Housing's complete website structure. Find all our pages including housing services, support programs, resources, and legal information."
        />
        <meta 
          name="keywords" 
          content="RIGHT Housing sitemap, website navigation, site structure, page directory, website map, site index, page listing, navigation guide, website sections, content map, site organization, website structure, page overview, site navigation, content directory, website index, page map, navigation overview, site listing, website guide"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RIGHT Housing Sitemap | Complete Website Navigation" />
        <meta 
          property="og:description" 
          content="Navigate through RIGHT Housing's complete website structure. Find all our pages including housing services, support programs, resources, and legal information."
        />

        {/* Twitter */}
        <meta name="twitter:title" content="RIGHT Housing Sitemap | Complete Website Navigation" />
        <meta 
          name="twitter:description" 
          content="Navigate through RIGHT Housing's complete website structure. Find all our pages including housing services, support programs, resources, and legal information."
        />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="article:modified_time" content="2025-02-07" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50/50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUpVariant}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Website Navigation
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find everything you need on our website. Browse through our main pages,
              services, resources, and more.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteStructure.map((section, index) => (
              <SectionCard key={section.title} section={section} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

Sitemap.displayName = "Sitemap";

export default memo(Sitemap);
