import React from "react";
import Link from "next/link";
import { Scale, Gem, BarChart3, LineChart, Globe, UserCheck, ArrowRight } from "lucide-react";

export default function Features() {
  const features = [
    {
      id: 1,
      icon: Scale,
      title: "SEBI Compliance Auditing",
      desc: "Guiding organizations and HNIs through statutory compliance reviews, tax planning, and audit-ready framework alignments.",
    },
    {
      id: 2,
      icon: BarChart3,
      title: "Direct Strategic Consulting",
      desc: "Helping family offices and founders maximize market position, eliminate operational friction, and execute plans.",
    },
    {
      id: 3,
      icon: Gem,
      title: "Wealth Preservation Planning",
      desc: "Architecting family office governance structures, trusts setups, tax-efficient distributions, and estate plans.",
    },
    {
      id: 4,
      icon: Globe,
      title: "Cross-Border Wealth Structuring",
      desc: "Managing statutory requirements for foreign investments, overseas assets management, and international transfers.",
    },
    {
      id: 5,
      icon: LineChart,
      title: "Capital Allocation Strategy",
      desc: "Drafting disciplined cash flow rules, optimal portfolio asset classes, capital restructuring, and risk boundaries.",
    },
    {
      id: 6,
      icon: UserCheck,
      title: "Board and Founder Mentorship",
      desc: "Providing fiduciary guidelines, board dispute frameworks, executive transitions, and corporate structure consultations.",
    },
  ];

  return (
    <section className="py-24 bg-zinc-50 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0a4a83]">Core Expertise</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 max-w-2xl font-sans">
            Bespoke Fiduciary Structures & Compliance Plans
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl leading-relaxed font-medium">
            Formulating custom-tailored wealth and structural planning to safeguard high-net-worth capital and optimize yield.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className="glass-card rounded-2xl p-8 flex flex-col gap-6 bg-white group hover:border-[#0a4a83]/30 transition-all duration-300 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0a4a83] group-hover:bg-[#0a4a83] group-hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-zinc-900 group-hover:text-[#0a4a83] transition-colors duration-300">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                    {feat.desc}
                  </p>
                </div>

                <Link
                  href="/services"
                  className="flex items-center gap-1.5 text-xs font-bold text-[#0a4a83] hover:text-[#07355e] uppercase tracking-wider mt-auto group/btn transition-colors"
                >
                  Learn Detail
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
