import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { currentMonthGrievances, monthlyDisposalGrievances, annualDisposalGrievances } from "@/constants/data";
import PageContainer from "@/components/layout/pagecontainer";
import SectionContainer from "@/components/layout/sectioncontainer";

export default function GrievancesContainer() {
  return (
    <PageContainer bg="bg-zinc-50">
      <SectionContainer className="flex flex-col gap-12" headerClass="mb-0">
        
        {/* Top Header Navigation Banner */}
        <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="flex items-center gap-4">
            <Link 
              href="/disclosures"
              className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-[#0a4a83] hover:bg-zinc-100 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-xl font-black text-zinc-950 tracking-tight">Grievance Redressal status</h1>
              <p className="text-xs text-zinc-500 font-semibold mt-0.5">SEBI Registered Investment Adviser Investor grievances</p>
            </div>
          </div>
        </div>

        {/* Table 1: Data for the month ending */}
        <div className="bg-white border border-zinc-200/80 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-6">
          <div className="text-left w-full">
            <h2 className="text-xs font-black uppercase tracking-[0.12em] text-[#0a4a83]">
              DATA FOR THE MONTH ENDING – 31.10.2025
            </h2>
          </div>
          <div className="overflow-x-auto border border-zinc-200/80 rounded-xl bg-zinc-50/50">
            <table className="w-full text-left border-collapse text-[10px] md:text-xs font-bold min-w-[800px]">
              <thead>
                <tr className="bg-zinc-100 border-b border-zinc-200 text-zinc-600 uppercase tracking-wider">
                  <th className="p-3 text-center w-16">Sr. No</th>
                  <th className="p-3">Received From</th>
                  <th className="p-3 text-center">Pending at the end of last Month</th>
                  <th className="p-3 text-center">Received</th>
                  <th className="p-3 text-center">Resolved</th>
                  <th className="p-3 text-center">Total Pending</th>
                  <th className="p-3 text-center">Pending Complaints &gt; 3 Month</th>
                  <th className="p-3 text-center">Average Resolution Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200/60 text-zinc-750">
                {currentMonthGrievances.map((row) => (
                  <tr key={row.srNo} className="hover:bg-white transition-colors">
                    <td className="p-3 text-center text-zinc-500 font-semibold">{row.srNo}</td>
                    <td className="p-3 text-zinc-950 font-black">{row.receivedFrom}</td>
                    <td className="p-3 text-center font-extrabold text-zinc-900">{row.pendingLastMonth}</td>
                    <td className="p-3 text-center font-extrabold text-zinc-900">{row.received}</td>
                    <td className="p-3 text-center font-extrabold text-zinc-900">{row.resolved}</td>
                    <td className="p-3 text-center font-extrabold text-zinc-900">{row.totalPending}</td>
                    <td className="p-3 text-center font-extrabold text-zinc-900">{row.pendingOver3M}</td>
                    <td className="p-3 text-center font-extrabold text-zinc-900">{row.avgResolutionTime}</td>
                  </tr>
                ))}
                {/* Grand Total Row */}
                <tr className="bg-zinc-100/60 font-black border-t-2 border-zinc-200 text-zinc-950">
                  <td className="p-3 text-center"></td>
                  <td className="p-3 uppercase tracking-wider text-[11px]">Grand Total</td>
                  <td className="p-3 text-center text-sm">0</td>
                  <td className="p-3 text-center text-sm">0</td>
                  <td className="p-3 text-center text-sm">0</td>
                  <td className="p-3 text-center text-sm">0</td>
                  <td className="p-3 text-center text-sm">0</td>
                  <td className="p-3 text-center text-sm">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 2: Trend of monthly disposal */}
        <div className="bg-white border border-zinc-200/80 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-6">
          <div className="text-left w-full">
            <h2 className="text-xs font-black uppercase tracking-[0.12em] text-[#0a4a83]">
              TREND OF MONTHLY DISPOSAL OF COMPLAINTS
            </h2>
          </div>
          <div className="overflow-x-auto border border-zinc-200/80 rounded-xl bg-zinc-50/50">
            <table className="w-full text-left border-collapse text-[10px] md:text-xs font-bold min-w-[600px]">
              <thead>
                <tr className="bg-zinc-100 border-b border-zinc-200 text-zinc-600 uppercase tracking-wider">
                  <th className="p-3 text-center w-16">Sr. No</th>
                  <th className="p-3">Month</th>
                  <th className="p-3 text-center">Carried forward From Previous Month</th>
                  <th className="p-3 text-center">Received</th>
                  <th className="p-3 text-center">Resolved</th>
                  <th className="p-3 text-center">Pending</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200/60 text-zinc-750">
                {monthlyDisposalGrievances.map((row) => (
                  <tr key={row.srNo} className="hover:bg-white transition-colors">
                    <td className="p-3 text-center text-zinc-500 font-semibold">{row.srNo}</td>
                    <td className="p-3 text-zinc-950 font-black">{row.month}</td>
                    <td className="p-3 text-center font-extrabold text-zinc-900">{row.carriedForward}</td>
                    <td className="p-3 text-center font-extrabold text-zinc-900">{row.received}</td>
                    <td className="p-3 text-center font-extrabold text-zinc-900">{row.resolved}</td>
                    <td className="p-3 text-center font-extrabold text-zinc-900">{row.pending}</td>
                  </tr>
                ))}
                {/* Grand Total Row */}
                <tr className="bg-zinc-100/60 font-black border-t-2 border-zinc-200 text-zinc-950">
                  <td className="p-3 text-center"></td>
                  <td className="p-3 uppercase tracking-wider text-[11px]">Grand Total</td>
                  <td className="p-3 text-center text-sm">0</td>
                  <td className="p-3 text-center text-sm">0</td>
                  <td className="p-3 text-center text-sm">0</td>
                  <td className="p-3 text-center text-sm">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 3: Trend of annual disposal */}
        <div className="bg-white border border-zinc-200/80 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-6">
          <div className="text-left w-full">
            <h2 className="text-xs font-black uppercase tracking-[0.12em] text-[#0a4a83]">
              TREND OF ANNUAL DISPOSAL OF COMPLAINTS
            </h2>
          </div>
          <div className="overflow-x-auto border border-zinc-200/80 rounded-xl bg-zinc-50/50">
            <table className="w-full text-left border-collapse text-[10px] md:text-xs font-bold min-w-[600px]">
              <thead>
                <tr className="bg-zinc-100 border-b border-zinc-200 text-zinc-600 uppercase tracking-wider">
                  <th className="p-3 text-center w-16">Sr. No</th>
                  <th className="p-3">Year</th>
                  <th className="p-3 text-center">Carried Forward from Previous Year</th>
                  <th className="p-3 text-center">Received</th>
                  <th className="p-3 text-center">Resolved</th>
                  <th className="p-3 text-center">Pending</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200/60 text-zinc-750">
                {annualDisposalGrievances.map((row) => (
                  <tr key={row.srNo} className="hover:bg-white transition-colors">
                    <td className="p-3 text-center text-zinc-500 font-semibold">{row.srNo}</td>
                    <td className="p-3 text-zinc-950 font-black">{row.year}</td>
                    <td className="p-3 text-center font-extrabold text-zinc-900">{row.carriedForward}</td>
                    <td className="p-3 text-center font-extrabold text-zinc-900">{row.received}</td>
                    <td className="p-3 text-center font-extrabold text-zinc-900">{row.resolved}</td>
                    <td className="p-3 text-center font-extrabold text-zinc-900">{row.pending}</td>
                  </tr>
                ))}
                {/* Grand Total Row */}
                <tr className="bg-zinc-100/60 font-black border-t-2 border-zinc-200 text-zinc-950">
                  <td className="p-3 text-center"></td>
                  <td className="p-3 uppercase tracking-wider text-[11px]">Grand Total</td>
                  <td className="p-3 text-center text-sm">0</td>
                  <td className="p-3 text-center text-sm">0</td>
                  <td className="p-3 text-center text-sm">0</td>
                  <td className="p-3 text-center text-sm">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </SectionContainer>
    </PageContainer>
  );
}
