import { motion } from "framer-motion";
import { Eye, MapPin, Calendar } from "lucide-react";
import com1 from "../../../assets/com_impact.jpg";
import com2 from "../../../assets/com-impact2.jpg";
import housing from "../../../assets/housing.jpg";

const GalleryGrid = ({ onImageClick, activeFilter }) => {
  // Sample gallery data - replace with your actual project images
  const galleryItems = [
    {
      id: 1,
      category: "housing",
      // image: "/gallery/housing-project-1.jpg",
      image: com1,
      title: "Modern Family Housing Complex",
      location: "Boston, MA",
      date: "2024",
      description: "A 50-unit affordable housing development for families",
    },
    {
      id: 2,
      category: "community",
      image: com2,
      title: "Community Center Renovation",
      location: "Cambridge, MA",
      date: "2024",
      description: "Modernized community space serving 200+ residents",
    },
    {
      id: 3,
      category: "renovation",
      image: housing,
      title: "Historic Building Restoration",
      location: "Somerville, MA",
      date: "2023",
      description: "Preservation and modernization of 20 housing units",
    },
    // Add more gallery items as needed
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="container mx-auto px-4 pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => onImageClick(item)}
                    className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <Eye className="w-4 h-4" />
                    View Project
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {item.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-sm font-medium bg-white bg-opacity-90 rounded-full text-success-600">
                  {item.category.charAt(0).toUpperCase() +
                    item.category.slice(1)}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default GalleryGrid;
