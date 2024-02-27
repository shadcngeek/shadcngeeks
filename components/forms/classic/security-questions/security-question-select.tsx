import React from "react";

import {
  Select,
  SelectItem,
  SelectLabel,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";

function SecurityQuestion() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Security question" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Questions</SelectLabel>
          <SelectItem value="apple">What is mom&apos;s name?</SelectItem>
          <SelectItem value="banana">What is nickname?</SelectItem>
          <SelectItem value="blueberry">
            What is favorite programming language?
          </SelectItem>
          <SelectItem value="grapes">What is your shoe size?</SelectItem>
          <SelectItem value="pineapple">What is first school name?</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default SecurityQuestion;
