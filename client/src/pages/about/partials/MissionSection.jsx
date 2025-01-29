import { motion } from "framer-motion";

const MissionSection = () => {
  const values = [
    {
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
      title: "Recovery & Reintegration",
      description:
        "Supporting individuals in their journey of recovery and reintegration, providing essential tools, resources, and compassionate services.",
      text: "R",
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Independence & Empowerment",
      description:
        "Empowering individuals through education, job training, emotional support, and skill-building for self-sufficiency.",
      text: "I",
    },
    {
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: "Guidance & Goal Setting",
      description:
        "Providing personalized guidance and goal-setting with clear, achievable paths for stable housing, employment, and family reunification.",
      text: "G",
    },
    {
      icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
      title: "Holistic Support",
      description:
        "Taking a comprehensive, person-centered approach to support mental, physical, emotional, and legal needs for long-term success.",
      text: "H",
    },
    {
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
      title: "Transition & Transformation",
      description:
        "Facilitating seamless transitions from temporary to permanent housing with continued support for building better futures.",
      text: "T",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-success-50/30 to-warning-50/30" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Mission & Vision Section */}
        <div className="relative mb-32">
          {/* Decorative Line */}
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-success-200 to-transparent top-1/2 -translate-y-1/2" />

          <div className="grid lg:grid-cols-2 gap-20">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-10 shadow-xl">
                <div className="absolute -top-8 left-10 bg-success-600 text-white px-8 py-4 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <div className="mt-8">
                  <p className="text-gray-600 leading-relaxed">
                    Our mission is to empower individuals transitioning from
                    incarceration or recovering from addiction by providing
                    comprehensive housing support and essential resources. We
                    focus on recovery, personal growth, and independence through
                    job training, financial literacy, emotional support, and
                    life skills development. By fostering a safe, supportive
                    environment and offering holistic services, we guide each
                    individual toward reintegration, self-sufficiency, and a
                    transformed future.
                    {/* Our mission is to empower individuals transitioning from
                      incarceration or recovering from addiction by providing
                      comprehensive housing support and essential resources. We
                      focus on recovery, personal growth, and independence
                      through job training, financial literacy, emotional support,
                      and life skills
                      development. By fostering a safe, supportive environment and 
                      offering holistic services, we guide each individual toward 
                      reintegration, self-sufficiency, and a transformed future.
                    */}
                  </p>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-success-200 to-success-300 rounded-full opacity-50" />
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-to-br from-success-100 to-success-200 rounded-full opacity-30" />
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-10 shadow-xl">
                <div className="absolute -top-8 left-10 bg-warning-600 text-white px-8 py-4 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <div className="mt-8 h-full">
                  <p className="text-gray-600 leading-relaxed">
                    To empower individuals and families impacted by addiction,
                    incarceration, and mental health by providing housing
                    solutions and comprehensive support, and a pathway from
                    transitional living to independent living. We envision a
                    future where everyone can rebuild their lives and thrive in
                    self-sufficiency and security.
                    {/* To empower individuals and families impacted by 
                    homelessness, domestic violence, addiction, or incarceration 
                    by providing compassionate support, housing solutions, and a 
                    pathway from transitional living to independent 
                    living. We envision a future where everyone can rebuild their 
                    lives and thrive in self-sufficiency and security
                    */}
                  </p>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-warning-200 to-warning-300 rounded-full opacity-50" />
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-warning-100 to-warning-200 rounded-full opacity-30" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Values Section */}
        <div className="relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <div className="h-2 w-full bg-gradient-to-r from-success-500 to-warning-500 rounded-full" />
            </div>
          </motion.div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {/* Connecting Lines */}
            <div className="absolute inset-0 -z-10">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M0,50 Q25,0 50,50 T100,50"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  fill="none"
                  className="text-success-200"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </svg>
            </div>

            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  {/* Value Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-success-500 to-success-600 rounded-xl flex items-center justify-center text-white font-bold transform rotate-12 group-hover:rotate-0 transition-transform z-40">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-success-100 rounded-2xl flex items-center justify-center mb-6 transform -rotate-6 group-hover:rotate-0 transition-transform">
                    {/* <svg
                      className="w-8 h-8 text-success-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={value.icon}
                      />
                    </svg> */}
                    <span className="font-bold text-4xl text-success-700">
                      {value.text}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-success-200 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
