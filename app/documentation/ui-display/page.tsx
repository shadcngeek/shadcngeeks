import React from "react";
import { Metadata } from "next";

import UIDisplayDocs from "@/components/documentation/ui-display";

export const metadata: Metadata = {
  title: "Documentation",
  description: "A Beautifully crafted documentation UI.",
};

function Page() {
  return <UIDisplayDocs />;
}

export default Page;
