import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import prison from "../../../assets/prison2.jpg";
import homeless from "../../../assets/h.jpg";
import drug from "../../../assets/drug.jpg";
import { Image } from "@heroui/image";

const ProgramsSection = () => {
  const programs = [
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      image: prison,
      link: "/programs/emergency",
    },
    {
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      image: homeless,
      link: "/programs/affordable",
    },
    {
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      image: drug,
      link: "/programs/support",
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Programs</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We offer comprehensive housing solutions designed to meet diverse
          needs and create lasting impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <Link
            key={index}
            to={program.link}
            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
          >
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-success-900/20 group-hover:bg-success-900/0 transition-colors " />
              <Image
                src={program.image}
                isZoomed
                alt={program.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-success-700 transition-colors">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <div className="flex items-center text-success-700 font-semibold">
                <span>Learn more</span>
                <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/programs"
          className="inline-flex items-center gap-2 text-success-700 hover:text-success-800 font-semibold text-lg group"
        >
          <span>View all programs</span>
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ProgramsSection;
