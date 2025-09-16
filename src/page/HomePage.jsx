import React from "react";
import Hero from "../components/Hero";
import FeatureSection from "../components/WhatIsWalytic";
import ChooseUs from "../components/WhyChooseWalytic";
import PricingSection from "../components/PricingSection";
import ContactSection from "../components/ContactSection";
import FaqSection from "../components/FaqSection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Hero />
      <FeatureSection />
      <ChooseUs />
      <PricingSection />
      <ContactSection />
      <FaqSection />
    </div>
  );
};

export default HomePage;
