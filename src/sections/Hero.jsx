import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left text column */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-black text-zinc-950 leading-[1.12] tracking-tight font-sans">
            Plan Your Financial Freedom <br />
            with India’s Trusted Fee- <br />
            Only Advisor
          </h1>

          <p className="text-[12px] font-extrabold tracking-wider text-[#0a4a83] uppercase mt-2">
            FLAT FEE | SEBI REGISTERED | 100% UNBIASED | NO COMMISSIONS EVER
          </p>

          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-block bg-[#0a4a83] hover:bg-[#07355e] text-white text-xs font-black tracking-wider uppercase px-6 py-4 rounded-md transition-all shadow-sm hover:shadow active:scale-[0.98]"
            >
              Book Your Free 30-Minute Consultation
            </Link>
          </div>
        </div>

        {/* Right graphic column */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          {/* Circular pinkish background shapes behind Sujan */}
          <div className="absolute top-[5%] left-[5%] w-[340px] h-[340px] rounded-full bg-[#fde8e8]/70 -z-10 pointer-events-none" />
          <div className="absolute bottom-[0%] right-[0%] w-[100px] h-[100px] rounded-full bg-[#fde8e8]/80 -z-10 pointer-events-none" />
          
          <div className="relative w-[340px] h-[340px] md:w-[380px] md:h-[380px] overflow-hidden rounded-full flex items-center justify-center border-4 border-white shadow-lg">
            <Image
              src="/sujan_hero.png"
              alt="Sujan Singh"
              fill
              priority
              className="object-cover object-top scale-[1.08] hover:scale-[1.12] transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
