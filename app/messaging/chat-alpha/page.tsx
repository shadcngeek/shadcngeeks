import { Metadata } from "next";

import ChatAlpha from "@/components/messaging/chat-alpha";

export const metadata: Metadata = {
  title: "Messaging",
  description: "A beautifully designed messaging UI using shadcn.",
};

function Page() {
  return <ChatAlpha />;
}

export default Page;
