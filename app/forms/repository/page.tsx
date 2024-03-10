import { Metadata } from "next";

import Repository from "@/components/forms/repository";

export const metadata: Metadata = {
  title: "Form",
  description: "A beautiful form for creating a repository.",
};

export default function Page() {
  return <Repository />;
}
