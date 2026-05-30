"use client";
import React, { useRef, useEffect } from "react";
import { X } from "lucide-react";
import useModal from "@/hooks/usemodal";

export default function Modal({ isOpen, onClose, children, className = "" }) {
  const modalRef = useRef(null);

  // Hook handles Escape key and body scroll lock
  useModal({ isOpen, onClose });

  // Handle click outside to close
  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/40 backdrop-blur-sm animate-fade-in"
    >
      <div
        ref={modalRef}
        className={`relative bg-white border border-zinc-200 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto ${className}`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700 bg-zinc-100 hover:bg-zinc-200/80 p-2 rounded-full transition-colors cursor-pointer z-10"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
        </button>

        {children}
      </div>
    </div>
  );
}
