import { Metadata } from "next";

import TechyNotifications from "@/components/notifications/techy";

export const metadata: Metadata = {
  title: "Notifications",
  description: "A beautifully crafted notification page",
};

export default function Page() {
  return <TechyNotifications />;
}
