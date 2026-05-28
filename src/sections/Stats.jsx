import React from "react";
import { Award, Briefcase, Users, Landmark } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      id: 1,
      icon: Users,
      value: "500+",
      label: "Active HNI Investors",
      desc: "Delivering bespoke, direct structural financial consulting.",
    },
    {
      id: 2,
      icon: Landmark,
      value: "₹2,500 Cr+",
      label: "Assets Advised",
      desc: "Optimal capital preservation with certified compliance planning.",
    },
    {
      id: 3,
      icon: Briefcase,
      value: "150+",
      label: "Family Offices Partners",
      desc: "Structuring tax-efficient estate structures with precision.",
    },
    {
      id: 4,
      icon: Award,
      value: "100%",
      label: "Regulatory Audit Record",
      desc: "Flawless compliance track record with SEBI audits.",
    },
  ];

  return (
    <section className="py-20 bg-zinc-50 border-y border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="glass-card rounded-2xl p-8 flex flex-col gap-4 relative overflow-hidden bg-white group transition-all duration-300 shadow-sm"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
                
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0a4a83] group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>

                <div className="flex flex-col">
                  <span className="text-3xl font-extrabold text-zinc-900 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold text-[#0a4a83] mt-1 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>

                <p className="text-xs text-zinc-550 leading-relaxed font-medium">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
