import { Metadata } from "next";

import PersonalDetails from "@/components/forms/personal-details";

export const metadata: Metadata = {
  title: "Form",
  description: "A beautiful form for collection personal information.",
};

export default function Page() {
  return <PersonalDetails />;
}
