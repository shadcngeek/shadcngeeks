import { Metadata } from "next";

import UserActivityLayout from "@/components/dashboard/user-activity/layout";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "A beautifully designed dashboard",
};

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: SettingsLayoutProps) {
  return <UserActivityLayout>{children}</UserActivityLayout>;
}
