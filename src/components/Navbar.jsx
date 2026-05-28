"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "FAQs", href: "/contact#faqs" },
    { name: "SEBI Disclosures", href: "/disclosures" },
    { name: "Contact Me", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-zinc-200/80 py-4 shadow-sm"
          : "bg-white border-b border-zinc-100 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo - Styled strictly matching user uploaded image */}
        <Link href="/" className="flex flex-col select-none group shrink-0">
          <span className="font-sans font-extrabold tracking-wide text-2xl text-[#0a4a83] leading-none">
            SUJAN SINGH
          </span>
          <span className="font-sans font-bold tracking-[0.08em] text-[8.5px] text-[#0a4a83] uppercase mt-1">
            SEBI Reg NO - INA000020864
          </span>
        </Link>

        {/* Desktop Menu - Styled strictly matching user uploaded image */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href.includes("#") && pathname === "/contact" && typeof window !== "undefined" && window.location.hash === "#faqs");
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[15px] font-semibold tracking-wide transition-colors ${
                  isActive ? "text-[#0a4a83]" : "text-zinc-800 hover:text-[#0a4a83]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="flex items-center gap-1.5 bg-[#0a4a83] hover:bg-[#07355e] text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow transition-all"
          >
            Get Consultation
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-600 hover:text-[#0a4a83] transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-zinc-200 px-8 py-6 flex flex-col gap-5 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-base font-bold ${
                pathname === link.href ? "text-[#0a4a83]" : "text-zinc-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#0a4a83] text-white py-3 rounded-lg text-sm font-bold uppercase tracking-wider"
          >
            Get Consultation
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      )}
    </nav>
  );
}
