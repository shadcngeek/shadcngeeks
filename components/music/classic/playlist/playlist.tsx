import React from "react";
import { UserAvatar } from "../avatar";
import { PeopleTypes } from "../types";
import { PlaylistMore } from "./more";

function AudioPlayList({ fullName, img, jobTitle }: PeopleTypes) {
  return (
    <div className="flex gap-5">
      <UserAvatar avatarImg={img} />
      <div className="flex justify-between items-center w-full">
        <div>
          <p className="dark:text-white">{fullName}</p>
          <p className="text-sm text-slate-700 dark:text-400">{jobTitle}</p>
        </div>

        <div className="flex gap-3 items-center">
          <PlaylistMore />
        </div>
      </div>
    </div>
  );
}

export default AudioPlayList;
