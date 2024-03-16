import React from "react";
import Link from "next/link";

import { Github, MoonStarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

interface SocialLinksTypes {
  onClick: () => void;
}

function SocialLinks({ onClick }: SocialLinksTypes) {
  return (
    <div className="w-full flex justify-end">
      <ul className="flex gap-4">
        <li className="p-2 rounded-md">
          <Link
            href={"https://github.com/shadcngeek/shadcngeeks"}
            target="_blank"
          >
            <Github className="hover:text-rose-600 text-slate-700 dark:text-slate-400 transition dark:hover:text-white" />
          </Link>
        </li>

        <Button
          size={"icon"}
          variant={"ghost"}
          onClick={onClick}
          className="hover:text-rose-600 text-slate-700 dark:text-slate-400"
        >
          <MoonStarIcon />
        </Button>
      </ul>
    </div>
  );
}

export default SocialLinks;
