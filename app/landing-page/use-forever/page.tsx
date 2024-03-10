import { Metadata } from "next";

import UseForever from "@/components/landing-page/use-forever";

export const metadata: Metadata = {
  title: "Landing Page",
  description: "A beautifully crafted landing page.",
};

export default function Page() {
  return <UseForever />;
}
