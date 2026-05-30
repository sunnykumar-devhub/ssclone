"use client";
import React, { useState, useEffect, useRef } from "react";
import { X, Calendar, Clock, CheckCircle2, ShieldCheck, RefreshCw } from "lucide-react";

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
    date: "",
    time: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const modalRef = useRef(null);
  const firstInputRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Focus trap and accessibility helpers
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        if (firstInputRef.current) {
          firstInputRef.current.focus();
        } else if (closeButtonRef.current) {
          closeButtonRef.current.focus();
        }
      }, 100);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else {
      // Remove spaces, dashes, parentheses and "+91" prefix for validation
      const sanitizedPhone = formData.phone.replace(/[\s\-\(\)\+]/g, "").replace(/^91/, "");
      if (!/^[6-9]\d{9}$/.test(sanitizedPhone)) {
        newErrors.phone = "Please enter a valid 10-digit Indian mobile number";
      }
    }

    if (!formData.query.trim()) newErrors.query = "Please enter your query or area of interest";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      query: "",
      date: "",
      time: "",
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Dimmed backdrop overlay with backdrop-blur */}
      <div
        className="fixed inset-0 bg-zinc-950/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Main Modal Card (Clean single-column matching contact theme) */}
      <div
        ref={modalRef}
        className="relative bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh] animate-fade-in-up transition-all duration-350"
      >
        {/* Close Icon Button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 bg-zinc-100 hover:bg-zinc-200 rounded-full p-2 z-20 cursor-pointer transition-colors"
        >
          <X className="w-5 h-5 stroke-[2]" />
        </button>

        {/* Form Container */}
        <div className="p-8 md:p-10 overflow-y-auto">
          {isSuccess ? (
            <div className="py-12 flex flex-col items-center justify-center text-center gap-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0a4a83]">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>
              <h3 className="text-2xl font-black text-zinc-950">Thank You!</h3>
              <p className="text-xs text-zinc-500 max-w-sm font-semibold leading-relaxed mb-6">
                Your consultation request has been received successfully. As a SEBI Registered Investment Adviser, I strictly safeguard your information. I will get back to you shortly!
              </p>
              <div className="flex gap-4 w-full">
                <button
                  onClick={handleReset}
                  className="flex-1 py-3 px-5 border border-zinc-200 hover:bg-zinc-50 text-zinc-700 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  Book Another
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-3 px-5 bg-[#0a4a83] hover:bg-[#07355e] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Form Header */}
              <div className="flex flex-col gap-2 border-b border-zinc-100 pb-5 pr-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#0a4a83]" />
                  <h3 id="modal-title" className="text-lg font-black text-zinc-950 uppercase tracking-wider">
                    Schedule a Consultation
                  </h3>
                </div>
                <p className="text-xs text-zinc-500 font-semibold leading-relaxed">
                  Want to meet in person or virtually? Use the form below to select a date and time that works for you.
                </p>
              </div>

              {/* Form Welcome Header */}
              <div className="flex flex-col gap-1.5">
                <h4 className="text-xs font-bold text-zinc-800 uppercase tracking-wide">
                  Get in Touch with Me
                </h4>
                <p className="text-[11px] text-zinc-400 font-medium">
                  Please fill out the form below, and I will get back to you as soon as possible. Whether you have questions or need personalized advice, I’m here to assist you.
                </p>
              </div>

              {/* Form Fields */}
              <div className="flex flex-col gap-5">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-zinc-450">Name *</label>
                  <input
                    ref={firstInputRef}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Sujan Singh"
                    className={`bg-zinc-50 border focus:bg-white rounded-xl p-3.5 text-xs font-semibold text-zinc-900 focus:outline-none transition-all ${
                      errors.name ? "border-red-300 focus:border-red-400" : "border-zinc-200 focus:border-[#0a4a83]/45"
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[10px] font-bold text-red-500">{errors.name}</span>
                  )}
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-zinc-450">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. sujan@gmail.com"
                      className={`bg-zinc-50 border focus:bg-white rounded-xl p-3.5 text-xs font-semibold text-zinc-900 focus:outline-none transition-all ${
                        errors.email ? "border-red-300 focus:border-red-400" : "border-zinc-200 focus:border-[#0a4a83]/45"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[10px] font-bold text-red-500">{errors.email}</span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-wider text-zinc-450">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 88021 08844"
                      className={`bg-zinc-50 border focus:bg-white rounded-xl p-3.5 text-xs font-semibold text-zinc-900 focus:outline-none transition-all ${
                        errors.phone ? "border-red-300 focus:border-red-400" : "border-zinc-200 focus:border-[#0a4a83]/45"
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-[10px] font-bold text-red-500">{errors.phone}</span>
                    )}
                  </div>
                </div>

                {/* Date & Time Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Date */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="date" className="text-[10px] font-bold uppercase tracking-wider text-zinc-450">Preferred Date (Optional)</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="bg-zinc-50 border border-zinc-200 focus:border-[#0a4a83]/45 focus:bg-white rounded-xl p-3.5 text-xs font-semibold text-zinc-900 focus:outline-none transition-all cursor-pointer"
                    />
                  </div>

                  {/* Time */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="time" className="text-[10px] font-bold uppercase tracking-wider text-zinc-450">Preferred Time (Optional)</label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="bg-zinc-50 border border-zinc-200 focus:border-[#0a4a83]/45 focus:bg-white rounded-xl p-3.5 text-xs font-semibold text-zinc-900 focus:outline-none transition-all cursor-pointer"
                    />
                  </div>
                </div>

                {/* Query Area */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="query" className="text-[10px] font-bold uppercase tracking-wider text-zinc-450">Your Query / Area of Interest *</label>
                  <textarea
                    id="query"
                    name="query"
                    rows="4"
                    value={formData.query}
                    onChange={handleInputChange}
                    placeholder="Outline your requirements, e.g. retirement planning, wealth advisory, portfolio review..."
                    className={`bg-zinc-50 border focus:bg-white rounded-xl p-3.5 text-xs font-semibold text-zinc-900 focus:outline-none transition-all resize-none ${
                      errors.query ? "border-red-300 focus:border-red-400" : "border-zinc-200 focus:border-[#0a4a83]/45"
                    }`}
                  />
                  {errors.query && (
                    <span className="text-[10px] font-bold text-red-500">{errors.query}</span>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#0a4a83] hover:bg-[#07355e] disabled:bg-zinc-300 text-white p-4 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-[0.99] cursor-pointer mt-4 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Scheduling...
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    Submit Request & Schedule
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
