import { Metadata } from "next";

import HeadersPage from "@/components/www/components/headers";

export const metadata: Metadata = {
  title: "Headers",
  description: "Beautifully crafted headers.",
};

export default function Headers() {
  return <HeadersPage />;
}
