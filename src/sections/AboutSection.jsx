import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading Label */}
        <div className="flex flex-col items-center mb-16">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#0a4a83]">
            About Me
          </span>
          <div className="w-16 h-[3px] bg-[#0a4a83] mt-3.5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Smiling blazer image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-zinc-100">
              <Image
                src="/sujan_about.jpg"
                alt="Sujan Singh smile checkered blazer"
                fill
                className="object-cover object-top hover:scale-[1.03] transition-transform duration-550"
              />
            </div>
          </div>

          {/* Right Column - Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <h2 className="text-3xl md:text-[34px] font-black tracking-tight text-[#0a4a83] leading-tight font-sans">
              Sujan Singh: Your Trusted Investment <br /> Advisor
            </h2>

            <div className="flex flex-col gap-4 text-sm text-zinc-600 leading-relaxed font-semibold">
              <p>
                I am a SEBI-Registered Investment Adviser (RIA) with a Post Graduate Program in Investment Advisory from NISM (SEBI) and over seven years of experience in financial education, planning, and advisory.
              </p>
              <p>
                During these years, I have conducted and led large-scale financial literacy programs across India, reaching thousands of individuals, professionals, and families.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-block bg-[#0a4a83] hover:bg-[#07355e] text-white text-xs font-black tracking-wider uppercase px-8 py-3.5 rounded-md transition-all shadow-sm active:scale-[0.98]"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
