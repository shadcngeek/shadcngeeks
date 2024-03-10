import { Metadata } from "next";

import Classic from "@/components/forms/classic";

export const metadata: Metadata = {
  title: "Form",
  description: "A beautiful classic form.",
};

export default function Page() {
  return <Classic />;
}
