import { Metadata } from "next";

import { ScrollArea } from "@/components/ui/scroll-area";

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
};

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function AnalyticsLayout({ children }: SettingsLayoutProps) {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-950 dark:text-slate-50 p-4">
      <div className="h-full w-full rounded-md border border-slate-200 dark:border-slate-800">
        <div className="space-y-6 p-4 lg:p-10 lg:pb-16">
          <div className="lg:flex-row lg:space-x-12 lg:space-y-0">
            <div className="flex-1">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
