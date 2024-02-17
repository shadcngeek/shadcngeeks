"use client";
import Link from "next/link";
import { useEffect } from "react";

import SocialLinks from "@/components/www/components/header/social-links";

interface HeaderTypes {
  children?: React.ReactNode;
}

function MegaNav({ children }: HeaderTypes) {
  useEffect(() => {
    const elem = document.getElementById("mode");

    const handleSetMode = () => {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        (elem as any).className = "dark";
      } else {
        (elem as any).className = "";
      }
    };
    handleSetMode();
  }, []);

  const handleMode = () => {
    const elem = document.getElementById("mode");
    const currentMode = elem?.className;
    if (currentMode == "dark") {
      localStorage.theme = "light";
      (elem as any).className = "light";
    } else {
      (elem as any).className = "dark";
      localStorage.theme = "dark";
    }
  };

  return (
    <>
      <div className="border-b border-slate-200 dark:border-slate-800 py-3 px-4 md:px-[50px] lg:px-[100px] xl:px-[200px] flex justify-between items-center dark:bg-slate-950 gap-5">
        <div className="flex items-center gap-20">
          <Link href={"/"} className="">
            <p className="font-bold text-rose-600 text-2xl">ShadcnGeeks</p>
          </Link>
        </div>
        <SocialLinks onClick={handleMode} />
      </div>
      {children}
    </>
  );
}

export default MegaNav;
