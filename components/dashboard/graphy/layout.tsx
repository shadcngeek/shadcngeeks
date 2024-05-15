import { Metadata } from "next";
import Image from "next/image";

import {
  ResizablePanel,
  ResizableHandle,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "@/components/forms/settings/components/sidebar-nav";
import { ScrollArea } from "./custom-radix/scroll-area";

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
    <div className="bg-white dark:bg-slate-950 text-slate-950 dark:text-slate-50 p-4 xl:p-10 xl:pb-16 xl:px-[150px]">
      <div className="sm:hidden dark:text-white">
        <Image
          width={1280}
          height={866}
          alt="Playground"
          src="/images/www/graphy.png"
        />

        <p className="text-slate-700 text-sm">
          This UI is not available for small screen devices yet. Please, switch
          to a large screen device.
        </p>
      </div>

      <div className="hidden lg:block ">
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
          <ResizablePanel className="h-[90vh]">
            <ScrollArea className="h-full w-full rounded-md border border-slate-200 dark:border-slate-800">
              <div className="space-y-6 p-10 pb-16 !w-[100%]">
                <div className="lg:flex-row lg:space-x-12 lg:space-y-0">
                  <div className="flex-1">{children}</div>
                </div>
              </div>
            </ScrollArea>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
