import { Metadata } from "next";

import LandingPage from "@/components/www/components/landing-page";

export const metadata: Metadata = {
  title: "Landing Page",
  description: "A list of beautifully crafted lading pages.",
};

export default function Page() {
  return <LandingPage />;
}
