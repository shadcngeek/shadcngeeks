"use client";
import { useEffect } from "react";

import { NavMenu } from "./components/header-lists";
import SocialLinks from "./components/social-links";
import Link from "next/link";

interface HeaderTypes {
  children: React.ReactNode;
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
      // localStorage.removeItem("theme");
      localStorage.theme = "light";
      (elem as any).className = "light";
    } else {
      (elem as any).className = "dark";
      localStorage.theme = "dark";
    }
  };

  return (
    <>
      <div className="border-b border-slate-200 dark:border-slate-800 p-4 flex justify-between items-center dark:bg-slate-950 gap-5">
        <div className="flex items-center gap-20">
          <Link
            href={"/"}
            className="relative w-[50px] h-[50px] rounded-full bg-gray-900 dark:bg-white flex justify-center items-center shrink-0"
          >
            <p className="font-bold text-white dark:text-gray-900">HX</p>
          </Link>
          <div className="hidden md:block">
            <ul className="flex gap-3 items-center">
              <NavMenu />
            </ul>
          </div>
        </div>
        <SocialLinks onClick={handleMode} />
      </div>
      {children}
    </>
  );
}

export default MegaNav;
