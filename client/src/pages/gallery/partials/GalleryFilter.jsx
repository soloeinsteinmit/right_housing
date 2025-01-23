import { motion } from "framer-motion";
import { Home, Building, Users, Wrench } from "lucide-react";

const GalleryFilter = ({ activeFilter, setActiveFilter }) => {
  const filters = [
    { id: "all", label: "All Projects", icon: <Home className="w-4 h-4" /> },
    {
      id: "housing",
      label: "Housing Projects",
      icon: <Building className="w-4 h-4" />,
    },
    {
      id: "community",
      label: "Community Impact",
      icon: <Users className="w-4 h-4" />,
    },
    {
      id: "renovation",
      label: "Renovations",
      icon: <Wrench className="w-4 h-4" />,
    },
  ];

  return (
    <nav className="flex items-center gap-2">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => setActiveFilter(filter.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
            activeFilter === filter.id
              ? "bg-success-50 text-success-600"
              : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          }`}
        >
          {filter.icon}
          <span className="whitespace-nowrap">{filter.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default GalleryFilter;
