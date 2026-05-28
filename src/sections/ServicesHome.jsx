import React from "react";
import Link from "next/link";
import { Pin } from "lucide-react";

export default function ServicesHome() {
  const planningSubServices = [
    {
      title: "RETIREMENT PLANNING",
      points: ["Estimate retirement needs.", "Create a diversified investment plan."],
    },
    {
      title: "GOAL-BASED PLANNING",
      points: ["Set clear, achievable financial goals.", "Create a tailored strategy for each goal."],
    },
    {
      title: "INSURANCE PLANNING",
      points: ["Choose the right life insurance plan.", "Cover health-related risks."],
    },
    {
      title: "EMERGENCY FUND",
      points: ["Build a safety net for unexpected expenses.", "Preserve long-term investment plans."],
    },
    {
      title: "TAX PLANNING",
      points: ["Maximize savings through tax-efficient investments.", "Leverage available tax strategies."],
    },
    {
      title: "RISK PROFILING",
      points: ["Assess your financial risk capacity.", "Create a portfolio tailored to your risk tolerance."],
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16">
          <span className="text-sm font-black uppercase tracking-[0.15em] text-zinc-800">
            Our Services
          </span>
          <div className="w-full h-[1px] bg-zinc-200 mt-4" />
        </div>

        {/* 1. Personalized Financial Planning */}
        <div className="mb-24 text-center flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[#0a4a83] text-xl">♦</span>
            <h3 className="text-2xl md:text-3xl font-black text-[#0a4a83]">
              Personalized Financial Planning
            </h3>
          </div>
          <p className="text-sm text-zinc-700 mb-12 font-bold max-w-2xl">
            We provide a <span className="font-black text-zinc-950">complete, personalised, and unbiased approach</span> to help you achieve financial freedom.
          </p>

          {/* Grid of 6 with centered boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {planningSubServices.map((sub, idx) => (
              <div
                key={idx}
                className="rounded-xl p-8 bg-zinc-50 border border-zinc-200/80 shadow-sm flex flex-col items-center text-center justify-between gap-5 hover:shadow-md hover:border-[#0a4a83]/30 transition-all min-h-[250px]"
              >
                <div className="text-[#e11d48]">
                  <Pin className="w-4 h-4 rotate-45 stroke-[2.5]" />
                </div>
                <h4 className="text-[12px] font-black text-zinc-900 tracking-wider">
                  {sub.title}
                </h4>
                <ul className="flex flex-col gap-2.5 text-xs text-zinc-600 font-semibold leading-relaxed">
                  {sub.points.map((pt, pIdx) => (
                    <li key={pIdx} className="text-zinc-600 font-semibold">
                      {pt}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="text-xs font-black text-[#0a4a83] hover:underline"
                >
                  Explore More...
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Wealth Management Service */}
        <div className="mb-24 py-16 border-t border-zinc-200/60 text-center flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[#0a4a83] text-xl">♦</span>
            <h3 className="text-2xl md:text-3xl font-black text-[#0a4a83]">
              Wealth Management Service
            </h3>
          </div>
          <p className="text-sm text-zinc-800 mb-8 font-bold leading-relaxed max-w-3xl">
            We provide continuous guidance and reviews to ensure your investments stay aligned with your changing goals and market conditions.
          </p>
          <div className="max-w-4xl flex flex-col items-center justify-center gap-6 text-sm text-zinc-650 leading-relaxed font-bold">
            <p className="text-zinc-600 text-center">
              This ongoing wealth management service is for clients who have already completed their financial planning with us and want continuous professional guidance. We help ensure that their investments remain aligned with changing goals, market conditions, and life situations, providing regular reviews, timely rebalancing, and strategic advice to keep their wealth on track for long-term growth and security.
            </p>
            <ul className="flex flex-col items-center gap-3 text-zinc-700">
              <li className="flex items-center justify-center gap-2 text-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] shrink-0" />
                <span>Regular Portfolio Reviews – Unbiased checks to keep investments aligned.</span>
              </li>
              <li className="flex items-center justify-center gap-2 text-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] shrink-0" />
                <span>Strategic Modifications – Adjustments as markets and personal situations change.</span>
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/services"
                className="text-xs font-bold text-[#0a4a83] hover:underline"
              >
                Read More...
              </Link>
            </div>
          </div>
        </div>

        {/* 3. Stock Advisory Service */}
        <div className="py-16 border-t border-zinc-200/60 text-center flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[#0a4a83] text-xl">♦</span>
            <h3 className="text-2xl md:text-3xl font-black text-[#0a4a83]">
              Stock Advisory Service
            </h3>
          </div>
          <p className="text-sm text-zinc-800 mb-8 font-bold leading-relaxed max-w-3xl">
            Our Stock Advisory Service is designed for clients who wish to allocate a portion of their investments to equities for long-term growth.
          </p>
          <div className="max-w-4xl flex flex-col items-center justify-center gap-6 text-sm text-zinc-650 leading-relaxed font-bold">
            <p className="text-zinc-600 text-center">
              Our stock Advisory service is offered only to clients who have already completed their financial planning with us and wish to allocate a portion of their investments to equities. We focus on long-term wealth creation through fundamentally strong companies and do not provide trading calls, intraday tips, or technical analysis-based recommendations.
            </p>
            <ul className="flex flex-col items-center gap-3 text-zinc-700">
              <li className="flex items-center justify-center gap-2 text-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] shrink-0" />
                <span>Advise fundamentally strong, long-term stocks.</span>
              </li>
              <li className="flex items-center justify-center gap-2 text-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] shrink-0" />
                <span>No trading or speculative calls – only research-based picks.</span>
              </li>
              <li className="flex items-center justify-center gap-2 text-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] shrink-0" />
                <span>Portfolio suggestions aligned with your risk profile.</span>
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/services"
                className="text-xs font-bold text-[#0a4a83] hover:underline"
              >
                Read More...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
