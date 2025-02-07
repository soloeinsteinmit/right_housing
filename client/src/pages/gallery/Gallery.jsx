import { useState } from "react";
import { Helmet } from "react-helmet-async";
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

  // SEO structured data for image gallery
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "RIGHT Housing Community Gallery",
    "description": "Explore our gallery showcasing RIGHT Housing's facilities, community events, success stories, and the positive impact of our recovery support programs.",
    "about": {
      "@type": "Organization",
      "name": "RIGHT Housing Inc.",
      "description": "Providing transitional housing and comprehensive support services for individuals in recovery."
    },
    "publisher": {
      "@type": "Organization",
      "name": "RIGHT Housing Inc.",
      "url": "https://righthousing.org"
    },
    "genre": "Community and Recovery Support",
    "keywords": "recovery housing, community events, success stories, housing facilities, support programs",
    "thumbnailUrl": "https://righthousing.org/gallery/thumbnail.jpg",
    "image": {
      "@type": "ImageObject",
      "representativeOfPage": true,
      "caption": "RIGHT Housing Community Gallery"
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>RIGHT Housing Gallery | Community & Recovery Support Photos</title>
        <meta 
          name="description" 
          content="Browse our gallery showcasing RIGHT Housing's facilities, community events, success stories, and the positive impact of our recovery support programs in action."
        />
        <meta 
          name="keywords" 
          content="RIGHT Housing gallery, recovery housing photos, community events gallery, housing facilities photos, recovery support gallery, success stories photos, community impact gallery, transitional housing photos, recovery program gallery, housing support photos, community photos, recovery journey gallery, support services photos, facility tour gallery, program activities photos, community engagement gallery, recovery success photos, housing program gallery, support network photos, recovery community gallery"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RIGHT Housing Gallery | Community & Recovery Support Photos" />
        <meta 
          property="og:description" 
          content="Browse our gallery showcasing RIGHT Housing's facilities, community events, success stories, and the positive impact of our recovery support programs in action."
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RIGHT Housing Gallery | Community & Recovery Support Photos" />
        <meta 
          name="twitter:description" 
          content="Browse our gallery showcasing RIGHT Housing's facilities, community events, success stories, and the positive impact of our recovery support programs in action."
        />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="article:modified_time" content="2025-02-07" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

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

                {/* Filters */}
                <GalleryFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Content */}
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-7xl mx-auto">
            {viewMode === "masonry" ? (
              <GalleryMasonry
                activeFilter={activeFilter}
                onImageClick={handleImageClick}
              />
            ) : (
              <GalleryGrid
                activeFilter={activeFilter}
                onImageClick={handleImageClick}
              />
            )}
          </div>
        </div>

        {/* Modal */}
        {selectedImage && (
          <GalleryModal image={selectedImage} onClose={handleCloseModal} />
        )}
      </div>
    </>
  );
};

export default Gallery;
