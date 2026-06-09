import { Globe, Search, Compass, ClipboardCheck, Heart, Layers, Calculator, Shield, Target, Scale, Coins, Briefcase, PhoneCall, HelpCircle } from "lucide-react";
import retirementPlanning from "@/assets/retirement_planning_unique.png";
import goalPlanning from "@/assets/goal_planning_unique.png";
import insurancePlanning from "@/assets/insurance_planning_unique.png";
import emergencyPlanning from "@/assets/emergency_planning_unique.png";
import taxPlanning from "@/assets/tax_planning_unique.png";
import riskProfiling from "@/assets/risk_profiling_unique.png";

export const credentials = [
  { label: "Advisory Status", val: "SEBI Registered RIA" },
  { label: "Experience", val: "7+ Years (Since 2016)" },
  { label: "Compensation", val: "100% Fee-Only Fiduciary" },
  { label: "Conflict of Interest", val: "0% Commission / Incentives" },
];

export const RIAPromises = [
  {
    title: "Clearly define and prioritise financial goals",
    desc: "Helping you set clear timelines and realistic targets for your life's major milestones.",
  },
  {
    title: "Create tailored investment & tax-efficient strategies",
    desc: "Designing customized models that optimize returns while legally minimizing tax burdens.",
  },
  {
    title: "Build secure retirement roadmaps & proper insurance coverage",
    desc: "Creating life-long income security and safeguarding your family against unexpected risks.",
  },
  {
    title: "Regularly review and adapt plans as life evolves",
    desc: "Ensuring your financial blueprint adjusts dynamically with career, market, and life stage changes.",
  },
];

export const umbrellaServices = [
  { title: "INVESTMENT ADVISOR SERVICES", icon: Globe },
  { title: "TAX SERVICES", icon: Search },
  { title: "FINANCIAL CONSULTING SERVICES", icon: Compass },
  { title: "RETIREMENT PLANNING", icon: ClipboardCheck },
  { title: "RISK MANAGEMENT & PROTECTION", icon: Heart },
  { title: "ESTATE PLANNING", icon: Layers },
  { title: "CORPORATE FINANCIAL ADVISORY", icon: Calculator },
  { title: "EDUCATION PLANNING", icon: Shield },
];

export const planningServicesDetails = [
  {
    id: 1,
    title: "RETIREMENT PLANNING",
    img: retirementPlanning,
    alignLeft: true,
    icon: Shield,
    bullets1: [
      "Estimate retirement needs & expenses.",
      "Create a diversified investment plan.",
      "Plan for inflation and healthcare costs.",
      "Ensure regular income after retirement.",
    ],
    para: "Retirement is not just about stopping work – it’s about living life on your terms without financial stress. A well-structured retirement plan ensures that you can maintain your desired lifestyle, meet healthcare needs, and enjoy financial independence even when you are no longer working.",
    bullets2: [
      "Personalised Retirement Strategy – Build a roadmap for a stress-free retirement.",
      "Investment Planning & Asset Allocation – Diversified strategies for long-term growth.",
    ],
  },
  {
    id: 2,
    title: "GOAL-BASED PLANNING",
    img: goalPlanning,
    alignLeft: false,
    icon: Target,
    bullets1: [
      "Set & prioritize goals.",
      "Estimate cost & timeline.",
    ],
    para: "Life is full of important milestones – buying a home, funding your child’s education, planning a dream vacation, or preparing for retirement. Each goal requires the right strategy at the right time.",
    bullets2: [
      "Financial Goal Setting – Define clear, actionable life goals (education, home, marriage, etc.)",
      "Tailored Investment Strategy – Plans based on your risk profile and time horizon.",
      "Regular Reviews – Adjust strategies as your life or goals change.",
    ],
  },
  {
    id: 3,
    title: "INSURANCE PLANNING",
    img: insurancePlanning,
    alignLeft: true,
    icon: Heart,
    bullets1: [
      "Protect your family with the right insurance cover.",
      "Plan for life, health, and critical illness risks.",
    ],
    para: "A disciplined investment plan builds wealth steadily and reduces financial stress over time.",
    bullets2: [
      "Risk Identification – Identify life, health, or disability risks.",
      "Policy Evaluation – Review existing coverage for adequacy and cost-effectiveness.",
      "Coverage Recommendations – Fill gaps with unbiased suggestions.",
    ],
  },
  {
    id: 4,
    title: "EMERGENCY FUND PLANNING",
    img: emergencyPlanning,
    alignLeft: false,
    icon: Scale,
    bullets1: [
      "Calculate the right emergency fund size.",
      "Keep money easily accessible when needed.",
      "Avoid breaking long-term investments in crises.",
    ],
    para: "An emergency corpus acts as a financial safety net, providing quick access to funds when needed without disturbing other investments.",
    bullets2: [
      "Keep 6-12 months of essential expenses saved in liquid form.",
      "First step in a financial plan for peace of mind during tough times.",
    ],
  },
  {
    id: 5,
    title: "TAX PLANNING",
    img: taxPlanning,
    alignLeft: true,
    icon: Calculator,
    bullets1: [
      "Identify tax-saving opportunities.",
      "Invest in tax-efficient options.",
      "Plan for long-term tax benefits.",
    ],
    para: "Taxes can take away a significant part of your income if not planned properly. We help you save more legally and invest tax-efficiently.",
    bullets2: [
      "Income Tax Strategy – Reduce taxable income through exemptions & deductions.",
      "Tax-Efficient Investments – Maximise returns with tax-optimised options.",
      "Retirement Tax Strategy – Plan tax-efficient withdrawals post-retirement.",
    ],
  },
  {
    id: 6,
    title: "RISK PROFILING",
    img: riskProfiling,
    alignLeft: false,
    icon: Compass,
    bullets1: [
      "Assess your risk tolerance and profile.",
      "Align investments with your comfort level.",
    ],
    para: "Every investor has different risk tolerance. Understanding your risk appetite helps build a suitable investment portfolio.",
    bullets2: [
      "Risk Profiling – Understand your risk-taking capacity based on age, financial situation, and goals.",
      "Portfolio Diversification – Diversify to minimise risk.",
      "Adjust Over Time – As your financial situation and goals evolve, we adjust your profile.",
    ],
  },
];

export const faqCategories = [
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
        q: "Do recommend any specific platforms for investments?",
        a: "As a SEBI-registered advisor, we don’t sell products or take commissions. We suggest neutral, secure platforms that support direct and transparent investing."
      },
      {
        q: "Is income tax filing included in your services?",
        a: "No, we do not file income tax returns, but we guide you with tax-saving strategies as part of financial planning."
      }
    ]
  }
];

export const grievances = [
  { count: 0, text: "At the beginning of the month" },
  { count: 0, text: "Received During the Month" },
  { count: 0, text: "Resolved during the month" },
  { count: 0, text: "Pending at the end of the month" },
];

export const currentMonthGrievances = [
  { srNo: 1, receivedFrom: "Directly from", pendingLastMonth: 0, received: 0, resolved: 0, totalPending: 0, pendingOver3M: 0, avgResolutionTime: 0 },
  { srNo: 2, receivedFrom: "SEBI (SCORES)", pendingLastMonth: 0, received: 0, resolved: 0, totalPending: 0, pendingOver3M: 0, avgResolutionTime: 0 },
  { srNo: 3, receivedFrom: "Other Sources (if any)", pendingLastMonth: 0, received: 0, resolved: 0, totalPending: 0, pendingOver3M: 0, avgResolutionTime: 0 },
];

export const monthlyDisposalGrievances = [
  { srNo: 1, month: "Jan, 2026", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { srNo: 2, month: "Feb, 2026", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
  { srNo: 3, month: "Mar, 2026", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
];

export const annualDisposalGrievances = [
  { srNo: 1, year: "2026", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
];
