import React from "react";
import { Scale, Coins, ShieldCheck, Send, Bookmark, RotateCcw } from "lucide-react";

export default function WhyChooseMe() {
  const valuesList = [
    {
      id: 1,
      icon: Scale,
      title: "UNBIASED & CLIENT-FIRST",
      desc: "I work for you, not for product companies.",
    },
    {
      id: 2,
      icon: Coins,
      title: "FLAT FEE, FULL TRANSPARENCY",
      desc: "Know exactly what you pay and what you get.",
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: "SEBI-REGISTERED & ETHICAL",
      desc: "Regulated, compliant, and trustworthy.",
    },
    {
      id: 4,
      icon: Send,
      title: "TAILORED FINANCIAL PLANS",
      desc: "Strategies designed around your goals and risk profile.",
    },
    {
      id: 5,
      icon: Bookmark,
      title: "COMPLETE FINANCIAL GUIDANCE",
      desc: "Investments, taxes, insurance, retirement- all covered.",
    },
    {
      id: 6,
      icon: RotateCcw,
      title: "CLARITY & CONFIDENCE",
      desc: "I simplify finance so you can make informed decisions.",
    },
  ];

  return (
    <section className="pt-12 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Why Choose Me Main Header */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[1.5px] w-24 bg-[#0a4a83]/30" />
          <span className="text-sm font-black uppercase tracking-[0.15em] text-[#0a4a83]">
            Why Choose Me
          </span>
          <div className="h-[1.5px] w-24 bg-[#0a4a83]/30" />
        </div>

        <p className="text-[13px] text-zinc-600 font-bold uppercase tracking-wider mb-14">
          Where Financial Planning Meets True Integrity. <br />
          Empowering You With Clarity, Confidence, and Freedom.
        </p>

        {/* Fiduciary statement header */}
        <div className="flex flex-col gap-4 max-w-3xl mx-auto mb-20">
          <h3 className="text-lg md:text-xl font-black text-[#0a4a83] uppercase tracking-wide">
            Your Trusted Fee-Only Advisor: 100% On Your Side
          </h3>
          <p className="text-xs md:text-sm text-zinc-700 leading-relaxed font-black max-w-2xl mx-auto">
            We follow the fiduciary gold standard: No commissions, No hidden motives - Just pure, transparent advice for your best interest.
          </p>
        </div>

        {/* Connected 6 round circles columns */}
        <div className="relative">
          {/* Connecting horizontal blue bar on desktops */}
          <div className="absolute top-[38px] left-[8%] right-[8%] h-[2px] bg-[#0a4a83] -z-10 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-12 lg:gap-6">
            {valuesList.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.id}
                  className="flex flex-col items-center text-center gap-6 relative group"
                >
                  {/* Connecting vertical line on mobile screen */}
                  <div className="absolute top-[76px] bottom-[-24px] w-[2px] bg-[#0a4a83] -z-10 block lg:hidden group-last:hidden" />

                  {/* Circular Icon with double layered border */}
                  <div className="w-[76px] h-[76px] rounded-full bg-white border-2 border-[#0a4a83] flex items-center justify-center text-[#0a4a83] shadow-md group-hover:scale-105 transition-transform duration-350 shrink-0">
                    <Icon className="w-7 h-7 stroke-[2]" />
                  </div>

                  {/* Details column */}
                  <div className="flex flex-col gap-2.5 max-w-[170px]">
                    <h4 className="text-[11px] font-black text-zinc-950 uppercase tracking-wider leading-snug">
                      {val.title}
                    </h4>
                    <p className="text-[10.5px] text-zinc-600 font-bold leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
