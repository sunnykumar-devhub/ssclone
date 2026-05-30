import React from "react";

export default function SectionContainer({
  children,
  className = "",
  badge = "",
  badgeIcon: BadgeIcon = null,
  title = "",
  subtitle = "",
  center = false,
  headerClass = "mb-16",
}) {
  return (
    <div className={`max-w-7xl mx-auto px-6 md:px-12 ${className}`}>
      {(badge || title || subtitle) && (
        <div className={`flex flex-col ${center ? "items-center text-center" : "text-left"} ${headerClass}`}>
          {badge && (
            <span className="text-xs font-bold uppercase tracking-widest text-[#0a4a83] px-3.5 py-1.5 rounded-full bg-blue-50/60 border border-blue-100/60 inline-flex items-center gap-1.5 mb-6">
              {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5" />}
              {badge}
            </span>
          )}
          {title && (
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-zinc-950 tracking-tight leading-tight uppercase font-sans">
              {title}
            </h2>
          )}
          {title && !center && <div className="w-20 h-[3px] bg-[#0a4a83] mt-5" />}
          {subtitle && (
            <p className="text-xs md:text-sm text-zinc-500 font-bold uppercase tracking-wider mt-3 max-w-xl">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
