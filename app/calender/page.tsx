import { Metadata } from "next";

import CalendarPage from "@/components/www/components/calender";

export const metadata: Metadata = {
  title: "Calender",
  description: "A Predesigned calenders.",
};

export default function Page() {
  return <CalendarPage />;
}
