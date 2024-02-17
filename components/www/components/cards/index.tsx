import React from "react";

import { cn } from "@/lib/utils";

import Download from "@/components/download/download";

import handleGetFolderPath from "@/actions/handleGetFolderPath";

import { cardsData } from "./data";

const firstNum = Math.floor(cardsData.length / 3);

function InnerResponsiveContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div>div]:w-full",
        className
      )}
      {...props}
    />
  );
}

function Cards() {
  return (
    <div className="dark:bg-slate-950 md:px-[50px] lg:px-[20px] xl:px-[8vw]">
      <div className="items-start justify-center gap-6 rounded-lg p-8 grid lg:grid-cols-2 xl:grid-cols-3">
        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          {cardsData.slice(0, firstNum).map(({ component, path }) => (
            <InnerResponsiveContainer key={path}>
              <Download folderPath={handleGetFolderPath(`cards/${path}`)}>
                {component}
              </Download>
            </InnerResponsiveContainer>
          ))}
        </div>

        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          {cardsData
            .slice(firstNum, firstNum * 2)
            .map(({ component, path }) => (
              <InnerResponsiveContainer key={path}>
                <Download folderPath={handleGetFolderPath(`cards/${path}`)}>
                  {component}
                </Download>
              </InnerResponsiveContainer>
            ))}
        </div>

        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          {cardsData.slice(firstNum * 2).map(({ component, path }) => (
            <InnerResponsiveContainer key={path}>
              <Download folderPath={handleGetFolderPath(`cards/${path}`)}>
                {component}
              </Download>
            </InnerResponsiveContainer>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
