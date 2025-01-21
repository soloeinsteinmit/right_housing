import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const ImpactStories = () => {
  const stories = [
    {
      quote:
        "Thanks to the generous donations, I now have a safe place to call home. It's changed my life completely.",
      author: "Sarah M.",
      role: "Program Beneficiary",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    },
    {
      quote:
        "The support we received helped us get back on our feet. We're forever grateful.",
      author: "James & Family",
      role: "Housing Recipients",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
    },
    {
      quote:
        "Seeing the direct impact of donations on families is truly inspiring. Every contribution matters.",
      author: "Dr. Emily Chen",
      role: "Program Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute w-full h-full opacity-[0.15]" viewBox="0 0 100 100">
          <motion.path
            d="M0,50 Q25,45 50,50 T100,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.2"
            className="text-success-600"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.1"
            className="text-primary-600"
            initial={{ scale: 0.8, opacity: 0.2 }}
            animate={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Stories of Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how your donations make a real difference in people's lives
          </p>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stories.map((story, index) => (
            <motion.div
              key={story.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-xl relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-success-500 rounded-full flex items-center justify-center text-white shadow-lg">
                <Quote className="w-4 h-4" />
              </div>

              {/* Story Content */}
              <div className="mb-6">
                <p className="text-gray-700 italic mb-4">{story.quote}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={story.image}
                    alt={story.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{story.author}</h4>
                    <p className="text-sm text-gray-600">{story.role}</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-success-500/20 rounded-b-2xl" />
              <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-success-500 rounded-bl-2xl" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-600 mb-8">
            Your donation can help write the next success story
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-success-600 text-white rounded-xl font-semibold shadow-lg shadow-success-600/20 hover:shadow-xl hover:shadow-success-600/30 transition-shadow"
          >
            Make a Difference Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStories;
