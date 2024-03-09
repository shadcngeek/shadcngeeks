import { Metadata } from "next";
import Image from "next/image";

import Download from "../../download/download";
import { Separator } from "@/components/ui/separator";
import handleGetFolderPath from "@/actions/handleGetFolderPath";
import { SidebarNav } from "@/components/forms/settings/components/sidebar-nav";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
};

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "#",
  },
  {
    title: "Analytics",
    href: "#",
  },
  {
    title: "Orders",
    href: "#",
  },
  {
    title: "Products",
    href: "#",
  },
  {
    title: "Customers",
    href: "#",
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function GraphyLayout({ children }: SettingsLayoutProps) {
  return (
    <div className="px-[150px] bg-white dark:bg-slate-950 text-slate-950 dark:text-slate-50 p-10 pb-16">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[200px] rounded-lg border border-slate-200 dark:border-slate-800"
      >
        <ResizablePanel className="p-8" defaultSize={12}>
          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight">ShadcnGeeks</h2>
            <p className="text-sm text-muted-foreground text-slate-700 dark:text-slate-400">
              Manage your account settings and set e-mail preferences.
            </p>
          </div>
          <Separator className="my-6" />
          <aside className="-mx-4">
            <SidebarNav items={sidebarNavItems} />
          </aside>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75} className="h-[90vh]">
          <ScrollArea className="h-full w-full rounded-md border border-slate-200 dark:border-slate-800">
            <div className="hidden space-y-6 p-10 pb-16 md:block">
              <div className="lg:flex-row lg:space-x-12 lg:space-y-0">
                <div className="flex-1">{children}</div>
              </div>
            </div>
          </ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
