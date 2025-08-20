import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const WhyChooseUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("why-choose-us");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const reasons = [
    "Reasonable Construction Prices",
    "Building Renovation Maintenance",
    "The Ability to Delegate Tasks",
    "High Problem Solving Skills",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="why-choose-us"
      className="min-h-screen flex items-center bg-[#092553] py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            className="relative order-2 lg:order-1"
            variants={imageVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {/* Construction worker image placeholder */}
              {/* <div className="bg-gradient-to-br from-lime-400 via-green-400 to-emerald-500 aspect-[4/3] flex items-center justify-center relative">
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="relative z-10 text-center text-white">
                  <div className="w-24 h-24 mx-auto mb-4 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-sm opacity-90">
                    Construction Professional
                  </p>
                </div>

                
                <div className="absolute right-4 top-4 opacity-30">
                  <div className="grid grid-cols-3 gap-1">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className="w-4 h-6 bg-gray-700 rounded-sm"
                      ></div>
                    ))}
                  </div>
                </div>
              </div> */}
              <img
                src="https://5.imimg.com/data5/SELLER/Default/2025/4/503653035/WA/TI/HD/192062814/rcc-readymade-concrete-precast-wall-1000x1000.jpeg"
                alt="about image"
              />

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full shadow-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-500 rounded-full shadow-lg opacity-80"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="order-1 lg:order-2 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase shadow-lg">
                  High Performance!
                </span>
              </motion.div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                The reasons why you should{" "}
                <span className="bg-white bg-clip-text text-transparent">
                  choose our company!
                </span>
              </h2>

              <p className="text-white font-roboto text-lg leading-relaxed max-w-2xl">
                With over 15 years of experience, Aarthik Enterprises delivers
                high-quality RCC benches, poles, and walls using premium
                materials and modern manufacturing techniques. Backed by skilled
                professionals, strict quality control, and on-time delivery — we
                ensure strength, reliability, and value in every product.
              </p>
            </motion.div>

            {/* Reasons List */}
            <motion.div variants={itemVariants} className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 group cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Check className="w-5 h-5 text-white font-bold" />
                  </motion.div>
                  <span className="text-white text-lg font-medium group-hover:text-yellow-300 transition-colors duration-300">
                    {reason}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl flex items-center space-x-3 group transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(245, 158, 11, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>More About Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-200 rounded-full opacity-10 blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-green-200 rounded-full opacity-10 blur-xl"></div>
        </div>
      </div>

      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6, #1e40af);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </section>
  );
};

// Add the blue background with pattern overlay
const EnhancedWhyChooseUs = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect
            width="100"
            height="100"
            fill="url(#grid)"
            className="text-white"
          />
        </svg>
      </div>

      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent transform rotate-12 scale-150"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent transform -rotate-12 scale-150"></div>
      </div>

      <WhyChooseUsSection />
    </div>
  );
};

export default EnhancedWhyChooseUs;
