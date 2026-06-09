import React from "react";
import Image from "next/image";
import Link from "next/link";
import sujanHero from "@/assets/sujan_hero.jpg";

export default function AboutSection() {
  return (
    <section className="pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-16">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#0a4a83]">
            About Me
          </span>
          <div className="w-16 h-[3px] bg-[#0a4a83] mt-3.5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-50/50 blur-xl -z-10" />
            
            <div className="relative w-[340px] h-[340px] md:w-[360px] md:h-[360px] rounded-full p-2 border-2 border-dashed border-[#0a4a83]/20 flex items-center justify-center">
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg bg-zinc-50">
                <Image
                  src={sujanHero}
                  alt="Sujan Singh portrait"
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover object-top scale-[1.05] hover:scale-[1.10] transition-transform duration-550"
                />
              </div>
            </div>
          </div>

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
