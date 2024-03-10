import { Metadata } from "next";

import MessagingPage from "@/components/www/components/messaging";

export const metadata: Metadata = {
  title: "Messaging",
  description: "A list of designed messaging UI's.",
};

export default function page() {
  return <MessagingPage />;
}
