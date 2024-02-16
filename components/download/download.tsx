"use client";
import React from "react";

import { Button } from "../ui/button";

import { download, handleDownloadZip } from "@/lib/handle-download-zip";

interface DownloadTypes {
  folderPath: string;
  children: React.ReactNode;
}

function Download({ children, folderPath }: DownloadTypes) {
  return (
    <div className="w-full relative">
      <div className="pb-1 w-full flex justify-end">
        <Button
        // onClick={() =>
        //   handleDownloadZip("README.md", (progress) => `${progress}%`).then(
        //     (result) => download(result)
        //   )
        // }
        >
          Download
        </Button>
      </div>
      {children}
    </div>
  );
}

export default Download;
