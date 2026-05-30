import React from "react";
import { Loader2 } from "lucide-react";

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  loading = false,
  icon: Icon = null,
}) {
  const baseStyle = "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all active:scale-[0.99] cursor-pointer rounded-xl shrink-0";
  
  const variants = {
    primary: "bg-[#0a4a83] hover:bg-[#07355e] text-white shadow-md hover:shadow-lg",
    secondary: "bg-white border-2 border-[#0a4a83] text-[#0a4a83] hover:bg-[#0a4a83] hover:text-white shadow-sm hover:shadow-md",
    outline: "bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-50 shadow-sm",
    danger: "bg-red-650 hover:bg-red-700 text-white shadow-md",
  };

  const sizes = {
    sm: "px-4 py-2 text-[10px]",
    md: "px-5 py-3 text-xs",
    lg: "px-6 py-3.5 text-xs md:text-sm",
    full: "w-full p-4 text-xs",
  };

  const variantClass = variants[variant] || variants.primary;
  const sizeClass = sizes[size] || sizes.md;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyle} ${variantClass} ${sizeClass} ${disabled || loading ? "opacity-60 cursor-not-allowed" : ""} ${className}`}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin mr-2" />
      ) : Icon ? (
        <Icon className="w-4 h-4 mr-2" />
      ) : null}
      {children}
    </button>
  );
}
