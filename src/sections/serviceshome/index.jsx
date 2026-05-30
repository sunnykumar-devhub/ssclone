import React from "react";
import Link from "next/link";
import { Shield, Target, Heart, Scale, Calculator, Compass } from "lucide-react";

export default function ServicesHome() {
  const planningSubServices = [
    {
      title: "RETIREMENT PLANNING",
      points: ["Estimate retirement needs.", "Create a diversified investment plan."],
      icon: Shield,
    },
    {
      title: "GOAL-BASED PLANNING",
      points: ["Set clear, achievable financial goals.", "Create a tailored strategy for each goal."],
      icon: Target,
    },
    {
      title: "INSURANCE PLANNING",
      points: ["Choose the right life insurance plan.", "Cover health-related risks."],
      icon: Heart,
    },
    {
      title: "EMERGENCY FUND",
      points: ["Build a safety net for unexpected expenses.", "Preserve long-term investment plans."],
      icon: Scale,
    },
    {
      title: "TAX PLANNING",
      points: ["Maximize savings through tax-efficient investments.", "Leverage available tax strategies."],
      icon: Calculator,
    },
    {
      title: "RISK PROFILING",
      points: ["Assess your financial risk capacity.", "Create a portfolio tailored to your risk tolerance."],
      icon: Compass,
    },
  ];

  return (
    <section className="pt-12 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#0a4a83]">
            Our Services
          </span>
          <div className="w-16 h-[3px] bg-[#0a4a83] mt-3.5 rounded-full" />
        </div>

        {/* 1. Personalized Financial Planning */}
        <div className="mb-24 text-center flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <h3 className="text-2xl md:text-3xl font-black text-[#0a4a83]">
              Personalized Financial Planning
            </h3>
          </div>
          <p className="text-sm text-zinc-700 mb-12 font-bold max-w-2xl">
            We provide a <span className="font-black text-zinc-950">complete, personalised, and unbiased approach</span> to help you achieve financial freedom.
          </p>

          {/* Grid of 6 with centered boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {planningSubServices.map((sub, idx) => {
              const Icon = sub.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl p-8 bg-zinc-50 border border-zinc-200/80 shadow-sm flex flex-col items-center text-center justify-between gap-5 hover:shadow-md hover:border-[#0a4a83]/30 transition-all min-h-[250px]"
                >
                  <div className="text-[#0a4a83] w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h4 className="text-[16px] md:text-[17px] font-black text-zinc-900 tracking-wide">
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
              );
            })}
          </div>
        </div>

        {/* 2. Wealth Management Service */}
        <div className="mb-24 py-16 border-t border-zinc-200/60 text-center flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <h3 className="text-2xl md:text-3xl font-black text-[#0a4a83]">
              Wealth Management Service
            </h3>
          </div>
          <p className="text-sm text-zinc-800 mb-12 font-bold leading-relaxed max-w-3xl">
            We provide continuous guidance and reviews to ensure your investments stay aligned with your changing goals and market conditions.
          </p>
          
          {/* Grid of 3 cards matching the layout above */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="rounded-xl p-8 bg-zinc-50 border border-zinc-200/80 shadow-sm flex flex-col items-center text-center justify-between gap-5 hover:shadow-md hover:border-[#0a4a83]/30 transition-all min-h-[250px]">
              <div className="text-[#0a4a83] w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 stroke-[2]" />
              </div>
              <h4 className="text-[16px] md:text-[17px] font-black text-zinc-900 tracking-wide">
                Regular Portfolio Reviews
              </h4>
              <p className="text-xs text-zinc-600 font-semibold leading-relaxed">
                Unbiased checks to keep investments aligned with your long-term goals.
              </p>
              <Link
                href="/services"
                className="text-xs font-black text-[#0a4a83] hover:underline"
              >
                Explore More...
              </Link>
            </div>

            <div className="rounded-xl p-8 bg-zinc-50 border border-zinc-200/80 shadow-sm flex flex-col items-center text-center justify-between gap-5 hover:shadow-md hover:border-[#0a4a83]/30 transition-all min-h-[250px]">
              <div className="text-[#0a4a83] w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <Scale className="w-5 h-5 stroke-[2]" />
              </div>
              <h4 className="text-[16px] md:text-[17px] font-black text-zinc-900 tracking-wide">
                Strategic Modifications
              </h4>
              <p className="text-xs text-zinc-600 font-semibold leading-relaxed">
                Timely adjustments and portfolio rebalancing as markets and personal situations change.
              </p>
              <Link
                href="/services"
                className="text-xs font-black text-[#0a4a83] hover:underline"
              >
                Explore More...
              </Link>
            </div>

            <div className="rounded-xl p-8 bg-zinc-50 border border-zinc-200/80 shadow-sm flex flex-col items-center text-center justify-between gap-5 hover:shadow-md hover:border-[#0a4a83]/30 transition-all min-h-[250px]">
              <div className="text-[#0a4a83] w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5 stroke-[2]" />
              </div>
              <h4 className="text-[16px] md:text-[17px] font-black text-zinc-900 tracking-wide">
                Continuous Support
              </h4>
              <p className="text-xs text-zinc-600 font-semibold leading-relaxed">
                Ongoing direct professional guidance for all your financial decisions throughout the year.
              </p>
              <Link
                href="/services"
                className="text-xs font-black text-[#0a4a83] hover:underline"
              >
                Explore More...
              </Link>
            </div>
          </div>
        </div>

        {/* 3. Stock Advisory Service */}
        <div className="py-16 border-t border-zinc-200/60 text-center flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <h3 className="text-2xl md:text-3xl font-black text-[#0a4a83]">
              Stock Advisory Service
            </h3>
          </div>
          <p className="text-sm text-zinc-800 mb-12 font-bold leading-relaxed max-w-3xl">
            Our Stock Advisory Service is designed for clients who wish to allocate a portion of their investments to equities for long-term growth.
          </p>
          
          {/* Grid of 3 cards matching the layout above */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="rounded-xl p-8 bg-zinc-50 border border-zinc-200/80 shadow-sm flex flex-col items-center text-center justify-between gap-5 hover:shadow-md hover:border-[#0a4a83]/30 transition-all min-h-[250px]">
              <div className="text-[#0a4a83] w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <Calculator className="w-5 h-5 stroke-[2]" />
              </div>
              <h4 className="text-[16px] md:text-[17px] font-black text-zinc-900 tracking-wide">
                Fundamentally Strong Stocks
              </h4>
              <p className="text-xs text-zinc-600 font-semibold leading-relaxed">
                Advise fundamentally strong, long-term stocks based purely on research.
              </p>
              <Link
                href="/services"
                className="text-xs font-black text-[#0a4a83] hover:underline"
              >
                Explore More...
              </Link>
            </div>

            <div className="rounded-xl p-8 bg-zinc-50 border border-zinc-200/80 shadow-sm flex flex-col items-center text-center justify-between gap-5 hover:shadow-md hover:border-[#0a4a83]/30 transition-all min-h-[250px]">
              <div className="text-[#0a4a83] w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5 stroke-[2]" />
              </div>
              <h4 className="text-[16px] md:text-[17px] font-black text-zinc-900 tracking-wide">
                Research-Backed Picks
              </h4>
              <p className="text-xs text-zinc-600 font-semibold leading-relaxed">
                No trading or speculative calls – only long-term research-based recommendations.
              </p>
              <Link
                href="/services"
                className="text-xs font-black text-[#0a4a83] hover:underline"
              >
                Explore More...
              </Link>
            </div>

            <div className="rounded-xl p-8 bg-zinc-50 border border-zinc-200/80 shadow-sm flex flex-col items-center text-center justify-between gap-5 hover:shadow-md hover:border-[#0a4a83]/30 transition-all min-h-[250px]">
              <div className="text-[#0a4a83] w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <Target className="w-5 h-5 stroke-[2]" />
              </div>
              <h4 className="text-[16px] md:text-[17px] font-black text-zinc-900 tracking-wide">
                Tailored Portfolios
              </h4>
              <p className="text-xs text-zinc-600 font-semibold leading-relaxed">
                Custom portfolio suggestions carefully aligned with your risk profile.
              </p>
              <Link
                href="/services"
                className="text-xs font-black text-[#0a4a83] hover:underline"
              >
                Explore More...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
