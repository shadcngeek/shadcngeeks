import React from "react";
import { files } from "../../data";

function ReceivedFiles() {
  return (
    <div className="p-5 space-y-5 dark:text-white">
      {files.map(({ icon, title }, index) => (
        <div key={index} className="flex gap-3 items-center text-slate-850">
          <div>{icon}</div>
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
}

export default ReceivedFiles;
