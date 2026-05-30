import React from "react";
import Image from "next/image";
import WhyChooseMe from "@/sections/whychooseme";
import LetsGetStarted from "@/sections/letsgetstarted";
import { ShieldCheck, CheckCircle2, BookOpen, HeartHandshake, Landmark } from "lucide-react";
import { credentials, RIAPromises } from "@/constants/data";
import PageContainer from "@/components/layout/pagecontainer";
import SectionContainer from "@/components/layout/sectioncontainer";
import GridContainer from "@/components/layout/gridcontainer";
import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";

export default function AboutContainer() {
  return (
    <PageContainer>
      {/* 1. Profile Hero Section */}
      <SectionContainer className="mb-20 pt-8" headerClass="mb-0">
        <GridContainer cols={12} gap={16} className="items-center">
          {/* Left Column - Large Premium Portrait with Offset Backing */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="absolute -top-6 -left-6 w-80 h-80 rounded-full bg-blue-50/70 blur-2xl -z-10 pointer-events-none" />
            <div className="absolute -bottom-8 -right-8 w-72 h-72 rounded-full bg-blue-100/50 blur-3xl -z-10 pointer-events-none" />
            
            {/* Offset accent border */}
            <div className="absolute inset-0 max-w-[380px] aspect-[3/4] rounded-3xl border-2 border-[#0a4a83]/15 translate-x-4 translate-y-4 -z-10 hidden sm:block" />

            {/* Main Portrait */}
            <div className="relative w-full max-w-[380px] aspect-[3/4] overflow-hidden rounded-3xl border-4 border-white shadow-xl bg-zinc-50 group">
              <Image
                src="/sujan_about.jpg"
                alt="Sujan Singh checkered blazer sitting portrait"
                fill
                priority
                className="object-cover object-top hover:scale-[1.03] transition-transform duration-500"
              />
              
              {/* Gold Verification Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-white/50 rounded-2xl p-3.5 shadow-md flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#0a4a83] flex items-center justify-center text-white shrink-0">
                  <ShieldCheck className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black text-zinc-400 uppercase tracking-wider leading-none">Registered Fiduciary</p>
                  <p className="text-[11px] font-black text-[#0a4a83] leading-tight">SEBI Reg No. INA000018593</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Title & Executive Summary */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <Badge>Professional Profile</Badge>
            <h1 className="text-3xl md:text-[42px] font-black text-zinc-950 tracking-tight leading-[1.12] uppercase font-sans">
              SUJAN SINGH: YOUR TRUSTED INVESTMENT ADVISER
            </h1>
            <div className="w-20 h-[3px] bg-[#0a4a83]" />
            
            <div className="flex flex-col gap-5 text-sm md:text-[15px] leading-relaxed text-zinc-650 font-medium">
              <p>
                I am a <strong className="text-zinc-950 font-black">SEBI-Registered Investment Adviser (RIA)</strong> with a Post Graduate Program in Investment Advisory from NISM (SEBI) and over seven years of experience in financial education, planning, and advisory. My journey in finance began in <strong className="text-zinc-950 font-black">2016</strong>, dedicated to spreading financial awareness and helping people make informed decisions about their money.
              </p>
              <p>
                I have conducted and led large-scale financial literacy programs across India, reaching thousands of individuals, professionals, and families. My initiatives have been associated with organisations such as the <strong className="text-zinc-950 font-black">Indian Army, Indian Air Force, ONGC, Press Information Bureau (PIB)</strong>, and numerous universities and institutions. These programs aimed to simplify finance for everyday people, giving them confidence to take control of their financial future.
              </p>
            </div>

            {/* Quick Credentials Info Box */}
            <div className="grid grid-cols-2 gap-4 border-t border-zinc-200/80 pt-6 mt-2">
              {credentials.map((cred, idx) => (
                <div key={idx} className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-black uppercase text-zinc-400 tracking-wider">{cred.label}</span>
                  <span className="text-xs font-bold text-zinc-800">{cred.val}</span>
                </div>
              ))}
            </div>
          </div>
        </GridContainer>
      </SectionContainer>

      {/* 2. Three Columns Core Pillars Grid */}
      <SectionContainer className="mb-24">
        <GridContainer cols={3} gap={8}>
          <Card
            icon={BookOpen}
            title="Operational Excellence & Strategy"
            desc="Apart from financial education, I have been involved in building client-focused strategies, operational excellence, and digital outreach initiatives that help people access reliable financial guidance. My experience in operations, management, and client engagement has given me a deep understanding of the challenges individuals face in personal finance and wealth management."
          />
          <Card
            icon={HeartHandshake}
            title="Fee-Only Fiduciary Promise"
            desc="Today, as a fee-only fiduciary adviser, I provide transparent, unbiased, and personalised financial planning services. I do not earn commissions or incentives – my only source of income is the fee paid by clients, ensuring 100% unbiased advice. I act as a trusted partner, putting your interests first."
          />
          <Card
            icon={Landmark}
            title="National Financial Literacy"
            desc="I'm proud to have conducted programs associated with national defense and governmental bodies, focusing on raising clarity and taking speculative hype out of investments. These programs simplified finance for everyday people, giving them confidence to take control of their financial future."
          />
        </GridContainer>
      </SectionContainer>

      {/* 3. Quote / Philosophy Banner (Full Width Dark Navy) */}
      <div className="bg-zinc-900 text-white py-16 px-6 md:px-12 relative overflow-hidden mb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,74,131,0.25)_0%,transparent_75%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6 relative z-10">
          <span className="text-5xl text-[#0a4a83]/50 font-serif leading-none">“</span>
          <p className="text-base md:text-xl font-extrabold italic leading-relaxed text-zinc-100">
            I believe good financial planning is not just about numbers, but about building confidence, security, and a sense of control over your future.
          </p>
          <div className="w-12 h-0.5 bg-[#0a4a83]" />
          <p className="text-[10px] font-black uppercase tracking-wider text-zinc-400">
            My Mission — Empower people to achieve financial freedom and peace of mind.
          </p>
        </div>
      </div>

      {/* 4. Trusted Partner & Helping Clients (Custom Grid points) */}
      <SectionContainer
        badge="How I Serve You"
        title="Acting as Your Trusted Fiduciary Partner"
        subtitle="I work closely with each client to build a structured financial blueprint designed for clarity and confidence."
        center
        className="mb-24"
      >
        <GridContainer cols={2} gap={8}>
          {RIAPromises.map((promise, idx) => (
            <div
              key={idx}
              className="bg-white border border-zinc-200/80 rounded-2xl p-6 shadow-sm flex gap-4 hover:border-[#0a4a83]/20 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100/60 text-[#0a4a83] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div className="flex flex-col gap-1.5 text-left">
                <h4 className="text-sm font-black text-zinc-950 leading-snug">
                  {promise.title}
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed font-semibold">
                  {promise.desc}
                </p>
              </div>
            </div>
          ))}
        </GridContainer>
      </SectionContainer>

      {/* 5. Why Choose Me Section */}
      <WhyChooseMe />

      {/* 6. Let's Get Started CTA Section */}
      <LetsGetStarted />
    </PageContainer>
  );
}
