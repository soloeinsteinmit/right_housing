import { motion } from "framer-motion";

const MapSection = () => {
  return (
    <section className="bg-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/patterns/dot-grid.svg')] opacity-5" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Visit Our Office
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Come meet our team and learn more about how we can help you find the perfect housing solution
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Map Placeholder with Design Elements */}
          <div className="bg-gray-100 rounded-2xl h-[500px] relative overflow-hidden">
            {/* Placeholder Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-gray-600 text-lg mb-4">Interactive Map Coming Soon</p>
                <div className="inline-flex items-center gap-2 text-success-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>Map Integration in Progress</span>
                </div>
              </div>
            </div>

            {/* Design Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">Our Location</h3>
                <p className="text-gray-600">123 Housing Street</p>
                <p className="text-gray-600">City, State 12345</p>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-success-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Get Directions</h4>
                    <p className="text-sm text-gray-600">View on Google Maps</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
