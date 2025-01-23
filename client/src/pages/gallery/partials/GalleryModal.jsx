import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar, Users, Home } from "lucide-react";

const GalleryModal = ({ image, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="aspect-[4/3] md:aspect-auto">
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 mr-3">
                {image.title}
              </h2>

              {/* Project Details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-success-600" />
                  <span>{image.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar className="w-5 h-5 text-success-600" />
                  <span>Completed in {image.date}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Users className="w-5 h-5 text-success-600" />
                  <span>50+ Families Impacted</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Home className="w-5 h-5 text-success-600" />
                  <span>
                    {image.category.charAt(0).toUpperCase() +
                      image.category.slice(1)}{" "}
                    Project
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Project Overview
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {image.description}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              {/* Impact Stats */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-success-50 rounded-xl">
                {[
                  { label: "Units", value: "50+" },
                  { label: "Sq. Ft.", value: "75k" },
                  { label: "Investment", value: "$2.5M" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-xl font-bold text-success-600">
                      {stat.value}
                    </div>
                    <div className="text-sm text-success-700">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GalleryModal;
