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
