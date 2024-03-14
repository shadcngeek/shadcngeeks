import { Metadata } from "next";

import FootersPage from "@/components/www/components/footer";

export const metadata: Metadata = {
  title: "Footers",
  description: "A list of beautifully crafted footers using shadcn components.",
};

function Page() {
  return <FootersPage />;
}

export default Page;
