import React from "react";
import GrievancesContainer from "@/containers/grievancescontainer";

export const metadata = {
  title: "SEBI Grievances Status - Sujan Singh",
  description: "Check the comprehensive grievance redressal status, monthly trend of complaints, and annual disposal statistics of Sujan Singh, SEBI-registered adviser.",
};

export default function Grievances() {
  return <GrievancesContainer />;
}
