"use client";
import React, { useEffect } from "react";
import { Button } from "../ui/button";

interface HeaderTypes {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderTypes) {
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
      localStorage.removeItem("theme");
      (elem as any).className = "light";
    } else {
      (elem as any).className = "dark";
      localStorage.theme = "dark";
    }
  };

  return (
    <>
      <Button onClick={handleMode}>Toggle</Button>
      {children}
    </>
  );
}
