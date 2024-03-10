import { Metadata } from "next";

import BodyBuilder from "@/components/landing-page/body-builder";

export const metadata: Metadata = {
  title: "Landing Page",
  description: "A beautifully crafted body builder page.",
};

export default function Page() {
  return <BodyBuilder />;
}
