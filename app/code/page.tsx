import React from "react";

import CodePreviewPage from "@/components/www/components/code";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calender",
  description: "A list of predesigned code preview UI's.",
};

function Page() {
  return <CodePreviewPage />;
}

export default Page;
