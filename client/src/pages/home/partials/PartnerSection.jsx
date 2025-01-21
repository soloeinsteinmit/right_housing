import React from "react";
import { Building2, Building, HomeIcon, GraduationCap } from "lucide-react";

const PartnerSection = () => {
  const partners = [
    {
      icon: <Building2 className="w-12 h-12" />,
      name: "City Housing Authority",
      type: "Government Partner",
    },
    {
      icon: <Building className="w-12 h-12" />,
      name: "Community Foundation",
      type: "Non-Profit Partner",
    },
    {
      icon: <HomeIcon className="w-12 h-12" />,
      name: "Urban Development Corp",
      type: "Corporate Partner",
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      name: "Housing Institute",
      type: "Educational Partner",
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Partners</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Working together with leading organizations to create sustainable housing
          solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-8 text-center hover:shadow-md transition-shadow"
          >
            <div className="bg-success-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-success-700">
              {partner.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
            <p className="text-gray-600">{partner.type}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-600 mb-8">
          Join our network of partners and help us create lasting change in
          communities.
        </p>
        <button className="bg-success-700 hover:bg-success-800 text-white px-8 py-3 rounded-full transition-colors">
          Become a Partner
        </button>
      </div>
    </div>
  );
};

export default PartnerSection;
