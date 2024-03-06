import React from "react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { sizes } from "./data";

type Size = "M" | "S" | "L" | "XS" | "XL";
interface SizeTypes {
  size: Size;
  sizeName: Size;
  onClick: () => void;
}

function Size({ size, sizeName, onClick }: SizeTypes) {
  return (
    <Button
      onClick={onClick}
      variant={"outline"}
      className={cn(
        "w-10 h-10 flex justify-center items-center border text-slate-500 dark:text-800",
        sizes[size] && "bg-slate-900 border-none"
      )}
    >
      {sizeName}
    </Button>
  );
}

export default Size;
