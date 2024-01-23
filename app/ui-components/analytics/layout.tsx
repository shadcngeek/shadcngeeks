import { Metadata } from "next";

import AnalyticsLayout from "@/components/dashboard/analytics/layout";

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
};

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: SettingsLayoutProps) {
  return <AnalyticsLayout>{children}</AnalyticsLayout>;
}
