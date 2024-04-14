import * as React from "react";

import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";

export function Quantity() {
  return (
    <Select>
      <SelectTrigger className="w-20">
        <SelectValue placeholder="1" />
      </SelectTrigger>
      <SelectContent className="min-w-20">
        {Array.from({ length: 10 }).map((_, index) => (
          <SelectItem key={index} value={`${index + 1}`}>
            {index + 1}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
