import { Metadata } from "next";

import StatisticsPage from "@/components/www/components/statistics";

export const metadata: Metadata = {
  title: "Statistics",
  description: "Examples of statistics.",
};

export default function Page() {
  return <StatisticsPage />;
}
