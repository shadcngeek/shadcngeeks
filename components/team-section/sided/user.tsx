import React from "react";

import UserImage from "./image";

import { UserTypes } from "./types";

function User({ fullName, imgSrc, role }: UserTypes) {
  return (
    <div className="w-fit">
      <UserImage imgSrc={imgSrc} />
      <div className="space-y-2 text-center mt-3">
        <p className="dark:text-white">{fullName}</p>
        <p className="text-sm text-slate-700 dark:text-slate-400">{role}</p>
      </div>
    </div>
  );
}

export default User;
