import { Metadata } from "next";

import CalendarPage from "@/components/www/components/calender";

export const metadata: Metadata = {
  title: "Calendar",
  description: "Calendar components.",
};

export default function Page() {
  return <CalendarPage />;
}
