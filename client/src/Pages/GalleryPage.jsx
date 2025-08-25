import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  ChevronLeft,
  ChevronRight,
  X,
  Star,
  Award,
  Users,
  Calendar,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const AarthikGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock product data with placeholder images
  const products = [
    {
      id: 1,
      title: "5.5 Feet RCC Readymade Compound Wall",
      category: "wall",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487878428/MC/EN/BI/192062814/modular-rcc-compound-wall-1000x1000.jpeg",
      description:
        "High-quality reinforced concrete bench for parks and public spaces",
    },
    {
      id: 2,
      title: "4 Seater With Backrest RCC Garden Bench",
      category: "bench",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487873194/HG/PT/GP/192062814/4-seater-rcc-garden-bench-with-backrest-1000x1000.jpg",
      description: "Elegant decorative concrete bench with artistic design",
    },
    {
      id: 3,
      title: "7 Feet RCC Fencing Pole",
      category: "pole",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487854322/LY/UJ/TF/192062814/4feet-rcc-fencing-poles-1000x1000.jpg",
      description: "Durable RCC electric pole for street lighting",
    },
    {
      id: 4,
      title: "Rcc Fencing Poles",
      category: "pole",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487858665/NH/YN/RB/192062814/rcc-angular-fencing-pole-500x500.jpeg",
      description: "Heavy-duty concrete pole for street lighting applications",
    },
    {
      id: 5,
      title: "Precast Boundary Wall",
      category: "wall",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503631781/LQ/SK/MR/192062814/precast-boundary-wall-1000x1000.jpeg",
      description: "Precast concrete boundary wall panels",
    },
    {
      id: 6,
      title: "Rcc Readymade Compound Wall",
      category: "wall",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503653329/TR/QG/TL/192062814/rcc-readymade-compound-wall-1000x1000.jpeg",
      description: "Artistic concrete wall panels with premium finish",
    },
    {
      id: 7,
      title: "Garden RCC Bench",
      category: "bench",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503687657/RJ/QC/AY/192062814/with-arm-rest-3-seater-cast-iron-park-bench-for-long-lasting-and-durable-with-back-500x500.jpg",
      description:
        "With Arm Rest 3 Seater Cast Iron Park Bench, For Long Lasting And Durable, With Back",
    },
    {
      id: 8,
      title: "Precast Compound Wall",
      category: "wall",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487879840/BE/RB/HN/192062814/10-feet-rcc-readymade-precast-compound-wall-1000x1000.jpg",
      description: "Strong and durable compound wall solution",
    },
  ];

  const categories = [
    { id: "all", name: "All Products", icon: "🏗️" },
    { id: "bench", name: "RCC Benches", icon: "🪑" },
    { id: "pole", name: "RCC Poles", icon: "🚦" },
    { id: "wall", name: "RCC Walls", icon: "🧱" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const openModal = (product) => {
    setSelectedImage(product);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    const currentIndex = filteredProducts.findIndex(
      (p) => p.id === selectedImage.id
    );
    const nextIndex = (currentIndex + 1) % filteredProducts.length;
    setSelectedImage(filteredProducts[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredProducts.findIndex(
      (p) => p.id === selectedImage.id
    );
    const prevIndex =
      (currentIndex - 1 + filteredProducts.length) % filteredProducts.length;
    setSelectedImage(filteredProducts[prevIndex]);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">
            Loading Gallery...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* SEO Meta Tags would go in document head */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
        <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Construction Background"
            className="absolute w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black opacity-50"></div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center text-white px-4"
          >
            <p className="uppercase tracking-widest text-sm md:text-base font-semibold mb-2">
              RCC Manufacturing Partner!
            </p>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              {/* High quality construction <br className="hidden md:block" />
                    solutions for industries! */}
              Strength You Can Trust. Quality You Can See.
            </h1>
            <p className="max-w-2xl mx-auto text-sm md:text-base lg:text-lg leading-relaxed">
              Reliable, durable, and built to last — discover premium RCC
              products crafted with precision and delivered on time.
            </p>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                About <span className="text-blue-600">Our Company</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-400 mx-auto mb-8"></div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-3xl p-8 md:p-12 shadow-xl">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto">
                Established in 2006,{" "}
                <strong className="text-blue-600">Aarthik Enterprises</strong>{" "}
                is a leading manufacturer of
                <strong className="text-yellow-600">
                  {" "}
                  RCC Benches, RCC Poles, and RCC Walls
                </strong>
                . We manufacture premium quality products using top-grade raw
                materials procured from authentic vendors. Our experienced team
                stays updated with advanced manufacturing techniques, and our
                quality control unit ensures every product meets the highest
                standards of design, quality, and finish. We deliver exceptional
                products at reasonable rates within promised timeframes.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Our <span className="text-blue-600">Product Gallery</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-400 mx-auto mb-8"></div>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Explore our comprehensive range of high-quality RCC products
                designed for durability and excellence
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md"
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group overflow-hidden"
                  onClick={() => openModal(product)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-bold text-lg mb-2">
                        {product.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {product.description}
                    </p>
                    {/* <div className="mt-4 flex items-center text-blue-600 font-semibold">
                      <span className="text-sm">View Details</span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        {/* <section className="py-16 px-4 mb-12 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Start Your{" "}
              <span className="text-yellow-300">Project?</span>
            </h2>
            <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto">
              Contact us today for premium quality RCC products delivered within
              your timeline
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <Phone className="w-8 h-8 text-yellow-300 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Call Us</h3>
                <p className="text-blue-200">+91 XXX XXX XXXX</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <Mail className="w-8 h-8 text-yellow-300 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Email Us</h3>
                <p className="text-blue-200">info@aarthikenterprises.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <MapPin className="w-8 h-8 text-yellow-300 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                <p className="text-blue-200">Your Business Address</p>
              </div>
            </div>

            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Get Quote Now
            </button>
          </div>
        </section> */}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-xl max-h-screen overflow-y-auto w-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-yellow-300 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-96 md:h-[500px] object-cover"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {selectedImage.description}
                </p>
                <button className="mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105">
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AarthikGallery;
