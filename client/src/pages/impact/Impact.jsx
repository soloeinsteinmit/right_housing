import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ImpactHero from "./partials/ImpactHero";
import ImpactGrid from "./partials/ImpactGrid";

const Impact = () => {
  // SEO structured data for Impact page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "RIGHT Housing Success Stories & Community Impact",
    "description": "Discover how RIGHT Housing transforms lives through success stories, testimonials, and measurable impact in recovery support and transitional housing.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Article",
          "position": 1,
          "name": "From Homeless to Hopeful: Sarah's Journey",
          "description": "A story of transformation through RIGHT Housing's comprehensive support system."
        },
        {
          "@type": "Article",
          "position": 2,
          "name": "Building a Future: The Martinez Family Story",
          "description": "How stable housing and support services helped rebuild a family."
        },
        {
          "@type": "Article",
          "position": 3,
          "name": "Recovery and Renewal: John's Path Home",
          "description": "A journey from addiction to independence through RIGHT Housing's programs."
        }
      ]
    },
    "about": {
      "@type": "Thing",
      "name": "Community Impact",
      "description": "Measurable outcomes in recovery support, housing stability, and community reintegration."
    },
    "provider": {
      "@type": "NGO",
      "name": "RIGHT Housing Inc.",
      "slogan": "Where Every Door Leads to Opportunity"
    }
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>RIGHT Housing Impact | Success Stories & Community Transformation</title>
        <meta 
          name="description" 
          content="Explore inspiring success stories and measurable impact of RIGHT Housing's recovery support and transitional housing programs. See how we're transforming lives and building stronger communities."
        />
        <meta 
          name="keywords" 
          content="success stories, community impact, recovery success, housing transformation, life transformation, recovery testimonials, program outcomes, community change, recovery journey, housing success, rehabilitation success, recovery achievements, community support impact, transitional housing success, recovery milestones, personal transformation, recovery testimonies, program effectiveness, success metrics, impact assessment, community development, social impact, recovery outcomes, housing stability, life changes, recovery progress"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RIGHT Housing Impact | Success Stories & Community Transformation" />
        <meta 
          property="og:description" 
          content="Explore inspiring success stories and measurable impact of RIGHT Housing's recovery support and transitional housing programs. See how we're transforming lives and building stronger communities."
        />

        {/* Twitter */}
        <meta name="twitter:title" content="RIGHT Housing Impact | Success Stories & Community Transformation" />
        <meta 
          name="twitter:description" 
          content="Explore inspiring success stories and measurable impact of RIGHT Housing's recovery support and transitional housing programs. See how we're transforming lives and building stronger communities."
        />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="article:published_time" content="2025-02-07" />
        <meta name="article:modified_time" content="2025-02-07" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

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
    </>
  );
};

export default Impact;
