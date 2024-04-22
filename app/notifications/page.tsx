import { Metadata } from "next";

import NotificationsPage from "@/components/www/components/notifications";

export const metadata: Metadata = {
  title: "Notifications",
  description: "A list of beautifully crafted notification pages",
};

export default function Page() {
  return <NotificationsPage />;
}
