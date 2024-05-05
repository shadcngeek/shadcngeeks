import { Metadata } from "next";

import SimpleDocs from "@/components/documentation/simple";

export const metadata: Metadata = {
  title: "Documentation",
  description: "A Beautifully crafted documentation UI.",
};

export default function Page() {
  return <SimpleDocs />;
}
