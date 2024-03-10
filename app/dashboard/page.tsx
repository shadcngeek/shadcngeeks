import { Metadata } from "next";

import DashboardPage from "@/components/www/components/dashboard";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "A list of beautifully designed dashboards.",
};

export default function page() {
  return <DashboardPage />;
}
