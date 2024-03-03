"use client";

import { createPortal } from "react-dom";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

import { QuoteTypes } from "./types";

export function Quote({ children, fullName, jobTitle, quote }: QuoteTypes) {
  return (
    <>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button
            variant="outline"
            className="w-fit h-fit dark:bg-transparent border-none dark:border-none hover:bg-transparent dark:hover:bg-transparent rounded-full"
          >
            {children}
          </Button>
        </HoverCardTrigger>
        {createPortal(
          <HoverCardContent className="w-80 !z-[777]">
            <div className="">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">{fullName}</h4>
                <p className="text-sm">{quote}</p>
                <div className="pt-2">
                  <span className="text-xs text-muted-foreground">
                    {jobTitle}
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>,
          document.body
        )}
      </HoverCard>
    </>
  );
}
