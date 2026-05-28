import React from "react";
import Hero from "@/sections/Hero";
import AboutSection from "@/sections/AboutSection";
import WhyChooseMe from "@/sections/WhyChooseMe";
import ServicesHome from "@/sections/ServicesHome";
import FAQsHome from "@/sections/FAQsHome";
import SEBIDisclosuresHome from "@/sections/SEBIDisclosuresHome";

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
