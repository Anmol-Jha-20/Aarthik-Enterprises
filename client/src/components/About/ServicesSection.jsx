import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  HardHat,
  Truck,
  PaintBucket,
  Calculator,
  Forklift,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "RCC Wall",
      description:
        "Our product range includes a wide range of 8 feet rcc readymade compound wall, 10 feet rcc readymade compound wall, 5.5 feet rcc readymade compound wall, rcc readymade concrete precast wall, rcc readymade compound wall and 9 feet rcc readymade compound wall.",
      icon: Building2,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487879841/LY/PC/OG/192062814/10-feet-rcc-readymade-precast-compound-wall-1000x1000.jpg",
    },
    {
      id: 2,
      title: "RCC Pole",
      description:
        "Pioneers in the industry, we offer rcc readymade boundary wall, 7 feet rcc fencing pole, rcc fencing poles, rcc pole, 7 feet rcc fencing poles and agriculture rcc fencing pole from India.",
      icon: HardHat,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/2/487854312/EC/FP/ET/192062814/4feet-rcc-fencing-poles-1000x1000.jpg",
    },
    {
      id: 3,
      title: "Rcc Readymade Compound Wall",
      description:
        "Prominent & Leading Manufacturer from Bangarmau, we offer precast compound wall, rcc readymade compound wall, rcc wall, rcc compound wall, thickness: 50 mm, 5 ft precast compound walls and wall panel.",
      icon: Truck,
      iconBg: "bg-gray-100",
      iconColor: "text-gray-600",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503653329/TR/QG/TL/192062814/rcc-readymade-compound-wall-1000x1000.jpeg",
    },
    {
      id: 4,
      title: "RCC Bench",
      description:
        "Our range of products include 3 seater red rcc garden bench, 4 seater with backrest rcc garden bench, 3 seater brown rcc garden bench, 3 seater rcc garden bench and 3 seater without armrest rcc garden bench.",
      icon: PaintBucket,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/6/320888671/DR/MI/OT/192062814/rcc-garden-bench-500x500.jpg",
    },
    {
      id: 5,
      title: "Boundary Wall",
      description:
        "Our precast concrete compound wall solutions offer the perfect combination of strength, speed, and style. These readymade compound walls are manufactured using high-grade materials and can be installed in just a fraction of the time compared to traditional walls.",
      icon: Calculator,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503631781/LQ/SK/MR/192062814/precast-boundary-wall-1000x1000.jpeg",
    },
    {
      id: 6,
      title: "Rcc Garden Bench",
      description:
        "Pioneers in the industry, we offer with arm rest 3 seater cast iron park bench, for long lasting and durable, with back from India.",
      icon: Forklift,
      iconBg: "bg-gray-100",
      iconColor: "text-gray-600",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503687657/RJ/QC/AY/192062814/with-arm-rest-3-seater-cast-iron-park-bench-for-long-lasting-and-durable-with-back-1000x1000.jpg",
    },
    {
      id: 7,
      title: "Garden Bench",
      description:
        "Providing you with the finest range of 3-seater rectangular RCC garden benches, crafted for durability, comfort, and aesthetic appeal — with assured quality and timely delivery.",
      icon: Forklift,
      iconBg: "bg-gray-100",
      iconColor: "text-gray-600",
      image:
        "https://5.imimg.com/data5/ANDROID/Default/2025/3/493941095/LH/OZ/QX/192062814/product-jpeg-1000x1000.jpg",
    },
    {
      id: 8,
      title: "Concrete Bench",
      description:
        "Offering a range of durable 3-seater RCC concrete garden benches, ideal for outdoor use with strong build, weather resistance, and timely delivery.",
      icon: Forklift,
      iconBg: "bg-gray-100",
      iconColor: "text-gray-600",
      image:
        "https://img.freepik.com/free-photo/bench-park_1187-2312.jpg?t=st=1755676028~exp=1755679628~hmac=cddfe8a7364d5bbac8e8f7166c4184fbc55cc7a4ce36d9027008662ce9bbb471&w=1060",
    },
    {
      id: 9,
      title: "Cement Pillar",
      description:
        "Offering the best range of grey cement railing pillars for staircases — crafted for strength, style, and durability, with reliable and timely delivery.",
      icon: Forklift,
      iconBg: "bg-gray-100",
      iconColor: "text-gray-600",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503686774/CQ/YR/HX/192062814/grey-cement-railing-pillar-for-staircase-500x500.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="py-16 lg:py-24 bg-gray-50"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="text-blue-600 font-medium text-sm sm:text-base uppercase tracking-wider mb-3"
            variants={headerVariants}
          >
            PRODUCTS WE PROVIDE!
          </motion.p>
          <motion.h2
            id="services-heading"
            className="text-3xl sm:text-4xl uppercase lg:text-5xl font-bold text-gray-900 mb-6"
            variants={headerVariants}
          >
            RCC Bench And Wall
          </motion.h2>
          <motion.p
            className="text-gray-600 font-roboto text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            variants={headerVariants}
          >
            Since 2006, Aarthik Enterprises has been manufacturing high-quality
            RCC benches, poles, and walls using premium raw materials. Backed by
            skilled professionals and modern technology, we ensure reliable
            products, timely delivery, and strict quality control at every
            stage.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.article
                key={service.id}
                className="bg-white rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                {/* Icon */}
                <motion.div
                  className={`w-full mb-6 rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  {/* <IconComponent
                    className={`w-8 h-8 ${service.iconColor}`}
                    aria-hidden="true"
                  /> */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[300px] object-cover"
                  />
                </motion.div>

                {/* Content */}
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-roboto text-sm lg:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Read More Link */}
                  <motion.button
                    className="inline-flex items-center text-blue-600 font-medium text-sm lg:text-base hover:text-blue-700 transition-colors duration-300 group/link"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    aria-label={`Read more about ${service.title}`}
                  >
                    Read More
                    <motion.svg
                      className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </motion.svg>
                  </motion.button>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          className="fixed bottom-8 right-8 w-12 h-12 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </motion.button>
      </div>
    </section>
  );
};

export default ServicesSection;
