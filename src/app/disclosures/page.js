import React from "react";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";

export const metadata = {
  title: "SEBI Disclosures & Complaints - Sujan Singh",
  description: "Official SEBI disclosures, statutory registration details, and monthly investment advisory grievances statistics for Sujan Singh.",
};

export default function Disclosures() {
  const grievances = [
    { count: 0, text: "At the beginning of the month" },
    { count: 0, text: "Received During the Month" },
    { count: 0, text: "Resolved during the month" },
    { count: 0, text: "Pending at the end of the month" },
  ];

  return (
    <div className="bg-zinc-50 min-h-screen pt-8 pb-24 font-sans text-zinc-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12 text-left">
        
        {/* Top Header */}
        <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 shadow-sm flex flex-col gap-3.5 text-center max-w-3xl mx-auto w-full mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0a4a83]">Statutory Compliance</span>
          <h1 className="text-3xl md:text-4xl font-black text-zinc-950 tracking-tight">SEBI Registration & Disclosures</h1>
          <p className="text-xs text-zinc-500 font-semibold max-w-xl mx-auto leading-relaxed">
            Official regulatory disclosures, statutory registration details, and grievance redressal frameworks for Sujan Singh.
          </p>
        </div>

        {/* 2-Column Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            {/* Section 1: SEBI Registration Details */}
            <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 shadow-sm flex flex-col gap-6">
              <div className="text-left w-full border-b border-zinc-100 pb-4">
                <h2 className="text-xs font-black uppercase tracking-[0.12em] text-[#0a4a83]">
                  1. SEBI REGISTRATION DETAILS
                </h2>
              </div>
              <div className="flex flex-col gap-4 text-xs md:text-sm text-zinc-650 font-semibold">
                <p className="flex justify-between items-center border-b border-zinc-50 pb-2">
                  <span className="text-zinc-400 font-bold uppercase tracking-wider text-[10px]">Name</span>
                  <span className="font-bold text-zinc-900">Sujan Singh</span>
                </p>
                <p className="flex justify-between items-center border-b border-zinc-50 pb-2">
                  <span className="text-zinc-400 font-bold uppercase tracking-wider text-[10px]">SEBI Registration No.</span>
                  <span className="font-bold text-[#0a4a83]">INA000020864</span>
                </p>
                <p className="flex justify-between items-center border-b border-zinc-50 pb-2">
                  <span className="text-zinc-400 font-bold uppercase tracking-wider text-[10px]">Type of Registration</span>
                  <span className="font-bold text-zinc-900">Individual Investment Adviser</span>
                </p>
                <p className="flex justify-between items-center border-b border-zinc-50 pb-2">
                  <span className="text-zinc-400 font-bold uppercase tracking-wider text-[10px]">Date of Registration</span>
                  <span className="font-bold text-zinc-900">07-08-2025</span>
                </p>
                <p className="flex justify-between items-center pb-1">
                  <span className="text-zinc-400 font-bold uppercase tracking-wider text-[10px]">Place of Registration</span>
                  <span className="font-bold text-zinc-900">New Delhi, Delhi</span>
                </p>
              </div>
            </div>

            {/* Section 2: Nature of Services */}
            <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 shadow-sm flex flex-col gap-6">
              <div className="text-left w-full border-b border-zinc-100 pb-4">
                <h2 className="text-xs font-black uppercase tracking-[0.12em] text-[#0a4a83]">
                  2. NATURE OF SERVICES
                </h2>
              </div>
              <div className="flex flex-col gap-3 text-xs md:text-sm text-zinc-500 font-semibold leading-relaxed">
                <p>We provide non-discretionary, fee-only financial planning and investment advisory services.</p>
                <p>We do not sell financial products or earn commissions from any third-party.</p>
                <p>Our advice is 100% unbiased and client-centric.</p>
              </div>
            </div>

            {/* Section 3: Compensation Disclosure */}
            <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 shadow-sm flex flex-col gap-6">
              <div className="text-left w-full border-b border-zinc-100 pb-4">
                <h2 className="text-xs font-black uppercase tracking-[0.12em] text-[#0a4a83]">
                  3. COMPENSATION DISCLOSURE
                </h2>
              </div>
              <p className="text-xs md:text-sm text-zinc-500 font-semibold leading-relaxed">
                Our only source of income is the professional fee paid by clients. We do not earn any commissions, referral income, or incentives – ensuring zero conflict of interest.
              </p>
            </div>

            {/* Section 4: Scope of Services */}
            <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 shadow-sm flex flex-col gap-6">
              <div className="text-left w-full border-b border-zinc-100 pb-4">
                <h2 className="text-xs font-black uppercase tracking-[0.12em] text-[#0a4a83]">
                  4. SCOPE OF SERVICES
                </h2>
              </div>
              <ul className="flex flex-col gap-3.5 pl-4 text-xs md:text-sm text-zinc-500 font-semibold leading-relaxed">
                <li className="list-disc">Comprehensive Financial Planning</li>
                <li className="list-disc">Goal-Based Investment Advisory</li>
                <li className="list-disc">Retirement & Tax Planning</li>
                <li className="list-disc">Risk Management & Insurance Planning</li>
                <li className="list-disc">Portfolio Review & Rebalancing</li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            {/* Section 5: Risk Disclosure */}
            <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 shadow-sm flex flex-col gap-6">
              <div className="text-left w-full border-b border-zinc-100 pb-4">
                <h2 className="text-xs font-black uppercase tracking-[0.12em] text-[#0a4a83]">
                  5. RISK DISCLOSURE
                </h2>
              </div>
              <div className="flex flex-col gap-3 text-xs md:text-sm text-zinc-500 font-semibold leading-relaxed">
                <p>Investments in securities are subject to market risks.</p>
                <p>Past performance is not indicative of future returns.</p>
                <p>Clients are advised to read all documents carefully before investing.</p>
              </div>
            </div>

            {/* Section 6: Grievance Redressal */}
            <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 shadow-sm flex flex-col gap-6">
              <div className="text-left w-full border-b border-zinc-100 pb-4">
                <h2 className="text-xs font-black uppercase tracking-[0.12em] text-[#0a4a83]">
                  6. GRIEVANCE REDRESSAL
                </h2>
              </div>
              <div className="flex flex-col gap-3.5 text-xs md:text-sm text-zinc-650 font-semibold">
                <p className="flex justify-between items-center border-b border-zinc-50 pb-2">
                  <span className="text-zinc-400 font-bold uppercase tracking-wider text-[10px]">Email</span>
                  <span className="font-bold text-zinc-900">sujansingh20@gmail.com</span>
                </p>
                <p className="flex justify-between items-center border-b border-zinc-50 pb-2">
                  <span className="text-zinc-400 font-bold uppercase tracking-wider text-[10px]">Phone</span>
                  <span className="font-bold text-zinc-900">+91 88021 08844</span>
                </p>
                <p className="leading-relaxed mt-2 text-zinc-500 font-semibold">
                  If unresolved, clients can lodge complaints on SEBI SCORES at 👉{" "}
                  <a
                    href="https://scores.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0a4a83] hover:underline inline-flex items-center gap-1 font-bold"
                  >
                    https://scores.gov.in
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </p>
              </div>
            </div>

            {/* Section 7: Privacy Policy */}
            <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 shadow-sm flex flex-col gap-6">
              <div className="text-left w-full border-b border-zinc-100 pb-4">
                <h2 className="text-xs font-black uppercase tracking-[0.12em] text-[#0a4a83]">
                  7. PRIVACY POLICY
                </h2>
              </div>
              <p className="text-xs md:text-sm text-zinc-500 font-semibold leading-relaxed">
                We respect your privacy. Client data is kept strictly confidential and never shared with third parties without consent.
              </p>
            </div>

            {/* Section 8: Disclaimer */}
            <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 shadow-sm flex flex-col gap-6">
              <div className="text-left w-full border-b border-zinc-100 pb-4">
                <h2 className="text-xs font-black uppercase tracking-[0.12em] text-[#0a4a83]">
                  8. DISCLAIMER
                </h2>
              </div>
              <div className="flex flex-col gap-3 text-xs md:text-sm text-zinc-500 font-semibold leading-relaxed">
                <p>The content on this website is for informational purposes only and does not constitute investment advice unless a formal engagement is established.</p>
                <p>We do not solicit or sell any financial products.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Blue visual progress indicator under disclaimer */}
        <div className="w-full h-1 bg-zinc-200 rounded-full mt-4 relative overflow-hidden shrink-0">
          <div className="absolute top-0 left-0 h-full w-[95%] bg-[#0a4a83] rounded-full" />
        </div>

        {/* Investment Advisory complaints visual cards */}
        <div className="mt-6 flex flex-col gap-10 w-full text-center">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-black text-[#0a4a83] tracking-wide uppercase font-sans">
              INVESTMENT ADVISORY
            </h3>
            <p className="text-xs font-black text-[#0a4a83] tracking-wider uppercase">
              NUMBER OF COMPLAINTS – FEBRUARY 2026
            </p>
          </div>

          {/* 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {grievances.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl p-8 bg-white border border-zinc-200/80 shadow-sm flex flex-col items-center justify-center gap-4 hover:shadow-md transition-shadow min-h-[160px]"
              >
                <span className="text-3xl font-extrabold text-[#0a4a83]">
                  {item.count}
                </span>
                <span className="text-[10.5px] text-zinc-500 font-bold tracking-wide leading-relaxed">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom blue progress bar */}
          <div className="w-full h-1 bg-zinc-100 rounded-full mt-4 relative overflow-hidden shrink-0">
            <div className="absolute top-0 left-0 h-full w-[97%] bg-[#0a4a83] rounded-full" />
          </div>

          {/* Centered button at bottom */}
          <div className="pt-4 flex justify-center">
            <Link
              href="/disclosures/grievances"
              className="inline-flex items-center gap-2 border-2 border-[#0a4a83] text-[#0a4a83] hover:bg-[#0a4a83] hover:text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer active:scale-[0.98]"
            >
              View Complete Grievances Status Here
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
