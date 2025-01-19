import React from "react";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Right Housing didn't just give us a house, they gave us hope and a foundation to build our future. The support we received changed our lives completely.",
      author: "Sarah Johnson",
      role: "Program Beneficiary",
      location: "Chicago, IL",
    },
    {
      quote:
        "The dedication and compassion of the Right Housing team is incredible. They truly understand that housing is about more than just four walls.",
      author: "Michael Chen",
      role: "Community Partner",
      location: "San Francisco, CA",
    },
    {
      quote:
        "Thanks to Right Housing's financial education program, I was able to become a first-time homeowner. Their holistic approach makes all the difference.",
      author: "Maria Rodriguez",
      role: "Homeowner",
      location: "Miami, FL",
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Real stories from people whose lives have been transformed through our
          housing programs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow relative"
          >
            <Quote className="w-12 h-12 text-success-200 absolute -top-2 -left-2" />
            <div className="pt-8">
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <h4 className="font-semibold text-success-900">
                  {testimonial.author}
                </h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
