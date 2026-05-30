"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function FAQsHome() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqList = [
    {
      q: "What is your annual fee?",
      a: "First year: ₹13,000. Renewal: ₹8,000/year. Renewal fee increases ₹1,000 every 2 years.",
    },
    {
      q: "Do you offer discounts?",
      a: "No. Our fee is already fair, transparent, and equal for all clients.",
    },
    {
      q: "Why should I pay for financial advice when there's so much free content online?",
      a: "“Price is what you pay. Value is what you get.” – Warren Buffett. When you pay for professional, SEBI-registered advice, you're investing in personalised guidance, accountability, and long-term clarity — tailored specifically to your goals, risks, and life stage.",
    },
    {
      q: "Do you review existing investments?",
      a: "Absolutely. Reviewing and optimising your current portfolio is part of our process.",
    },
    {
      q: "What do I get with the renewal service after the first year?",
      a: "Renewal gives you a comprehensive review of your financial plan every six months, ongoing support for all your queries, and timely adjustments based on changes in your goals, income, or market conditions.",
    },
  ];

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative py-24 bg-zinc-900 overflow-hidden text-left">
      {/* Background visual image overlay parameters */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,74,131,0.15)_0%,transparent_75%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-10">
        {/* Title */}
        <div className="flex items-center gap-2.5">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-none">
            Frequently Asked Questions (FAQs)
          </h2>
        </div>

        {/* Questions list (Accordion style) */}
        <div className="flex flex-col gap-4">
          {faqList.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-zinc-950/40 border border-zinc-800 hover:border-[#0a4a83]/30 transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer transition-colors"
                >
                  <span className="text-sm font-semibold text-zinc-200 hover:text-white transition-colors">
                    Q. {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#0a4a83] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-350 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-zinc-800" : "max-h-0"
                  }`}
                >
                  <p className="p-5 text-xs md:text-sm text-zinc-400 font-semibold leading-relaxed bg-zinc-950/20">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Link
            href="/faqs"
            className="inline-block bg-[#0a4a83] hover:bg-[#07355e] text-white text-xs font-black uppercase tracking-wider px-6 py-4 rounded-md transition-all shadow-sm active:scale-[0.98]"
          >
            Explore More FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
