import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import com1 from "../../../assets/com_impact.jpg";
import com2 from "../../../assets/com-impact2.jpg";
import housing from "../../../assets/housing.jpg";
import h12 from "../../../assets/12.jpg";
import prison1 from "../../../assets/prison1.jpg";
import prison2 from "../../../assets/prison2.jpg";
import team1 from "../../../assets/team.jpg";
import team2 from "../../../assets/team2.jpg";
import drug from "../../../assets/drug.jpg";
import h from "../../../assets/h.jpg";
import h2 from "../../../assets/homeless1.jpg";
import { Skeleton } from "@heroui/skeleton";

const ImageLoadingSVG = ({ className = "w-12 h-12 text-success-500" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    />
    <motion.path
      d="M9 9h.01M15 9h.01M9.5 13.5s1 1 2.5 1 2.5-1 2.5-1"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  </svg>
);

const ImageSkeleton = ({ height = "h-64", isLoaded }) => (
  <Skeleton
    isLoaded={isLoaded}
    className={`rounded-lg overflow-hidden ${height} w-full`}
  >
    <div className="w-full h-full bg-default-300 relative flex items-center justify-center">
      <ImageLoadingSVG />
    </div>
  </Skeleton>
);

const GalleryMasonry = ({ activeFilter }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.4,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.1,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  // Gallery items data
  const galleryItems = [
    {
      id: 1,
      category: "housing",
      image: com1,
      title: "Modern Family Housing Complex",
      location: "Boston, MA",
      date: "2024",
    },
    {
      id: 2,
      category: "community",
      image: com2,
      title: "Community Center Renovation",
      location: "Cambridge, MA",
      date: "2024",
    },
    {
      id: 3,
      category: "renovation",
      image: housing,
      title: "Historic Building Restoration",
      location: "Somerville, MA",
      date: "2023",
    },
    {
      id: 4,
      category: "housing",
      image: h12,
      title: "Family Housing Development",
      location: "Medford, MA",
      date: "2024",
    },
    {
      id: 5,
      category: "community",
      image: prison1,
      title: "Community Support Center",
      location: "Malden, MA",
      date: "2024",
    },
    {
      id: 6,
      category: "renovation",
      image: prison2,
      title: "Historic Preservation",
      location: "Chelsea, MA",
      date: "2023",
    },
    {
      id: 7,
      category: "housing",
      image: team2,
      title: "Affordable Housing Complex",
      location: "Everett, MA",
      date: "2024",
    },
    {
      id: 8,
      category: "community",
      image: team1,
      title: "Community Hub Project",
      location: "Revere, MA",
      date: "2024",
    },
    {
      id: 9,
      category: "renovation",
      image: h,
      title: "Heritage Restoration",
      location: "Lynn, MA",
      date: "2023",
    },
    {
      id: 10,
      category: "renovation",
      image: drug,
      title: "Heritage Restoration",
      location: "Lynn, MA",
      date: "2023",
    },
    {
      id: 11,
      category: "renovation",
      image: h2,
      title: "Heritage Restoration",
      location: "Lynn, MA",
      date: "2023",
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="container mx-auto px-4 pb-20">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate={mounted ? "show" : "hidden"}
            exit="exit"
            className="columns-1 md:columns-3 gap-6 space-y-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                layout
                className="relative overflow-hidden cursor-pointer rounded-2xl shadow-lg break-inside-avoid mb-6 transform-gpu"
                style={{ height: "fit-content" }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <motion.div
                  className="relative"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  {!loadedImages[item.id] && (
                    <Skeleton className="rounded-lg">
                      <div className="h-24 w-full rounded-lg bg-default-300" />
                    </Skeleton>
                  )}
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full object-cover transition-opacity duration-300 ${
                      loadedImages[item.id] ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => handleImageLoad(item.id)}
                  />
                </motion.div>

                {/* Hover Overlay */}
                <AnimatePresence>
                  {hoveredItem === item.id && loadedImages[item.id] && (
                    <motion.div
                      variants={overlayVariants}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end"
                    >
                      <motion.h3
                        variants={textVariants}
                        className="text-2xl font-bold text-white mb-2"
                      >
                        {item.title}
                      </motion.h3>

                      <motion.div
                        variants={textVariants}
                        className="flex items-center gap-4 text-sm text-white"
                      >
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {item.date}
                        </div>
                      </motion.div>

                      {/* Category Badge */}
                      <motion.div
                        variants={badgeVariants}
                        className="absolute top-4 right-4 px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-success-600"
                      >
                        {item.category.charAt(0).toUpperCase() +
                          item.category.slice(1)}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GalleryMasonry;
