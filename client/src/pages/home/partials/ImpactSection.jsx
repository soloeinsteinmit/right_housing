import React from "react";
import { Users, Home, Award, Heart } from "lucide-react";

const ImpactSection = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-success-600" />,
      value: "50K+",
      label: "People Housed",
      description: "Families and individuals provided with safe, affordable housing"
    },
    {
      icon: <Home className="w-8 h-8 text-success-600" />,
      value: "1000+",
      label: "Housing Units",
      description: "Affordable housing units developed and maintained"
    },
    {
      icon: <Award className="w-8 h-8 text-success-600" />,
      value: "15+",
      label: "Years Experience",
      description: "Years of dedicated service to communities worldwide"
    },
    {
      icon: <Heart className="w-8 h-8 text-success-600" />,
      value: "200+",
      label: "Community Partners",
      description: "Organizations working together for housing justice"
    }
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Through dedication and collaboration, we're making a real difference in
          communities around the world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
          >
            <div className="bg-success-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              {stat.icon}
            </div>
            <h3 className="text-4xl font-bold mb-2 text-success-900">
              {stat.value}
            </h3>
            <h4 className="text-xl font-semibold mb-2 text-gray-900">
              {stat.label}
            </h4>
            <p className="text-gray-600">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactSection;
