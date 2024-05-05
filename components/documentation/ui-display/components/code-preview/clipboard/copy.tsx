import { useEffect, useState } from "react";

import { Copy as CopyIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

export function Copy() {
  const [copied, setIsCopied] = useState(false);

  useEffect(() => {
    const handleClosePopover = () => {
      if (copied) {
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      }
    };
    handleClosePopover();
  }, [copied]);

  return (
    <Button onClick={() => setIsCopied(true)} size={"icon"} variant={"ghost"}>
      <CopyIcon
        className={cn(
          copied
            ? "text-blue-500 dark:text-blue-500"
            : "text-slate-700 dark:text-slate-400",
          "size-4"
        )}
      />
    </Button>
  );
}
