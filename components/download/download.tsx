"use client";
import React, { useState } from "react";

import { Button } from "../ui/button";

import { Loader } from "lucide-react";

import { download, handleDownloadZip } from "@/lib/handle-download-zip";
import ProgressBar from "../www/components/common/progress-bar";
import { cn } from "@/lib/utils";

interface DownloadTypes {
  className?: string;
  folderPath: string;
  children: React.ReactNode;
}

function Download({ children, className, folderPath }: DownloadTypes) {
  const [percent, setPercent] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className={"w-full relative"}>
      <div className={cn("pb-1 w-full flex justify-end", className)}>
        <Button
          disabled={isLoading}
          onClick={() => {
            setIsLoading(true);
            handleDownloadZip(folderPath, (progress) => {
              setPercent(progress);
              setIsLoading(false);
            }).then(({ folderName, zipData }) =>
              download(zipData, folderName as string)
            );
          }}
        >
          {isLoading && <Loader className="animate-spin mr-2" size={15} />}
          Download
        </Button>
      </div>
      <ProgressBar percent={percent} />
      {children}
    </div>
  );
}

export default Download;
