import React from "react";

import Download from "@/components/download/download";

import { nonDynamicData } from "../../data/non-dynamic-pages";
import handleGetFolderPath from "@/actions/handleGetFolderPath";

function StatisticsPage() {
  return (
    <div className="py-10 px-[200px] space-y-10 dark:bg-slate-950">
      {nonDynamicData.map(({ component, path }) => (
        <div key={path}>
          <Download folderPath={handleGetFolderPath(`cards/${path}`)}>
            {component}
          </Download>
        </div>
      ))}
    </div>
  );
}

export default StatisticsPage;
