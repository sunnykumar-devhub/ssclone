import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#222d3e] text-zinc-350 font-sans border-t border-zinc-700/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
        {/* Column 1 - Brand statement */}
        <div className="md:col-span-5 flex flex-col gap-5">
          <h4 className="text-sm font-black uppercase tracking-wider text-white">
            SOUND FINANCE SOLUTIONS FOR SUCCESSFUL PEOPLE
          </h4>
          <p className="text-[13px] leading-relaxed text-zinc-300 font-medium">
            At <strong className="text-white font-black">Sujan Singh Investment Advisory</strong>, I specialize in providing comprehensive financial solutions to help you achieve long-term success. My advisory services are designed to grow, protect, and manage your wealth with personalized strategies tailored for every stage of life. Trust me to guide you through the complexities of finance, ensuring your future remains secure.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="md:col-span-3 flex flex-col gap-5">
          <h4 className="text-sm font-black uppercase tracking-wider text-white">
            QUICK LINKS
          </h4>
          <ul className="flex flex-col gap-3.5 text-[13px] font-bold text-zinc-300">
            <li>
              <Link href="/" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <span className="w-1.5 h-1.5 rounded-full border border-zinc-400 shrink-0" />
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <span className="w-1.5 h-1.5 rounded-full border border-zinc-400 shrink-0" />
                About me
              </Link>
            </li>
            <li>
              <Link href="/services" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <span className="w-1.5 h-1.5 rounded-full border border-zinc-400 shrink-0" />
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact#faqs" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <span className="w-1.5 h-1.5 rounded-full border border-zinc-400 shrink-0" />
                Faqs
              </Link>
            </li>
            <li>
              <Link href="/disclosures" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <span className="w-1.5 h-1.5 rounded-full border border-zinc-400 shrink-0" />
                Sebi disclosures
              </Link>
            </li>
            <li>
              <Link href="/contact" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <span className="w-1.5 h-1.5 rounded-full border border-zinc-400 shrink-0" />
                Contact me
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div className="md:col-span-4 flex flex-col gap-5">
          <h4 className="text-sm font-black uppercase tracking-wider text-white">
            CONTACT INFORMATION
          </h4>
          <div className="flex flex-col gap-3.5 text-[13px] text-zinc-300 font-semibold">
            <p>
              <strong className="text-white font-extrabold">Phone:</strong> +91 88021 08844
            </p>
            <p>
              <strong className="text-white font-extrabold">Email:</strong> sujansingh20@gmail.com
            </p>
            <p className="leading-relaxed">
              <strong className="text-white font-extrabold">Office Address:</strong> 713, 7th Floor, Devika Tower, Nehru Place, Delhi- 110019
            </p>
            
            {/* Social Follow Me */}
            <div className="flex flex-col gap-3 pt-2">
              <strong className="text-white font-extrabold">Follow me:</strong>
              <div className="flex items-center gap-3">
                {/* LinkedIn */}
                <a href="https://linkedin.com" className="text-zinc-350 hover:text-white hover:scale-105 transition-all">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                {/* Twitter */}
                <a href="https://twitter.com" className="text-zinc-350 hover:text-white hover:scale-105 transition-all">
                  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                {/* Facebook */}
                <a href="https://facebook.com" className="text-zinc-350 hover:text-white hover:scale-105 transition-all">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a href="https://instagram.com" className="text-zinc-350 hover:text-white hover:scale-105 transition-all">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a href="https://youtube.com" className="text-zinc-355 hover:text-white hover:scale-105 transition-all">
                  <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom credits strip */}
      <div className="bg-[#182230] py-5 text-center text-xs font-semibold text-zinc-400">
        Designed and developed by Codebucket Solutions Pvt Ltd
      </div>
    </footer>
  );
}
