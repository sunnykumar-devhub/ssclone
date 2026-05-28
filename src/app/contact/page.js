"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2, ChevronDown, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", org: "", message: "" });
    }, 4000);
  };

  const contactDetails = [
    {
      id: 1,
      icon: MapPin,
      label: "Secure Advisory Office",
      value: "Level 12, Cyber City, Gurugram, HR 122002",
      href: "#",
    },
    {
      id: 2,
      icon: Phone,
      label: "Direct Dial",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      id: 3,
      icon: Mail,
      label: "Official Regulatory Intake",
      value: "info@sujanadvisory.com",
      href: "mailto:info@sujanadvisory.com",
    },
  ];

  const faqs = [
    {
      q: "What is your SEBI registration number?",
      a: "Sujan Singh is registered as an Individual Investment Adviser with the Securities and Exchange Board of India (SEBI) under Registration No. INA000020864.",
    },
    {
      q: "How are your advisory fees structured?",
      a: "In compliance with SEBI Investment Advisers Regulations, all fee models are transparent, structured under direct fee frameworks, and fully documented under NDAs prior to implementation.",
    },
    {
      q: "Do you advise on offshore investments or ODI?",
      a: "Yes. We advise multi-family offices and HNI clients on statutory compliance for Overseas Direct Investments (ODI), foreign assets tracking, and global regulatory compliance.",
    },
    {
      q: "Are assessments and portfolios audited for safety?",
      a: "Absolutely. We strictly enforce direct fiduciary data protection, maintaining full professional indemnity insurance and regular compliance reporting under SEBI rules.",
    },
  ];

  return (
    <div className="bg-zinc-50 min-h-screen pt-36 pb-24 font-sans text-zinc-700">
      {/* Title Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 relative">
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <span className="text-xs font-bold uppercase tracking-widest text-[#0a4a83]">Consultation Intake</span>
        <h1 className="text-4xl md:text-6xl font-black text-zinc-950 tracking-tight leading-[1.1] mt-4 max-w-2xl">
          Initiate Compliant Wealth Structuring
        </h1>
        <p className="text-sm md:text-base text-zinc-500 max-w-xl leading-relaxed mt-6 font-medium">
          Connect directly with a certified Individual Investment Adviser to safeguard and structure your organizational assets.
        </p>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Info Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {contactDetails.map((det) => {
            const Icon = det.icon;
            return (
              <a
                key={det.id}
                href={det.href}
                className="glass-card rounded-2xl p-6 flex gap-5 border border-zinc-200/80 bg-white items-start hover:border-[#0a4a83]/20 transition-all duration-300 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0a4a83] shrink-0">
                  <Icon className="w-4.5 h-4.5 stroke-[2]" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">{det.label}</span>
                  <span className="text-sm font-bold text-zinc-900 break-all">{det.value}</span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Secure Form */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-2xl p-8 md:p-10 border border-zinc-200/80 bg-white shadow-sm relative">
            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-4 animate-fade-in">
                <CheckCircle2 className="w-16 h-16 text-[#0a4a83] animate-bounce" />
                <h3 className="text-2xl font-bold text-zinc-900">Intake Received</h3>
                <p className="text-xs text-zinc-500 max-w-sm font-medium">
                  Your secure advisory details have been encrypted and received. We will contact you within 4 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-zinc-950">Secure Consultation Form</h3>
                  <p className="text-xs text-zinc-500 font-medium">All sessions are covered under registered fiduciaries and strict NDAs.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">FullName *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Sujan Singh"
                      className="bg-zinc-50 border border-zinc-200 focus:border-[#0a4a83]/40 rounded-xl p-3.5 text-xs font-semibold text-zinc-900 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. sujan@gmail.com"
                      className="bg-zinc-50 border border-zinc-200 focus:border-[#0a4a83]/40 rounded-xl p-3.5 text-xs font-semibold text-zinc-900 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="org" className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Firm Name (Optional)</label>
                  <input
                    type="text"
                    id="org"
                    name="org"
                    value={formData.org}
                    onChange={handleInputChange}
                    placeholder="e.g. Sujan Advisory Group"
                    className="bg-zinc-50 border border-zinc-200 focus:border-[#0a4a83]/40 rounded-xl p-3.5 text-xs font-semibold text-zinc-900 focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Structural Requirements *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Outline your regulatory compliance, restructuring, or asset preservation requirements..."
                    className="bg-zinc-50 border border-zinc-200 focus:border-[#0a4a83]/40 rounded-xl p-3.5 text-xs font-semibold text-zinc-900 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#0a4a83] hover:bg-[#07355e] text-white p-4 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-[0.99]"
                >
                  Submit Advisory Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faqs" className="max-w-4xl mx-auto px-6 md:px-12 mt-32 pt-24 border-t border-zinc-200/60 scroll-mt-24">
        <div className="flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-bold text-[#0a4a83] uppercase tracking-widest w-max mx-auto mb-4">
          <MessageSquare className="w-3.5 h-3.5 stroke-[2.5]" />
          Common Inquiries
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-zinc-900 text-center tracking-tight mb-12">
          Frequently Answered Fiduciary Queries
        </h2>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = faqOpen === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-zinc-200/80 bg-white overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => setFaqOpen(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-zinc-900 text-sm md:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0a4a83] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[200px] border-t border-zinc-100" : "max-h-0"
                  }`}
                >
                  <p className="p-6 text-xs text-zinc-500 leading-relaxed font-semibold bg-zinc-50/50">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
