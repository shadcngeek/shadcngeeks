import Download from "@/components/download/download";

import handleGetFolderPath from "@/actions/handleGetFolderPath";
import { nonDynamicShoppingCartData } from "../../data/non-dynamic-shopping-cart-data";

function ShoppingCartPage() {
  return (
    <div className="pb-4 sm:p-4 xl:px-[100px] dark:bg-slate-950 min-h-dvh">
      <div className="sm:border mx-auto max-w-[1536px] rounded-lg space-y-8 pt-3 dark:border-slate-800">
        {nonDynamicShoppingCartData.map(({ component, path }) => (
          <div key={path}>
            <Download
              className="pr-4"
              folderPath={handleGetFolderPath(`shopping-cart/${path}`)}
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

export default ShoppingCartPage;
