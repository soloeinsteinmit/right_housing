import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const LegalDocumentLayout = ({ title, lastUpdated, children }) => {
  return (
    <div className="min-h-screen bg-gray-50 mt-20 ">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 flex items-center space-x-2 group"
            >
              <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Document Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 sm:p-12">
          {/* Document Header */}
          <div className="border-b border-gray-200 pb-8 mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">{title}</h1>
            <p className="text-sm text-gray-500">Last Updated: {lastUpdated}</p>
          </div>

          {/* Document Body */}
          <div className="prose prose-green max-w-none legal-content">
            <style>
              {`
                .legal-content h2 {
                  font-size: 1.75rem !important;
                  font-weight: 700 !important;
                  color: #064e3b !important;
                  margin-top: 2.5rem !important;
                  margin-bottom: 1.25rem !important;
                  padding-bottom: 0.5rem !important;
                  border-bottom: 2px solid #ecfdf5 !important;
                }
                .legal-content h3 {
                  font-size: 1.35rem !important;
                  font-weight: 600 !important;
                  color: #065f46 !important;
                  margin-top: 2rem !important;
                  margin-bottom: 1rem !important;
                }
                .legal-content p {
                  font-size: 1.05rem !important;
                  line-height: 1.75 !important;
                  margin-bottom: 1rem !important;
                  color: #374151 !important;
                }
                .legal-content ul {
                  list-style-type: disc !important;
                  padding-left: 0 !important;
                  border-radius: 0.5rem !important;
                  padding: 0rem 2rem !important;
                }
                .legal-content ul li {
                  position: relative !important;
                  padding-left: 0.5rem !important;
                  margin-bottom: 1rem !important;
                  font-size: 1.05rem !important;
                  // line-height: 1.6 !important;
                  color: #374151 !important;
                }
                
              `}
            </style>
            {children}
          </div>

          {/* Document Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              If you have any questions about these {title}, please contact us
              at{" "}
              <a
                href="mailto:legal@righthousing.org"
                className="text-success-600 hover:text-success-700"
              >
                legal@righthousing.org
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LegalDocumentLayout;
