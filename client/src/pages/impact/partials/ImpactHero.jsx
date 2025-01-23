import { motion } from "framer-motion";

const ImpactHero = () => {
  return (
    <section className="relative py-32 overflow-hidden mt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-success-600/5">
        <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Stories of{" "}
              <span className="text-success-600">Impact & Transformation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover how Right Housing is changing lives and building stronger
              communities through sustainable housing solutions and unwavering
              support.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 text-sm font-medium"
          >
            <div className="bg-white rounded-full px-6 py-2 shadow-sm">
              <span className="text-success-600">500+</span> Lives Changed
            </div>
            <div className="bg-white rounded-full px-6 py-2 shadow-sm">
              <span className="text-success-600">150+</span> Families Housed
            </div>
            <div className="bg-white rounded-full px-6 py-2 shadow-sm">
              <span className="text-success-600">20+</span> Communities Served
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactHero;
