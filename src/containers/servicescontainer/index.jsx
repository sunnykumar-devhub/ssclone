import React from "react";
import Image from "next/image";
import { Shield, Scale, Heart, Calculator, Compass, Target } from "lucide-react";
import { umbrellaServices, planningServicesDetails } from "@/constants/data";
import PageContainer from "@/components/layout/pagecontainer";
import SectionContainer from "@/components/layout/sectioncontainer";
import GridContainer from "@/components/layout/gridcontainer";
import Card from "@/components/ui/card";

export default function ServicesContainer() {
  return (
    <PageContainer>
      {/* 1. Umbrella of Services Section */}
      <SectionContainer
        badge="My Umbrella of Services"
        subtitle="I offer a wide range of specialized services to help you achieve your financial goals and secure your financial future."
        center
        className="mb-24"
      >
        <GridContainer cols={4} gap={8}>
          {umbrellaServices.map((svc, idx) => (
            <Card
              key={idx}
              variant="service"
              icon={svc.icon}
              title={svc.title}
            />
          ))}
        </GridContainer>
      </SectionContainer>

      {/* 2. Importance of Ethics Section */}
      <SectionContainer className="mb-24">
        <div className="bg-white border border-zinc-200 rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Left Text */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <h2 className="text-2xl md:text-3xl font-black text-zinc-950 tracking-tight leading-tight uppercase font-sans">
              THE IMPORTANCE OF ETHICS IN <br /> INVESTMENT ADVISORY
            </h2>
            <div className="w-20 h-[3px] bg-[#0a4a83]" />

            <div className="flex flex-col gap-5 text-xs md:text-sm text-zinc-650 font-semibold leading-relaxed">
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
      </SectionContainer>

      {/* 3. Personalized Financial Planning Header & Cards */}
      <SectionContainer
        title="Personalized Financial Planning"
        subtitle="We provide a complete, personalised, and unbiased approach to help you achieve financial freedom."
        center
        className="mb-24"
        headerClass="mb-16"
      >
        <div className="flex flex-col gap-12">
          {planningServicesDetails.map((svc) => (
            <Card
              key={svc.id}
              variant="planning"
              icon={svc.icon}
              title={svc.title}
              img={svc.img}
              alignLeft={svc.alignLeft}
              bullets1={svc.bullets1}
              desc={svc.para}
              bullets2={svc.bullets2}
            />
          ))}
        </div>
      </SectionContainer>

      {/* 4. Wealth Management Section */}
      <SectionContainer
        title="Wealth Management Service"
        subtitle="This ongoing wealth management service is for clients who have already completed their financial planning with us and want continuous professional guidance."
        center
        className="mb-24"
      >
        <div className="flex flex-col gap-12 text-left">
          <Card
            variant="planning"
            icon={Shield}
            title="Regular Portfolio Reviews"
            img="/portfolio_reviews_unique.png"
            alignLeft={true}
            bullets1={[
              "Unbiased checks and reviews to keep investments aligned with your goals.",
              "Comprehensive review of your financial plan every six months.",
              "Asset allocation health checks to prevent drift from your comfortable risk level.",
              "Detailed benchmark comparisons to track relative returns and historical outperformance.",
            ]}
            desc="As part of our commitment to your financial clarity, we run regular health checks on your asset allocation. This helps prevent drift from your comfortable risk level and keeps your portfolio highly disciplined. Continuous review allows us to adapt your plan dynamically to life shifts, ensuring your capital is always positioned optimally."
          />

          <Card
            variant="planning"
            icon={Scale}
            title="Strategic Modifications"
            img="/strategic_modifications_unique.png"
            alignLeft={false}
            bullets1={[
              "Timely portfolio modifications and rebalancing as markets and personal situations change.",
              "Tactical shifts aligned perfectly with tax optimization strategies.",
              "Realigning dynamic equity and debt weightings during significant macroeconomic market cycles.",
              "Capital gains harvest advisory to reduce overall tax liability at year-end.",
            ]}
            desc="When financial environments shift or your personal career goals evolve, your portfolio needs to react. We advise on timely rebalancing and strategic adjustments to lock in progress and capture new growth opportunities. By proactively modifying key allocations, we safeguard your wealth from volatility while remaining focused on tax efficiency."
          />

          <Card
            variant="planning"
            icon={Heart}
            title="Continuous Support"
            img="/continuous_support_unique.png"
            alignLeft={true}
            bullets1={[
              "Ongoing direct guidance for all your financial decisions throughout the active year.",
              "Unbiased decision support on any sudden home, gold, or tax choices.",
              "Direct hotline messaging interface for quick turnaround on your financial queries.",
              "Independent second opinion evaluations on any corporate benefits or private offers.",
            ]}
            desc="Financial planning is a living relationship, not a static one-time report. Our ongoing advisory model ensures you have a trusted SEBI-registered professional ready to assist with any financial decision or question that arises. From large property acquisitions to minor investment queries, we act as your analytical sound board to prevent costly errors."
          />
        </div>
      </SectionContainer>

      {/* 5. Stock Advisory Section */}
      <SectionContainer
        title="Stock Advisory Service"
        subtitle="Our Stock Advisory Service is designed for clients who wish to allocate a portion of their investments to equities for long-term growth. We focus purely on fundamentally strong businesses."
        center
        className="mb-24"
      >
        <div className="flex flex-col gap-12 text-left">
          <Card
            variant="planning"
            icon={Calculator}
            title="Fundamentally Strong Stocks"
            img="/strong_stocks_unique.png"
            alignLeft={true}
            bullets1={[
              "Advising fundamentally strong, long-term stocks purely based on company research and financial analysis.",
              "Comprehensive analysis of balance sheets, business models, and industry tailwinds.",
              "In-depth valuation modeling to purchase premium market leaders at a solid margin of safety.",
              "Constant tracking of dynamic earnings reports, business KPIs, and management commentaries.",
            ]}
            desc="We identify high-quality businesses with sustainable competitive advantages (moats), solid management structures, and high growth potential. We aim for wealth creation by buying fundamentally strong companies at reasonable valuations. Our research cuts through the market noise, looking strictly at true unit economics and long-term earnings durability."
          />

          <Card
            variant="planning"
            icon={Compass}
            title="Research-Backed & Fiduciary"
            img="/research_backed_unique.png"
            alignLeft={false}
            bullets1={[
              "No conflict of interest, 100% unbiased advisory, and zero commissions.",
              "Strictly no speculative tips, day trading calls, or options trading recommendations.",
              "Transparent flat-fee model ensuring completely aligned interest with clients' wealth growth.",
              "Fiduciary code of conduct prioritizing capital preservation and long-term security."
            ]}
            desc="As flat-fee fiduciary advisers, we do not earn commissions, kickbacks, or distribution fees from your stock purchases. Our picks are backed exclusively by empirical equity research, ensuring zero conflict of interest. We offer transparent and clear recommendations that put your financial well-being first and foremost."
          />

          <Card
            variant="planning"
            icon={Target}
            title="Regular Tracking & Reviews"
            img="/regular_tracking_unique.png"
            alignLeft={true}
            bullets1={[
              "Timely updates and active tracking of recommended equity shares.",
              "Ongoing portfolio checks aligned perfectly with your comfortable risk tolerance level.",
              "Strategic entry, buy-ranges, and systematic profit-booking alerts sent directly to you.",
              "Quarterly report card summaries outlining operational performance changes in your holdings."
            ]}
            desc="Equity markets are dynamic. We provide continuous tracking and timely review alerts on all stock advisory picks, advising you when to hold, buy more, or book profits to preserve capital and grow your net worth. This continuous support ensures you never miss a corporate action or critical turning point in your holdings."
          />
        </div>
      </SectionContainer>

      {/* 6. Who Is This For Section */}
      <SectionContainer
        title="WHO IS THIS FOR?"
        center
        className="mb-16"
      >
        <div className="w-full h-[1.5px] bg-[#0a4a83]/30 max-w-4xl mt-6 mb-8 mx-auto" />
        <ul className="flex flex-col gap-3 text-zinc-700 font-bold text-xs md:text-sm max-w-3xl px-4 text-center mx-auto mb-12">
          <li className="leading-relaxed">• Individuals or families of any age or income level.</li>
          <li className="leading-relaxed">• Anyone seeking a structured, unbiased financial roadmap for achieving life goals with confidence.</li>
        </ul>

        {/* Side-by-Side Dual Cards Grid */}
        <GridContainer cols={2} gap={8} className="text-left">
          {/* Card 1: Retirement Planning */}
          <div className="bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-6">
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-sm border border-zinc-100 bg-zinc-50">
              <Image
                src="/retirement_planning_unique.png"
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
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-sm border border-zinc-100 bg-zinc-50">
              <Image
                src="/goal_planning_unique.png"
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
        </GridContainer>
      </SectionContainer>
    </PageContainer>
  );
}
