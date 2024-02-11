"use client";
import React from "react";

import { Button } from "../ui/button";

import handleDownloadZip from "@/actions/handleDownloadZip";

function Download() {
  return (
    <div className="w-full relative">
      <div className="pb-1 w-full flex justify-end">
        <Button onClick={() => handleDownloadZip()}>Download</Button>
      </div>
    </div>
  );
}

export default Download;
