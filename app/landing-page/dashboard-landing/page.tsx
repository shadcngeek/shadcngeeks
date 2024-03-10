import { Metadata } from "next";

import DashboardLanding from "@/components/landing-page/dashboard-landing";

export const metadata: Metadata = {
  title: "Landing Page",
  description: "A beautifully crafted landing page with a dashboard preview.",
};

export default function Page() {
  return <DashboardLanding />;
}
