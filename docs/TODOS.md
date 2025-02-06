```jsx
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  Calendar,
  MapPin,
  Heart,
  Users,
  Clock,
  Target,
  Search,
} from "lucide-react";
import { useState } from "react";
import team1 from "../../../assets/team.jpg";
import team2 from "../../../assets/team2.jpg";
import drug from "../../../assets/drug.jpg";
import h from "../../../assets/h.jpg";
import h2 from "../../../assets/homeless1.jpg";

const NoResultsAnimation = () => {
  const svgVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-64 h-64 mx-auto"
    >
      <motion.svg
        variants={svgVariants}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Magnifying Glass */}
        <motion.g variants={floatVariants} initial="initial" animate="animate">
          <motion.circle
            variants={pathVariants}
            cx="80"
            cy="80"
            r="30"
            stroke="#10B981"
            strokeWidth="4"
            fill="none"
          />
          <motion.line
            variants={pathVariants}
            x1="102"
            y1="102"
            x2="140"
            y2="140"
            stroke="#10B981"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </motion.g>

        {/* Question Marks */}
        <motion.g
          variants={floatVariants}
          initial="initial"
          animate="animate"
          custom={1}
        >
          <motion.path
            variants={pathVariants}
            d="M160 60C160 65.5228 155.523 70 150 70C144.477 70 140 65.5228 140 60C140 54.4772 144.477 50 150 50C155.523 50 160 54.4772 160 60Z"
            stroke="#10B981"
            strokeWidth="3"
          />
          <motion.path
            variants={pathVariants}
            d="M150 80V75C150 72.2386 152.239 70 155 70H160"
            stroke="#10B981"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </motion.g>

        <motion.g
          variants={floatVariants}
          initial="initial"
          animate="animate"
          custom={2}
        >
          <motion.path
            variants={pathVariants}
            d="M40 40C40 45.5228 35.5228 50 30 50C24.4772 50 20 45.5228 20 40C20 34.4772 24.4772 30 30 30C35.5228 30 40 34.4772 40 40Z"
            stroke="#10B981"
            strokeWidth="3"
          />
          <motion.path
            variants={pathVariants}
            d="M30 60V55C30 52.2386 32.2386 50 35 50H40"
            stroke="#10B981"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </motion.g>
      </motion.svg>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center text-lg text-gray-600 mt-6"
      >
        No stories found matching your search criteria
      </motion.p>
    </motion.div>
  );
};

const ImpactGrid = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const stories = [
    {
      id: 1,
      title: "From Homeless to Hopeful: Sarah's Journey",
      excerpt:
        "After facing eviction and homelessness, Sarah found stability and a new beginning through our housing assistance program.",
      image: team1,
      category: "Housing Assistance",
      location: "Boston, MA",
      date: "January 2024",
      slug: "from-homeless-to-hopeful",
      stats: {
        monthsHoused: 8,
        familySize: 3,
        communitySupport: "24/7",
      },
    },
    {
      id: 2,
      title: "Building a Future: The Martinez Family Story",
      excerpt:
        "A family of five discovers new opportunities and community support through affordable housing initiatives.",
      image: team2,
      category: "Family Support",
      location: "Cambridge, MA",
      date: "December 2023",
      slug: "building-future-martinez-family",
      stats: {
        monthsHoused: 12,
        familySize: 5,
        communitySupport: "Weekly",
      },
    },
    {
      id: 3,
      title: "Recovery and Renewal: John's Path Home",
      excerpt:
        "Through addiction recovery support and stable housing, John rebuilt his life and now helps others in similar situations.",
      image: drug,
      category: "Recovery Housing",
      location: "Somerville, MA",
      date: "November 2023",
      slug: "recovery-renewal-john",
      stats: {
        monthsHoused: 18,
        programSuccess: "100%",
        peersHelped: 12,
      },
    },
    {
      id: 4,
      title: "A Senior's Second Chapter",
      excerpt:
        "Eleanor found community and independence in our senior housing program after years of isolation.",
      image: h,
      category: "Senior Housing",
      location: "Medford, MA",
      date: "October 2023",
      slug: "seniors-second-chapter",
      stats: {
        monthsHoused: 24,
        activitiesJoined: 15,
        newFriends: "20+",
      },
    },
    {
      id: 5,
      title: "Veterans Supporting Veterans",
      excerpt:
        "How our veteran housing program created a support network that changed lives.",
      image: h2,
      category: "Veteran Support",
      location: "Malden, MA",
      date: "September 2023",
      slug: "veterans-supporting-veterans",
      stats: {
        veteransHelped: 45,
        jobPlacements: 28,
        supportGroups: 4,
      },
    },
  ];

  const filteredStories = stories.filter((story) => {
    const searchText = searchQuery.toLowerCase();
    return (
      story.title.toLowerCase().includes(searchText) ||
      story.excerpt.toLowerCase().includes(searchText) ||
      story.category.toLowerCase().includes(searchText) ||
      story.location.toLowerCase().includes(searchText)
    );
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const StatBadge = ({ icon: Icon, label, value }) => (
    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
      <Icon className="w-4 h-4 text-success-600" />
      <span className="text-sm font-medium text-gray-700">
        <span className="text-success-600">{value}</span> {label}
      </span>
    </div>
  );

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 ">
            Every Story Matters, Every Life Counts
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Have you heard about the lives we've touched? Discover inspiring
            stories of hope, resilience, and transformation in our community.
          </p>

          <div className="relative max-w-xl mx-auto">
            <div
              className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-transform duration-300 h-fit py-4 ${
                isFocused ? "translate-y-0" : "translate-y-0"
              }`}
            >
              <Search
                className={`h-5 w-5 transition-colors duration-300 ${
                  isFocused ? "text-success-500" : "text-gray-400"
                }`}
              />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="block w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:border-success-500 focus:ring-1 focus:ring-success-500 transition-colors"
              placeholder="Search stories by title, location, or category..."
            />
            {searchQuery && (
              <div className="mt-4 text-sm text-gray-600">
                Found {filteredStories.length}{" "}
                {filteredStories.length === 1 ? "story" : "stories"}
              </div>
            )}
          </div>
        </motion.div>

        {/* Stories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-16"
        >
          {filteredStories.map((story, index) => (
            <motion.div
              key={story.id}
              variants={itemVariants}
              className="group"
            >
              <Link
                to={`/impact/${story.slug}`}
                className="block relative"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <div
                  className={`grid md:grid-cols-2 gap-6 md:gap-12 items-center ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Image Section */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-success-600/5">
                      <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
                    </div>

                    {/* Main Image */}
                    <div className="absolute inset-4 overflow-hidden rounded-xl">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    </div>

                    {/* Stats Overlay */}
                    <div className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-2">
                      {Object.entries(story.stats)
                        .slice(0, 3)
                        .map(([key, value]) => {
                          let Icon = Clock;
                          if (key.includes("Size") || key.includes("Helped"))
                            Icon = Users;
                          if (
                            key.includes("Success") ||
                            key.includes("Activities")
                          )
                            Icon = Target;

                          return (
                            <StatBadge
                              key={key}
                              icon={Icon}
                              value={value}
                              label={key.replace(/([A-Z])/g, " $1").trim()}
                            />
                          );
                        })}
                    </div>

                    {/* Category Tag */}
                    <div className="absolute top-8 right-8">
                      <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium text-success-700">
                        <Heart className="w-4 h-4" />
                        {story.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="relative">
                    <div className="space-y-6">
                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-success-600" />
                          {story.location}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-success-600" />
                          {story.date}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-success-600 transition-colors duration-300">
                        {story.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {story.excerpt}
                      </p>

                      {/* Read More Link */}
                      <div className="inline-flex items-center gap-2 text-success-600 font-medium pt-4">
                        Read Full Story
                        <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -left-4 -right-4 -top-4 -bottom-4 border border-success-100 rounded-2xl -z-10 group-hover:border-success-200 transition-colors duration-300" />
                    <div className="absolute -left-2 -right-2 -top-2 -bottom-2 border border-success-50 rounded-xl -z-10 group-hover:border-success-100 transition-colors duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results Message with Animation */}
        {searchQuery && filteredStories.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-12"
          >
            <NoResultsAnimation />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ImpactGrid;
```

HOME-SECTION
Empowering individuals on their journey to recovery and reentry through stable housing and comprehensive support.

checkout our resouces oxford

ABOUT
At RIGHT Housing, we believe that true healing happens when the mind, body, and spirit are nurtured together. We provide transitional housing for men and women who are navigating recovery, reentry, or mental health challenges, offering more than just a roof over their heads.

vision: To empower individuals and families impacted by addiction, incarceration, and mental health by providing housing solutions and comprehensive support, and a pathway from transitional living to independent living. We envision a future where everyone can rebuild their lives and thrive in self-sufficiency and security.

Our core values.
replace cards icons with RIGHT...

ABOUT FOUNDER: In my time as a population health manager in Camden, I witnessed firsthand how the simplest of mistakes or wrong choices could spiral into homelessness and life-altering tragedies for individuals. I saw people I knew by name—real faces, real stories—struggling with homelessness and isolation. It became clear that their needs weren’t just physical; they needed hope, support, and a chance to rebuild.

NOTE COMPLETE -> I am committed to turning that belief into creating solutions that restore hope a

Population Health Manager - Camden
Health Operations Director - Reset kidney
Project Manager - Support Programs (Building pathways for recovery and reentry)
Social Impactor - RIGHT Housing (Transforming lives through mind-body wellness)

APPLY PAGE
Hero section title - Start Your Journey to RIGHT Housing

COOKED PROMPT

great this is very perfect. let make to few modificaions please

1. please the introduction part, i want us to put an image there that spans the full width of the screen and on top of it is the introtuction content you put there. also kindly change the our mission to our like "what makes RIGHT housing exist", a very powerful question that will make the user want to find some answers. kindly add some overlay to the bg image so that the text become for visible and add some animated svg something to the title to draw some attention there
2. also i want to make to simple modification to the arrangemtn of the narative stuve. please make it like the first one has the image on the right, the second has image on the left and so on...
3. also please let add one more to the secion that resonate the mental health support idea but make them in the emotion way as you have done
4. also the i realized the restoring dignity is more close ot the reentry incarceneration. kindly let make it resonate on that more while still kepping that emotional tone
5. also please let replce the oringins there with content below please.
   Born from Experience, Driven by Purpose
   Our Origins
   In the heart of our communities, we have seen how quickly life can unravel—how a single misstep, an unexpected hardship, or an unforgiving system can push individuals into homelessness, isolation, or despair. Too often, those struggling with addiction, reentry, or mental health challenges find themselves without a place to turn, without the support they need to rebuild.
   <br/>
   <b>RIGHT Housing was born from this reality—not just as a shelter, but as a foundation for renewal</>b. We believe that a home is more than just four walls; it is a space where healing begins, where dignity is restored, and where hope is rekindled. Our mission is simple yet profound: to provide stability, support, and a second chance to those seeking to rise above their circumstances.
   <br/>
   Every person deserves an opportunity to reclaim their future. At RIGHT Housing, we are committed to walking alongside them—one step, one story, and one transformed life at a time.

6. and lasly the images please feel free to use usplash images url for this please

BUGS:
GALLERY STICKY NAV AND FILTER BAR ISSUE
great this is perfect now. but let fix one issue pleas.
the tabs are now stick to the top which is perfect. but then when the the tabs is stickety at the top and the page is scrolled hdown the navbbar covers the stickety filter tabs. i want ou to make it so that when the sticky nav is at the top and itisbeing scrolled down, the shits down small so that it can make rookmfor the navr to show at it top

hello claude i am working on an ngo website. and i have made some great progress. i want you to first look at the project structure understand. after i'll show you the document do you understand the scope of the project after then we can start making some changes @client

great i want you read all the @right-housing-website-content.md and also understand the dirs in the @client and @client/src so that whn you start and i tell tyou something you know where to go to

Prompt for Creating a Full-Page Interactive Program & Services Section

Objective:
Design a visually stunning and interactive section for showcasing programs and services, where the titles are displayed on the left and their details on the right. Selecting a title will trigger a sliding animation to reveal or hide the corresponding details. This section should take up the full page and feature advanced but minimal animated SVG backgrounds to enhance aesthetics.

Requirements:

Layout:

Left Section: A vertical list of program and service titles, aligned neatly with spacing and hover effects. Titles should have an active state that indicates the currently selected item.
Right Section: The details of the selected program should appear in this section with smooth animations. Include a fade-in/out effect for text.

Animations:

The details section should slide up or down, depending on whether the program is expanding or collapsing, with a smooth and elegant transition (e.g., cubic-bezier easing).
Add micro-interactions like subtle scaling or color changes on hover for the titles and buttons.

SVG Background:

Use advanced, animated SVG elements as the background for the section. Examples include:
Floating geometric shapes that subtly move or rotate.
Gradient wave patterns that shift colors or flow slowly.
Particle effects or abstract lines that follow a coordinated movement.

Styling:

Minimalistic yet elegant design, with clean typography, ample white space, and complementary color schemes.
Use a modern font for headings and content, ensuring readability.
Maintain responsive design for all screen sizes.

Functionality:

Clicking on a program title should trigger the details to slide in/out dynamically, without overlapping other content.
The animations should be optimized for performance to ensure smooth transitions, even on lower-end devices.
Include a fallback or static version for browsers that do not support advanced animations.

User Experience:

Ensure that interactions feel intuitive and fluid.
Add accessibility features, such as keyboard navigation and ARIA roles, for better usability.
Deliverables:
A fully functional, responsive, and visually striking section showcasing the programs and services, including all the animations and SVG background designs. Ensure the code is modular and reusable for future updates.

add to find what you need
// {
// title: "Stakeholders & Partners",
// description: "Request a meeting or presentation. Refer applicants.",
// icon: Building2,
// link: "/stakeholders",
// color: "success",
// cta: "Learn More",
// },
// {
// title: "Become a Landlord",
// description:
// "Rent your home as a RIGHT House and become a vital part in our mission to save lives.",
// icon: Building,
// link: "/landlord",
// color: "success",
// cta: "Learn More",
// },
// {
// title: "Info for Neighbors",
// description:
// "We strive to be respectful neighbors and responsible citizens.",
// icon: Home,
// link: "/community",
// color: "success",
// cta: "Learn More",
// },
// {
// title: "Alumni Registration",
// description:
// "Sign up to join the national Alumni association and get connected with other Alumni in your area.",
// icon: GraduationCap,
// link: "/alumni",
// color: "success",
// cta: "Signup Today",
// },
// {
// title: "Annual Report",
// description:
// "RIGHT Housing, Inc. remains transparent with spending and is a reputable 501c3 nonprofit.",
// icon: ClipboardList,
// link: "/annual-report",
// color: "success",
// cta: "Read the Annual Report",
// },
// {
// title: "Manuals & Forms",
// description:
// "View and download the latest House and Chapter Manuals, along with other forms used to conduct weekly house meetings.",
// icon: FileText,
// link: "/resources",
// color: "success",
// cta: "View Resources",
// },

const currentYear = new Date().getFullYear();

          <div>
            <h3 className="text-lg font-semibold mb-6 text-warning-400">
              Stay Updated
            </h3>
            <p className="text-success-100 mb-4">
              Subscribe to our newsletter for the latest updates and news.
            </p>
            <form className="space-y-3">
              {/* TODO: make it HeroUI Input */}
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-full bg-success-800 border border-success-700 focus:outline-none focus:border-warning-400 text-white placeholder-success-300"
              />
              <Button className="w-full px-6 py-2 bg-warning-500 hover:bg-warning-600 text-white rounded-full transition-colors">
                Subscribe
              </Button>
            </form>
          </div>

```jsx
import React, { memo } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Heart,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

// Memoized background SVG component
const BackgroundSVG = memo(() => (
  <svg
    className="w-full h-full"
    viewBox="0 0 1000 1000"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0,0 L1000,0 L1000,1000 L0,1000 L0,0 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <g fill="currentColor">
      <path d="M100,800 L200,700 L300,800 L300,1000 L100,1000 Z" />
      <path d="M400,750 L500,650 L600,750 L600,1000 L400,1000 Z" />
      <path d="M700,800 L800,700 L900,800 L900,1000 L700,1000 Z" />
      <circle cx="200" cy="200" r="50" />
      <circle cx="500" cy="300" r="70" />
      <circle cx="800" cy="150" r="40" />
    </g>
  </svg>
));

// Memoized social link component
const SocialLink = memo(({ href, icon: Icon }) => (
  <a
    href={href}
    className="text-success-100 hover:text-warning-400 transition-colors"
    target="\_blank"
    rel="noopener noreferrer"
  >
    <Icon className="w-5 h-5" />
  </a>
));

// Memoized footer link component
const FooterLink = memo(({ to, children }) => (
  <li>
    <Link
      to={to}
      className="hover:text-warning transition-colors"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      {children}
    </Link>
  </li>
));

// Memoized footer section component
const FooterSection = memo(({ title, children }) => (
  <div>
    <h3 className="text-xl text-warning font-semibold mb-6">{title}</h3>
    <ul className="space-y-4">{children}</ul>
  </div>
));

// Memoized newsletter form component
const NewsletterForm = memo(() => (
  <div className="mt-8 md:mt-0">
    <h3 className="text-xl text-warning font-semibold mb-6">Stay Connected</h3>
    <p className="text-success-100 mb-4">
      Subscribe to our newsletter for updates and stories of impact.
    </p>
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <Input
        type="email"
        placeholder="Enter your email"
        className="w-full bg-success-800 border-success-700 text-white placeholder-success-300"
      />
      <Button type="submit" color="warning" className="w-full">
        Subscribe
      </Button>
    </form>
  </div>
));

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "#", icon: Facebook },
    { href: "#", icon: Twitter },
    { href: "#", icon: Instagram },
    { href: "#", icon: Linkedin },
  ];

  const quickLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About Us" },
    { to: "/programs", text: "Our Programs" },
    { to: "/impact", text: "Impact Stories" },
    { to: "/gallery", text: "Gallery" },
    { to: "/contact", text: "Contact Us" },
  ];

  const getInvolvedLinks = [
    { to: "/volunteer", text: "Volunteer" },
    { to: "/donate", text: "Donate" },
    { to: "/apply", text: "Apply for Housing" },
  ];

  const legalLinks = [
    { to: "/privacy-policy", text: "Privacy Policy" },
    { to: "/terms-of-service", text: "Terms of Service" },
    { to: "/application-status", text: "Application Status" },
  ];

  return (
    <footer className="relative bg-success-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <BackgroundSVG />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-warning-400">
              Right Housing Inc.
            </h2>
            <p className="text-success-100 max-w-xs">
              Dedicated to transforming lives through recovery support and
              stable housing solutions. Building stronger communities, one
              person at a time.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <SocialLink key={index} {...link} />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <FooterSection title="Quick Links">
            {quickLinks.map((link) => (
              <FooterLink key={link.to} to={link.to}>
                {link.text}
              </FooterLink>
            ))}
          </FooterSection>

          {/* Get Involved */}
          <FooterSection title="Get Involved">
            {getInvolvedLinks.map((link) => (
              <FooterLink key={link.to} to={link.to}>
                {link.text}
              </FooterLink>
            ))}
          </FooterSection>

          {/* Legal */}
          <FooterSection title="Legal">
            {legalLinks.map((link) => (
              <FooterLink key={link.to} to={link.to}>
                {link.text}
              </FooterLink>
            ))}
          </FooterSection>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-success-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-warning-400" />
              <a
                href="mailto:info@righthousing.org"
                className="hover:text-warning-400 transition-colors"
              >
                info@righthousing.org
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-warning-400" />
              <a
                href="tel:+1234567890"
                className="hover:text-warning-400 transition-colors"
              >
                (123) 456-7890
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-warning-400" />
              <span>123 Recovery Street, City, State 12345</span>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <NewsletterForm />

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-success-800 text-center text-success-200">
          <p>
            {currentYear} Right Housing Inc. All rights reserved.{" "}
            <Heart className="inline-block w-4 h-4 text-warning-400 mb-1" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
```
