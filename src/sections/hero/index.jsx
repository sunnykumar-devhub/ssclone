import React from "react";
import Link from "next/link";
import Image from "next/image";
import { config } from "@/config";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
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

        <div className="lg:col-span-5 relative flex justify-center items-center">
          <div className="absolute -top-6 -left-6 w-72 h-72 rounded-full bg-blue-50/70 blur-2xl -z-10 pointer-events-none" />
          <div className="absolute -bottom-8 -right-8 w-60 h-60 rounded-full bg-blue-100/50 blur-3xl -z-10 pointer-events-none" />
          
          <div className="absolute inset-0 max-w-[340px] aspect-[3/4] rounded-3xl border-2 border-[#0a4a83]/15 translate-x-4 translate-y-4 -z-10 hidden sm:block" />

          <div className="relative w-full max-w-[340px] aspect-[3/4] overflow-hidden rounded-3xl border-4 border-white shadow-xl bg-zinc-50 group">
            <Image
              src={`${config.cdnUrl}/sujan_about.jpg`}
              alt="Sujan Singh"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 340px"
              className="object-cover object-top hover:scale-[1.05] transition-transform duration-500"
            />
            
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md border border-white/50 rounded-2xl p-3 shadow-md flex items-center gap-3 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-350">
              <div className="w-8 h-8 rounded-lg bg-[#0a4a83] flex items-center justify-center text-white shrink-0">
                <svg className="w-4.5 h-4.5 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-wider leading-none">SEBI Registered Advisor</p>
                <p className="text-[11px] font-black text-[#0a4a83] leading-tight">Reg No. INA000018593</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
