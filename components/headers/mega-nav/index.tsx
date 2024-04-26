"use client";
import Link from "next/link";

import SocialLinks from "@/components/www/components/header/social-links";

interface HeaderTypes {
  children?: React.ReactNode;
}

function MegaNav({ children }: HeaderTypes) {
  return (
    <div className="dark:bg-slate-950 relative flex min-h-screen flex-col">
      <div className="sticky top-0 z-50 w-full border-b dark:border-slate-800 backdrop-blur">
        <div className="py-3 px-4 flex justify-between items-center gap-5 max-w-[1536px] mx-auto">
          <div className="flex items-center gap-20">
            <Link href={"/"} className="">
              <p className="font-bold text-rose-600 text-2xl">ShadcnGeeks</p>
            </Link>
          </div>
          <SocialLinks />
        </div>
      </div>
      <div className="max-w-full">{children}</div>
    </div>
  );
}

export default MegaNav;
