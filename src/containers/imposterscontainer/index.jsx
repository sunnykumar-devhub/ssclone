import React from "react";
import { AlertTriangle, ShieldAlert, CheckCircle, XCircle, Info, Mail, Smartphone } from "lucide-react";
import PageContainer from "@/components/layout/pagecontainer";
import SectionContainer from "@/components/layout/sectioncontainer";
import GridContainer from "@/components/layout/gridcontainer";

export default function ImpostersContainer() {
  return (
    <PageContainer bg="bg-zinc-50">
      <SectionContainer className="flex flex-col gap-12" headerClass="mb-0">
        
        {/* Top Header Alert Banner */}
        <div className="bg-red-50 border border-red-100 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-left shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-100/60 border border-red-200 flex items-center justify-center text-[#e11d48] shrink-0">
              <ShieldAlert className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <h1 className="text-xl font-black text-zinc-950 tracking-tight">Beware of Imposters</h1>
              <p className="text-xs text-red-700 font-bold mt-0.5">Crucial fraud warnings & investor safety precautions</p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 md:p-10 shadow-sm text-left flex flex-col gap-5">
          <h3 className="text-lg font-black text-zinc-950">Protecting Your Wealth from Fraud</h3>
          <p className="text-sm text-zinc-600 leading-relaxed font-semibold">
            When it comes to money decisions, a bit of caution can save you from serious loss.
          </p>
          <p className="text-sm text-zinc-650 leading-relaxed font-medium">
            There have been instances where fraudsters impersonate SEBI Registered Investment Advisers (RIAs) and trick investors into transferring money. These scammers misuse the identity of genuine advisers and disappear with your funds—causing both financial loss and reputational damage.
          </p>
          <div className="p-4 bg-blue-50/40 rounded-xl border border-blue-100 text-xs md:text-sm text-[#0a4a83] font-bold">
            👉 It is extremely important to ensure you are dealing with a genuine SEBI Registered Investment Adviser.
          </div>
        </div>

        {/* Grid: How Fraudsters Trick People & What You Should NOT Do */}
        <GridContainer cols={2} gap={8} className="text-left">
          {/* How Fraudsters Trick People */}
          <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 shadow-sm flex flex-col gap-5">
            <h3 className="text-base font-black text-zinc-950 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#e11d48]" />
              How Do Fraudsters Trick People?
            </h3>
            <p className="text-xs text-zinc-500 font-semibold leading-relaxed">
              Fraudsters constantly evolve their methods, but common tactics include:
            </p>
            <ul className="flex flex-col gap-3 pl-1 text-xs text-zinc-650 font-bold leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e11d48] mt-2 shrink-0" />
                <span>Creating fake profiles on platforms like Twitter, Telegram, Instagram, and Facebook</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e11d48] mt-2 shrink-0" />
                <span>Posting fake performance screenshots and promising unrealistic returns</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e11d48] mt-2 shrink-0" />
                <span>Contacting investors via phone, email, or social media pretending to be RIAs</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e11d48] mt-2 shrink-0" />
                <span>Using names and credentials of real SEBI-registered advisers</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e11d48] mt-2 shrink-0" />
                <span>Offering high-return schemes and asking for money transfers</span>
              </li>
            </ul>
            <div className="mt-auto pt-4 border-t border-zinc-100 text-[11px] text-[#e11d48] font-bold">
              ❗ These fraudsters misuse trust and credibility to steal your money.
            </div>
          </div>

          {/* What You Should NOT Do */}
          <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 shadow-sm flex flex-col gap-5">
            <h3 className="text-base font-black text-zinc-950 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-[#e11d48]" />
              What You Should NOT Do
            </h3>
            <ul className="flex flex-col gap-3.5 pl-1 text-xs text-zinc-650 font-bold leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
                <span>Investment advisers must be registered with SEBI</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
                <span>An Investment Advisory Agreement is mandatory before any advice or fee</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
                <span>Risk profiling must be conducted before giving advice</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
                <span>RIAs cannot hold or manage your money</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
                <span>RIAs cannot trade on your behalf or accept Power of Attorney</span>
              </li>
            </ul>
          </div>
        </GridContainer>

        {/* Fee Structure */}
        <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 md:p-10 shadow-sm text-left flex flex-col gap-5">
          <h3 className="text-base font-black text-zinc-950 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#0a4a83]" />
            Fee Structure (as per SEBI limits)
          </h3>
          <GridContainer cols={2} gap={4} className="text-xs md:text-sm font-bold text-zinc-755 text-center">
            <div className="p-4 bg-zinc-50 border border-zinc-150 rounded-xl flex flex-col gap-1">
              <span className="text-[10px] text-zinc-450 uppercase tracking-wider">Fixed Fee Structure</span>
              <span className="text-lg font-black text-[#0a4a83]">Maximum ₹1.25 Lakh per year</span>
            </div>
            <div className="p-4 bg-zinc-50 border border-zinc-150 rounded-xl flex flex-col gap-1">
              <span className="text-[10px] text-zinc-450 uppercase tracking-wider">Asset-Based Fee Structure</span>
              <span className="text-lg font-black text-[#0a4a83]">Maximum 2.5% per year</span>
            </div>
          </GridContainer>
          <div className="p-3.5 bg-red-50/40 border border-red-100 rounded-xl text-center text-xs text-[#e11d48] font-bold">
            ❌ Profit-sharing models are strictly NOT allowed
          </div>
        </div>

        {/* You Are Dealing With a Fraudster If */}
        <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 md:p-10 shadow-sm text-left flex flex-col gap-6">
          <h3 className="text-base font-black text-zinc-950 flex items-center gap-2">
            <XCircle className="w-5 h-5 text-[#e11d48]" />
            You Are Dealing With a Fraudster If:
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-1 text-xs text-zinc-650 font-bold leading-relaxed">
            {[
              "They are not registered with SEBI",
              "They don’t sign an agreement before offering advice",
              "They ask you to transfer investment money to their account",
              "They promise guaranteed or unusually high returns",
              "They offer profit-sharing models",
              "They charge fees beyond SEBI limits"
            ].map((rule, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-3 bg-red-50/20 border border-red-100/50 rounded-xl">
                <span className="w-2 h-2 rounded-full bg-[#e11d48] shrink-0" />
                <span>{rule}</span>
              </div>
            ))}
          </ul>
        </div>

        {/* What You Must Do */}
        <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 md:p-10 shadow-sm text-left flex flex-col gap-5">
          <h3 className="text-base font-black text-zinc-950 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#0a4a83]" />
            What You Must Do
          </h3>
          <ul className="flex flex-col gap-3 pl-1 text-xs text-zinc-650 font-bold leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-2 shrink-0" />
              <span>Verify SEBI registration details before engaging with any advisor</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-2 shrink-0" />
              <span>Ask for their official SEBI registration number (e.g. INA000020864)</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-2 shrink-0" />
              <span>Cross-check their registration details directly on the SEBI website</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-2 shrink-0" />
              <span>Only communicate through official contact details listed on SEBI's portal</span>
            </li>
          </ul>
        </div>

        {/* If You Are My Client */}
        <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 md:p-10 shadow-sm text-left flex flex-col gap-6">
          <h3 className="text-base font-black text-[#0a4a83] flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-[#0a4a83]" />
            If You Are My Client (or Considering My Services)
          </h3>
          <ul className="flex flex-col gap-3 pl-1 text-xs text-zinc-650 font-bold leading-relaxed border-b border-zinc-100 pb-5">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-2 shrink-0" />
              <span>I will sign an Investment Advisory Agreement before charging any fee</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-2 shrink-0" />
              <span>I will conduct proper risk profiling before giving advice</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-2 shrink-0" />
              <span>I offer only financial planning and investment advisory services</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-2 shrink-0" />
              <span>I do NOT provide stock tips or recommendations</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0a4a83] mt-2 shrink-0" />
              <span>I will NEVER ask you to transfer investment money to me</span>
            </li>
          </ul>
          <div className="p-4 bg-blue-50/40 border border-blue-100 rounded-xl text-center text-xs text-[#0a4a83] font-bold">
            👉 The only payment between us will be the advisory fee.
          </div>
        </div>

        {/* Payment & Communication Policy */}
        <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 md:p-10 shadow-sm text-left flex flex-col gap-6">
          <h3 className="text-base font-black text-zinc-950 flex items-center gap-2">
            <Mail className="w-5 h-5 text-[#0a4a83]" />
            Payment & Communication Policy
          </h3>
          <ul className="flex flex-col gap-3.5 pl-1 text-xs text-zinc-650 font-bold leading-relaxed border-b border-zinc-100 pb-5">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
              <span>Fee requests are sent only through official email (sujansingh20@gmail.com)</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
              <span>Email IDs will be mentioned in the agreement</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
              <span>I do NOT request payments via social media platforms</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
              <span>WhatsApp reminders (if any) will always reference official email communications</span>
            </li>
          </ul>

          <h4 className="text-xs font-black uppercase text-[#e11d48] tracking-wider mt-2">
            Be Suspicious If You Receive:
          </h4>
          <GridContainer cols={2} gap={3} className="text-xs font-semibold text-zinc-600">
            <div className="p-3 bg-red-50/10 border border-red-100/50 rounded-xl">Payment requests on social media</div>
            <div className="p-3 bg-red-50/10 border border-red-100/50 rounded-xl">Messages claiming urgency or distress</div>
            <div className="p-3 bg-red-50/10 border border-red-100/50 rounded-xl">Unusual or unexpected payment requests</div>
            <div className="p-3 bg-red-50/10 border border-red-100/50 rounded-xl">Messages with different tone/language than usual</div>
          </GridContainer>
        </div>

        {/* UPI Safety */}
        <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 md:p-10 shadow-sm text-left flex flex-col gap-4">
          <h3 className="text-base font-black text-zinc-950 flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-[#0a4a83]" />
            Important UPI Safety Note
          </h3>
          <p className="text-xs text-zinc-500 font-semibold leading-relaxed">
            Fraudsters can copy profile photos and use similar UPI IDs to deceive investors.
          </p>
          <div className="p-4 bg-red-50/40 border border-red-100 rounded-xl text-center text-xs text-[#e11d48] font-bold">
            👉 Do NOT rely only on name/photo while making payments.
          </div>
        </div>

        {/* When in Doubt */}
        <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 md:p-10 shadow-sm text-left flex flex-col gap-4">
          <h3 className="text-base font-black text-zinc-950 flex items-center gap-2">
            <Info className="w-5 h-5 text-[#0a4a83]" />
            When in Doubt
          </h3>
          <p className="text-xs text-zinc-550 font-semibold leading-relaxed">
            If something feels suspicious or you receive an unusual request:
          </p>
          <div className="p-4 bg-blue-50/40 border border-blue-100 rounded-xl text-center text-xs text-[#0a4a83] font-bold">
            👉 Call me directly before taking any action
          </div>
        </div>

        {/* Final alert */}
        <div className="bg-zinc-950 rounded-2xl p-8 md:p-10 text-white text-left flex flex-col gap-5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.08)_0%,transparent_60%)] pointer-events-none" />
          <h3 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-amber-400" />
            Final Note & Safety Commitment
          </h3>
          <div className="flex flex-col gap-3.5 text-xs font-semibold text-zinc-400 pl-2 leading-relaxed border-b border-zinc-800 pb-5">
            <p>I am not a cybersecurity expert, and fraudsters constantly evolve new tricks. It is not possible to list every scam method.</p>
            <p className="text-white font-bold">👉 Your awareness is your best protection.</p>
          </div>
          <h4 className="text-sm font-black text-center text-amber-400 uppercase tracking-widest mt-2">
            Stay Alert. Stay Vigilant.
          </h4>
        </div>

      </SectionContainer>
    </PageContainer>
  );
}
