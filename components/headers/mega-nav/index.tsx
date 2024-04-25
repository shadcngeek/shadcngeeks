"use client";
import Link from "next/link";

import SocialLinks from "@/components/www/components/header/social-links";

interface HeaderTypes {
  children?: React.ReactNode;
}

function MegaNav({ children }: HeaderTypes) {
  return (
    <div className="dark:bg-slate-950">
        <div className="border-b border-slate-200 dark:border-slate-800 dark:bg-slate-950">
          <div className="py-3 px-4 flex justify-between items-center gap-5 max-w-[1536px] mx-auto">
          <div className="flex items-center gap-20">
            <Link href={"/"} className="">
              <p className="font-bold text-rose-600 text-2xl">ShadcnGeeks</p>
            </Link>
          </div>
          <SocialLinks />
          </div>
        </div>
      <div className="max-w-[1536px] mx-auto">
        {children}
      </div>
    </div>
  );
}

export default MegaNav;
