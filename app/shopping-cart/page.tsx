import React from "react";
import { Metadata } from "next";

import ShoppingCartPage from "@/components/www/components/shopping-cart";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Beautifully crafted shopping cart UI's using shadcn.",
};

function Page() {
  return <ShoppingCartPage />;
}

export default Page;
