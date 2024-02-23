"use client";
import { useState } from "react";

import { Loader } from "lucide-react";

import { Button } from "@/components/ui/button";
import ProgressBar from "../common/progress-bar";
import HeaderX from "@/components/headers/header-x";
import MegaNav from "@/components/headers/mega-nav";
import handleGetFolderPath from "@/actions/handleGetFolderPath";

import { download, handleDownloadZip } from "@/lib/handle-download-zip";

interface DownloadTypes {
  folderName: string;
}

function Download({ folderName }: DownloadTypes) {
  const [percent, setPercent] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <>
      <div className="flex justify-end gap-3 pb-3 mr-3">
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
    <div className="px-4 md:px-[50px] ld:px-[100px] xl:px-[200px] mt-10">
      <div className="border rounded-lg space-y-5 py-3">
        <div>
          <Download folderName="header-x" />
          <div className="border-t dark:border-t-slate-800">
            <HeaderX />
          </div>
        </div>

        <div>
          <Download folderName="mega-nav" />
          <div className="border-t dark:border-t-slate-800">
            <MegaNav />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadersPage;
