import { Metadata } from "next";

import Statistics from "@/components/statistics";

export const metadata: Metadata = {
  title: "Statistics",
  description: "Examples of statistics built using shadcnui components.",
};

export default function Page() {
  return <Statistics />;
}
