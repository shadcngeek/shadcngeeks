"use client";
import React from "react";

import { Button } from "../ui/button";

import handleDownloadZip from "@/actions/handleDownloadZip";

interface DownloadTypes {
  folderPath: string;
  children: React.ReactNode;
}

function Download({ children, folderPath }: DownloadTypes) {
  return (
    <div className="w-full relative">
      <div className="pb-1 w-full flex justify-end">
        <Button onClick={() => handleDownloadZip(folderPath)}>Download</Button>
      </div>
      {children}
    </div>
  );
}

export default Download;
