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
  Eye,
  ShoppingCart,
  Ruler,
  Package,
  Palette,
  Settings,
} from "lucide-react";
import RccWallProductImage from "../../assets/RccWallIProductImage.png";
import RccPoleImage from "../../assets/RccPoleImage.png";

const ProductCard = ({ product, index }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="lg:flex">
        {/* Product Images */}
        <div className="lg:w-1/2 p-6">
          <div className="relative">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-80 lg:h-96 object-contain rounded-xl"
            />
            {/* <button className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300">
              <Eye className="w-5 h-5 text-gray-700" />
            </button> */}
          </div>

          {/* Thumbnail Images */}
          <div className="flex gap-2 mt-4 justify-center">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  selectedImage === idx
                    ? "border-blue-500 scale-105"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <img
                  src={img}
                  alt={`${product.name} ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 p-6 lg:p-8">
          <div className="h-full flex flex-col">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {product.name}
              </h3>

              <div className="flex items-center gap-4 mb-6">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600">
                  ₹{product.price}
                </div>
                <div className="text-gray-500">/ Sq ft</div>
                <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors duration-300">
                  Get Latest Price
                </button>
              </div>
            </div>

            {/* Product Specifications */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Settings className="w-5 h-5 mr-2 text-gray-600" />
                Product Details:
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between py-2 border-b border-gray-100 last:border-b-0"
                  >
                    <span className="text-gray-600 font-medium">{key}</span>
                    <span className="text-gray-900 font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Description */}
            <div className="mb-6 flex-grow">
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-800 cursor-pointer px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                {/* <Contact className="w-5 h-5 mr-2" /> */}
                Contact Us
              </button>
              <button className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 cursor-pointer hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProductShowcase = () => {
  const products = [
    {
      name: "Rcc Readymade Boundary Wall",
      price: "65",
      images: [
        RccPoleImage,
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503652843/VG/RG/YF/192062814/rcc-readymade-boundary-wall-1000x1000.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503652847/QD/LX/ET/192062814/rcc-readymade-boundary-wall-1000x1000.jpeg",
      ],
      specs: {
        "Built Type": "Modular",
        Height: "6 x 6 inches (150 mm x 150 mm)",
        "Beam Size": "6 x 6 inches (150 mm x 150 mm)",
        "Beam length": "As per requirement.",
        "Country of Origin": "Made in India",
      },
      description:
        "RCC Readymade Boundary Walls are precast, steel-reinforced cement concrete panels designed to offer a strong, long-lasting, and maintenance-free solution for securing property boundaries. These walls are manufactured in a controlled environment and then installed on-site, ensuring faster construction, uniform quality, and significant cost savings compared to traditional brick walls.",
    },
    {
      name: "7 Feet RCC Fencing Pole",
      price: "80",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487854312/EC/FP/ET/192062814/4feet-rcc-fencing-poles-1000x1000.jpg",
        "https://5.imimg.com/data5/ANDROID/Default/2023/8/335286701/MO/JL/LV/192062814/product-jpeg-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487854322/LY/UJ/TF/192062814/4feet-rcc-fencing-poles-1000x1000.jpg",
      ],
      specs: {
        "Minimum Order Quantity": "1000 Sq ft",
        "Usage/Application": "Fencing",
        Thickness: "25 mm",
        Height: "7 Feet",
        Material: "RCC",
        Design: "Straight",
        Durability: "Weather Resistant",
        Application: "Agricultural and Farm Fencing",
      },
      description:
        "A 7 Feet RCC Fencing Pole is a strong and durable option for securing boundaries in agricultural, industrial, and residential areas. Made from high-quality reinforced cement concrete (RCC) with steel reinforcement, these poles offer high tensile strength, weather resistance, and long-lasting performance.",
    },
    {
      name: "Rcc Fencing Poles",
      price: "70",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487858665/NH/YN/RB/192062814/rcc-angular-fencing-pole-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487858661/YC/LI/KN/192062814/rcc-angular-fencing-pole-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487858668/SD/DD/FJ/192062814/rcc-angular-fencing-pole-1000x1000.jpg",
      ],
      specs: {
        "Minimum Order Quantity": "1000 Sq ft",
        "Usage/Application": "Construction",
        Thickness: "100 mm",
        Design: "Angular Bend",
        Height: "6 Feet",
        Color: "Grey",
        Material: "RCC",
      },
      description:
        "A 10 Feet Angular RCC Fencing Pole is a robust and durable fencing solution, ideal for high-security enclosures, agricultural lands, industrial sites, and residential boundaries. These poles are made from high-quality reinforced cement concrete (RCC) and feature an angular design for added strength and stability.",
    },
    {
      name: "RCC Fencing Poles",
      price: "240",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487707919/GW/AN/LF/192062814/rcc-construction-pole-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487716600/KN/PB/YG/192062814/rcc-construction-pole-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487677230/NU/EV/ZI/192062814/5-feet-rcc-readymade-compound-wall-1000x1000.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487665274/KB/SW/AH/192062814/grey-rcc-pole-1000x1000.jpeg",
      ],
      specs: {
        Height: "6 Feet",
        Design: "Straight",
        Shape: "Rectangle",
        "Application/Usage": "Boundary",
        "Country of Origin": "Made in India",
      },
      description:
        "RCC Fencing Poles (Reinforced Cement Concrete Fencing Poles) are durable vertical structural elements used to support fencing wires, chain link mesh, barbed wire, or other types of fencing materials. These poles are made from a mix of cement, sand, aggregates, and steel reinforcement bars (rebars), which provide them with the strength and longevity required for outdoor applications.",
    },
    {
      name: "RCC Pole",
      price: "65",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2023/6/320887768/YK/SA/GH/192062814/rcc-readymade-pole-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487663960/PX/BN/GP/192062814/rcc-readymade-pole-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503654508/XY/YA/XS/192062814/rcc-pole-1000x1000.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503654511/IP/OE/JG/192062814/rcc-pole-1000x1000.jpg",
      ],
      specs: {
        "Minimum Order Quantity": "100 sq ft",
        Height: "6 Feet",
        Design: "Straight",
        "Usage/Application": "Fencing",
        Thickness: "16 mm",
        color: "Grey",
        material: "RCC",
      },
      description:
        "A 6 Feet RCC Fencing Pole is a strong and durable boundary support structure, ideal for agricultural lands, industrial premises, residential properties, and commercial fencing. Made from high-quality reinforced cement concrete (RCC) with embedded steel reinforcement, these poles offer superior strength, weather resistance, and long-lasting performance.",
    },
    {
      name: "7 Feet Rcc Fencing Poles",
      price: "40",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487666146/LQ/XQ/DM/192062814/rcc-boundary-pole-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487857203/UF/NS/BV/192062814/3-feet-pcc-electric-pole-1000x1000.jpg",
      ],
      specs: {
        "Minimum Order Quantity": "100 Sq ft",
        "Usage/Application": "Boundary",
        Height: "12 Feet",
        Shape: "Rectangle",
        Thickness: "20 mm",
        "Grill Design": "Antique",
        Color: "Grey",
        Material: "RCC",
      },
      description:
        "A 3 Feet Electric RCC Fencing Pole is a compact and durable pole designed for supporting low-height electrical installations, fencing, or temporary lighting setups. Manufactured using high-grade cement and prestressed concrete techniques, these poles provide excellent strength and weather resistance.",
    },
    {
      name: "Agriculture RCC Fencing Pole",
      price: "40",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487866330/NA/KX/BX/192062814/18mm-agriculture-rcc-pole-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487866339/XV/JL/KE/192062814/18mm-agriculture-rcc-pole-1000x1000.jpg",
      ],
      specs: {
        "Minimum Order Quantity": "100 Sq ft",
        "Usage/Application": "Agriculture",
        "Built Type": "Prefab",
        Height: "6 Feet",
        Color: "Grey",
        Material: "RCC",
      },
      description:
        "An 18mm Agriculture RCC Fencing Pole is a lightweight yet sturdy option designed primarily for supporting agricultural fencing, vineyard structures, creeper plant support, and small-scale boundary enclosures. Made from high-quality reinforced cement concrete (RCC) with embedded steel reinforcement, these poles offer durability and resistance to environmental factors.",
    },
  ];

  return (
    <div className="space-y-12">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} index={index} />
      ))}
    </div>
  );
};

const RCCPoleProductPage = () => {
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
          src="https://5.imimg.com/data5/SELLER/Default/2025/2/487854322/LY/UJ/TF/192062814/4feet-rcc-fencing-poles-1000x1000.jpg"
          alt="Construction Background"
          className="absolute w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black opacity-40"></div>

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

      <section className="relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-black/20"></div> */}
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-black"
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
                RCC Poles That Stand the Test of Time
              </h1>

              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                <span className="block font-semibold text-yellow-400">
                  Strong. Durable. Maintenance-Free.
                </span>
              </p>

              <p className="text-lg mb-8 leading-relaxed text-gray-600">
                We are pioneers in the industry, offering high-quality RCC
                readymade boundary walls, 7 feet RCC fencing poles, standard RCC
                poles, and specialized agricultural RCC fencing poles.
                Manufactured in India with durable materials, our products
                provide strong, maintenance-free, and cost-effective fencing
                solutions suitable for residential, commercial, and agricultural
                needs.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 cursor-pointer px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Quote Now
                </button>
                {/* <button className="border-2 border-white text-black hover:bg-white hover:text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                   View Specifications
                 </button> */}
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
                  src="https://5.imimg.com/data5/SELLER/Default/2025/2/487665274/KB/SW/AH/192062814/grey-rcc-pole-1000x1000.jpeg"
                  alt="RCC Pole Construction"
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
              Why Choose Our <span className="text-blue-600">RCC Poles</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of strength, durability, and
              cost-effectiveness with our premium RCC Pole solutions.
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
              Our RCC Poles are versatile solutions suitable for various sectors
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

      {/* Products Showcase Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">RCC Pole</span> Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our complete range of premium RCC Poles designed for
              different heights and applications.
            </p>
          </motion.div>

          <ProductShowcase />
        </div>
      </section>
    </div>
  );
};

export default RCCPoleProductPage;
