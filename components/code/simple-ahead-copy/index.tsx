"use client";
import React from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Copy } from "./clipboard/copy";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { codeString } from "./data/code";
import { ScrollArea } from "@/components/ui/scroll-area";

function SimpleAheadCopy() {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-center">
        <div className="flex gap-3">
          <div className="w-4 h-4 rounded-full bg-rose-500"></div>
          <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
        </div>
        <CopyToClipboard text={codeString}>
          <div>
            <Copy />
          </div>
        </CopyToClipboard>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <ScrollArea className="p-0 w-full">
          <SyntaxHighlighter
            showLineNumbers
            language="javascript"
            style={atomOneDarkReasonable}
            customStyle={{
              backgroundColor: "transparent",
              overflowX: "unset",
            }}
          >
            {codeString}
          </SyntaxHighlighter>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

export default SimpleAheadCopy;
