import { motion } from "framer-motion";
import { Image, Camera } from "lucide-react";

const GalleryHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute right-0 top-20 w-72 h-72 bg-success-100 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -left-20 bottom-0 w-96 h-96 bg-success-50 rounded-full"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-success-100 rounded-2xl flex items-center justify-center text-success-600">
                <Camera className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-5xl max-[480px]:text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Project{" "}
              <span className="text-success-600 relative inline-block">
                Gallery
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-success-200"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </span>
            </h1>
            <p className="text-xl max-[480px]:text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Explore our completed projects and witness the transformative
              impact of our housing initiatives on communities.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { number: "150+", label: "Projects" },
                { number: "1000+", label: "Families Housed" },
                { number: "25+", label: "Communities" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-center"
                >
                  <h3 className="text-3xl max-[480px]:text-2xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 max-[480px]:text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;
