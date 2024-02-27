import * as React from "react";

import {
  Select,
  SelectItem,
  SelectLabel,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";

export function GenderSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select gender" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Genders</SelectLabel>
          <SelectItem value="apple">Male</SelectItem>
          <SelectItem value="banana">Female</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
