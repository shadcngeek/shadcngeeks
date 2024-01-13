import { Metadata } from "next";
import Dashboard from "@/components/dashboard/dashboard";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

export default function DashboardPage() {
  return <Dashboard />;
}
