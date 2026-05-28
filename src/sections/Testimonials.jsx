import React from "react";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      quote: "Sujan's SEBI-registered advisory is exceptional. He restructured our multi-family trust framework to be fully tax-optimized and perfectly compliant.",
      author: "Vikram Malhotra",
      role: "Founder, NexaCorp Global",
      rating: 5,
    },
    {
      id: 2,
      quote: "Absolute precision in direct equity and allocation setups. His disciplined compliance model makes him our trusted primary fiduciary adviser.",
      author: "Aditi Sharma",
      role: "Co-Founder, Finch Technologies",
      rating: 5,
    },
    {
      id: 3,
      quote: "A rare combination of meticulous legal compliance expertise and profound strategic tax planning. Highly recommended for executive wealth structures.",
      author: "Rajesh Singhania",
      role: "Managing Director, Singhania Holdings",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-zinc-50 relative overflow-hidden border-t border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0a4a83]">Client Endorsements</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 max-w-xl font-sans">
            Trusted By High-Net-Worth Investors
          </h2>
          <p className="text-sm text-zinc-500 max-w-md leading-relaxed font-medium">
            Discover how we deliver certified and compliant advisory services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-card rounded-2xl p-8 flex flex-col gap-6 bg-white relative shadow-sm"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-8 w-10 h-10 text-blue-500/5 pointer-events-none stroke-[1.5]" />

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-zinc-600 text-sm leading-relaxed italic font-medium">
                "{rev.quote}"
              </p>

              {/* Author info */}
              <div className="flex flex-col border-t border-zinc-100 pt-4 mt-auto">
                <span className="text-sm font-bold text-zinc-900">{rev.author}</span>
                <span className="text-xs font-bold text-[#0a4a83] mt-0.5">{rev.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
