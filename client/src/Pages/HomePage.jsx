import React from "react";
import HeroSlider from "../components/Hero/Hero.jsx";
import AboutSection from "../components/About/AboutSection.jsx";
import ServicesSection from "../components/About/ServicesSection.jsx";
import EnhancedWhyChooseUs from "../components/About/WhyUsSection.jsx";
import TestimonialSection from "../components/testimonial/Testimonial.jsx";

function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <EnhancedWhyChooseUs />
      <TestimonialSection />
    </>
  );
}

export default HomePage;
