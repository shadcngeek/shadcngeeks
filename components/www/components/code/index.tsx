import Download from "@/components/download/download";

import handleGetFolderPath from "@/actions/handleGetFolderPath";
import { nonDynamicCodePreviewData } from "../../data/non-dynamic-code-preview";

function CodePreviewPage() {
  return (
    <div className="min-h-dvh px-4 md:px-[50px] ld:px-[100px] xl:px-[200px] pt-10 dark:bg-slate-950">
      <div className="space-y-10">
        {nonDynamicCodePreviewData.map(({ component, path }) => (
          <div key={path}>
            <Download folderPath={handleGetFolderPath(`headers/${path}`)}>
              {component}
            </Download>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CodePreviewPage;
