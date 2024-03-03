import React from "react";

import Download from "@/components/download/download";

import handleGetFolderPath from "@/actions/handleGetFolderPath";
import { nonDynamicTeamsData } from "../../data/non-dynamic-teams-data";

function TeamSectionPage() {
  return (
    <div className="p-4 md:p-10 lg:p-14 xl:p-20 dark:bg-slate-950">
      <div className="space-y-10">
        {nonDynamicTeamsData.map(({ component, path }) => (
          <div key={path}>
            <Download folderPath={handleGetFolderPath(`team-section/${path}`)}>
              {component}
            </Download>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamSectionPage;
