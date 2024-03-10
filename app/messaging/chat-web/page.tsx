import { Metadata } from "next";

import ChatWeb from "@/components/messaging/chat-web";

export const metadata: Metadata = {
  title: "Messaging",
  description: "A beautiful messaging UI.",
};

export default function Page() {
  return <ChatWeb />;
}
