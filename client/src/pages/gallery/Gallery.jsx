import { useState } from "react";
import GalleryHero from "./partials/GalleryHero";
import GalleryGrid from "./partials/GalleryGrid";
import GalleryModal from "./partials/GalleryModal";
import GalleryFilter from "./partials/GalleryFilter";
import GalleryMasonry from "./partials/GalleryMasonry";
import { Grid, LayoutGrid } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState("masonry");

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  // TODO: scroll fix

  return (
    <div className="min-h-screen bg-gray-50">
      <GalleryHero />

      {/* Navigation and Filters */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-100 shadow-sm mb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* View Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode("masonry")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    viewMode === "masonry"
                      ? "bg-success-50 text-success-600"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                  Masonry
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    viewMode === "grid"
                      ? "bg-success-50 text-success-600"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                  Grid
                </button>
              </div>

              {/* Filter */}
              <GalleryFilter
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Views */}
      {viewMode === "masonry" ? (
        <GalleryMasonry activeFilter={activeFilter} />
      ) : (
        <GalleryGrid
          onImageClick={handleImageClick}
          activeFilter={activeFilter}
        />
      )}

      {selectedImage && (
        <GalleryModal image={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Gallery;
