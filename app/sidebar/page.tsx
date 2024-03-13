import React from "react";
import { Metadata } from "next";

import SidebarPage from "@/components/www/components/sidebar";

export const metadata: Metadata = {
  title: "Sidebar",
  description: "A list of beautifully crafted sidebars.",
};

function Page() {
  return <SidebarPage />;
}

export default Page;
