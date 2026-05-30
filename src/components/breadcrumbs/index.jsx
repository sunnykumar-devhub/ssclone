"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // Don't render breadcrumbs on homepage
  if (pathname === "/") return null;

  // Split paths and filter out empty strings
  const pathSegments = pathname.split("/").filter((item) => item);

  // Map segment names to readable labels
  const labelMap = {
    about: "About Me",
    services: "Services",
    contact: "Contact Me",
    faqs: "FAQs",
    disclosures: "SEBI Disclosures",
    grievances: "Grievance status",
    imposters: "Beware of Imposters",
  };

  // Construct breadcrumb items
  const breadcrumbItems = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    const label = labelMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
    const isLast = index === pathSegments.length - 1;

    return {
      label,
      href,
      isLast,
    };
  });

  // Dynamic SEO JSON-LD Structured Data for BreadcrumbList
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sujanadvisory.com"
      },
      ...breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": `https://sujanadvisory.com${item.href}`
      }))
    ]
  };

  return (
    <nav 
      aria-label="Breadcrumb" 
      className="w-full bg-transparent max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-4 flex flex-col items-start justify-start gap-2 shrink-0 select-none text-left"
    >
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ol className="flex items-center flex-wrap gap-2.5 text-[10px] md:text-[11.5px] font-bold uppercase tracking-widest">
        <li>
          <Link 
            href="/"
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            Home
          </Link>
        </li>

        {breadcrumbItems.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2.5">
            <span className="text-slate-300 font-normal select-none">›</span>
            {item.isLast ? (
              <span className="text-slate-800 font-extrabold">
                {item.label}
              </span>
            ) : (
              <Link 
                href={item.href}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
