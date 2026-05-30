"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import ConsultationModal from "../consultationmodal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dropdownRef = useRef(null);
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

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "FAQs", href: "/faqs" },
    {
      name: "SEBI Disclosures",
      hasSubmenu: true,
      submenu: [
        { name: "SEBI Disclosures", href: "/disclosures" },
        { name: "Beware of Imposters", href: "/imposters" },
      ],
    },
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
        {/* Brand Logo */}
        <Link href="/" className="flex flex-col select-none group shrink-0">
          <span className="font-sans font-extrabold tracking-wide text-xl sm:text-2xl text-[#0a4a83] leading-none">
            SUJAN SINGH
          </span>
          <span className="font-sans font-bold tracking-[0.08em] text-[7px] sm:text-[8.5px] text-[#0a4a83] uppercase mt-1">
            SEBI Reg NO - INA000020864
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            if (link.hasSubmenu) {
              const isSubActive = link.submenu.some((sub) => pathname === sub.href);
              return (
                <div
                  key={link.name}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`flex items-center gap-1 text-[15px] font-semibold tracking-wide transition-colors cursor-pointer ${
                      isSubActive ? "text-[#0a4a83]" : "text-zinc-800 hover:text-[#0a4a83]"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-250 ${isDropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 pt-2.5 z-50 animate-fade-in">
                      <div className="rounded-xl bg-white border border-zinc-200 shadow-lg py-2 flex flex-col">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setIsDropdownOpen(false)}
                            className={`px-4 py-2.5 text-sm font-semibold tracking-wide text-left hover:bg-zinc-50 transition-colors ${
                              pathname === sub.href ? "text-[#0a4a83] bg-zinc-50/50" : "text-zinc-700 hover:text-[#0a4a83]"
                            }`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            const isActive = pathname === link.href;
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
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1.5 bg-[#0a4a83] hover:bg-[#07355e] text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow cursor-pointer transition-all active:scale-[0.98]"
          >
            Get Consultation
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
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
        <div className="md:hidden absolute top-full left-0 w-full bg-white/98 backdrop-blur-lg border-b border-zinc-200/80 px-8 py-7 flex flex-col gap-6 shadow-xl overflow-y-auto max-h-[85vh] animate-fade-in z-50">
          {navLinks.map((link) => {
            if (link.hasSubmenu) {
              return (
                <div key={link.name} className="flex flex-col gap-3 pb-2 border-b border-zinc-100/60">
                  <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest pl-1">
                    {link.name}
                  </span>
                  <div className="flex flex-col gap-3 pl-3 border-l-2 border-[#0a4a83]/20">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-sm font-extrabold tracking-wide ${
                          pathname === sub.href ? "text-[#0a4a83]" : "text-zinc-800 hover:text-[#0a4a83]"
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-extrabold tracking-wide pb-2 border-b border-zinc-100/60 ${
                  pathname === link.href ? "text-[#0a4a83]" : "text-zinc-800 hover:text-[#0a4a83]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <button
            onClick={() => {
              setIsModalOpen(true);
              setIsOpen(false);
            }}
            className="flex items-center justify-center gap-2 bg-[#0a4a83] hover:bg-[#07355e] text-white py-3.5 rounded-xl text-xs font-black uppercase tracking-wider shadow-md active:scale-[0.99] transition-all mt-2 cursor-pointer"
          >
            Get Consultation
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      )}

      {/* Consultation Modal dialog overlay */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
}
