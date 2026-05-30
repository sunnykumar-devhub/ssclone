import React from "react";
import Hero from "@/sections/hero";
import AboutSection from "@/sections/aboutsection";
import WhyChooseMe from "@/sections/whychooseme";
import ServicesHome from "@/sections/serviceshome";
import FAQsHome from "@/sections/faqshome";
import SEBIDisclosuresHome from "@/sections/sebidisclosureshome";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white">
      <Hero />
      <AboutSection />
      <WhyChooseMe />
      <ServicesHome />
      <FAQsHome />
      <SEBIDisclosuresHome />
    </div>
  );
}
