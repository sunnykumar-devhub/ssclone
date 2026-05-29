import React from "react";
import Image from "next/image";
import { Globe, Search, Compass, ClipboardCheck, Heart, Layers, Calculator, Shield, Target, Scale, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Services Catalog - Sujan Singh",
  description: "Detailed description of all financial advisory services, ethics protocols, wealth management systems, and stock advisory practices by Sujan Singh.",
};

export default function Services() {
  const umbrellaServices = [
    { title: "INVESTMENT ADVISOR SERVICES", icon: Globe },
    { title: "TAX SERVICES", icon: Search },
    { title: "FINANCIAL CONSULTING SERVICES", icon: Compass },
    { title: "RETIREMENT PLANNING", icon: ClipboardCheck },
    { title: "RISK MANAGEMENT & PROTECTION", icon: Heart },
    { title: "ESTATE PLANNING", icon: Layers },
    { title: "CORPORATE FINANCIAL ADVISORY", icon: Calculator },
    { title: "EDUCATION PLANNING", icon: Shield },
  ];

  const planningServicesDetails = [
    {
      id: 1,
      title: "RETIREMENT PLANNING",
      img: "/retirement_planning.png",
      alignLeft: true,
      icon: Shield,
      bullets1: [
        "Estimate retirement needs & expenses.",
        "Create a diversified investment plan.",
        "Plan for inflation and healthcare costs.",
        "Ensure regular income after retirement.",
      ],
      para: "Retirement is not just about stopping work – it’s about living life on your terms without financial stress. A well-structured retirement plan ensures that you can maintain your desired lifestyle, meet healthcare needs, and enjoy financial independence even when you are no longer working.",
      bullets2: [
        "Personalised Retirement Strategy – Build a roadmap for a stress-free retirement.",
        "Investment Planning & Asset Allocation – Diversified strategies for long-term growth.",
      ],
    },
    {
      id: 2,
      title: "GOAL-BASED PLANNING",
      img: "/goal_planning.png",
      alignLeft: false,
      icon: Target,
      bullets1: [
        "Set & prioritize goals.",
        "Estimate cost & timeline.",
      ],
      para: "Life is full of important milestones – buying a home, funding your child’s education, planning a dream vacation, or preparing for retirement. Each goal requires the right strategy at the right time.",
      bullets2: [
        "Financial Goal Setting – Define clear, actionable life goals (education, home, marriage, etc.)",
        "Tailored Investment Strategy – Plans based on your risk profile and time horizon.",
        "Regular Reviews – Adjust strategies as your life or goals change.",
      ],
    },
    {
      id: 3,
      title: "INSURANCE PLANNING",
      img: "/insurance_planning.png",
      alignLeft: true,
      icon: Heart,
      bullets1: [
        "Protect your family with the right insurance cover.",
        "Plan for life, health, and critical illness risks.",
      ],
      para: "A disciplined investment plan builds wealth steadily and reduces financial stress over time.",
      bullets2: [
        "Risk Identification – Identify life, health, or disability risks.",
        "Policy Evaluation – Review existing coverage for adequacy and cost-effectiveness.",
        "Coverage Recommendations – Fill gaps with unbiased suggestions.",
      ],
    },
    {
      id: 4,
      title: "EMERGENCY FUND PLANNING",
      img: "/emergency_planning.png",
      alignLeft: false,
      icon: Scale,
      bullets1: [
        "Calculate the right emergency fund size.",
        "Keep money easily accessible when needed.",
        "Avoid breaking long-term investments in crises.",
      ],
      para: "An emergency corpus acts as a financial safety net, providing quick access to funds when needed without disturbing other investments.",
      bullets2: [
        "Keep 6-12 months of essential expenses saved in liquid form.",
        "First step in a financial plan for peace of mind during tough times.",
      ],
    },
    {
      id: 5,
      title: "TAX PLANNING",
      img: "/tax_planning_v2.png",
      alignLeft: true,
      icon: Calculator,
      bullets1: [
        "Identify tax-saving opportunities.",
        "Invest in tax-efficient options.",
        "Plan for long-term tax benefits.",
      ],
      para: "Taxes can take away a significant part of your income if not planned properly. We help you save more legally and invest tax-efficiently.",
      bullets2: [
        "Income Tax Strategy – Reduce taxable income through exemptions & deductions.",
        "Tax-Efficient Investments – Maximise returns with tax-optimised options.",
        "Retirement Tax Strategy – Plan tax-efficient withdrawals post-retirement.",
      ],
    },
    {
      id: 6,
      title: "RISK PROFILING",
      img: "/risk_profiling_v2.png",
      alignLeft: false,
      icon: Compass,
      bullets1: [
        "Assess your risk tolerance and profile.",
        "Align investments with your comfort level.",
      ],
      para: "Every investor has different risk tolerance. Understanding your risk appetite helps build a suitable investment portfolio.",
      bullets2: [
        "Risk Profiling – Understand your risk-taking capacity based on age, financial situation, and goals.",
        "Portfolio Diversification – Diversify to minimise risk.",
        "Adjust Over Time – As your financial situation and goals evolve, we adjust your profile.",
      ],
    },
  ];

  return (
    <div className="bg-zinc-50 min-h-screen pt-8 pb-24 font-sans text-zinc-700">
      {/* 1. Umbrella of Services Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[1.5px] w-24 bg-[#0a4a83]/30" />
          <span className="text-sm font-black uppercase tracking-[0.15em] text-[#0a4a83]">
            My Umbrella of Services
          </span>
          <div className="h-[1.5px] w-24 bg-[#0a4a83]/30" />
        </div>
        <p className="text-[13px] text-zinc-500 font-bold uppercase tracking-wider mb-14 max-w-xl mx-auto">
          I offer a wide range of specialized services to help you achieve your financial goals and secure your financial future.
        </p>

        {/* Grid of 8 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {umbrellaServices.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={idx}
                className="rounded-xl p-8 bg-white border border-zinc-200/80 shadow-sm flex flex-col items-center justify-between text-center gap-6 min-h-[220px] hover:shadow-md hover:border-[#0a4a83]/20 transition-all relative overflow-hidden group"
              >
                <div className="w-[64px] h-[64px] rounded-full border border-zinc-200 flex items-center justify-center text-[#0a4a83] bg-zinc-50 group-hover:scale-105 transition-transform shrink-0">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h4 className="text-[11px] font-black text-[#0a4a83] uppercase tracking-wider leading-snug">
                  {svc.title}
                </h4>
                {/* Sleek bottom hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-[#0a4a83] transition-colors duration-300" />
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Importance of Ethics Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="bg-white border border-zinc-200 rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Left Text */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <h2 className="text-2xl md:text-3xl font-black text-zinc-950 tracking-tight leading-tight uppercase font-sans">
              THE IMPORTANCE OF ETHICS IN <br /> INVESTMENT ADVISORY
            </h2>
            <div className="w-20 h-[3px] bg-[#0a4a83]" />

            <div className="flex flex-col gap-5 text-xs md:text-sm text-zinc-600 font-semibold leading-relaxed">
              <p>
                Ethical Integrity in Investment Advisory is paramount, as individuals rely on accurate financial reports to make critical decisions, such as investing for retirement, funding education, or securing loans. Advisory are entrusted with the responsibility of ensuring transparency, accuracy, and honesty in their reporting.
              </p>
              <p>
                Any compromise in these values can mislead investors and negatively impact their long-term financial goals. As a <strong className="text-zinc-950 font-black">SEBI-registered Investment Adviser</strong>, I adhere to strict ethical standards, ensuring that all financial advice and reports are based on truthful and reliable data, fostering trust and helping clients make informed, data-driven decisions.
              </p>
            </div>
          </div>

          {/* Right Portrait image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-[3/4] rounded-2xl overflow-hidden shadow border border-zinc-150 shrink-0">
              <Image
                src="/sujan_services.jpg"
                alt="Sujan Singh sitting portrait"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Personalized Financial Planning Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-3">
          <h3 className="text-2xl md:text-3xl font-black text-[#0a4a83] uppercase tracking-wide">
            Personalized Financial Planning
          </h3>
        </div>
        <p className="text-xs md:text-sm text-zinc-500 font-bold uppercase tracking-wider max-w-xl mx-auto">
          We provide a complete, personalised, and unbiased approach to help you achieve financial freedom.
        </p>
      </div>

      {/* Alternating Sub Services details */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12 mb-24">
        {planningServicesDetails.map((svc) => {
          const Icon = svc.icon;
          return (
            <div
              key={svc.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start bg-white border border-zinc-200 rounded-2xl p-8 md:p-12 shadow-sm"
            >
              {/* Left Photo (if alignLeft is true) or (on mobile screen) */}
              <div
                className={`lg:col-span-5 flex justify-center ${svc.alignLeft ? "lg:order-1" : "lg:order-2"
                  }`}
              >
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow border border-zinc-150 shrink-0">
                  <Image
                    src={svc.img}
                    alt={svc.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Right Text */}
              <div
                className={`lg:col-span-7 flex flex-col gap-6 text-left ${svc.alignLeft ? "lg:order-2" : "lg:order-1"
                  }`}
              >
                <div className="flex items-center gap-2">
                  <div className="text-[#0a4a83] w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h4 className="text-lg font-black text-zinc-950 uppercase tracking-wider font-sans">
                    {svc.title}
                  </h4>
                </div>

                {/* List 1 */}
                <ul className="flex flex-col gap-2.5 pl-4 text-xs font-bold text-zinc-600">
                  {svc.bullets1.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Paragraph */}
                <p className="text-[13px] text-zinc-500 font-semibold leading-relaxed">
                  {svc.para}
                </p>

                {/* List 2 */}
                <ul className="flex flex-col gap-2.5 pl-4 text-xs font-bold text-zinc-650">
                  {svc.bullets2.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. Wealth Management Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24 text-center">
        <div className="flex flex-col items-center mb-16">
          <h3 className="text-2xl md:text-3xl font-black text-[#0a4a83] uppercase tracking-wide mt-2">
            Wealth Management Service
          </h3>
          <p className="text-xs md:text-sm text-zinc-500 font-bold uppercase tracking-wider mt-3 max-w-xl mx-auto">
            This ongoing wealth management service is for clients who have already completed their financial planning with us and want continuous professional guidance.
          </p>
        </div>

        {/* Wealth Management Alternating Rows */}
        <div className="flex flex-col gap-12 text-left">
          {/* Row 1: Regular Portfolio Reviews */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start bg-white border border-zinc-200 rounded-2xl p-8 md:p-12 shadow-sm">
            {/* Left Photo */}
            <div className="lg:col-span-5 flex justify-center lg:order-1">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow border border-zinc-150 shrink-0">
                <Image
                  src="/risk_profiling_v2.png"
                  alt="Regular Portfolio Reviews"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
            {/* Right Text */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left lg:order-2">
              <div className="flex items-center gap-2">
                <div className="text-[#0a4a83] w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 stroke-[2]" />
                </div>
                <h4 className="text-lg font-black text-zinc-950 uppercase tracking-wider font-sans">
                  Regular Portfolio Reviews
                </h4>
              </div>
              <ul className="flex flex-col gap-2.5 pl-4 text-xs font-bold text-zinc-650">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-1.5 shrink-0" />
                  <span>Unbiased checks and reviews to keep investments aligned with your goals.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-1.5 shrink-0" />
                  <span>Comprehensive review of your financial plan every six months.</span>
                </li>
              </ul>
              <p className="text-[13px] text-zinc-500 font-semibold leading-relaxed">
                As part of our commitment to your financial clarity, we run regular health checks on your asset allocation. This helps prevent drift from your comfortable risk level and keeps your portfolio highly disciplined.
              </p>
            </div>
          </div>

          {/* Row 2: Strategic Modifications */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start bg-white border border-zinc-200 rounded-2xl p-8 md:p-12 shadow-sm">
            {/* Right Photo */}
            <div className="lg:col-span-5 flex justify-center lg:order-2">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow border border-zinc-150 shrink-0">
                <Image
                  src="/tax_planning_v2.png"
                  alt="Strategic Modifications"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
            {/* Left Text */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left lg:order-1">
              <div className="flex items-center gap-2">
                <div className="text-[#0a4a83] w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <Scale className="w-5 h-5 stroke-[2]" />
                </div>
                <h4 className="text-lg font-black text-zinc-950 uppercase tracking-wider font-sans">
                  Strategic Modifications
                </h4>
              </div>
              <ul className="flex flex-col gap-2.5 pl-4 text-xs font-bold text-zinc-650">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-1.5 shrink-0" />
                  <span>Timely portfolio modifications and rebalancing as markets and personal situations change.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-1.5 shrink-0" />
                  <span>Tactical shifts aligned perfectly with tax optimization strategies.</span>
                </li>
              </ul>
              <p className="text-[13px] text-zinc-500 font-semibold leading-relaxed">
                When financial environments shift or your personal career goals evolve, your portfolio needs to react. We advise on timely rebalancing and strategic adjustments to lock in progress and capture new growth opportunities.
              </p>
            </div>
          </div>

          {/* Row 3: Continuous Support */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start bg-white border border-zinc-200 rounded-2xl p-8 md:p-12 shadow-sm">
            {/* Left Photo */}
            <div className="lg:col-span-5 flex justify-center lg:order-1">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow border border-zinc-150 shrink-0">
                <Image
                  src="/insurance_planning.png"
                  alt="Continuous Support"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
            {/* Right Text */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left lg:order-2">
              <div className="flex items-center gap-2">
                <div className="text-[#0a4a83] w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 stroke-[2]" />
                </div>
                <h4 className="text-lg font-black text-zinc-950 uppercase tracking-wider font-sans">
                  Continuous Support
                </h4>
              </div>
              <ul className="flex flex-col gap-2.5 pl-4 text-xs font-bold text-zinc-650">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-1.5 shrink-0" />
                  <span>Ongoing direct guidance for all your financial decisions throughout the active year.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-1.5 shrink-0" />
                  <span>Unbiased decision support on any sudden home, gold, or tax choices.</span>
                </li>
              </ul>
              <p className="text-[13px] text-zinc-500 font-semibold leading-relaxed">
                Financial planning is a living relationship, not a static one-time report. Our ongoing advisory model ensures you have a trusted SEBI-registered professional ready to assist with any financial decision or question that arises.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Stock Advisory Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24 text-center">
        <div className="flex flex-col items-center mb-16">
          <h3 className="text-2xl md:text-3xl font-black text-[#0a4a83] uppercase tracking-wide mt-2">
            Stock Advisory Service
          </h3>
          <p className="text-xs md:text-sm text-zinc-500 font-bold uppercase tracking-wider mt-3 max-w-xl mx-auto">
            Our Stock Advisory Service is designed for clients who wish to allocate a portion of their investments to equities for long-term growth. We focus purely on fundamentally strong businesses.
          </p>
        </div>

        {/* Stock Advisory Alternating Rows */}
        <div className="flex flex-col gap-12 text-left">
          {/* Row 1: Fundamentally Strong Stocks */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start bg-white border border-zinc-200 rounded-2xl p-8 md:p-12 shadow-sm">
            {/* Left Photo */}
            <div className="lg:col-span-5 flex justify-center lg:order-1">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow border border-zinc-150 shrink-0">
                <Image
                  src="/goal_planning.png"
                  alt="Fundamentally Strong Stocks"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
            {/* Right Text */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left lg:order-2">
              <div className="flex items-center gap-2">
                <div className="text-[#0a4a83] w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <Calculator className="w-5 h-5 stroke-[2]" />
                </div>
                <h4 className="text-lg font-black text-zinc-950 uppercase tracking-wider font-sans">
                  Fundamentally Strong Stocks
                </h4>
              </div>
              <ul className="flex flex-col gap-2.5 pl-4 text-xs font-bold text-zinc-650">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-1.5 shrink-0" />
                  <span>Advising fundamentally strong, long-term stocks purely based on company research and financial analysis.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-1.5 shrink-0" />
                  <span>Comprehensive analysis of balance sheets, business models, and industry tailwinds.</span>
                </li>
              </ul>
              <p className="text-[13px] text-zinc-500 font-semibold leading-relaxed">
                We identify high-quality businesses with sustainable competitive advantages (moats), solid management structures, and high growth potential. We aim for wealth creation by buying fundamentally strong companies at reasonable valuations.
              </p>
            </div>
          </div>

          {/* Row 2: Research-Backed & Fiduciary */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start bg-white border border-zinc-200 rounded-2xl p-8 md:p-12 shadow-sm">
            {/* Right Photo */}
            <div className="lg:col-span-5 flex justify-center lg:order-2">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow border border-zinc-150 shrink-0">
                <Image
                  src="/emergency_planning.png"
                  alt="Research-Backed & Fiduciary"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
            {/* Left Text */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left lg:order-1">
              <div className="flex items-center gap-2">
                <div className="text-[#0a4a83] w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <Compass className="w-5 h-5 stroke-[2]" />
                </div>
                <h4 className="text-lg font-black text-zinc-950 uppercase tracking-wider font-sans">
                  Research-Backed & Fiduciary
                </h4>
              </div>
              <ul className="flex flex-col gap-2.5 pl-4 text-xs font-bold text-zinc-650">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-1.5 shrink-0" />
                  <span>No conflict of interest, 100% unbiased advisory, and zero commissions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-1.5 shrink-0" />
                  <span>Strictly no speculative tips, day trading calls, or options trading recommendations.</span>
                </li>
              </ul>
              <p className="text-[13px] text-zinc-500 font-semibold leading-relaxed">
                As flat-fee fiduciary advisors, we do not earn commissions, kickbacks, or distribution fees from your stock purchases. Our picks are backed exclusively by empirical equity research, ensuring zero conflict of interest.
              </p>
            </div>
          </div>

          {/* Row 3: Regular Tracking & Reviews */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start bg-white border border-zinc-200 rounded-2xl p-8 md:p-12 shadow-sm">
            {/* Left Photo */}
            <div className="lg:col-span-5 flex justify-center lg:order-1">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow border border-zinc-150 shrink-0">
                <Image
                  src="/retirement_planning.png"
                  alt="Regular Tracking & Reviews"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
            {/* Right Text */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left lg:order-2">
              <div className="flex items-center gap-2">
                <div className="text-[#0a4a83] w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5 stroke-[2]" />
                </div>
                <h4 className="text-lg font-black text-zinc-950 uppercase tracking-wider font-sans">
                  Regular Tracking & Reviews
                </h4>
              </div>
              <ul className="flex flex-col gap-2.5 pl-4 text-xs font-bold text-zinc-650">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-1.5 shrink-0" />
                  <span>Timely updates and active tracking of recommended equity shares.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-1.5 shrink-0" />
                  <span>Ongoing portfolio checks aligned perfectly with your comfortable risk tolerance level.</span>
                </li>
              </ul>
              <p className="text-[13px] text-zinc-500 font-semibold leading-relaxed">
                Equity markets are dynamic. We provide continuous tracking and timely review alerts on all stock advisory picks, advising you when to hold, buy more, or book profits to preserve capital and grow your net worth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Who Is This For Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
        <div className="flex flex-col items-center mb-10">
          <h3 className="text-2xl md:text-3xl font-black text-zinc-950 tracking-tight leading-tight uppercase font-sans flex items-center gap-2">
            WHO IS THIS FOR?
          </h3>
          <div className="w-full h-[1.5px] bg-[#0a4a83]/30 max-w-4xl mt-6 mb-8" />
          <ul className="flex flex-col gap-3 text-zinc-700 font-bold text-xs md:text-sm max-w-3xl px-4 text-center">
            <li className="leading-relaxed">• Individuals or families of any age or income level.</li>
            <li className="leading-relaxed">• Anyone seeking a structured, unbiased financial roadmap for achieving life goals with confidence.</li>
          </ul>
        </div>

        {/* Side-by-Side Dual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full text-left mt-12">
          {/* Card 1: Retirement Planning */}
          <div className="bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-6">
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-sm border border-zinc-100">
              <Image
                src="/retirement_planning.png"
                alt="Retirement Planning"
                fill
                className="object-cover object-center"
              />
            </div>
            <h4 className="text-2xl md:text-3xl font-extrabold text-[#0a4a83] text-center font-sans tracking-wide">
              Retirement Planning
            </h4>
            <ul className="flex flex-col gap-2.5 pl-4 text-xs font-bold text-zinc-700">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-1.5 shrink-0" />
                <span>Estimate retirement needs & expenses.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-1.5 shrink-0" />
                <span>Create a diversified investment plan.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-1.5 shrink-0" />
                <span>Plan for inflation and healthcare costs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-1.5 shrink-0" />
                <span>Ensure regular income after retirement.</span>
              </li>
            </ul>
            <p className="text-[13px] text-zinc-500 font-semibold leading-relaxed border-t border-zinc-100 pt-4">
              Retirement is not just about stopping work – it’s about living life on your terms without financial stress. A well-structured retirement plan ensures that you can maintain your desired lifestyle, meet healthcare needs, and enjoy financial independence even when you are no longer working.
            </p>
            <ul className="flex flex-col gap-2.5 pl-4 text-xs font-bold text-zinc-650 border-t border-zinc-100 pt-4 mt-auto">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-1.5 shrink-0" />
                <span>Personalised Retirement Strategy – Build a roadmap for a stress-free retirement.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-1.5 shrink-0" />
                <span>Investment Planning & Asset Allocation – Diversified strategies for long-term growth.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-1.5 shrink-0" />
                <span>Ongoing Monitoring & Adjustments – Regular reviews to stay aligned with your goals.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Goal-Based Planning */}
          <div className="bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-6">
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-sm border border-zinc-100">
              <Image
                src="/goal_planning.png"
                alt="Goal-Based Planning"
                fill
                className="object-cover object-center"
              />
            </div>
            <h4 className="text-2xl md:text-3xl font-extrabold text-[#0a4a83] text-center font-sans tracking-wide">
              Goal-Based Planning
            </h4>
            <ul className="flex flex-col gap-2.5 pl-4 text-xs font-bold text-zinc-700">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-1.5 shrink-0" />
                <span>Set & prioritize goals.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-1.5 shrink-0" />
                <span>Estimate cost & timeline.</span>
              </li>
            </ul>
            <p className="text-[13px] text-zinc-500 font-semibold leading-relaxed border-t border-zinc-100 pt-4">
              Life is full of important milestones – buying a home, funding your child’s education, planning a dream vacation, or preparing for retirement. Each goal requires the right strategy at the right time.
            </p>
            <ul className="flex flex-col gap-2.5 pl-4 text-xs font-bold text-zinc-650 border-t border-zinc-100 pt-4 mt-auto">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-1.5 shrink-0" />
                <span>Financial Goal Setting – Define clear, actionable life goals (education, home, marriage, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-1.5 shrink-0" />
                <span>Tailored Investment Strategy – Plans based on your risk profile and time horizon.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-1.5 shrink-0" />
                <span>Regular Reviews – Adjust strategies as your life or goals change.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
