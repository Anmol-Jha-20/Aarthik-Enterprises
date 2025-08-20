import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Lionel Messi",
      role: "Engineer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 4,
      text: "Construction is the art of making a meaningful whole out of many parts. Buildings are witnesses to the human ability to construct things.",
    },
    {
      id: 2,
      name: "Erling Haaland",
      role: "Technician",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c4e20ff5?w=150&h=150&fit=crop&crop=face",
      rating: 4,
      text: "Construction is the art of making a meaningful whole out of many parts. Buildings are witnesses to the human ability to construct things.",
    },
    {
      id: 3,
      name: "Harry Kane",
      role: "Manager",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 4,
      text: "Construction is the art of making a meaningful whole out of many parts. Buildings are witnesses to the human ability to construct things.",
    },
    {
      id: 4,
      name: "Cristiano Ronaldo",
      role: "Director",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Construction is the art of making a meaningful whole out of many parts. Buildings are witnesses to the human ability to construct things.",
    },
    {
      id: 5,
      name: "Kylian Mbappe",
      role: "Architect",
      image:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Construction is the art of making a meaningful whole out of many parts. Buildings are witnesses to the human ability to construct things.",
    },
    {
      id: 6,
      name: "Kevin De Bruyne",
      role: "Supervisor",
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
      rating: 4,
      text: "Construction is the art of making a meaningful whole out of many parts. Buildings are witnesses to the human ability to construct things.",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [testimonials[currentSlide]];
    } else {
      const visible = [];
      for (let i = 0; i < 3; i++) {
        visible.push(testimonials[(currentSlide + i) % testimonials.length]);
      }
      return visible;
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  const TestimonialCard = ({ testimonial }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-8 mx-2 flex flex-col items-center text-center h-full"
    >
      <div className="mb-6">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-20 h-20 rounded-full object-cover border-4 border-orange-400"
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
              testimonial.name
            )}&background=f97316&color=fff&size=150`;
          }}
        />
      </div>

      <h3 className="text-xl font-bold text-blue-900 mb-2">
        {testimonial.name}
      </h3>
      <p className="text-gray-600 mb-4 font-medium">{testimonial.role}</p>

      <p className="text-gray-700 font-roboto leading-relaxed mb-6 flex-grow">
        "{testimonial.text}"
      </p>

      <div className="flex space-x-1">{renderStars(testimonial.rating)}</div>
    </motion.div>
  );

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-blue-600 font-semibold mb-4 tracking-wider uppercase text-sm"
          >
            CLIENTS TESTIMONIAL
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-blue-900 mb-6"
          >
            Our Clients Review
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Construction is a general term meaning the art and industrial
            science of old french construction.
          </motion.p>
        </div>

        {/* Testimonials Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300 -ml-6"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300 -mr-6"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[400px]">
            <AnimatePresence mode="wait">
              {getVisibleTestimonials().map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.id}-${currentSlide}-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12 space-x-3">
          {Array.from(
            { length: Math.ceil(testimonials.length / (isMobile ? 1 : 3)) },
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index * (isMobile ? 1 : 3))}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentSlide / (isMobile ? 1 : 3)) === index
                    ? "bg-orange-500 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            )
          )}
        </div>

        {/* Scroll to Top Button */}
        {/* <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center z-30"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          <ChevronRight className="w-6 h-6 rotate-[-90deg]" />
        </motion.button> */}
      </div>
    </section>
  );
};

export default TestimonialSection;
