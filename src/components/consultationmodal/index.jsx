"use client";
import React from "react";
import { Calendar, Clock, CheckCircle2, ShieldCheck } from "lucide-react";
import useForm from "@/hooks/useform";
import Modal from "@/components/ui/modal";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";
import Button from "@/components/ui/button";

export default function ConsultationModal({ isOpen, onClose }) {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    query: "",
    date: "",
    time: "",
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name.trim()) errors.name = "Name is required";
    
    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!values.phone.trim()) {
      errors.phone = "Phone number is required";
    } else {
      const sanitizedPhone = values.phone.replace(/[\s\-\(\)\+]/g, "").replace(/^91/, "");
      if (!/^[6-9]\d{9}$/.test(sanitizedPhone)) {
        errors.phone = "Please enter a valid 10-digit Indian mobile number";
      }
    }

    if (!values.query.trim()) errors.query = "Please enter your query or area of interest";
    return errors;
  };

  const onSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1500);
    });
  };

  const {
    values,
    errors,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit,
    resetForm,
  } = useForm({ initialValues, validate, onSubmit });

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-xl">
      <div className="p-8 md:p-10">
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
              <Button variant="outline" size="full" onClick={resetForm}>
                Book Another
              </Button>
              <Button variant="primary" size="full" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Form Header */}
            <div className="flex flex-col gap-2 border-b border-zinc-100 pb-5 pr-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#0a4a83]" />
                <h3 className="text-lg font-black text-zinc-950 uppercase tracking-wider">
                  Schedule Your Consultation
                </h3>
              </div>
              <p className="text-xs text-zinc-500 font-semibold leading-relaxed">
                Get personalized investment and financial guidance from Sujan Singh, SEBI-Registered Investment Adviser.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <Input
                label="Full Name"
                id="name"
                name="name"
                required
                value={values.name}
                onChange={handleChange}
                placeholder="e.g. Sujan Singh"
                error={errors.name}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Email Address"
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={values.email}
                  onChange={handleChange}
                  placeholder="e.g. sujan@gmail.com"
                  error={errors.email}
                />
                <Input
                  label="Phone Number"
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={values.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 88021 08844"
                  error={errors.phone}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Preferred Date (Optional)"
                  id="date"
                  name="date"
                  type="date"
                  value={values.date}
                  onChange={handleChange}
                />
                <Input
                  label="Preferred Time (Optional)"
                  id="time"
                  name="time"
                  type="time"
                  value={values.time}
                  onChange={handleChange}
                />
              </div>

              <Textarea
                label="Your Query / Area of Interest"
                id="query"
                name="query"
                required
                value={values.query}
                onChange={handleChange}
                placeholder="Outline your requirements, e.g. retirement planning, wealth advisory, portfolio review..."
                error={errors.query}
              />
            </div>

            <div className="flex flex-col gap-3.5 border-t border-zinc-100 pt-6 mt-2">
              <Button type="submit" loading={isSubmitting} icon={ShieldCheck} size="full">
                Request Consultation
              </Button>
              <div className="flex items-center justify-center gap-2 text-zinc-400">
                <ShieldCheck className="w-4 h-4 text-[#0a4a83] shrink-0" />
                <span className="text-[9px] font-black uppercase tracking-wider">
                  SEBI Mandate & Privacy Protected Fiduciary
                </span>
              </div>
            </div>
          </form>
        )}
      </div>
    </Modal>
  );
}
