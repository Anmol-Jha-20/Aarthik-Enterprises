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
import RccWallImage from "../../assets/RccWallImage.png";
import RccWallProductImage from "../../assets/RccWallIProductImage.png";

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
      name: "8 Feet RCC Readymade Compound Wall",
      price: "80",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2023/6/320889223/NU/GJ/IN/192062814/rcc-readymade-compound-wall-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2023/6/320889504/BR/FE/BW/192062814/rcc-readymade-compound-wall-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2023/6/320889768/OM/JP/MA/192062814/rcc-readymade-compound-wall-1000x1000.jpg",
      ],
      specs: {
        "Minimum Order Quantity": "5000 Sq ft",
        "Usage/Application": "Boundary",
        Thickness: "20 mm",
        "Built Type": "Prefab",
        Height: "8 Feet",
        Color: "Grey",
        Material: "RCC",
      },
      description:
        "An 8 Feet RCC Readymade Compound Wall is a strong, durable, and easy-to-install boundary solution for residential, commercial, industrial, and agricultural properties. These walls are made from reinforced cement concrete (RCC) and are precast to provide both strength and aesthetic appeal, ensuring long-lasting performance and security.",
    },
    {
      name: "10 Feet RCC Readymade Compound Wall",
      price: "70",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487879718/TV/VV/VJ/192062814/10-feet-rcc-readymade-precast-compound-wall-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487879841/LY/PC/OG/192062814/10-feet-rcc-readymade-precast-compound-wall-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487879842/LN/OB/VW/192062814/10-feet-rcc-readymade-precast-compound-wall-1000x1000.jpg",
      ],
      specs: {
        "Minimum Order Quantity": "5000 Sq ft",
        "Usage/Application": "School",
        Thickness: "40 mm",
        "Built Type": "Prefab",
        Height: "10 Feet",
        Color: "Grey",
        Material: "RCC",
      },
      description:
        "A 10 Feet RCC Readymade Compound Wall is an ideal boundary solution for residential, industrial, commercial, and agricultural properties. These walls are made from high-strength reinforced cement concrete (RCC) and are precast for easy installation, ensuring both durability and aesthetic appeal.",
    },
    {
      name: "5.5 Feet RCC Readymade Compound Wall",
      price: "70",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487878432/CV/KA/NP/192062814/modular-rcc-compound-wall-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487676386/WE/BB/IW/192062814/modular-rcc-readymade-compound-wall-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487878428/MC/EN/BI/192062814/modular-rcc-compound-wall-1000x1000.jpeg",
      ],
      specs: {
        "Minimum Order Quantity": "5000 Sq ft",
        "Usage/Application": "College",
        Thickness: "35 mm",
        "Built Type": "Modular",
        Height: "5.5 Feet",
        Color: "Grey",
        Material: "RCC",
      },
      description:
        "A 5.5 Feet RCC Readymade Compound Wall is a flexible and durable boundary solution designed to provide privacy, security, and aesthetic appeal for residential, commercial, and industrial properties. Made from reinforced cement concrete (RCC), the modular design allows for easy installation and customization, making it ideal for various applications while maintaining strength and longevity.",
    },
    {
      name: "RCC Readymade Concrete Precast Wall",
      price: "75",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503653035/WA/TI/HD/192062814/rcc-readymade-concrete-precast-wall-1000x1000.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503653034/IP/QN/DA/192062814/rcc-readymade-concrete-precast-wall-1000x1000.jpeg",
        RccWallProductImage,
      ],
      specs: {
        "Built Type": "Modular",
        Material: "Concrete",
        Feature: "Eco Friendly",
        "Beam length": "As per requirement.",
        "Country of Origin": "Made in India",
      },
      description:
        "RCC Readymade Concrete Precast Walls are factory-manufactured reinforced cement concrete panels designed for fast and efficient construction of boundary walls, partitions, and enclosures. These walls are precast, meaning they are cast and cured in a controlled environment and then transported to the site for quick installation.",
    },
    {
      name: "RCC Readymade Compound Wall",
      price: "100",
      images: [
        "https://5.imimg.com/data5/ANDROID/Default/2025/3/496410141/UB/PN/WA/192062814/prod-20250318-1718446845401040512695953-jpg-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503653153/PI/LG/CC/192062814/rcc-readymade-compound-wall-1000x1000.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503653155/IR/BE/RO/192062814/rcc-readymade-compound-wall-1000x1000.jpeg",
      ],
      specs: {
        "Built Type": "Modular",
        Height: "6 x 6 inches (150 mm x 150 mm)",
        Material: "Concrete",
        Feature: "Eco Friendly",
        "Country of Origin": "Made in India",
      },
      description:
        "An RCC Readymade Compound Wall is a precast reinforced cement concrete wall designed for fast, durable, and cost-effective boundary solutions. Unlike traditional brick walls, these walls are factory-made using steel-reinforced concrete panels and columns, which are then assembled on-site for quick installation.",
    },
    {
      name: "9 Feet RCC Readymade Compound Wall",
      price: "65",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2025/2/488022417/WZ/VL/VO/192062814/9-feet-rcc-readymade-compound-wall-1000x1000.jpeg",
        "https://5.imimg.com/data5/NSDMERP/Default/2023/6/320263401/YP/WB/AD/192062814/rcc-wall-boundary-1687853781288-1000x1000.jpg",
      ],
      specs: {
        "Minimum Order Quantity": "5000 Sq ft",
        "Usage/Application": "Boundary",
        Height: "9 Feet",
        Color: "Grey",
        Material: "RCC",
      },
      description:
        "A 9 Feet RCC Readymade Compound Wall is an ideal choice for high-security properties, commercial establishments, industrial sites, or residential properties that require enhanced privacy and protection. Constructed with reinforced cement concrete (RCC), this wall provides strength, durability, and long-lasting performance in both urban and rural environments.",
    },
    {
      name: "6 Feet RCC Readymade Compound Wall",
      price: "70",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487881476/QK/MH/WF/192062814/6-feet-rcc-compound-wall-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487881508/CD/BG/UC/192062814/6-feet-rcc-compound-wall-1000x1000.jpg",
      ],
      specs: {
        "Minimum Order Quantity": "5000 Sq ft",
        "Usage/Application": "Agriculture",
        Thickness: "30 mm",
        "Built Type": "Prefab",
        Height: "6 Feet",
        Color: "Grey",
        Material: "RCC",
      },
      description:
        "A 6 Feet RCC Readymade Compound Wall is a strong and durable boundary solution that provides security, privacy, and aesthetic appeal for residential, commercial, industrial, and agricultural properties. Made from reinforced cement concrete (RCC), these walls offer long-lasting performance and are resistant to harsh environmental factors.",
    },
    {
      name: "6.5 Feet Outdoor RCC Readymade Compound Wall",
      price: "72",
      images: [
        "https://5.imimg.com/data5/NSDMERP/Default/2023/6/320263355/VQ/CS/JZ/192062814/compound-wall-bounday-1687853774860-500x500.jpg",
        "https://5.imimg.com/data5/NSDMERP/Default/2023/6/320263346/HE/VM/WU/192062814/compound-wall-bounday-1687853773662-1000x1000.jpg",
      ],
      specs: {
        "Minimum Order Quantity": "5000 Sq ft",
        "Usage/Application": "Outdoor",
        Thickness: "25 mm",
        "Built Type": "Prefab",
        Height: "6.5 Feet",
        Color: "Grey",
        Material: "RCC",
      },
      description:
        "A 6.5 Feet Outdoor RCC Readymade Compound Wall is an excellent choice for providing security, privacy, and an aesthetic appeal to outdoor spaces such as gardens, residential properties, commercial areas, and industrial sites. Constructed with reinforced cement concrete (RCC), it ensures long-term durability, resistance to harsh weather, and minimal maintenance.",
    },
    {
      name: "7 Feet Garden RCC Readymade Compound Wall",
      price: "75",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487678382/DK/BU/ML/192062814/garden-rcc-readymade-compound-wall-1000x1000.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487882790/XX/MV/DA/192062814/7-feet-garden-rcc-readymade-compound-wall-1000x1000.png",
      ],
      specs: {
        "Minimum Order Quantity": "5000 Sq ft",
        "Usage/Application": "Garden",
        Thickness: "35 mm",
        "Built Type": "Prefab",
        Height: "7 Feet",
        Color: "Grey",
        Material: "RCC",
      },
      description:
        "7 Feet Garden RCC Readymade Compound Wall is a highly durable and aesthetic boundary solution designed for gardens, parks, residential spaces, and other outdoor areas. Made from reinforced cement concrete (RCC), this wall provides a strong, weather-resistant, and low-maintenance solution to enclose or demarcate outdoor spaces while maintaining an elegant look.",
    },
    {
      name: "7 Feet RCC Readymade Compound Wall",
      price: "85",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487868343/TM/JT/YP/192062814/7-feet-rcc-readymade-compound-wall-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487868338/XY/RT/TS/192062814/7-feet-rcc-readymade-compound-wall-1000x1000.jpg",
      ],
      specs: {
        "Minimum Order Quantity": "5000 Sq ft",
        "Usage/Application": "Factory",
        Thickness: "20 mm",
        "Built Type": "Prefab",
        Height: "7 Feet",
        Color: "Grey",
        Material: "RCC",
      },
      description:
        "A 7 Feet RCC Readymade Compound Wall is a strong, durable, and cost-effective boundary solution for residential, commercial, industrial, and agricultural properties. Manufactured using high-quality reinforced cement concrete (RCC), these precast walls provide high strength, weather resistance, and quick installation.",
    },
    {
      name: "5 Feet RCC Readymade Compound Wall",
      price: "70",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487883350/PX/MU/DR/192062814/5-feet-rcc-readymade-compound-wall-500x500.jpg",
      ],
      specs: {
        "Minimum Order Quantity": "5000 Sq ft",
        "Usage/Application": "Outdoor",
        Thickness: "25 mm",
        "Built Type": "Prefab",
        Height: "5 Feet",
        Color: "Grey",
        Material: "RCC",
      },
      description:
        "A 5 Feet RCC Readymade Compound Wall offers a secure, durable, and aesthetic boundary solution for residential, commercial, agricultural, and industrial properties. Made from reinforced cement concrete (RCC), this wall provides a strong and long-lasting structure to demarcate spaces while ensuring low maintenance and resistance to weather elements.",
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
          src={RccWallImage}
          alt="Construction Background"
          className="absolute w-full h-full object-cover"
        />
        {/* Overlay */}
        {/* <div className="absolute w-full h-full bg-black opacity-50"></div> */}

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
      {/* <section className="relative overflow-hidden">
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
      </section> */}
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
                RCC Wall
              </h1>

              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                <span className="block font-semibold text-yellow-400">
                  Strong. Durable. Maintenance-Free.
                </span>
              </p>

              <p className="text-lg mb-8 leading-relaxed text-gray-600">
                Our product range includes a wide range of 8 feet rcc readymade
                compound wall, 10 feet rcc readymade compound wall, 5.5 feet rcc
                readymade compound wall, rcc readymade concrete precast wall,
                rcc readymade compound wall and 9 feet rcc readymade compound
                wall.
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
                  src="https://5.imimg.com/data5/SELLER/Default/2025/2/487878432/CV/KA/NP/192062814/modular-rcc-compound-wall-1000x1000.jpg"
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

      {/* Products Showcase Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">RCC Wall</span> Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our complete range of premium RCC walls designed for
              different heights and applications.
            </p>
          </motion.div>

          <ProductShowcase />
        </div>
      </section>

      {/* About Section */}
      {/* <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-blue-100">
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
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
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
      </section> */}
    </div>
  );
};

export default RCCWallProductPage;
