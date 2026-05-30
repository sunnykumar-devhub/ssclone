"use client";
import React, { useState } from "react";
import { MessageSquare, ChevronDown, Coins, Briefcase, Compass, PhoneCall, HelpCircle } from "lucide-react";

export default function FaqsContainer() {
  const [activeCategory, setActiveCategory] = useState("fees");
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);

  const faqCategories = [
    {
      id: "fees",
      name: "Fees & Engagement",
      icon: Coins,
      items: [
        {
          q: "How much do you charge?",
          a: "We charge a fixed fee that is affordable for all clients, based on the Assets Under Advisory (AUA) of each individual. A “fixed fee” means a flat charge for our advisory services, determined by the total assets advised under our guidance."
        },
        {
          q: "What is your annual fee?",
          a: "First year: ₹13,000. Renewal: ₹8,000/year. Renewal fee increases ₹1,000 every 2 years."
        },
        {
          q: "Is the fee per person or per couple?",
          a: "The fee covers the entire family unit (individual or couple) – no extra charge."
        },
        {
          q: "Why is your fee so affordable?",
          a: "We believe unbiased advice should be accessible to everyone. Our flat-fee model ensures transparency and fairness."
        },
        {
          q: "Do you offer discounts?",
          a: "No. Our fee is already fair, transparent, and equal for all clients."
        },
        {
          q: "Do I need to renew every year?",
          a: "Yes. Renewal ensures ongoing portfolio reviews, plan updates, and continuous support."
        },
        {
          q: "Can I renew after 2–3 years?",
          a: "Yes, but it will be treated as fresh onboarding with the first-year fee applicable."
        },
        {
          q: "Why should I pay for financial advice when there’s so much free content online?",
          a: '“Price is what you pay. Value is what you get.” – Warren Buffett. When you pay for professional, SEBI-registered advice, you\'re investing in personalised guidance, accountability, and long-term clarity — tailored specifically to your goals, risks, and life stage.'
        },
        {
          q: "Why should I hire a financial advisor when I can manage my finances on my own?",
          a: "A financial advisor provides expert, unbiased guidance, helping you make better financial decisions. They prevent costly mistakes, keep you focused on long-term goals, and save you time, stress, and money by simplifying complex financial choices."
        }
      ]
    },
    {
      id: "services",
      name: "Services & Process",
      icon: Briefcase,
      items: [
        {
          q: "Do you provide stock recommendations?",
          a: "Yes, based on your goals, risk profile, and SEBI guidelines."
        },
        {
          q: "Do you review existing investments?",
          a: "Absolutely. Reviewing and optimising your current portfolio is part of our process."
        },
        {
          q: "Do you advise on real estate and gold?",
          a: "Yes, we offer unbiased, strategic guidance on real estate as part of your financial plan. We help you decide whether to buy, sell, or hold a property, ensuring every decision supports your long-term goals. (Note: We do not participate in real estate transactions or brokerage services.)"
        },
        {
          q: "Do your services include recommendations on commodities like gold or silver?",
          a: "Yes, we provide strategic, unbiased advice on gold and silver as part of your overall asset allocation. As a SEBI-registered investment adviser, we do not promote specific products or earn any commissions – our guidance is always in your best interest."
        },
        {
          q: "Is my existing investment portfolio reviewed during the financial planning process?",
          a: "Yes, reviewing your current portfolio is an important part of our process. We analyse performance, diversification, and suitability and suggest adjustments to ensure your investments align with your financial goals."
        },
        {
          q: "What do I get with the renewal service after the first year?",
          a: "Renewal gives you: \n\n✅ A comprehensive review of your financial plan every six months\n✅ Ongoing email support for all your queries\n✅ Timely adjustments based on changes in your goals, income, or market conditions"
        },
        {
          q: "Do you advise on new or alternative products?",
          a: "Only if they fit your goals, risk profile, and comply with SEBI regulations. We avoid speculative or unregulated products."
        }
      ]
    },
    {
      id: "planning",
      name: "Planning & Support",
      icon: Compass,
      items: [
        {
          q: "What all do you cover in the financial plan?",
          a: "Our financial plan covers detailed goal planning, wealth allocation, insurance analysis, and tax strategy. Please refer to our Financial Planning catalog for more structural details."
        },
        {
          q: "How long will it take to get my plan?",
          a: "7–10 working days after receiving all required details."
        },
        {
          q: "Do you offer support after delivering the plan?",
          a: "Yes. 12 months of support, including a half-yearly review and unlimited queries."
        },
        {
          q: "How often can I reach out?",
          a: "Anytime. No limit on queries."
        },
        {
          q: "How quickly do you respond?",
          a: "Within 24 hours on working days (faster for urgent matters)."
        },
        {
          q: "What if my life situation changes?",
          a: "We update your plan as your life and goals evolve – at no extra cost during the active year."
        },
        {
          q: "Where should I start if my finances are currently unstructured or unclear?",
          a: "You’re not alone – financial clarity starts with small, focused steps. We help you organise your finances, prioritise your goals, and create a clear action plan that works for your life. 💡 “Start where you are. Use what you have. Do what you can.” – Arthur Ashe"
        }
      ]
    },
    {
      id: "meetings",
      name: "Meetings & Communication",
      icon: PhoneCall,
      items: [
        {
          q: "Who will be my advisor?",
          a: "Sujan Singh – SEBI-Registered Investment Adviser (RIA)."
        },
        {
          q: "Do you provide home or office visits?",
          a: "We mainly serve clients online. In-person meetings are available in Delhi/NCR with prior appointment."
        },
        {
          q: "Which languages do you support?",
          a: "English and Hindi."
        },
        {
          q: "How will we stay in touch during the engagement?",
          a: "Email, phone, WhatsApp, and scheduled video meetings – whichever you prefer."
        }
      ]
    },
    {
      id: "misc",
      name: "Miscellaneous FAQs",
      icon: HelpCircle,
      items: [
        {
          q: "Who might not be the right fit for your services?",
          a: "Our services may not suit those who: \n\n❌ Want stock tips or short-term trading advice\n❌ Expect us to sell products like insurance or mutual funds\n❌ Prefer commission-based advisory or “quick fixes”\n❌ Are unwilling to follow a structured planning process\n❌ Are uncomfortable sharing basic financial details"
        },
        {
          q: "Can I connect with an existing client for feedback?",
          a: "We follow strict confidentiality as per SEBI guidelines and never share client identities. However, you can refer to verified testimonials and case studies on our website."
        },
        {
          q: "Do you recommend any specific platforms for investments?",
          a: "As a SEBI-registered advisor, we don’t sell products or take commissions. We suggest neutral, secure platforms that support direct and transparent investing."
        },
        {
          q: "Is income tax filing included in your services?",
          a: "No, we do not file income tax returns, but we guide you with tax-saving strategies as part of financial planning."
        }
      ]
    }
  ];

  const activeCategoryData = faqCategories.find((cat) => cat.id === activeCategory);

  return (
    <div className="bg-zinc-50 min-h-screen pt-8 pb-24 font-sans text-zinc-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#0a4a83] px-3.5 py-1.5 rounded-full bg-blue-50/60 border border-blue-100/60 inline-flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5" />
            FAQ Hub
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-zinc-950 tracking-tight leading-[1.1] mt-6">
            Frequently Asked Questions
          </h1>
          <p className="text-sm md:text-base text-zinc-500 max-w-2xl leading-relaxed mt-6 font-medium mx-auto">
            Find answers to commonly asked inquiries regarding fees, our non-discretionary investment advisory services, and support models.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {faqCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setFaqOpenIndex(null);
                }}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-sm cursor-pointer border ${
                  activeCategory === category.id
                    ? "bg-[#0a4a83] border-[#0a4a83] text-white shadow-md scale-[1.02]"
                    : "bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-50"
                }`}
              >
                <IconComponent className={`w-4 h-4 shrink-0 ${activeCategory === category.id ? "text-white" : "text-[#0a4a83]"}`} />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Accordions Container */}
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {activeCategoryData.items.map((item, idx) => {
            const isOpen = faqOpenIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-zinc-200/80 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:border-[#0a4a83]/25"
              >
                <button
                  onClick={() => setFaqOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                >
                  <span className="font-extrabold text-zinc-900 text-xs md:text-sm tracking-wide leading-snug">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#0a4a83] shrink-0 transition-transform duration-350 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[500px] border-t border-zinc-100" : "max-h-0"
                  }`}
                >
                  <div className="p-6 text-xs text-zinc-500 leading-relaxed font-semibold bg-zinc-50/40 whitespace-pre-line">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
