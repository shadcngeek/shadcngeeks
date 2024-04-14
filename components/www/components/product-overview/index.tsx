import Download from "@/components/download/download";

import handleGetFolderPath from "@/actions/handleGetFolderPath";
import { nonDynamicProductOverviewData } from "../../data/non-dynamic-product-overview-data";

function ProductOverview() {
  return (
    <div className="pb-4 sm:p-4 xl:px-[100px] dark:bg-slate-950 min-h-dvh">
      <div className="sm:border rounded-lg space-y-8 pt-3 dark:border-slate-800">
        {nonDynamicProductOverviewData.map(({ component, path }) => (
          <div key={path}>
            <Download
              className="pr-4"
              folderPath={handleGetFolderPath(`product-overview/${path}`)}
            >
              <div className="m-4 mt-0 rounded-lg border dark:border-slate-800 dark:border-t-slate-800">
                {component}
              </div>
            </Download>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductOverview;
