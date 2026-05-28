import React from "react";
import Link from "next/link";

export default function LetsGetStarted() {
  return (
    <section className="relative py-24 bg-zinc-900 overflow-hidden text-center">
      {/* Dark background radial overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,74,131,0.18)_0%,transparent_75%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center gap-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-wider uppercase">
          LET’S GET STARTED
        </h2>

        {/* Narrative Paragraph */}
        <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-semibold max-w-3xl">
          If you're ready to take the next step toward securing your financial future, I would love to connect with you. Whether you're just starting out or looking to refine your investment strategy, I'm here to help guide you every step of the way. Together, we can create a personalized plan that aligns with your goals and sets you on the path to financial success.
        </p>

        {/* Call to action statement */}
        <h3 className="text-xs md:text-sm font-black text-white leading-relaxed max-w-2xl uppercase tracking-wider mt-4">
          REACH OUT TODAY TO SCHEDULE A CONSULTATION OR ASK ANY QUESTIONS. I LOOK FORWARD TO PARTNERING WITH YOU ON THIS JOURNEY.
        </h3>

        {/* Action Button */}
        <div className="pt-4">
          <Link
            href="/contact"
            className="inline-block bg-[#0a4a83] hover:bg-[#07355e] text-white text-xs font-black uppercase tracking-wider px-8 py-4 rounded-md transition-all shadow-sm active:scale-[0.98]"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
