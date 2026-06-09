"use client";
import React, { useState } from "react";
import { Calendar, CheckCircle2, ShieldCheck, AlertCircle } from "lucide-react";
import { useSubmitLeadFormMutation } from "../../store/features/leads/leadsApi";
import Modal from "@/components/ui/modal";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";
import Button from "@/components/ui/button";
import Select from "@/components/ui/select";

export default function ConsultationModal({ isOpen, onClose }) {
  const [submitLeadForm, { isLoading, isSuccess, isError, reset }] = useSubmitLeadFormMutation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceNeeded: "",
    query: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceNeeded: "",
      query: "",
    });
    setErrors({});
    reset();
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validationErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      validationErrors.phone = "Phone number is required";
    } else {
      const sanitizedPhone = formData.phone.replace(/[\s\-\(\)\+]/g, "").replace(/^91/, "");
      if (!/^[6-9]\d{9}$/.test(sanitizedPhone)) {
        validationErrors.phone = "Please enter a valid 10-digit Indian mobile number";
      }
    }

    if (!formData.serviceNeeded) {
      validationErrors.serviceNeeded = "Please select a service";
    }

    if (!formData.query.trim()) {
      validationErrors.query = "Please enter your query or area of interest";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await submitLeadForm({
          formType: "consultation",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          serviceNeeded: formData.serviceNeeded,
          query: formData.query,
        }).unwrap();
      } catch (err) {
      }
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} className="max-w-xl my-auto">
      <div className="p-8 md:p-10">
        {isSuccess ? (
          <div className="py-12 flex flex-col items-center justify-center text-center gap-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0a4a83]">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>
            <h3 className="text-2xl font-black text-zinc-950">Consultation Scheduled!</h3>
            <p className="text-xs text-zinc-500 max-w-sm font-semibold leading-relaxed mb-6">
              Thank you! Your consultation request has been received successfully. I will review the details and get back to you shortly.
            </p>
            <div className="flex gap-4 w-full">
              <Button variant="outline" size="full" onClick={handleReset}>
                Book Another
              </Button>
              <Button variant="primary" size="full" onClick={handleClose}>
                Close
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 border-b border-zinc-100 pb-5 pr-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#0a4a83]" />
                <h3 className="text-lg font-black text-zinc-950 uppercase tracking-wider">
                  REQUEST A CONSULTATION
                </h3>
              </div>
              <p className="text-xs text-zinc-500 font-semibold leading-relaxed">
                Provide your details below to schedule a financial review session with Sujan Singh.
              </p>
            </div>

            {isError && (
              <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-650 text-xs font-semibold flex items-start gap-3">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>Something went wrong. Please try again.</span>
              </div>
            )}

            <div className="flex flex-col gap-5">
              <Input
                label="Full Name"
                id="name"
                name="name"
                required
                value={formData.name}
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
                  value={formData.email}
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
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 88021 08844"
                  error={errors.phone}
                />
              </div>

              <Select
                label="Service Needed"
                id="service-needed"
                name="serviceNeeded"
                required
                value={formData.serviceNeeded}
                onChange={handleChange}
                placeholder="Select Service"
                options={[
                  { value: "Retirement Planning", label: "Retirement Planning" },
                  { value: "Goal-Based Planning", label: "Goal-Based Planning" },
                  { value: "Wealth Management", label: "Wealth Management" },
                  { value: "Stock Advisory", label: "Stock Advisory" },
                  { value: "Other", label: "Other Financial Query" },
                ]}
                error={errors.serviceNeeded}
              />

              <Textarea
                label="Your Query / Area of Interest"
                id="query"
                name="query"
                required
                value={formData.query}
                onChange={handleChange}
                placeholder="Please briefly describe your financial goals, investment interests, retirement planning needs, insurance requirements, or any specific questions you'd like to discuss."
                error={errors.query}
              />
            </div>

            <div className="flex flex-col gap-3.5 border-t border-zinc-100 pt-6 mt-2">
              <Button type="submit" loading={isLoading} icon={ShieldCheck} size="full">
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
