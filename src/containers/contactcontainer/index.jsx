"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, CheckCircle2, MessageSquare, Clock, Calendar, ShieldCheck } from "lucide-react";

export default function ContactContainer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
    date: "",
    time: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.query) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", query: "", date: "", time: "" });
    }, 4000);
  };

  return (
    <div className="bg-zinc-50 min-h-screen pt-8 pb-24 font-sans text-zinc-700">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <span className="text-xs font-bold uppercase tracking-widest text-[#0a4a83] px-3.5 py-1.5 rounded-full bg-blue-50/60 border border-blue-100/60 inline-flex items-center gap-1.5">
          <MessageSquare className="w-3.5 h-3.5" />
          Get In Touch
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-zinc-950 tracking-tight leading-[1.1] mt-6 max-w-3xl mx-auto">
          How Can I Help You?
        </h1>
        <p className="text-sm md:text-base text-zinc-500 max-w-2xl leading-relaxed mt-6 font-medium mx-auto">
          Feel free to reach out via the form below or directly, and I’ll assist you with personalized investment advice, portfolio management, or any questions you may have.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Info & Details Panel */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          
          {/* Welcome Portrait Card */}
          <div className="bg-white border border-zinc-200/80 rounded-2xl p-4 shadow-sm flex flex-col gap-4 relative overflow-hidden group">
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-sm border border-zinc-100 bg-zinc-50">
              <Image
                src="/sujan_contact.jpg"
                alt="Sujan Singh Welcoming Portrait"
                fill
                priority
                className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="px-2 pb-1 text-left">
              <h3 className="text-sm font-black text-zinc-950 uppercase tracking-wide">Sujan Singh</h3>
              <p className="text-[10px] font-bold text-[#0a4a83] uppercase tracking-widest mt-0.5">SEBI-Registered Investment Adviser</p>
              <p className="text-xs text-zinc-500 font-semibold leading-relaxed mt-2.5">
                "Spread financial awareness, take absolute control of your money, and achieve secure peace of mind."
              </p>
            </div>
          </div>

          {/* Main Contact Card */}
          <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 shadow-sm flex flex-col gap-6">
            <h2 className="text-lg font-black text-zinc-950 uppercase tracking-wider border-b border-zinc-100 pb-4">
              Contact Me
            </h2>
            
            <div className="flex flex-col gap-5">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0a4a83] shrink-0">
                  <MapPin className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Office Address</span>
                  <span className="text-xs md:text-sm font-bold text-zinc-800 leading-relaxed">
                    713, 7th Floor, Devika Tower,<br />Nehru Place, Delhi- 110019
                  </span>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0a4a83] shrink-0">
                  <Phone className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Phone</span>
                  <a href="tel:+918802108844" className="text-xs md:text-sm font-black text-[#0a4a83] hover:underline">
                    +91 88021 08844
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0a4a83] shrink-0">
                  <Mail className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Email</span>
                  <a href="mailto:sujansingh20@gmail.com" className="text-xs md:text-sm font-black text-[#0a4a83] hover:underline">
                    sujansingh20@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours Card */}
          <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 shadow-sm flex flex-col gap-5">
            <div className="flex items-center gap-3 border-b border-zinc-100 pb-4">
              <div className="w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-700 shrink-0">
                <Clock className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-sm font-black text-zinc-950 uppercase tracking-wider">
                Business Hours
              </h3>
            </div>
            
            <div className="flex flex-col gap-3.5 text-xs font-semibold text-zinc-650">
              <div className="flex justify-between items-center">
                <span className="text-zinc-500">Monday – Friday</span>
                <span className="text-zinc-900 font-bold">9:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center border-t border-zinc-100/60 pt-3">
                <span className="text-zinc-500">Saturday</span>
                <span className="text-[#0a4a83] font-bold">By Appointment</span>
              </div>
              <div className="flex justify-between items-center border-t border-zinc-100/60 pt-3">
                <span className="text-zinc-500">Sunday</span>
                <span className="text-red-500 font-bold">Closed</span>
              </div>
            </div>
          </div>

          {/* Stay Connected */}
          <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 shadow-sm flex flex-col gap-5">
            <h3 className="text-sm font-black text-zinc-950 uppercase tracking-wider border-b border-zinc-100 pb-4">
              Stay Connected
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed font-semibold">
              Feel free to follow me on social media for the latest insights, market updates, and financial tips:
            </p>
            <div className="flex flex-wrap gap-3 mt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-zinc-200 hover:border-[#0a4a83]/30 hover:bg-blue-50/20 text-zinc-700 hover:text-[#0a4a83] px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-zinc-200 hover:border-[#0a4a83]/30 hover:bg-blue-50/20 text-zinc-700 hover:text-[#0a4a83] px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
                Twitter
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-zinc-200 hover:border-[#0a4a83]/30 hover:bg-blue-50/20 text-zinc-700 hover:text-[#0a4a83] px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>

        </div>

        {/* Secure Form Panel */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 md:p-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
            
            {isSubmitted ? (
              <div className="py-20 flex flex-col items-center justify-center text-center gap-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0a4a83]">
                  <CheckCircle2 className="w-10 h-10 animate-bounce" />
                </div>
                <h3 className="text-2xl font-black text-zinc-950">Thank You!</h3>
                <p className="text-xs text-zinc-500 max-w-sm font-semibold leading-relaxed">
                  Your message has been received successfully. As a SEBI Registered Investment Adviser, I strictly safeguard your information. I will get back to you shortly!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2 border-b border-zinc-100 pb-5">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#0a4a83]" />
                    <h3 className="text-lg font-black text-zinc-950 uppercase tracking-wider">
                      Schedule a Consultation
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-500 font-semibold leading-relaxed">
                    Want to meet in person or virtually? Use the form below to select a date and time that works for you.
                  </p>
                </div>

                <div className="flex flex-col gap-1.5 mt-2">
                  <h4 className="text-xs font-bold text-zinc-800 uppercase tracking-wide">
                    Get in Touch with Me
                  </h4>
                  <p className="text-[11px] text-zinc-400 font-medium">
                    Please fill out the form below, and I will get back to you as soon as possible. Whether you have questions or need personalized advice, I’m here to assist you.
                  </p>
                </div>

                <div className="flex flex-col gap-5 mt-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Sujan Singh"
                      className="bg-zinc-50 border border-zinc-200 focus:border-[#0a4a83]/40 focus:bg-white rounded-xl p-3.5 text-xs font-semibold text-zinc-900 focus:outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. sujan@gmail.com"
                        className="bg-zinc-50 border border-zinc-200 focus:border-[#0a4a83]/40 focus:bg-white rounded-xl p-3.5 text-xs font-semibold text-zinc-900 focus:outline-none transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +91 88021 08844"
                        className="bg-zinc-50 border border-zinc-200 focus:border-[#0a4a83]/40 focus:bg-white rounded-xl p-3.5 text-xs font-semibold text-zinc-900 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="date" className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Preferred Date (Optional)</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="bg-zinc-50 border border-zinc-200 focus:border-[#0a4a83]/40 focus:bg-white rounded-xl p-3.5 text-xs font-semibold text-zinc-900 focus:outline-none transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="time" className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Preferred Time (Optional)</label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="bg-zinc-50 border border-zinc-200 focus:border-[#0a4a83]/40 focus:bg-white rounded-xl p-3.5 text-xs font-semibold text-zinc-900 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="query" className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Your Query / Area of Interest *</label>
                    <textarea
                      id="query"
                      name="query"
                      required
                      rows="4"
                      value={formData.query}
                      onChange={handleInputChange}
                      placeholder="Outline your requirements, e.g. retirement planning, wealth advisory, portfolio review..."
                      className="bg-zinc-50 border border-zinc-200 focus:border-[#0a4a83]/40 focus:bg-white rounded-xl p-3.5 text-xs font-semibold text-zinc-900 focus:outline-none transition-all resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-[#0a4a83] hover:bg-[#07355e] text-white p-4 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-[0.99] cursor-pointer mt-4 flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  Submit Request & Schedule
                </button>
              </form>
            )}
          </div>

          {/* Fiduciary Commitment & Trust Card to fill the empty space */}
          <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 shadow-sm flex flex-col gap-6 mt-8">
            <h3 className="text-sm font-black text-zinc-950 uppercase tracking-wider border-b border-zinc-100 pb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#0a4a83] shrink-0" />
              Fiduciary Commitment & Client Rights
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5 text-left">
                <span className="text-[10px] font-black text-[#0a4a83] uppercase tracking-wider">100% Unbiased Fiduciary</span>
                <p className="text-[11px] text-zinc-500 font-semibold leading-relaxed">
                  As a SEBI-registered advisor, we operate under strict fiduciary rules. No commissions, kickbacks, or distribution fees. My advice is paid only by you, completely aligning my interest with your wealth goals.
                </p>
              </div>

              <div className="flex flex-col gap-1.5 text-left">
                <span className="text-[10px] font-black text-[#0a4a83] uppercase tracking-wider">Absolute Data Confidentiality</span>
                <p className="text-[11px] text-zinc-500 font-semibold leading-relaxed">
                  Your net worth details, bank positions, and risk profiles are treated with bank-grade security. We do not sell or share information with third parties.
                </p>
              </div>

              <div className="flex flex-col gap-1.5 text-left">
                <span className="text-[10px] font-black text-[#0a4a83] uppercase tracking-wider">Grievance Redressal (SCORES)</span>
                <p className="text-[11px] text-zinc-500 font-semibold leading-relaxed">
                  All SEBI-registered advisors are integrated with SCORES (SEBI Complaints Redress System) to ensure clients have a highly structured portal for resolving any service concerns.
                </p>
              </div>

              <div className="flex flex-col gap-1.5 text-left">
                <span className="text-[10px] font-black text-[#0a4a83] uppercase tracking-wider">Rigorous Research Basis</span>
                <p className="text-[11px] text-zinc-500 font-semibold leading-relaxed">
                  Every advisory recommendation (asset mix, mutual funds, or individual stocks) is grounded strictly on empirical research models, historical values, and balanced risk reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Reach Out? Cards Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24">
        <h2 className="text-2xl md:text-3xl font-black text-zinc-950 tracking-tight text-center uppercase tracking-wide mb-12">
          Why Reach Out?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 shadow-sm flex flex-col gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0a4a83]">
              <span className="text-sm font-black">01</span>
            </div>
            <h3 className="font-black text-zinc-950 text-sm uppercase tracking-wide">
              Investment Strategy
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed font-semibold">
              Need help with your investment portfolio or creating a personalized strategy? I’m here to guide you toward making informed, confident investment decisions that align with your financial goals.
            </p>
          </div>

          <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 shadow-sm flex flex-col gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0a4a83]">
              <span className="text-sm font-black">02</span>
            </div>
            <h3 className="font-black text-zinc-950 text-sm uppercase tracking-wide">
              Financial Guidance
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed font-semibold">
              Have questions on retirement planning, tax strategies, or other important financial matters? Let’s talk! I’ll provide clear, actionable advice to help you make smarter financial decisions.
            </p>
          </div>

          <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 shadow-sm flex flex-col gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0a4a83]">
              <span className="text-sm font-black">03</span>
            </div>
            <h3 className="font-black text-zinc-950 text-sm uppercase tracking-wide">
              Consultations Available
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed font-semibold">
              No matter where you are on your financial journey, whether just starting or looking to refine your strategy, I’m here to offer expert advice tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
