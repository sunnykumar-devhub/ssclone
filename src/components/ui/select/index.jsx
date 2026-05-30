import React from "react";

export default function Select({
  label = "",
  id,
  name,
  required = false,
  value,
  onChange,
  options = [],
  placeholder = "",
  error = "",
  className = "",
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
          {label} {required && "*"}
        </label>
      )}
      <select
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className={`bg-zinc-50 border ${
          error ? "border-red-500 focus:border-red-500" : "border-zinc-200 focus:border-[#0a4a83]/40"
        } focus:bg-white rounded-xl p-3.5 text-xs font-semibold text-zinc-900 focus:outline-none transition-all cursor-pointer`}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <span className="text-[10px] text-red-500 font-bold">{error}</span>}
    </div>
  );
}
