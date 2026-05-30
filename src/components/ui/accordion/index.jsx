import React from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion({ title = "", children, isOpen = false, onToggle }) {
  return (
    <div className="bg-white border border-zinc-200/80 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:border-[#0a4a83]/25">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
      >
        <span className="font-extrabold text-zinc-900 text-xs md:text-sm tracking-wide leading-snug">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[#0a4a83] shrink-0 transition-transform duration-350 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[600px] border-t border-zinc-100" : "max-h-0"
        }`}
      >
        <div className="p-6 text-xs text-zinc-500 leading-relaxed font-semibold bg-zinc-50/40 whitespace-pre-line">
          {children}
        </div>
      </div>
    </div>
  );
}
