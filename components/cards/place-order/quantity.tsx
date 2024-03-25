"use client";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

function Quantity() {
  const [quality, setQuality] = useState<number>(1);

  return (
    <div className="space-y-2">
      <p>Quantity</p>
      <div className="flex items-center gap-2">
        <Button
          size={"icon"}
          variant={"outline"}
          onClick={() => quality > 1 && setQuality(quality - 1)}
        >
          <Minus className="w-4 h-4 text-slate-700 dark:text-slate-400" />
        </Button>
        <Button variant={"outline"}>{quality}</Button>
        <Button
          size={"icon"}
          variant={"outline"}
          onClick={() => setQuality(quality + 1)}
        >
          <Plus className="w-4 h-4 text-slate-700 dark:text-slate-400" />
        </Button>
      </div>
    </div>
  );
}

export default Quantity;
