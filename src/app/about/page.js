import React from "react";
import Image from "next/image";
import WhyChooseMe from "@/sections/WhyChooseMe";
import LetsGetStarted from "@/sections/LetsGetStarted";

export const metadata = {
  title: "About Me - Sujan Singh",
  description: "Learn about the professional journey, SEBI credentials, values, and investment advisory experience of Sujan Singh.",
};

export default function About() {
  const RIAFoci = [
    "Clearly define and prioritise their financial goals",
    "Create tailored investment and tax-efficient strategies",
    "Build a secure retirement roadmap and protect their families through proper insurance planning",
    "Regularly review and adapt plans as life circumstances change",
  ];

  const institutions = [
    <span>The <strong className="text-zinc-950 font-extrabold">Indian Army</strong></span>,
    <span>The <strong className="text-zinc-950 font-extrabold">Indian Air Force</strong></span>,
    <strong className="text-zinc-950 font-extrabold">ONGC</strong>,
    <span>The <strong className="text-zinc-950 font-extrabold">Press Information Bureau (PIB)</strong></span>,
    <span>Numerous <strong className="text-zinc-950 font-extrabold">academic institutions</strong> across the country</span>,
  ];

  return (
    <div className="bg-zinc-50 min-h-screen pt-8 pb-24 font-sans text-zinc-700">
      {/* 1. Main Bio Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column - Large smiling portrait photo of Sujan */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[420px] aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-zinc-200/80 bg-white p-2">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src="/sujan_about.jpg"
                alt="Sujan Singh checkered blazer sitting"
                fill
                priority
                className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Brief Symmetrical Biography */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          {/* Header */}
          <div className="flex flex-col gap-3.5 pb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0a4a83]">Professional Profile</span>
            <h1 className="text-3xl md:text-4xl font-black text-zinc-950 tracking-tight leading-tight uppercase font-sans">
              SUJAN SINGH: YOUR TRUSTED INVESTMENT ADVISER
            </h1>
            <div className="w-20 h-[3px] bg-[#0a4a83]" />
          </div>

          <div className="flex flex-col gap-5 text-xs md:text-sm leading-relaxed text-zinc-600 font-semibold">
            <p>
              I am a <span className="font-extrabold text-zinc-950">SEBI-Registered Investment Adviser (RIA)</span> with a Post Graduate Program in Investment Advisory from NISM (SEBI) and over seven years of experience in financial education, planning, and advisory. My journey in finance began in 2018, dedicated to spreading financial awareness and helping people make informed decisions about their money.
            </p>
            <p>
              I have conducted and led large-scale financial literacy programs across India, reaching thousands of individuals, professionals, and families. My initiatives have been associated with organisations such as the Indian Army, Indian Air Force, ONGC, Press Information Bureau (PIB), and numerous universities and institutions. These programs aimed to simplify finance for everyday people, giving them confidence to take control of their financial future.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Structured Fiduciary & Experience Grid Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Card 1: Experience & Management */}
        <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 shadow-sm flex flex-col gap-5">
          <div className="text-[#0a4a83] w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="text-xs font-black text-zinc-950 uppercase tracking-wider">
            Operational Excellence
          </h3>
          <p className="text-xs text-zinc-500 leading-relaxed font-semibold">
            Apart from financial education, I have been involved in building client-focused strategies, operational excellence, and digital outreach initiatives that help people access reliable financial guidance. My experience in operations, management, and client engagement has given me a deep understanding of the challenges individuals face in personal finance and wealth management.
          </p>
        </div>

        {/* Card 2: Fiduciary Mandate */}
        <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 shadow-sm flex flex-col gap-5">
          <div className="text-[#0a4a83] w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xs font-black text-zinc-950 uppercase tracking-wider">
            Fee-Only & Fiduciary
          </h3>
          <p className="text-xs text-zinc-500 leading-relaxed font-semibold">
            Today, as a fee-only fiduciary adviser, I provide transparent, unbiased, and personalised financial planning services. I do not earn commissions or incentives – my only source of income is the fee paid by clients, ensuring 100% unbiased advice. I act as a trusted partner, helping clients:
          </p>
          <ul className="flex flex-col gap-2.5 text-[11px] text-zinc-650 font-bold leading-relaxed mt-2 border-t border-zinc-150/60 pt-4">
            {RIAFoci.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-1.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card 3: Mission & Commitment */}
        <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 shadow-sm flex flex-col gap-5">
          <div className="text-[#0a4a83] w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.6-5.84a14.977 14.977 0 015.84-2.58" />
            </svg>
          </div>
          <h3 className="text-xs font-black text-zinc-950 uppercase tracking-wider">
            Mission Statement
          </h3>
          <p className="text-xs text-zinc-500 leading-relaxed font-semibold">
            My mission is simple – to empower people to achieve financial freedom and peace of mind through ethical, client-first advisory services. I believe good financial planning is not just about numbers, but about building confidence, security, and a sense of control over your future.
          </p>
          <p className="text-xs text-zinc-500 leading-relaxed font-semibold border-t border-zinc-150/60 pt-4">
            With every client, my goal is to create a long-term partnership based on trust, transparency, and measurable results.
          </p>
        </div>
      </div>

      {/* 2. Professional Journey Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-zinc-200/60 text-center flex flex-col items-center">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1.5px] w-24 bg-[#0a4a83]/30" />
          <span className="text-sm font-black uppercase tracking-[0.15em] text-[#0a4a83]">
            My Professional Journey
          </span>
          <div className="h-[1.5px] w-24 bg-[#0a4a83]/30" />
        </div>

        <div className="max-w-4xl flex flex-col gap-6 text-sm text-left text-zinc-600 font-semibold leading-relaxed">
          <p>
            I began my professional journey in the stock market education space in 2016 at <strong className="text-zinc-950 font-extrabold">BIFS Pvt. Ltd.</strong>, where I worked as <strong className="text-zinc-950 font-extrabold">Chief Operations Manager</strong> until 2023. During my time there, I had the privilege of leading some of India's largest-scale Financial Literacy Programs. These initiatives reached thousands of individuals, including professionals from prestigious institutions such as:
          </p>

          {/* Institution lists */}
          <ul className="flex flex-col gap-3 pl-4 text-zinc-700">
            {institutions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-2 shrink-0" />
                <span className="text-xs font-bold leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <p>
            In addition to my role in leading these educational initiatives, I was responsible for overseeing operations, management, and sales within the company. My leadership allowed me to drive impactful change and contribute to a broader mission of empowering people with financial knowledge.
          </p>
        </div>
      </div>

      {/* 3. Let's Get Started CTA Section */}
      <LetsGetStarted />

      {/* 4. Why Choose Me Section */}
      <WhyChooseMe />
    </div>
  );
}
