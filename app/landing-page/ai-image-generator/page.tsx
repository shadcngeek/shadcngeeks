import { Metadata } from "next";

import AI from "@/components/landing-page/ai-image-generator";

export const metadata: Metadata = {
  title: "Landing Page",
  description: "A beautifully crafted AI image generator page.",
};

export default function Page() {
  return <AI />;
}
