"use client";
import { useState } from "react";

import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

function Quantity() {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Button
          size={"icon"}
          variant={"outline"}
          onClick={() => quantity > 1 && setQuantity(quantity - 1)}
        >
          <Minus className="w-4 h-4 text-slate-700 dark:text-slate-400" />
        </Button>
        <Button variant={"outline"}>{quantity}</Button>
        <Button
          size={"icon"}
          variant={"outline"}
          onClick={() => setQuantity(quantity + 1)}
        >
          <Plus className="w-4 h-4 text-slate-700 dark:text-slate-400" />
        </Button>
      </div>
    </div>
  );
}

export default Quantity;
