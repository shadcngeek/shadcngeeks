import { Metadata } from "next";

import SettingsLayout from "@/components/forms/layout";

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
};

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: SettingsLayoutProps) {
  return <SettingsLayout>{children}</SettingsLayout>;
}
