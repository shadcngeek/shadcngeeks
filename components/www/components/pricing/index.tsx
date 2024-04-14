import React from "react";

import Download from "@/components/download/download";

import handleGetFolderPath from "@/actions/handleGetFolderPath";
import { nonDynamicPricingData } from "../../data/non-dynamic-pricing-data";

function PricingPage() {
  return (
    <div className="px-4 md:px-[50px] lg:px-[100px] py-4 dark:bg-slate-950 min-h-dvh">
      <div className="border rounded-lg space-y-8 pt-3 dark:border-slate-800 max-w-[1536px] mx-auto">
        {nonDynamicPricingData.map(({ component, path }) => (
          <div key={path}>
            <Download
              className="pr-4"
              folderPath={handleGetFolderPath(`pricing/${path}`)}
            >
              <div className="m-4 mt-0">{component}</div>
            </Download>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingPage;
