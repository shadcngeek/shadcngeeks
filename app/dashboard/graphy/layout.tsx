import { Metadata } from "next";

import GraphyLayout from "@/components/dashboard/graphy/layout";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "A beautifully designed dashboard",
};

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: SettingsLayoutProps) {
  return <GraphyLayout>{children}</GraphyLayout>;
}
