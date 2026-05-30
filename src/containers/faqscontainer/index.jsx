"use client";
import React, { useState } from "react";
import { MessageSquare } from "lucide-react";
import { faqCategories } from "@/constants/data";
import PageContainer from "@/components/layout/pagecontainer";
import SectionContainer from "@/components/layout/sectioncontainer";
import Accordion from "@/components/ui/accordion";
import Button from "@/components/ui/button";

export default function FaqsContainer() {
  const [activeCategory, setActiveCategory] = useState("fees");
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);

  const activeCategoryData = faqCategories.find((cat) => cat.id === activeCategory);

  return (
    <PageContainer>
      {/* Page Header */}
      <SectionContainer className="mb-16 relative" headerClass="mb-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0a4a83] px-3.5 py-1.5 rounded-full bg-blue-50/60 border border-blue-100/60 inline-flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5" />
            FAQ Hub
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-zinc-950 tracking-tight leading-[1.1] mt-6">
            Frequently Asked Questions
          </h1>
          <p className="text-sm md:text-base text-zinc-500 max-w-2xl leading-relaxed mt-6 font-medium mx-auto">
            Find answers to commonly asked inquiries regarding fees, our non-discretionary investment advisory services, and support models.
          </p>
        </div>
      </SectionContainer>

      {/* Categories Buttons */}
      <SectionContainer className="mb-12" headerClass="mb-0">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {faqCategories.map((category) => {
            const isSelected = activeCategory === category.id;
            return (
              <Button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setFaqOpenIndex(null);
                }}
                variant={isSelected ? "primary" : "outline"}
                icon={category.icon}
                className={isSelected ? "scale-[1.02] shadow-md" : ""}
              >
                {category.name}
              </Button>
            );
          })}
        </div>
      </SectionContainer>

      {/* Accordions Container */}
      <SectionContainer headerClass="mb-0">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {activeCategoryData.items.map((item, idx) => (
            <Accordion
              key={idx}
              title={item.q}
              isOpen={faqOpenIndex === idx}
              onToggle={() => setFaqOpenIndex(faqOpenIndex === idx ? null : idx)}
            >
              {item.a}
            </Accordion>
          ))}
        </div>
      </SectionContainer>
    </PageContainer>
  );
}
