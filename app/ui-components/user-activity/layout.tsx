import { Metadata } from "next";

import UserActivityLayout from "@/components/dashboard/user-activity/layout";

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
};

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: SettingsLayoutProps) {
  return <UserActivityLayout>{children}</UserActivityLayout>;
}
