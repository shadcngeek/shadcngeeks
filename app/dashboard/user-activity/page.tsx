import { Metadata } from "next";

import UserActivity from "@/components/dashboard/user-activity/dashboard";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

export default function AnalyticsPage() {
  return <UserActivity />;
}
