"use client";
import React from "react";
import { Button } from "../ui/button";

interface HeaderTypes {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderTypes) {
  const handleMode = () => {
    const elem = document.getElementById("mode");
    const currentMode = elem?.className;
    if (currentMode == "dark") {
      (elem as any).className = "light";
    } else {
      (elem as any).className = "dark";
    }
  };
  return (
    <>
      <Button onClick={handleMode}>Toggle</Button>
      {children}
    </>
  );
}
