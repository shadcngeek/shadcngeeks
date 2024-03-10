import { Metadata } from "next";

import Registration from "@/components/forms/registration";

export const metadata: Metadata = {
  title: "Form",
  description: "A beautiful registration form, built using using shadcn.",
};

export default function page() {
  return <Registration />;
}
