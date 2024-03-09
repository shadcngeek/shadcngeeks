import React from "react";
import { PresetSelector } from "./preset-selector";
import { PresetSave } from "./preset-save";
import { CodeViewer } from "./code-viewer";
import { PresetShare } from "./preset-share";
import { PresetActions } from "./preset-actions";
import { presets } from "../data/presets";

function Header() {
  return (
    <>
      <div className="dark:text-white flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
        <h2 className="text-lg font-semibold">Playground</h2>
        <div className="ml-auto flex w-full space-x-2 sm:justify-end">
          <PresetSelector presets={presets} />
          <PresetSave />
          <div className="hidden space-x-2 md:flex">
            <CodeViewer />
            <PresetShare />
          </div>
          <PresetActions />
        </div>
      </div>
    </>
  );
}

export default Header;
