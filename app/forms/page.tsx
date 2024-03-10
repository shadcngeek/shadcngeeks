import { Metadata } from "next";

import FormsPage from "@/components/www/components/forms";

export const metadata: Metadata = {
  title: "Forms",
  description: "A list of beautifully designed forms",
};

export default function page() {
  return <FormsPage />;
}
