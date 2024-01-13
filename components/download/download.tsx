"use client";
import React from "react";

import { DownloadIcon } from "lucide-react";

import handleDownloadZip from "@/actions/handleDownloadZip";

interface DownloadTypes {
  folderPath: string;
  children: React.ReactNode;
}

function Download({ children, folderPath }: DownloadTypes) {
  return (
    <div className="relative">
      <div className="z-50 absolute top-0 right-0">
        <button
          onClick={() => handleDownloadZip(folderPath)}
          className="p-2 transition duration-200 rounded-full"
        >
          <DownloadIcon className="text-gray-300 hover:text-gray-400" />
        </button>
      </div>
      {children}
    </div>
  );
}

export default Download;
