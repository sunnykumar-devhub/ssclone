import React from "react";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { grievances } from "@/constants/data";
import PageContainer from "@/components/layout/pagecontainer";
import SectionContainer from "@/components/layout/sectioncontainer";
import GridContainer from "@/components/layout/gridcontainer";
import Card from "@/components/ui/card";

export default function DisclosuresContainer() {
  return (
    <PageContainer>
      {/* Top Header */}
      <SectionContainer className="mb-6" headerClass="mb-0">
        <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 shadow-sm flex flex-col gap-3.5 text-center max-w-3xl mx-auto w-full">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0a4a83]">Statutory Compliance</span>
          <h1 className="text-3xl md:text-4xl font-black text-zinc-950 tracking-tight">SEBI Registration & Disclosures</h1>
          <p className="text-xs text-zinc-500 font-semibold max-w-xl mx-auto leading-relaxed">
            Official regulatory disclosures, statutory registration details, and grievance redressal frameworks for Sujan Singh.
          </p>
        </div>
      </SectionContainer>

      {/* 2-Column Sections Grid */}
      <SectionContainer className="mb-12" headerClass="mb-0">
        <GridContainer cols={2} gap={8} className="items-start text-left">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            {/* Section 1: SEBI Registration Details */}
            <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 shadow-sm flex flex-col gap-6">
              <div className="text-left w-full border-b border-zinc-100 pb-4">
                <h2 className="text-xs font-black uppercase tracking-[0.12em] text-[#0a4a83]">
                  1. SEBI REGISTRATION DETAILS
                </h2>
              </div>
              <div className="flex flex-col gap-4 text-xs md:text-sm text-zinc-655 font-semibold">
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
        </GridContainer>
      </SectionContainer>

      {/* Blue visual progress indicator under disclaimer */}
      <SectionContainer className="mb-6" headerClass="mb-0">
        <div className="w-full h-1 bg-zinc-200 rounded-full relative overflow-hidden shrink-0">
          <div className="absolute top-0 left-0 h-full w-[95%] bg-[#0a4a83] rounded-full" />
        </div>
      </SectionContainer>

      {/* Investment Advisory complaints visual cards */}
      <SectionContainer className="text-center" headerClass="mb-10">
        <div className="flex flex-col gap-2 mb-10">
          <h3 className="text-lg font-black text-[#0a4a83] tracking-wide uppercase font-sans">
            INVESTMENT ADVISORY
          </h3>
          <p className="text-xs font-black text-[#0a4a83] tracking-wider uppercase">
            NUMBER OF COMPLAINTS – FEBRUARY 2026
          </p>
        </div>

        <GridContainer cols={4} gap={6}>
          {grievances.map((item, idx) => (
            <Card
              key={idx}
              variant="stat"
              count={item.count}
              desc={item.text}
            />
          ))}
        </GridContainer>

        {/* Bottom blue progress bar */}
        <div className="w-full h-1 bg-zinc-100 rounded-full mt-10 relative overflow-hidden shrink-0">
          <div className="absolute top-0 left-0 h-full w-[97%] bg-[#0a4a83] rounded-full" />
        </div>

        {/* Centered button at bottom */}
        <div className="pt-8 flex justify-center">
          <Link
            href="/disclosures/grievances"
            className="inline-flex items-center gap-2 border-2 border-[#0a4a83] text-[#0a4a83] hover:bg-[#0a4a83] hover:text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer active:scale-[0.98]"
          >
            View Complete Grievances Status Here
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </SectionContainer>
    </PageContainer>
  );
}
