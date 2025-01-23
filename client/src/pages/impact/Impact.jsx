import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ImpactHero from "./partials/ImpactHero";
import ImpactGrid from "./partials/ImpactGrid";

const Impact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      <ImpactHero />
      <ImpactGrid />

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Want to Make a Difference?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join us in our mission to provide housing and support to those in need.
              Your contribution can help change lives.
            </p>
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 bg-success-600 text-white px-6 py-3 rounded-full font-medium hover:bg-success-700 transition-colors"
            >
              Support Our Cause
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Impact;
