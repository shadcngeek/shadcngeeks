import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

import { Loader } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { WrapperContentTypes } from "./types";

import handleGetFolderPath from "@/actions/handleGetFolderPath";
import { download, handleDownloadZip } from "@/lib/handle-download-zip";
import ProgressBar from "../common/progress-bar";

function WrapperContent({ imageSrc, path, parentFolder }: WrapperContentTypes) {
  const [percent, setPercent] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
          disabled={isLoading}
          onClick={() => {
            setIsLoading(true);
            handleDownloadZip(
              handleGetFolderPath(`${parentFolder}/${path}`),
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
