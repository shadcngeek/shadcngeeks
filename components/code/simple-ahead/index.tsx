import React from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { codeString } from "./data/code";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

function SimpleAheadPreview() {
  return (
    <Card>
      <CardHeader>
        <div className="flex gap-3">
          <div className="w-4 h-4 rounded-full bg-rose-500"></div>
          <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <ScrollArea className="p-0 w-full">
          <SyntaxHighlighter
            showLineNumbers
            language="javascript"
            style={atomOneDarkReasonable}
            customStyle={{
              overflowX: "unset",
              backgroundColor: "transparent",
            }}
          >
            {codeString}
          </SyntaxHighlighter>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

export default SimpleAheadPreview;
