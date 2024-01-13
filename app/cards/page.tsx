import Download from "@/components/download/download";
import { CookieSettings } from "@/components/cards/cookie-settings";

import handleGetFolderPath from "@/actions/handleGetFolderPath";

export default function Cards() {
  return (
    <div className="p-10">
      <Download folderPath={handleGetFolderPath("cards")}>
        <CookieSettings />
      </Download>
    </div>
  );
}
