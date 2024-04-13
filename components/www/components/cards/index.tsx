import React from "react";

import { cn } from "@/lib/utils";

import Download from "@/components/download/download";

import handleGetFolderPath from "@/actions/handleGetFolderPath";

import { cardsData } from "./data";

function InnerResponsiveContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div>div]:w-full break-inside-avoid-column",
        className
      )}
      {...props}
    />
  );
}

function Cards() {
  return (
    <div className="dark:bg-slate-950 md:px-[50px] lg:px-[20px]">
      <div className="sm:columns-2 lg:columns-3 xl:columns-4 gap-5 max-w-[1536px] mx-auto py-5">
        {cardsData.map(({ component, path }) => (
          <InnerResponsiveContainer className="mt-5 first:mt-0" key={path}>
            <Download folderPath={handleGetFolderPath(`cards/${path}`)}>
              {component}
            </Download>
          </InnerResponsiveContainer>
        ))}
      </div>
    </div>
  );
}

export default Cards;
