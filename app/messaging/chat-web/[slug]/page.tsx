import { Metadata } from "next";

import { ChatWebSlug } from "@/components/messaging/chat-web/small-device/small-device";

export const metadata: Metadata = {
  title: "Messaging",
  description: "A beautiful messaging UI.",
};

export default function Page({ params }: { params: { slug: string } }) {
  return <ChatWebSlug slug={+params.slug} />;
}
