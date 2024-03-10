"use client";
import React, { useEffect, useRef, useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Copy } from "./clipboard/copy";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { codeString } from "./data/code";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

function CodeTitle() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  let [code, setCode] = useState("");

  function typeWriter() {
    let i = 0;
    let text = "";
    const interval = setInterval(() => {
      if (i < codeString.length) {
        text += codeString.charAt(i);
        setCode(text);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 5);
  }

  useEffect(() => {
    typeWriter();
  }, []);

  return (
    <Card>
      <CardHeader className="pr-0 pb-0 pt-0 flex gap-5 flex-row justify-between items-center border-b dark:border-b-slate-800">
        <div className="flex gap-3 shrink-0">
          <p className="text-sm text-rose-500">Tailwind config</p>
        </div>
        <div className="bg-slate-100 dark:bg-slate-900 p-2 w-full border border-b-0 border-r-0 dark:border-slate-800 rounded-tl-lg">
          <CopyToClipboard text={codeString}>
            <div className="w-fit ml-auto">
              <Copy />
            </div>
          </CopyToClipboard>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <ScrollArea className="p-0 w-full">
          <div
            role="button"
            tabIndex={0}
            onKeyDown={() => textareaRef.current?.focus()}
            onClick={() => textareaRef.current?.focus()}
            className="relative flex w-[3070px]"
          >
            <Textarea
              spellCheck={false}
              className="rounded-none ring-0 focus-visible:ring-0 border-none pl-11 h-full w-[3070px] absolute inset-0  text-[1em] font-mono resize-none bg-transparent dark:bg-transparent text-transparent dark:caret-white caret-slate-950 outline-none"
              ref={textareaRef}
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <SyntaxHighlighter
              showLineNumbers
              language="javascript"
              style={atomOneDarkReasonable}
              customStyle={{ backgroundColor: "transparent", flex: 1 }}
            >
              {code}
            </SyntaxHighlighter>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

export default CodeTitle;
