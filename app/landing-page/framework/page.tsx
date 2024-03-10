import { Metadata } from "next";

import Framework from "@/components/landing-page/framework";

export const metadata: Metadata = {
  title: "Landing Page",
  description: "A beautifully crafted landing page.",
};

export default function Page() {
  return <Framework />;
}
