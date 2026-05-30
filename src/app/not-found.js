import React from "react";
import Link from "next/link";
import { Compass, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-6 font-sans text-zinc-700">
      <div className="max-w-md w-full bg-white border border-zinc-200 rounded-2xl p-8 md:p-10 shadow-lg text-center flex flex-col items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0a4a83]">
          <Compass className="w-10 h-10 stroke-[2] animate-spin-slow" />
        </div>
        <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tight">
          Page Not Found
        </h2>
        <p className="text-xs text-zinc-500 font-semibold leading-relaxed">
          The page you are looking for does not exist or has been moved. You can return to the home page or contact us for assistance.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-[#0a4a83] hover:bg-[#07355e] text-white p-4 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all w-full mt-2"
        >
          Return Home
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
