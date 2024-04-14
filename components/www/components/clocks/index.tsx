import Download from "@/components/download/download";

import handleGetFolderPath from "@/actions/handleGetFolderPath";
import { nonDynamicClockData } from "../../data/non-dynamic-clock-data";

function ClocksPage() {
  return (
    <div className="pb-4 sm:p-4 md:px-[50px] lg:px-[100px] xl:px-[200px] dark:bg-slate-950 min-h-dvh">
      <div className="sm:border rounded-lg space-y-8 pt-3 dark:border-slate-800">
        {nonDynamicClockData.map(({ component, path }) => (
          <div key={path}>
            <Download
              className="pr-4"
              folderPath={handleGetFolderPath(`clocks/${path}`)}
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

export default ClocksPage;
