import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white border-t border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading Label */}
        <div className="flex flex-col items-center mb-16">
          <span className="text-sm font-black uppercase tracking-[0.15em] text-zinc-800">
            About Me
          </span>
          <div className="w-full h-[1px] bg-zinc-200 mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Smiling blazer image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-zinc-100">
              <Image
                src="/sujan_about.png"
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
