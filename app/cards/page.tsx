import { Metadata } from "next";

import Cards from "@/components/www/components/cards";

export const metadata: Metadata = {
  title: "Cards",
  description: "Examples of cards built using shadcn.",
};

export default function CardsPage() {
  return <Cards />;
}
