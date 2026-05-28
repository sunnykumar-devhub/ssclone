import React from "react";
import Link from "next/link";

export default function SEBIDisclosuresHome() {
  const disclosurePoints = [
    {
      label: "SEBI Registration No.",
      val: "INA000020864",
    },
    {
      label: "Registered Investment Adviser",
      val: "Sujan Singh (SEBI RIA)",
    },
    {
      label: "Disclaimer",
      val: "All services are provided in line with SEBI guidelines, and we do not provide any recommendations for specific securities or mutual fund products.",
    },
    {
      label: "Conflicts of interest",
      val: "We do not receive any commission from financial products, ensuring unbiased advice at all times.",
    },
    {
      label: "Fee Structure",
      val: "Our fees are flat and transparent. We charge a one-time fee for our advisory services as well as annual renewal charges (details available on request).",
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-zinc-200/50 text-left">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="flex flex-col items-center mb-16">
          <span className="text-sm font-black uppercase tracking-[0.15em] text-zinc-800">
            SEBI Disclosures
          </span>
          <div className="w-full h-[1px] bg-[#0a4a83]/30 mt-4" />
        </div>

        {/* Narrative Paragraph */}
        <div className="flex flex-col gap-6 text-sm text-zinc-700 leading-relaxed font-bold">
          <p>
            I, <span className="font-extrabold text-zinc-950">Sujan Singh</span>, am fully committed to transparency and compliance with the regulations set by the <span className="font-extrabold text-zinc-950">Securities and Exchange Board of India (SEBI)</span>. As part of this commitment, the following key information is disclosed:
          </p>

          {/* Bullet points */}
          <ul className="flex flex-col gap-4 pl-2">
            {disclosurePoints.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-2 shrink-0" />
                <span className="text-xs text-zinc-650 font-bold leading-relaxed">
                  <strong className="text-zinc-950 font-extrabold">{pt.label}:</strong> {pt.val}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-xs text-zinc-500 font-extrabold mt-4">
            For detailed and official SEBI disclosures, please click the button below.
          </p>

          <div className="pt-2">
            <Link
              href="/disclosures"
              className="inline-block bg-[#0a4a83] hover:bg-[#07355e] text-white text-xs font-black uppercase tracking-wider px-6 py-4 rounded-md transition-all shadow-sm active:scale-[0.98]"
            >
              View Full SEBI Disclosures
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
