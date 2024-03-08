import React from "react";
import { PricePro } from "./price-pro";

import { enterprisePlan } from "./data";

function PriceSmall() {
  return (
    <div>
      <PricePro
        priceClassName="text-rose-500"
        className="border-rose-500 dark:border-rose-500"
        buttonClassName="bg-rose-500 dark:bg-rose-500 hover:bg-rose-600 dark:hover:bg-rose-600 dark:text-white"
        {...enterprisePlan}
      />
    </div>
  );
}

export default PriceSmall;
