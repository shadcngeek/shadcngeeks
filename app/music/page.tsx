import { Metadata } from "next";

import MusicPage from "@/components/www/components/music";

export const metadata: Metadata = {
  title: "Music",
  description: "A list music player pages.",
};

export default function page() {
  return <MusicPage />;
}
