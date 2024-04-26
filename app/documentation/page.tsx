import { Metadata } from "next";

import DocumentationPage from "@/components/www/components/documentation";

export const metadata: Metadata = {
  title: "Documentation",
  description: "A list of beautifully crafted documentation UI's.",
};

export default function Page() {
  return <DocumentationPage />;
}
