import React from "react";
import { Users, Lightbulb, Heart, Star } from "lucide-react";

const ImpactSection = () => {
  const impactAreas = [
    {
      icon: <Users className="w-8 h-8 text-success-600" />,
      title: "Recovery & Reintegration",
      description: "Supporting individuals in their journey to overcome trauma, addiction, and societal barriers through compassionate services and essential resources."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-success-600" />,
      title: "Independence & Growth",
      description: "Empowering lives through education, job training, and skill-building programs that foster confidence and self-sufficiency."
    },
    {
      icon: <Heart className="w-8 h-8 text-success-600" />,
      title: "Holistic Support",
      description: "Taking a comprehensive approach to healing - addressing mental, physical, emotional, and legal needs for long-term success."
    },
    {
      icon: <Star className="w-8 h-8 text-success-600" />,
      title: "Transformation",
      description: "Facilitating seamless transitions from temporary to permanent housing, creating opportunities for lasting positive change."
    }
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 bg-gradient-to-b from-white to-success-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-success-900">Transforming Lives</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          At RIGHT Housing, we believe in the power of second chances. Our comprehensive approach combines safe housing with life-changing support services to help individuals rebuild their lives and create lasting positive change.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {impactAreas.map((area, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-success-100"
          >
            <div className="bg-success-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              {area.icon}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-success-800">
              {area.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {area.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactSection;
