import React from "react";

import Download from "@/components/download/download";

import { nonDynamicData } from "../../data/non-dynamic-pages";
import handleGetFolderPath from "@/actions/handleGetFolderPath";

function StatisticsPage() {
  return (
    <div className="space-y-10 px-4 md:px-[50px] lg:px-[100px] xl:px-[200px] dark:bg-slate-950 pt-10 min-h-dvh">
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
