import React from "react";

import UserAvatar from "./avatar/user-avatar";

import { QuoteTypes } from "./types";

function Quote({ fullName, jobTitle, quote, imgSrc }: QuoteTypes) {
  return (
    <>
      <div>
        <blockquote className="text-center text-slate-500">{quote}</blockquote>
      </div>
      <div className="mx-auto w-fit flex flex-col items-center mt-7">
        <UserAvatar imgSrc={imgSrc} />
        <div className="mt-3 text-center">
          <p className="font-semibold dark:text-white">{fullName}</p>
          <p className="text-sm text-slate-700 dark:text-slate-400">
            {jobTitle}
          </p>
        </div>
      </div>
    </>
  );
}

export default Quote;
