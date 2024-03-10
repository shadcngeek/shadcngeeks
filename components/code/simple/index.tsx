import React from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { codeString } from "./data/code";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

function SimplePreview() {
  return (
    <Card>
      <CardContent className="p-6">
        <ScrollArea className="p-0 w-full">
          <SyntaxHighlighter
            showLineNumbers
            language="javascript"
            style={atomOneDarkReasonable}
            customStyle={{ backgroundColor: "transparent", overflowX: "unset" }}
          >
            {codeString}
          </SyntaxHighlighter>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

export default SimplePreview;
