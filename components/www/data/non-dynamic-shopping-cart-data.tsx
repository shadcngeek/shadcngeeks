import ShoppingCartSimple from "@/components/shopping-cart/simple";
import { NonDynamicDataTypes } from "../components/statistics/types";
import ShoppingCartJumbo from "@/components/shopping-cart/jumbo-cart";

export const nonDynamicShoppingCartData: NonDynamicDataTypes[] = [
  {
    component: <ShoppingCartJumbo />,
    path: "jumbo-cart",
  },
  {
    component: <ShoppingCartSimple />,
    path: "simple",
  },
];
