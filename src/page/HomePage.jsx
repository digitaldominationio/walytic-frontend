import React from "react";
import Hero from "../components/Hero";
import FeatureSection from "../components/WhatIsWalytic";
import ChooseUs from "../components/WhyChooseWalytic";
import PricingSection from "../components/PricingSection";
import ContactSection from "../components/ContactSection";
import FaqSection from "../components/FaqSection";
import AnimatedSection from "../components/AnimatedSection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 space-y-20">
      <AnimatedSection animation="fadeUp">
        <Hero />
      </AnimatedSection>

      <AnimatedSection animation="fadeLeft" delay={0.2}>
        <FeatureSection />
      </AnimatedSection>

      <AnimatedSection animation="fadeRight" delay={0.4}>
        <ChooseUs />
      </AnimatedSection>

      <AnimatedSection animation="zoomIn" delay={0.6}>
        <PricingSection />
      </AnimatedSection>

      <AnimatedSection animation="rotateIn" delay={0.8}>
        <ContactSection />
      </AnimatedSection>

      <AnimatedSection animation="fadeDown" delay={1}>
        <FaqSection />
      </AnimatedSection>
    </div>
  );
};

export default HomePage;
