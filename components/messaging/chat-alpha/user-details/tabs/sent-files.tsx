import React from "react";
import { filesSent } from "../../data";

function SentFiles() {
  return (
    <div className="p-5 space-y-5 dark:text-white">
      {filesSent.map(({ icon, title }, index) => (
        <div key={index} className="flex gap-3 items-center text-slate-850">
          <div>{icon}</div>
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
}

export default SentFiles;
