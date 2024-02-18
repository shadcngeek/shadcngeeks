import React from "react";

import { useAtom } from "jotai";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { currentYearAtom } from "../calender/calender";

function Nav() {
  const [currentYear, setCurrentYear] = useAtom(currentYearAtom);

  return (
    <div className="flex gap-2 dark:text-white">
      <Button
        variant={"outline"}
        onClick={() => {
          setCurrentYear(currentYear - 1);
        }}
      >
        <ChevronLeft size={15} />
        <span className="ml-3">Previous</span>
      </Button>
      <Button
        className="mr-1"
        variant={"outline"}
        onClick={() => setCurrentYear(currentYear + 1)}
      >
        <span className="mr-3">Next</span>
        <ChevronRight size={15} />
      </Button>
    </div>
  );
}

export default Nav;
