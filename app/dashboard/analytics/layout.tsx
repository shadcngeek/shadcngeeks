import { Metadata } from "next";

import AnalyticsLayout from "@/components/dashboard/analytics/layout";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "A beautifully designed dashboard",
};

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: SettingsLayoutProps) {
  return <AnalyticsLayout>{children}</AnalyticsLayout>;
}
