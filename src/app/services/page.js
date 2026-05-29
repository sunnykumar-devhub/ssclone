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
      img: "/retirement_couple.png",
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
      img: "/goal_based.png",
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
      img: "/insurance.png",
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
      img: "/emergency.png",
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
      img: "/tax_planning.png",
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
      img: "/risk_profiling.png",
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
                <div className="w-full h-1.5 bg-zinc-100 rounded-full mt-auto relative overflow-hidden shrink-0">
                  <div className="absolute top-0 left-0 h-full w-[70%] bg-[#0a4a83] rounded-full" />
                </div>
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
          <span className="text-[#0a4a83] text-xl">♦</span>
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
                className={`lg:col-span-5 flex justify-center ${
                  svc.alignLeft ? "lg:order-1" : "lg:order-2"
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
                className={`lg:col-span-7 flex flex-col gap-6 text-left ${
                  svc.alignLeft ? "lg:order-2" : "lg:order-1"
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
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-zinc-200/60 text-center flex flex-col items-center mb-16 bg-white rounded-2xl shadow-sm border border-zinc-200">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-[#0a4a83] text-xl">♦</span>
          <h3 className="text-2xl md:text-3xl font-black text-[#0a4a83] uppercase tracking-wide">
            Wealth Management Service
          </h3>
        </div>
        <div className="max-w-4xl flex flex-col items-center justify-center gap-6 text-sm text-zinc-650 leading-relaxed font-bold">
          <p className="text-zinc-600 text-center px-4">
            This ongoing wealth management service is for clients who have already completed their financial planning with us and want continuous professional guidance. We help ensure that their investments remain aligned with changing goals, market conditions, and life situations, providing regular reviews, timely rebalancing, and strategic advice to keep their wealth on track for long-term growth and security.
          </p>
          <ul className="flex flex-col items-center gap-3 text-zinc-700 font-bold text-xs md:text-sm">
            <li className="flex items-center justify-center gap-2 text-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] shrink-0" />
              <span>• Regular Portfolio Reviews – Unbiased checks to keep investments aligned.</span>
            </li>
            <li className="flex items-center justify-center gap-2 text-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] shrink-0" />
              <span>• Strategic Modifications – Adjustments as markets and personal situations change.</span>
            </li>
            <li className="flex items-center justify-center gap-2 text-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] shrink-0" />
              <span>• Continuous Support – Guidance for all financial decisions throughout the year.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 5. Stock Advisory Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 text-center flex flex-col items-center mb-16 bg-white rounded-2xl shadow-sm border border-zinc-200">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-[#0a4a83] text-xl">♦</span>
          <h3 className="text-2xl md:text-3xl font-black text-[#0a4a83] uppercase tracking-wide">
            Stock Advisory Service
          </h3>
        </div>
        <div className="max-w-4xl flex flex-col items-center justify-center gap-6 text-sm text-zinc-650 leading-relaxed font-bold">
          <ul className="flex flex-col items-center gap-3 text-zinc-700 font-bold text-xs md:text-sm mb-4">
            <li className="flex items-center justify-center gap-2 text-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] shrink-0" />
              <span>• Advise fundamentally strong, long-term stocks.</span>
            </li>
            <li className="flex items-center justify-center gap-2 text-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] shrink-0" />
              <span>• No trading or speculative calls – only research-based picks.</span>
            </li>
            <li className="flex items-center justify-center gap-2 text-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] shrink-0" />
              <span>• Portfolio suggestions aligned with your risk profile.</span>
            </li>
          </ul>
          
          <p className="text-zinc-600 text-center px-4 border-t border-zinc-100 pt-6">
            Our Stock Advisory Service is offered only to clients who have already completed their financial planning with us and wish to allocate a portion of their investments to equities. We focus on long-term wealth creation through fundamentally strong companies and do not provide trading calls, intraday tips, or technical analysis-based recommendations.
          </p>

          <ul className="flex flex-col items-center gap-3 text-zinc-700 font-bold text-xs md:text-sm mt-4">
            <li className="flex items-center justify-center gap-2 text-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] shrink-0" />
              <span>• Long-Term, Research-Backed Picks – Advisory based purely on fundamental analysis of strong businesses with sustainable growth potential.</span>
            </li>
            <li className="flex items-center justify-center gap-2 text-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] shrink-0" />
              <span>• No Conflict of Interest – We don't earn commissions – 100% unbiased.</span>
            </li>
            <li className="flex items-center justify-center gap-2 text-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] shrink-0" />
              <span>• Regular Updates & Reviews – Timely tracking and portfolio suggestions.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 6. Who Is This For Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 text-center flex flex-col items-center bg-white rounded-2xl shadow-sm border border-zinc-200">
        <div className="flex flex-col items-center gap-4 mb-6">
          <div className="text-[#0a4a83] w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5 stroke-[2]" />
          </div>
          <h3 className="text-2xl font-black text-zinc-950 uppercase tracking-wider font-sans">
            WHO IS THIS FOR?
          </h3>
        </div>
        <div className="w-full h-[1.5px] bg-[#0a4a83]/30 max-w-4xl mb-8" />
        <ul className="flex flex-col items-center gap-3 text-zinc-700 font-bold text-xs md:text-sm max-w-2xl px-4">
          <li className="flex items-center justify-center gap-2 text-center">
            <span>• Individuals or families of any age or income level.</span>
          </li>
          <li className="flex items-center justify-center gap-2 text-center">
            <span>• Anyone seeking a structured, unbiased financial roadmap for achieving life goals with confidence.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
