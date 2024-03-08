import React from "react";
import { PricePro } from "./price-pro";

import { enterprisePlan } from "./data";

function PricePackTop() {
  return (
    <div>
      <PricePro
        borderClassName="dark:border-cyan-500 border-cyan-500 "
        btnClassName="bg-cyan-500 dark:bg-cyan-500 text-white dark:text-white hover:bg-cyan-600 dark:hover:bg-cyan-600"
        {...enterprisePlan}
      />
    </div>
  );
}

export default PricePackTop;
