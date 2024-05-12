import React from "react";

import CodePreview from "../code-preview";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { PaymentMethod, PriceUI, Snippet } from "@/.contentlayer/generated";

export function CodePreviewTabs({
  snippet,
  children,
}: {
  children: React.ReactNode;
  snippet: Snippet | PriceUI | PaymentMethod;
}) {
  return (
    <Tabs defaultValue="preview" className="">
      <TabsList className="grid max-w-[300px] grid-cols-2 bg-transparent dark:bg-transparent">
        <TabsTrigger
          className="rounded-none data-[state=active]:border-b data-[state=active]:shadow-none data-[state=active]:bg-transparent dark:data-[state=active]:bg-transparent"
          value="preview"
        >
          Preview
        </TabsTrigger>
        <TabsTrigger
          className="data-[state=active]:border-b data-[state=active]:shadow-none data-[state=active]:bg-transparent dark:data-[state=active]:bg-transparent"
          value="code"
        >
          Code
        </TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <Card className="max-w-[1000px]">
          <CardContent className="p-4 md:p-10 lg:p-20">{children}</CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="code">
        <CodePreview snippet={snippet} />
      </TabsContent>
    </Tabs>
  );
}
