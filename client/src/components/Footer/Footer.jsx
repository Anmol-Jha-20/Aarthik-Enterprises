import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(true);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert("Subscription successful!");
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-white text-2xl md:text-3xl font-bold text-center md:text-left">
            Searching For Durable RCC Infrastructure Solutions?
          </h2>
          <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-md font-semibold transition-colors duration-300 whitespace-nowrap">
            Make Appointment
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-blue-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="grid grid-cols-12 gap-2 h-full">
              {[...Array(144)].map((_, i) => (
                <div
                  key={i}
                  className={`rounded-full ${
                    Math.random() > 0.7 ? "bg-yellow-400" : "bg-transparent"
                  }`}
                  style={{
                    width: "4px",
                    height: "4px",
                    marginTop: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-400 p-2 rounded-md mr-3">
                    <div className="w-8 h-8 bg-blue-900 rounded flex items-center justify-center">
                      <div className="text-yellow-400 font-bold text-lg">A</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white text-2xl font-bold">
                      Aarthik Enterprises
                    </h3>
                    <p className="text-gray-300 text-sm">Established in 2006</p>
                  </div>
                </div>
                <p className="text-gray-300 font-roboto text-sm leading-relaxed mb-6">
                  Founded in 2006, Aarthik Enterprises is one of India’s most
                  trusted manufacturers of high-quality RCC infrastructure
                  products.
                </p>

                {/* Social Media Icons */}
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-blue-800 hover:bg-yellow-400 p-2 rounded transition-colors duration-300 group"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4 text-white group-hover:text-blue-900" />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-800 hover:bg-yellow-400 p-2 rounded transition-colors duration-300 group"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4 text-white group-hover:text-blue-900" />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-800 hover:bg-yellow-400 p-2 rounded transition-colors duration-300 group"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4 text-white group-hover:text-blue-900" />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-800 hover:bg-yellow-400 p-2 rounded transition-colors duration-300 group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 text-white group-hover:text-blue-900" />
                  </a>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div className="w-28">
              <div className="mb-8">
                <h4 className="text-white text-xl font-bold mb-6 relative">
                  Useful links
                  <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-yellow-400 mt-2"></div>
                </h4>
                <ul className="space-y-3">
                  {[
                    " Home",
                    "About Us",
                    "Our Products",
                    "Gallery",
                    "Contact",
                  ].map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Additional Links */}
            {/* <div className="lg:col-span-1">
              <div className="mb-8">
                <h4 className="text-white text-xl font-bold mb-6 relative opacity-0">
                  Links
                </h4>
                <ul className="space-y-3">
                  {[
                    "Company Info",
                    "Meet Our Team",
                    "About Us",
                    "Contact Us",
                  ].map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}

            {/* Contact Info & Newsletter */}
            <div className="lg:col-span-1">
              {/* Get In Touch */}
              <div className="mb-8">
                <h4 className="text-white text-xl font-bold mb-6 relative">
                  Get In Touch
                  <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-yellow-400 mt-2"></div>
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-yellow-400 p-2 rounded-full mt-1">
                      <MapPin className="w-4 h-4 text-blue-900" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">
                        Near Bhuni Toll Plaza, Karnal Highway, Kakkepur, Meerut,
                        Uttar Pradesh – 250001, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-yellow-400 p-2 rounded-full mt-1">
                      <Mail className="w-4 h-4 text-blue-900" />
                    </div>
                    <div>
                      <a
                        href="mailto:contact@buildico.com"
                        className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm"
                      >
                        alamfirojalam792@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-yellow-400 p-2 rounded-full mt-1">
                      <Phone className="w-4 h-4 text-blue-900" />
                    </div>
                    <div>
                      <a
                        href="tel:+11234567890"
                        className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm"
                      >
                        +(91) 80756 12353
                      </a>{" "}
                      <br />
                      <a
                        href="tel:+11234567890"
                        className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm"
                      >
                        +(91) 79077 20632
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div>
                <h4 className="text-white text-xl font-bold mb-6 relative">
                  Newsletter Signup
                  <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-yellow-400 mt-2"></div>
                </h4>
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-gray-600 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-3 px-6 rounded-md transition-colors duration-300"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-blue-800 mt-12 pt-8">
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                © Copyright 2025 AarthikEnterprises - All Rights Reserved
              </p>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-yellow-400 hover:bg-yellow-500 text-blue-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        )}
      </footer>
    </>
  );
};

export default Footer;
