import { Metadata } from "next";

import TeamSectionPage from "@/components/www/components/team-section";

export const metadata: Metadata = {
  title: "Team section",
  description: "Examples of team sections.",
};

export default function Page() {
  return <TeamSectionPage />;
}
