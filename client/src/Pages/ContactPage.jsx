import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Printer,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted", formData);
    // Handle form submission logic here
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Map */}
      <motion.section
        className="relative h-96 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage: `url("https://5.imimg.com/data5/SELLER/Default/2025/2/487878428/MC/EN/BI/192062814/modular-rcc-compound-wall-1000x1000.jpeg")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            className="text-white max-w-2xl"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              variants={fadeInUp}
            >
              Get In Touch
            </motion.h1>
            <motion.p className="text-lg md:text-xl mb-6" variants={fadeInUp}>
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
          <div className="w-full h-full bg-gradient-to-l from-white to-transparent"></div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 md:p-12 rounded-2xl shadow-2xl"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={staggerContainer} animate="animate">
                <motion.div variants={fadeInUp} className="mb-8">
                  <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wide">
                    HIGH PERFORMANCE!
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                    Get in touch with us today!
                  </h2>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    Have questions or need a custom RCC solution? We’re here to
                    help! Whether you're planning a new project or looking for
                    reliable RCC products, our team is ready to assist you with
                    expert guidance and prompt support.
                  </p>
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <MapPin
                      className="text-yellow-400 mt-1 flex-shrink-0"
                      size={24}
                    />
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-blue-100">
                        Near Bhuni Toll Plaza, Karnal Highway,
                        <br />
                        Kakkepur, Meerut, Uttar Pradesh – 250001, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail
                      className="text-yellow-400 mt-1 flex-shrink-0"
                      size={24}
                    />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-blue-100">
                        alamfirojalam792@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone
                      className="text-yellow-400 mt-1 flex-shrink-0"
                      size={24}
                    />
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-blue-100">+(91) 80756 12353</p>
                      <p className="text-blue-100">+(91) 79077 20632</p>
                    </div>
                  </div>

                  {/* <div className="flex items-start space-x-4">
                    <Printer
                      className="text-yellow-400 mt-1 flex-shrink-0"
                      size={24}
                    />
                    <div>
                      <h4 className="font-semibold mb-1">Fax</h4>
                      <p className="text-blue-100">+88 (0) 202 0000 001</p>
                    </div>
                  </div> */}
                </motion.div>

                {/* <motion.div variants={fadeInUp} className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-blue-600 hover:bg-blue-500 p-3 rounded-lg transition-colors duration-300"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-400 hover:bg-blue-300 p-3 rounded-lg transition-colors duration-300"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-pink-600 hover:bg-pink-500 p-3 rounded-lg transition-colors duration-300"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-red-600 hover:bg-red-500 p-3 rounded-lg transition-colors duration-300"
                  >
                    <Youtube size={20} />
                  </a>
                </motion.div> */}
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="bg-white p-8 md:p-12 rounded-2xl shadow-xl"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={staggerContainer} animate="animate">
                <motion.div variants={fadeInUp} className="mb-8">
                  <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wide">
                    BOOK A MEETING!
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                    Make an appointment!
                  </h2>
                  <p className="text-gray-600 mt-4">
                    Ready to discuss your project in detail? Schedule a
                    one-on-one meeting with our team at your convenience.
                    Whether it's a site consultation, product inquiry, or a
                    custom RCC solution — we’re here to assist you every step of
                    the way.
                  </p>
                </motion.div>

                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  variants={fadeInUp}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div variants={fadeInUp}>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-400"
                        required
                      />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-400"
                        required
                      />
                    </motion.div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div variants={fadeInUp}>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-400"
                        required
                      />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-400"
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.div variants={fadeInUp}>
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-400 resize-none"
                      required
                    ></textarea>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <motion.button
                      type="submit"
                      className="bg-yellow-500 hover:bg-yellow-600 cursor-pointer text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get In Touch
                    </motion.button>
                  </motion.div>
                </motion.form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <motion.section
        className="py-16 bg-gray-100"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Us Here
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our office location or get directions to reach us easily.
              We're here to help you with all your construction needs.
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl overflow-hidden shadow-2xl"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.0123456789!2d77.7033333!3d28.9833333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c64d8b7d4d4d4%3A0x1234567890abcdef!2sKarnal%20Highway%2C%20Kakkepur%2C%20Meerut%2C%20Uttar%20Pradesh%20250001!5e0!3m2!1sen!2sin!4v1234567890123"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
              className="w-full h-96 md:h-[450px]"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </div>
  );
};

export default ContactPage;
