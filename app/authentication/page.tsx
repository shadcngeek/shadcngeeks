import { Metadata } from "next";

import AuthenticationPage from "@/components/www/components/authentication";

export const metadata: Metadata = {
  title: "Authentication",
  description: "A list of predesigned authentication forms.",
};

export default function page() {
  return <AuthenticationPage />;
}
