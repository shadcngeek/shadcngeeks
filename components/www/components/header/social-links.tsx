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
          <Link href={"#"}>
            <Github className="hover:text-rose-600 text-[#71717a] dark:text-[#a1a1aa] transition dark:hover:text-white" />
          </Link>
        </li>

        <Button
          onClick={onClick}
          className="dark:bg-transparent bg-transparent p-2 rounded-md hover:bg-transparent hover:text-rose-600 text-[#71717a] dark:text-[#a1a1aa]"
        >
          <MoonStarIcon />
        </Button>
      </ul>
    </div>
  );
}

export default SocialLinks;
