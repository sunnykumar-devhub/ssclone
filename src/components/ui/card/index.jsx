import React from "react";
import Image from "next/image";

export default function Card({
  variant = "feature",
  title = "",
  subtitle = "",
  desc = "",
  img = "",
  icon: Icon = null,
  bullets1 = [],
  bullets2 = [],
  alignLeft = true,
  count = 0,
  className = "",
  children,
}) {
  if (variant === "service") {
    return (
      <div className={`rounded-xl p-8 bg-white border border-zinc-200/80 shadow-sm flex flex-col items-center justify-between text-center gap-6 min-h-[220px] hover:shadow-md hover:border-[#0a4a83]/20 transition-all relative overflow-hidden group ${className}`}>
        {Icon && (
          <div className="w-[64px] h-[64px] rounded-full border border-zinc-200 flex items-center justify-center text-[#0a4a83] bg-zinc-50 group-hover:scale-105 transition-transform shrink-0">
            <Icon className="w-6 h-6 stroke-[1.8]" />
          </div>
        )}
        {title && (
          <h4 className="text-[11px] font-black text-[#0a4a83] uppercase tracking-wider leading-snug">
            {title}
          </h4>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-[#0a4a83] transition-colors duration-300" />
      </div>
    );
  }

  if (variant === "planning") {
    return (
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start bg-white border border-zinc-200 rounded-2xl p-8 md:p-12 shadow-sm ${className}`}>
        {/* Left Photo (if alignLeft is true) or (on mobile screen) */}
        <div className={`lg:col-span-5 flex justify-center ${alignLeft ? "lg:order-1" : "lg:order-2"}`}>
          {img && (
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow border border-zinc-150 shrink-0 bg-zinc-50">
              <Image
                src={img}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center"
              />
            </div>
          )}
        </div>

        {/* Right Text */}
        <div className={`lg:col-span-7 flex flex-col gap-6 text-left ${alignLeft ? "lg:order-2" : "lg:order-1"}`}>
          <div className="flex items-center gap-2">
            {Icon && (
              <div className="text-[#0a4a83] w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 stroke-[2]" />
              </div>
            )}
            {title && (
              <h4 className="text-lg font-black text-zinc-950 uppercase tracking-wider font-sans">
                {title}
              </h4>
            )}
          </div>

          {bullets1.length > 0 && (
            <ul className="flex flex-col gap-2.5 pl-4 text-xs font-bold text-zinc-600">
              {bullets1.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {desc && (
            <p className="text-[13px] text-zinc-500 font-semibold leading-relaxed">
              {desc}
            </p>
          )}

          {bullets2.length > 0 && (
            <ul className="flex flex-col gap-2.5 pl-4 text-xs font-bold text-zinc-650">
              {bullets2.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }

  if (variant === "stat") {
    return (
      <div className={`rounded-xl p-8 bg-white border border-zinc-200/80 shadow-sm flex flex-col items-center justify-center gap-4 hover:shadow-md transition-shadow min-h-[160px] ${className}`}>
        <span className="text-3xl font-extrabold text-[#0a4a83]">
          {count}
        </span>
        {desc && (
          <span className="text-[10.5px] text-zinc-500 font-bold tracking-wide leading-relaxed">
            {desc}
          </span>
        )}
      </div>
    );
  }

  // Default: feature card
  return (
    <div className={`bg-white border border-zinc-200/80 rounded-2xl p-8 shadow-sm flex flex-col gap-5 hover:shadow-md transition-shadow relative overflow-hidden group ${className}`}>
      <div className="absolute top-0 left-0 w-full h-1 bg-[#0a4a83]/20 group-hover:bg-[#0a4a83] transition-colors" />
      {Icon && (
        <div className="text-[#0a4a83] w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
          <Icon className="w-5.5 h-5.5 stroke-[2]" />
        </div>
      )}
      {title && (
        <h3 className="text-sm font-black text-zinc-950 uppercase tracking-wide">
          {title}
        </h3>
      )}
      {desc && (
        <p className="text-xs text-zinc-500 leading-relaxed font-semibold">
          {desc}
        </p>
      )}
      {children}
    </div>
  );
}
