import { Metadata } from "next";
import GraphyDashboard from "@/components/dashboard/graphy/dashboard";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

export default function GraphyPage() {
  return <GraphyDashboard />;
}
