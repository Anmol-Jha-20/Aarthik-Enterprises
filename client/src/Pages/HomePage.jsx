import React from "react";
import Header from "../components/Header/Header";
import HeroSlider from "../components/Hero/Hero.jsx";
import AboutSection from "../components/About/AboutSection.jsx";
import ServicesSection from "../components/About/ServicesSection.jsx";
import EnhancedWhyChooseUs from "../components/About/WhyUsSection.jsx";
import TestimonialSection from "../components/testimonial/Testimonial.jsx";
import Footer from "../components/Footer/Footer.jsx";

function HomePage() {
  return (
    <>
      <Header />
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <EnhancedWhyChooseUs />
      <TestimonialSection />
      <Footer />
    </>
  );
}

export default HomePage;
