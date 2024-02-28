"use client";
import { useState } from "react";

import { Loader } from "lucide-react";

import { Button } from "@/components/ui/button";
import ProgressBar from "../common/progress-bar";
import HeaderX from "@/components/headers/header-x";
import MegaNav from "@/components/headers/mega-nav";
import handleGetFolderPath from "@/actions/handleGetFolderPath";

import HeaderCenter from "@/components/headers/header-center";
import HeaderLeftLogin from "@/components/headers/header-right-login";
import HeaderRightLogin from "@/components/headers/header-left-login";
import HeaderCenterLogin from "@/components/headers/header-center-login";

import { download, handleDownloadZip } from "@/lib/handle-download-zip";
import HeaderSocial from "@/components/headers/header-social";

interface DownloadTypes {
  folderName: string;
}

function Download({ folderName }: DownloadTypes) {
  const [percent, setPercent] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <>
      <div className="flex justify-end gap-3 mr-3">
        <Button
          disabled={isLoading}
          onClick={() => {
            setIsLoading(true);
            handleDownloadZip(
              handleGetFolderPath(`components/headers/${folderName}`),
              (progress) => {
                setIsLoading(false);
                setPercent(progress);
              }
            ).then(({ folderName, zipData }) =>
              download(zipData, folderName as string)
            );
          }}
        >
          {isLoading && <Loader className="animate-spin mr-2" size={15} />}
          Download
        </Button>
      </div>
      <ProgressBar percent={percent} />
    </>
  );
}

function HeadersPage() {
  return (
    <div className="px-4 md:px-[50px] ld:px-[100px] xl:px-[200px] pt-10 dark:bg-slate-950">
      <div className="border rounded-lg space-y-8 pt-3 dark:border-slate-800">
        <div>
          <Download folderName="header-social" />
          <div className="m-4 mt-0 rounded-lg h-72 border dark:border-slate-800 dark:border-t-slate-800">
            <HeaderSocial />
          </div>
        </div>

        <div>
          <Download folderName="header-x" />
          <div className="m-4 mt-0 rounded-lg h-72 border dark:border-slate-800 dark:border-t-slate-800">
            <HeaderX />
          </div>
        </div>

        <div>
          <Download folderName="mega-nav" />
          <div className="m-4 mt-0 rounded-lg h-72 border dark:border-slate-800 dark:border-t-slate-800">
            <MegaNav />
          </div>
        </div>

        <div>
          <Download folderName="header-center" />
          <div className="m-4 mt-0 rounded-lg h-72 border dark:border-slate-800 dark:border-t-slate-800">
            <HeaderCenter />
          </div>
        </div>

        <div>
          <Download folderName="header-center-login" />
          <div className="m-4 mt-0 rounded-lg h-72 border dark:border-slate-800 dark:border-t-slate-800">
            <HeaderCenterLogin />
          </div>
        </div>

        <div>
          <Download folderName="header-right-login" />
          <div className="m-4 mt-0 rounded-lg h-72 border dark:border-slate-800 dark:border-t-slate-800">
            <HeaderLeftLogin />
          </div>
        </div>

        <div>
          <Download folderName="header-right-login" />
          <div className="m-4 mt-0 rounded-lg h-72 border dark:border-slate-800 dark:border-t-slate-800">
            <HeaderRightLogin />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadersPage;
