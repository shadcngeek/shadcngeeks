import { Metadata } from "next";

import ComingSoonClassic from "@/components/coming-soon/classic";

export const metadata: Metadata = {
  title: "Coming soon",
  description: "Coming soon page example.",
};

export default function Page() {
  return <ComingSoonClassic />;
}
