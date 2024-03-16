"use client";
import * as React from "react";

import { SearchUsers } from "./search-users";
import { MessageDisplay } from "./message-display";
import { Nav } from "./nav";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

interface ChatProps {
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
}

export function Chat({
  defaultLayout = [400, 440, 655],
  defaultCollapsed = false,
  navCollapsedSize,
}: ChatProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);

  return (
    <div>
      <div className="hidden md:block">
        <TooltipProvider delayDuration={0}>
          <ResizablePanelGroup
            direction="horizontal"
            onLayout={(sizes: number[]) => {
              document.cookie = `react-resizable-panels:layout=${JSON.stringify(
                sizes
              )}`;
            }}
            className="h-dvh md:h-full md:max-h-[90vh] items-stretch border dark:border-slate-800 rounded-lg"
          >
            <ResizablePanel
              defaultSize={defaultLayout[0]}
              collapsedSize={navCollapsedSize}
              collapsible={true}
              minSize={25}
              maxSize={50}
              // @ts-ignore
              onCollapse={(collapsed: any) => {
                setIsCollapsed(collapsed);
                document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                  collapsed
                )}`;
              }}
              className={cn(
                isCollapsed &&
                  "min-w-[50px] transition-all duration-300 ease-in-out"
              )}
            >
              <div
                className={cn(
                  "flex h-[52px] items-center justify-center",
                  isCollapsed ? "h-[52px]" : "px-2"
                )}
              >
                <SearchUsers />
              </div>
              <Separator />
              <Nav isCollapsed={isCollapsed} />
            </ResizablePanel>
            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={defaultLayout[2]}>
              <MessageDisplay />
            </ResizablePanel>
          </ResizablePanelGroup>
        </TooltipProvider>
      </div>
      <div className="block md:hidden">
        <Nav isSmallDevice />
      </div>
    </div>
  );
}
