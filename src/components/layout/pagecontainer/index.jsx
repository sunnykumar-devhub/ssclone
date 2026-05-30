import React from "react";

export default function PageContainer({ children, className = "", bg = "bg-zinc-50" }) {
  return (
    <div className={`${bg} min-h-screen pt-8 pb-24 font-sans text-zinc-700 ${className}`}>
      {children}
    </div>
  );
}
