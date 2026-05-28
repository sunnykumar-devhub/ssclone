import React from "react";
import { ShieldCheck, FileText, Scale, Info, ExternalLink } from "lucide-react";

export const metadata = {
  title: "SEBI Disclosures - Sujan Singh",
  description: "Official SEBI disclosures, grievance redressal, and regulatory certificates for Sujan Singh, Registered Investment Adviser.",
};

export default function Disclosures() {
  const disclosures = [
    {
      title: "Investment Adviser Registration Status",
      desc: "Sujan Singh is registered with the Securities and Exchange Board of India (SEBI) as an Individual Investment Adviser under Registration No. INA000020864. Type of Registration: Individual. Validity: Perpetual unless suspended/revoked.",
    },
    {
      title: "Grievance Redressal Mechanism",
      desc: "For any queries or grievances, please contact us at info@sujanadvisory.com. In case of unsatisfactory response, you may register complaints with SEBI's SCORES portal.",
    },
    {
      title: "Compliance & Dispute Resolution",
      desc: "All disputes are subject to the exclusive jurisdiction of the courts of Gurugram, India. We maintain full professional indemnity insurance as per SEBI regulations.",
    },
  ];

  return (
    <div className="bg-zinc-50 min-h-screen pt-32 pb-24 font-sans text-zinc-800">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#0a4a83] uppercase tracking-wider w-max">
            <Scale className="w-3.5 h-3.5 stroke-[2.5]" />
            Regulatory Compliance
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900">
            SEBI Regulatory Disclosures
          </h1>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Statutory disclosures and investor guidelines in compliance with Securities and Exchange Board of India (Investment Advisers) Regulations, 2013.
          </p>
        </div>

        {/* Certificate Display */}
        <div className="glass-card rounded-2xl p-8 border border-zinc-200/60 bg-white shadow-sm flex flex-col md:flex-row items-center gap-6 mb-12">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0a4a83] shrink-0">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div className="flex flex-col gap-1 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">SEBI Registration Status</span>
            <span className="text-base font-bold text-zinc-800">Active Individual Investment Adviser</span>
            <span className="text-xs text-zinc-500 mt-0.5">Registration No. INA000020864 | Gurugram, Haryana</span>
          </div>
        </div>

        {/* Disclosure Cards */}
        <div className="flex flex-col gap-6">
          {disclosures.map((disc, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-8 border border-zinc-200/60 bg-white shadow-sm flex flex-col gap-4">
              <h3 className="text-lg font-bold text-zinc-950 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#0a4a83]" />
                {disc.title}
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                {disc.desc}
              </p>
            </div>
          ))}
        </div>

        {/* SCORES Link */}
        <div className="mt-12 p-6 rounded-2xl bg-blue-50/50 border border-blue-100/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Info className="w-5 h-5 text-[#0a4a83]" />
            <span className="text-xs font-semibold text-zinc-700">Lodge Grievance directly on SEBI SCORES portal</span>
          </div>
          <a
            href="https://scores.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold text-[#0a4a83] hover:text-[#07355e] uppercase tracking-wider shrink-0 transition-colors"
          >
            Go To SCORES
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
