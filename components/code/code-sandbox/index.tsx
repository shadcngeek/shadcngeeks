"use client";
import React from "react";

import {
  SandpackPreview,
  SandpackProvider,
  SandpackCodeEditor,
} from "@codesandbox/sandpack-react";
import { nightOwl } from "@codesandbox/sandpack-themes";

import { files } from "./data/files";

function CodeSandbox() {
  return (
    <SandpackProvider files={files} template="react" theme={nightOwl}>
      <div className="border relative rounded-lg overflow-hidden dark:border-slate-800">
        <div className="flex flex-col lg:flex-row divide-x divide-slate-800">
          <div className="z-50 absolute top-0 left-0 flex gap-3 p-4">
            <div className="w-4 h-4 rounded-full bg-rose-500"></div>
            <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
          </div>

          <div className="flex-[50%] ">
            <SandpackCodeEditor className="p-4 pt-12 h-[500px] lg:h-[857px]" />
          </div>
          <div className="flex-[50%] overflow-scroll flex items-center">
            <SandpackPreview className="h-[400px] lg:h-full" />
          </div>
        </div>
      </div>
    </SandpackProvider>
  );

  // return <Sandpack  theme={nightOwl} template="react" files={files} />;
}

export default CodeSandbox;
