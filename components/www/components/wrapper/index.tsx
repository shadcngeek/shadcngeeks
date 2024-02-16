"use client";
import React from "react";

import { pages } from "../../data/pages";

import { WrapperTypes } from "./types";
import WrapperContent from "./content";

function Wrapper({ parentFolder }: WrapperTypes) {
  return (
    <div className="px-[200px] dark:bg-slate-950 pt-10 min-h-dvh">
      <div className="grid grid-cols-2 gap-3 flex-wrap">
        {pages[parentFolder].subPath.map(({ path, imageSrc }) => (
          <WrapperContent
            key={path}
            path={path}
            imageSrc={imageSrc}
            parentFolder={parentFolder}
          />
        ))}
      </div>
    </div>
  );
}

export default Wrapper;
