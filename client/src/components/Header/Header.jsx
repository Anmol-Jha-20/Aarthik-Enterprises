import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null); // "Pages" | "Projects" | null
  const [mobileActiveMenu, setMobileActiveMenu] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null); // highlighted row
  const timeoutRef = useRef(null);

  const menuItems = {
    Pages: [
      "About Us",
      "About Company",
      "Our Services",
      "Company Services",
      "Our Team",
      "Pricing Plans",
      "Our Clients",
      "Help & FAQ'S",
    ],
    Projects: [
      // "RCC Wall",
      // "RCC Pole",
      // "Compound Wall",
      // "RCC Bench",
      // "Boundary Wall",
      // "Rcc Garden Bench",
      // "Garden Bench",
      // "Concrete Bench",
      // "Cement Pillar",
      { name: "RCC Wall", link: "/rcc-wall" },
      { name: "RCC Pole", link: "/rcc-pole" },
      { name: "Compound Wall", link: "/compound-wall" },
      { name: "RCC Bench", link: "/rcc-bench" },
      { name: "Boundary Wall", link: "/boundary-wall" },
      { name: "Rcc Garden Bench", link: "/rcc-garden-bench" },
      { name: "Garden Bench", link: "/garden-bench" },
      { name: "Concrete Bench", link: "/concrete-bench" },
      { name: "Cement Pillar", link: "/cement-pillar" },
    ],
  };

  // Desktop hover handlers
  const handleMouseEnter = (menu, defaultIndex = 1) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMegaMenu(menu);
    setHoveredIndex(defaultIndex); // default yellow selection (Pages me 2nd item, Projects me 1st)
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
      setHoveredIndex(null);
    }, 150);
  };

  // Close on Esc
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setActiveMegaMenu(null);
        setHoveredIndex(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Mobile handlers
  const toggleMobileMenu = (menu) => {
    setMobileActiveMenu(mobileActiveMenu === menu ? null : menu);
  };
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setMobileActiveMenu(null);
  };

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-slate-800 text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>Phone : +91 80756 12353</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>Email : alamfirojalam792@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Facebook
              size={16}
              className="hover:text-yellow-400 cursor-pointer transition-colors"
            />
            <Twitter
              size={16}
              className="hover:text-yellow-400 cursor-pointer transition-colors"
            />
            <Linkedin
              size={16}
              className="hover:text-yellow-400 cursor-pointer transition-colors"
            />
            <Youtube
              size={16}
              className="hover:text-yellow-400 cursor-pointer transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-yellow-400 p-2 rounded">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-yellow-400 font-bold text-lg">A</span>
                </div>
              </div>
              <div className="ml-3">
                <h1 className="text-2xl font-bold text-gray-800">
                  Aarthik Enterprises
                </h1>
                <p className="text-xs uppercase text-gray-600">
                  Established in 2006
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="/"
                className="text-gray-700 hover:text-yellow-500 font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="/about-us"
                className="text-gray-700 hover:text-yellow-500 font-medium transition-colors"
              >
                About Us
              </a>

              {/* Pages Dropdown */}
              {/* <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("Pages", 1)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center space-x-1 text-yellow-500 font-medium hover:text-yellow-600 transition-colors">
                  <span>Pages</span>
                  <ChevronDown size={16} />
                </button>

                {activeMegaMenu === "Pages" && (
                  <div
                    className="absolute left-0 top-full bg-white border border-gray-200 shadow-2xl z-50"
                    onMouseEnter={() =>
                      handleMouseEnter("Pages", hoveredIndex ?? 1)
                    }
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="w-[260px] bg-gray-50 p-4">
                      <ul className="space-y-1">
                        {menuItems.Pages.map((item, index) => {
                          const active = hoveredIndex === index;
                          return (
                            <li key={index}>
                              <a
                                href="#"
                                onMouseEnter={() => setHoveredIndex(index)}
                                className={`block rounded-sm py-2.5 px-3 text-sm transition-all
                                  ${
                                    active
                                      ? "bg-yellow-400 text-white"
                                      : "text-gray-700 hover:bg-yellow-100 hover:text-yellow-700"
                                  }
                                `}
                              >
                                {item}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                )}
              </div> */}

              {/* Projects Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("Projects", 0)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-yellow-500 font-medium transition-colors">
                  <span>Our Products</span>
                  <ChevronDown size={16} />
                </button>

                {activeMegaMenu === "Projects" && (
                  <div
                    className="absolute left-0 top-full bg-white border border-gray-200 shadow-2xl z-50"
                    onMouseEnter={() =>
                      handleMouseEnter("Projects", hoveredIndex ?? 0)
                    }
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="w-[260px] bg-gray-50 p-4">
                      <ul className="space-y-1">
                        {menuItems.Projects.map((project, index) => {
                          const active = hoveredIndex === index;
                          return (
                            <li key={index}>
                              <a
                                href={project.link}
                                onMouseEnter={() => setHoveredIndex(index)}
                                className={`block rounded-sm py-2.5 px-3 text-sm transition-all
                                  ${
                                    active
                                      ? "bg-yellow-400 text-white"
                                      : "text-gray-700 hover:bg-yellow-100 hover:text-yellow-700"
                                  }
                                `}
                              >
                                {project.name}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="/gallery"
                className="text-gray-700 hover:text-yellow-500 font-medium transition-colors"
              >
                Gallery
              </a>
              <a
                href="/contact-us"
                className="text-gray-700 hover:text-yellow-500 font-medium transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-md font-medium transition-colors hidden sm:block">
                Get Consultation
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-yellow-500"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* ==== Mobile Menu ==== */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-xl z-50 lg:hidden">
            <div className="px-4 py-4 space-y-4">
              <a
                href="/"
                className="block py-2 text-gray-700 hover:text-yellow-500 font-medium"
              >
                Home
              </a>
              <a
                href="/about-us"
                className="block py-2 text-gray-700 hover:text-yellow-500 font-medium"
              >
                About Us
              </a>

              {/* Mobile Pages */}
              {/* <div>
                <button
                  onClick={() => toggleMobileMenu("Pages")}
                  className="flex items-center justify-between w-full py-2 text-yellow-500 font-medium"
                >
                  <span>Pages</span>
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform ${
                      mobileActiveMenu === "Pages" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileActiveMenu === "Pages" && (
                  <div className="pl-4 space-y-2 mt-2">
                    {menuItems.Pages.map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className={`block py-2 px-3 text-gray-600 hover:text-yellow-500 rounded ${
                          index === 1 ? "bg-yellow-100 text-yellow-700" : ""
                        }`}
                        onClick={closeMobileMenu}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div> */}

              {/* Mobile Projects */}
              <div>
                <button
                  onClick={() => toggleMobileMenu("Projects")}
                  className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-yellow-500 font-medium"
                >
                  <span>Our Products</span>
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform ${
                      mobileActiveMenu === "Projects" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileActiveMenu === "Projects" && (
                  <div className="pl-4 space-y-2 mt-2">
                    {menuItems.Projects.map((project, index) => (
                      <a
                        key={index}
                        href={project.link}
                        className="block py-2 px-3 text-gray-600 hover:text-yellow-500 rounded"
                        onClick={closeMobileMenu}
                      >
                        {project.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="/gallery"
                className="block py-2 text-gray-700 hover:text-yellow-500 font-medium"
              >
                Gallery
              </a>
              <a
                href="/contact-us"
                className="block py-2 text-gray-700 hover:text-yellow-500 font-medium"
              >
                Contact
              </a>

              {/* Mobile Actions */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                {/* <div className="flex items-center space-x-4">
                  <Search className="w-5 h-5 text-gray-600" />
                  <div className="relative">
                    <ShoppingCart className="w-5 h-5 text-gray-600" />
                    <span className="absolute -top-2 -right-2 bg-yellow-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      0
                    </span>
                  </div>
                </div> */}
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white py-3 rounded-md font-medium transition-colors">
                  Get Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
