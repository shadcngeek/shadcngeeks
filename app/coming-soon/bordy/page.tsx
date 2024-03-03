import { Metadata } from "next";

import ComingSoon from "@/components/coming-soon/bordy";

export const metadata: Metadata = {
  title: "Coming soon",
  description: "Coming soon page example.",
};

export default function Page() {
  return <ComingSoon />;
}
