"use client";
import React, { useEffect } from "react";
import { ShieldAlert, RefreshCw } from "lucide-react";
import Button from "@/components/ui/button";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Application error captured:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-6 font-sans text-zinc-700">
      <div className="max-w-md w-full bg-white border border-zinc-200 rounded-2xl p-8 md:p-10 shadow-lg text-center flex flex-col items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-[#e11d48]">
          <ShieldAlert className="w-10 h-10 stroke-[2]" />
        </div>
        <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tight">
          Something went wrong
        </h2>
        <p className="text-xs text-zinc-500 font-semibold leading-relaxed">
          An unexpected error occurred while loading this page. Our team has been notified. Please try reloading or check back shortly.
        </p>
        <div className="flex gap-4 w-full mt-2">
          <Button
            variant="outline"
            size="full"
            onClick={() => window.location.reload()}
          >
            Reload Page
          </Button>
          <Button
            variant="primary"
            size="full"
            icon={RefreshCw}
            onClick={() => reset()}
          >
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
}
