import React, { useState, useEffect } from "react";
import PrecaustCompoundImage from "../../assets/PrecaustCompoundImage.jpeg";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    const element = document.getElementById("about-section");
    if (element) observer.observe(element);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div
      id="about-section"
      className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 mt-48 md:mt-0 lg:mt-0 space-y-8">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4">
                RCC Manufacturing Partner
              </p>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Reliable RCC
                <br />
                <span className="text-blue-800">Precast Compound Wall!</span>
              </h1>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <p className="text-gray-600 font-roboto text-lg leading-relaxed mb-8">
                The need for durable, fast, and sustainable construction is
                growing — and precast solutions are leading the way. At Aarthik
                Enterprises, we provide reliable RCC precast compound walls
                built on quality, strength, and trust to meet the infrastructure
                needs of tomorrow.
              </p>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                More About Us
              </button>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Main Background Image */}
              <div
                className={`transform transition-all duration-1000 delay-200 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div
                  className="w-full h-64 sm:h-80 lg:h-96 rounded-lg shadow-2xl bg-cover bg-center relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${PrecaustCompoundImage})`,
                    transform: `translateY(${scrollY * 0.1}px)`,
                  }}
                >
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                </div>
              </div>

              {/* Yellow Strategy Card */}
              <div
                className={`absolute -top-4 -right-4 sm:-top-6 sm:-right-6 lg:-top-8 lg:-right-8 transform transition-all duration-1000 delay-700 ${
                  isVisible
                    ? "translate-x-0 opacity-100 rotate-0"
                    : "translate-x-10 opacity-0 rotate-12"
                }`}
              >
                <div className="bg-yellow-400 p-6 rounded-lg shadow-xl max-w-xs">
                  <h3 className="text-white font-bold text-xl mb-3">
                    Material Product Strategy
                  </h3>
                  <p className="text-white text-sm font-roboto leading-relaxed">
                    A focused approach to delivering high-quality materials that
                    align with product goals and customer needs.
                  </p>
                </div>
              </div>

              {/* Bottom Construction Worker Image */}
              <div
                className={`absolute -bottom-8 -left-8 sm:-bottom-12 sm:-left-12 lg:-bottom-16 lg:-left-16 transform transition-all duration-1000 delay-900 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div
                  className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-lg shadow-2xl bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://5.imimg.com/data5/SELLER/Default/2025/2/487879840/BE/RB/HN/192062814/10-feet-rcc-readymade-precast-compound-wall-500x500.jpg')`,
                    transform: `translateY(${scrollY * -0.05}px)`,
                  }}
                ></div>
              </div>

              {/* Floating Circle Element */}
              {/* <div
                className={`absolute top-1/2 right-8 w-16 h-16 bg-yellow-400 rounded-full shadow-lg transform transition-all duration-1000 delay-1100 ${
                  isVisible
                    ? "translate-y-0 opacity-80 scale-100"
                    : "translate-y-5 opacity-0 scale-0"
                }`}
                style={{
                  transform: `translateY(${scrollY * 0.05}px) scale(${
                    isVisible ? 1 : 0
                  })`,
                }}
              ></div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-200 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-yellow-300 rounded-full opacity-40 animate-bounce"></div>
      <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-blue-300 rounded-full opacity-60"></div>
    </div>
  );
};

export default AboutSection;
