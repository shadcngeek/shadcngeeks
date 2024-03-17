import Download from "@/components/download/download";

import handleGetFolderPath from "@/actions/handleGetFolderPath";
import { nonDynamicDataHeaders } from "../../data/non-dynamic-pages";

function HeadersPage() {
  return (
    <div className="px-4 md:px-[50px] ld:px-[100px] xl:px-[200px] py-4 dark:bg-slate-950">
      <div className="border rounded-lg space-y-8 pt-3 dark:border-slate-800">
        {nonDynamicDataHeaders.map(({ component, path }) => (
          <div key={path}>
            <Download
              className="pr-4"
              folderPath={handleGetFolderPath(`headers/${path}`)}
            >
              <div className="m-4 mt-0 rounded-lg h-72 border dark:border-slate-800 dark:border-t-slate-800">
                {component}
              </div>
            </Download>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeadersPage;
