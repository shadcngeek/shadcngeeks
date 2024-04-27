import { Metadata } from "next";

import MasterPieceDocs from "@/components/documentation/master-piece";

import React from "react";

export const metadata: Metadata = {
  title: "Documentation",
  description: "A Beautifully crafted documentation UI.",
};

function Page() {
  return <MasterPieceDocs />;
}

export default Page;
