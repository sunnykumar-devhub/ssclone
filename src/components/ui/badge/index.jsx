import React from "react";

export default function Badge({ children, className = "", icon: Icon = null }) {
  return (
    <span className={`text-[10px] font-black text-[#0a4a83] uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-blue-50/60 border border-blue-100/60 inline-flex items-center gap-1.5 ${className}`}>
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </span>
  );
}
