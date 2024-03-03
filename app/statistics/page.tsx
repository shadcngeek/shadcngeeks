import { Metadata } from "next";

import Statistics from "@/components/statistics";

export const metadata: Metadata = {
  title: "Statistics",
  description: "Examples of statistics.",
};

export default function Page() {
  return <Statistics />;
}
