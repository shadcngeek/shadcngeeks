import { Metadata } from "next";

import ComingSoonPage from "@/components/www/components/coming-soon";

export const metadata: Metadata = {
  title: "Coming Soon",
  description: "A list od predesigned coming soon pages.",
};

export default function page() {
  return <ComingSoonPage />;
}
