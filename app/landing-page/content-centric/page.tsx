import { Metadata } from "next";

import Landing from "@/components/landing-page/content-centric";

export const metadata: Metadata = {
  title: "Landing Page",
  description: "A beautifully crafted landing page.",
};

export default function Page() {
  return <Landing />;
}
