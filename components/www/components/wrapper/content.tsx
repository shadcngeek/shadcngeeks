import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { WrapperContentTypes } from "./types";

import handleGetFolderPath from "@/actions/handleGetFolderPath";
import { download, handleDownloadZip } from "@/lib/handle-download-zip";

function WrapperContent({ imageSrc, path, parentFolder }: WrapperContentTypes) {
  const [percent, setPercent] = useState<number>(0);

  return (
    <div className="mb-10">
      <div className="flex justify-end gap-3 pb-3">
        <Link
          target="_blank"
          href={`${parentFolder}/${path}`}
          className="flex items-center justify-center dark:text-white px-3 rounded-md border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50"
        >
          Preview
        </Link>

        <Button
          onClick={() =>
            handleDownloadZip(
              handleGetFolderPath(`${parentFolder}/${path}`),
              (progress) => setPercent(progress)
            ).then(({ folderName, zipData }) =>
              download(zipData, folderName as string)
            )
          }
        >
          Download
        </Button>
      </div>
      <div
        className={`h-2 rounded-full bg-rose-600 mb-1 `}
        style={{ width: `${percent}%` }}
      ></div>
      <Card className="w-fit">
        <CardContent className="p-0">
          <Image
            width={950}
            height={500}
            src={imageSrc}
            alt="image preview"
            className="rounded-md"
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default WrapperContent;
