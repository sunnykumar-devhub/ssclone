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
    <div className="bg-white min-h-screen pt-36 pb-24 font-sans text-zinc-700">
      {/* 1. Main Bio Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column - Large smiling portrait photo of Sujan */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[420px] aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-zinc-150">
            <Image
              src="/sujan_about.png"
              alt="Sujan Singh checkered blazer sitting"
              fill
              priority
              className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>

        {/* Right Column - Complete Biography */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          {/* Header */}
          <div className="flex flex-col gap-3.5 pb-4">
            <h1 className="text-2xl md:text-3xl font-black text-[#0a4a83] tracking-wide">
              SUJAN SINGH: YOUR TRUSTED INVESTMENT ADVISER
            </h1>
            <div className="w-20 h-[3px] bg-[#0a4a83]" />
          </div>

          <div className="flex flex-col gap-5 text-sm leading-relaxed text-zinc-600 font-semibold">
            <p>
              I am a <span className="font-extrabold text-zinc-950">SEBI-Registered Investment Adviser (RIA)</span> with a Post Graduate Program in Investment Advisory from NISM (SEBI) and over seven years of experience in financial education, planning, and advisory. My journey in finance began in 2018, dedicated to spreading financial awareness and helping people make informed decisions about their money.
            </p>
            <p>
              I have conducted and led large-scale financial literacy programs across India, reaching thousands of individuals, professionals, and families. My initiatives have been associated with organisations such as the Indian Army, Indian Air Force, ONGC, Press Information Bureau (PIB), and numerous universities and institutions. These programs aimed to simplify finance for everyday people, giving them confidence to take control of their financial future.
            </p>
            <p>
              Apart from financial education, I have been involved in building client-focused strategies, operational excellence, and digital outreach initiatives that help people access reliable financial guidance. My experience in operations, management, and client engagement has given me a deep understanding of the challenges individuals face in personal finance and wealth management.
            </p>
            <p>
              Today, as a fee-only fiduciary adviser, I provide transparent, unbiased, and personalised financial planning services. I do not earn commissions or incentives – my only source of income is the fee paid by clients, ensuring 100% unbiased advice. I act as a trusted partner, helping clients:
            </p>

            {/* Fiduciary bullet points */}
            <ul className="flex flex-col gap-3 pl-4 text-zinc-700">
              {RIAFoci.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-2 shrink-0" />
                  <span className="text-xs font-bold leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <p>
              My mission is simple – to empower people to achieve financial freedom and peace of mind through ethical, client-first advisory services. I believe good financial planning is not just about numbers, but about building confidence, security, and a sense of control over your future.
            </p>
            <p>
              With every client, my goal is to create a long-term partnership based on trust, transparency, and measurable results.
            </p>
          </div>
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
