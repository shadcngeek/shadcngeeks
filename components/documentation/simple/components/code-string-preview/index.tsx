"use client";
import React from "react";

import { Terminal } from "lucide-react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { Copy } from "./clipboard/copy";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

function CodeStringPreview({ codeString }: { codeString: string }) {
  return (
    <Card className="max-w-[1000px] relative">
      <CardHeader className="pr-0 pb-0 pt-0 flex gap-5 flex-row justify-between items-center border-b dark:border-b-slate-800">
        <div className="flex gap-3 shrink-0 items-center text-slate-700 dark:text-slate-400">
          <Terminal className="w-5 h-4" />
          <p className="text-sm">Terminal</p>
        </div>
        <div className="bg-slate-100 dark:bg-slate-900 p-2 md:w-full border border-b-0 border-r-0 dark:border-slate-800 rounded-tl-lg">
          <CopyToClipboard text={codeString}>
            <div className="w-fit mx-auto sm:mx-0 sm:ml-auto">
              <Copy />
            </div>
          </CopyToClipboard>
        </div>
      </CardHeader>
      <ScrollArea className="w-full h-full">
        <CardContent className="p-6 relative pr-[30px] whitespace-nowrap">
          {codeString}
        </CardContent>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </Card>
  );
}

export default CodeStringPreview;