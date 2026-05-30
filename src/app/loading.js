import React from "react";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[70vh] bg-zinc-50 flex items-center justify-center p-6 font-sans">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-10 h-10 text-[#0a4a83] animate-spin" />
        <span className="text-[10px] font-black uppercase tracking-widest text-[#0a4a83] animate-pulse">
          Loading advisors system...
        </span>
      </div>
    </div>
  );
}
