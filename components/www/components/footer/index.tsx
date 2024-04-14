import Download from "@/components/download/download";

import handleGetFolderPath from "@/actions/handleGetFolderPath";

import { nonDynamicFootersData } from "../../data/non-dynamic-footers";

function FootersPage() {
  return (
    <div className="pb-4 sm:p-4 md:px-[50px] lg:px-[100px] xl:px-[200px] md:pt-10 min-h-dvh dark:bg-slate-950">
      <div className="sm:border rounded-lg space-y-20 pt-3 dark:border-slate-800">
        {nonDynamicFootersData.map(({ component, path }) => (
          <div key={path}>
            <Download
              className="pr-4"
              folderPath={handleGetFolderPath(`footer/${path}`)}
            >
              <div className="m-4 mt-0 rounded-lg dark:border-t-slate-800">
                {component}
              </div>
            </Download>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FootersPage;
