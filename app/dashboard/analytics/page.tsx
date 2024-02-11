import { Metadata } from "next";

import AnalyticsDashboard from "@/components/dashboard/analytics/dashboard";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

export default function AnalyticsPage() {
  return <AnalyticsDashboard />;
}
