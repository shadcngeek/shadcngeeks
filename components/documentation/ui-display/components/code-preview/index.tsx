"use client";
import React from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { useMDXComponent } from "next-contentlayer/hooks";

import { Copy } from "./clipboard/copy";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { CodePreviewType } from "../../types";

function CodePreview({ snippet }: CodePreviewType) {
  const MDXContent: any = useMDXComponent(snippet.body.code);
  const stringified = JSON.stringify(snippet.body.raw);
  const regex = /^\n```\n|```\n$/g;
  const codeString = JSON.parse(stringified).replace(regex, "");

  return (
    <Card className="max-w-[1000px] relative h-[500px]">
      <ScrollArea className="w-full h-full">
        <CardContent className="p-6 relative pr-[30px] h-[300px]">
          <div className="absolute w-{100%} h-{100%}">
            <MDXContent />
          </div>
        </CardContent>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="absolute top-3 right-3">
        <CopyToClipboard text={codeString}>
          <div className="w-fit">
            <Copy />
          </div>
        </CopyToClipboard>
      </div>
    </Card>
  );
}

export default CodePreview;
