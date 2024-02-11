import { Metadata } from "next";

import GraphyLayout from "@/components/dashboard/graphy/layout";

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
};

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: SettingsLayoutProps) {
  return <GraphyLayout>{children}</GraphyLayout>;
}
