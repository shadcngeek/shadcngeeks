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

import { CountrySelectTypes } from "../types";

export function CountrySelect({ data, title, showIcon }: CountrySelectTypes) {
  return (
    <Select>
      <SelectTrigger className="max-w-[280px]">
        <SelectValue placeholder={title} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Countries</SelectLabel>
          {Object.keys(data).map((item) => (
            <SelectItem key={item} value={item}>
              {showIcon && <span className="mr-1">{data[item]}</span>}
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
