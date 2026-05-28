import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function FAQsHome() {
  const faqList = [
    "What is your annual fee?",
    "Do you offer discounts?",
    "Why should I pay for financial advice when there's so much free content online?",
    "Do you review existing investments?",
    "What do I get with the renewal service after the first year?",
  ];

  return (
    <section className="relative py-24 bg-zinc-900 overflow-hidden text-left">
      {/* Background visual image overlay parameters */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,74,131,0.15)_0%,transparent_75%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-10">
        {/* Title */}
        <div className="flex items-center gap-2.5">
          <span className="text-[#f43f5e] text-2xl font-black">?</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-none">
            Frequently Asked Questions (FAQs)
          </h2>
        </div>

        {/* Questions list */}
        <div className="flex flex-col gap-4">
          {faqList.map((faq, idx) => (
            <Link
              key={idx}
              href="/contact#faqs"
              className="flex items-center gap-3 p-4 rounded-xl bg-zinc-950/40 border border-zinc-800 hover:border-[#0a4a83]/50 transition-all group"
            >
              <ChevronRight className="w-4 h-4 text-[#0a4a83] group-hover:translate-x-0.5 transition-transform" />
              <span className="text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors">
                Q. {faq}
              </span>
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Link
            href="/contact#faqs"
            className="inline-block bg-[#0a4a83] hover:bg-[#07355e] text-white text-xs font-black uppercase tracking-wider px-6 py-4 rounded-md transition-all shadow-sm active:scale-[0.98]"
          >
            Explore More FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
