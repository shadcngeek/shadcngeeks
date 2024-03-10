import { Metadata } from "next";

import MailComponent from "@/components/messaging/mail/mail-component";

export const metadata: Metadata = {
  title: "Messaging",
  description: "A beautifully designed messaging UI.",
};

export default function Page() {
  return <MailComponent />;
}
