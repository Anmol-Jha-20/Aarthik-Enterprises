import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Shield,
  Clock,
  Wrench,
  Phone,
  Mail,
  MapPin,
  Star,
  Award,
  Building,
  Home,
  Factory,
  TreePine,
} from "lucide-react";

const RCCWallProductPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "High structural strength and durability",
      description: "Built with premium quality materials for maximum longevity",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Weather-resistant and maintenance-free",
      description: "Withstands all weather conditions without regular upkeep",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast installation with uniform quality",
      description: "Quick setup process ensuring consistent results",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Customizable heights and finishes available",
      description: "Tailored solutions to meet your specific requirements",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Ideal for residential, industrial, and agricultural use",
      description: "Versatile application across multiple sectors",
    },
  ];

  const applications = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Housing Societies",
      desc: "Perfect for residential complexes",
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Industrial Compounds",
      desc: "Secure industrial perimeters",
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Agricultural Lands",
      desc: "Durable farm boundaries",
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Government Infrastructure",
      desc: "Public sector projects",
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Commercial Properties",
      desc: "Business establishments",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags would go in document head */}

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
            Reliable, durable, and built to last — discover premium RCC products
            crafted with precision and delivered on time.
          </p>
        </motion.div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              >
                <Star className="w-4 h-4 mr-2" />
                Premium Quality Products
              </motion.div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                RCC Wall
              </h1>

              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                <span className="block font-semibold text-yellow-400">
                  Strong. Durable. Maintenance-Free.
                </span>
              </p>

              <p className="text-lg mb-8 leading-relaxed text-blue-50">
                Our RCC (Reinforced Cement Concrete) Walls provide long-lasting
                and cost-effective boundary solutions for both residential and
                commercial spaces. Built with precision and quality materials
                for superior strength and stability.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Quote Now
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  View Specifications
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="RCC Wall Construction"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="text-blue-600">RCC Walls</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of strength, durability, and
              cost-effectiveness with our premium RCC wall solutions.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Perfect for{" "}
              <span className="text-yellow-500">Every Application</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our RCC walls are versatile solutions suitable for various sectors
              and requirements.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          >
            {applications.map((app, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 group"
              >
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {app.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {app.title}
                </h3>
                <p className="text-gray-600 text-sm">{app.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why <span className="text-blue-600">Aarthik Enterprises</span>?
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Choose Aarthik Enterprises for trusted quality and timely
                delivery. Our RCC walls are manufactured under strict quality
                control for reliable performance that lasts.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="w-5 h-5 text-gray-900" />
                  </div>
                  <span className="text-lg text-gray-700">
                    Superior quality materials and construction
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="w-5 h-5 text-gray-900" />
                  </div>
                  <span className="text-lg text-gray-700">
                    Strict quality control and testing
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="w-5 h-5 text-gray-900" />
                  </div>
                  <span className="text-lg text-gray-700">
                    Timely delivery and installation
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Construction Quality"
                  className="w-full h-96 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build with{" "}
              <span className="text-yellow-400">Quality RCC Walls</span>?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Contact us today to discuss your requirements or request a
              customized solution.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg flex items-center"
              >
                <Phone className="w-5 h-5 mr-3" />
                Contact Us Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center"
              >
                <Mail className="w-5 h-5 mr-3" />
                Get Free Quote
              </motion.button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-blue-100">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>info@aarthikenterprises.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Your Location, India</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RCCWallProductPage;
