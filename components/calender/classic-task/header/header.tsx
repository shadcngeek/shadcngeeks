import React from "react";

import { format } from "date-fns";
import { CaptionProps, useNavigation } from "react-day-picker";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import AddTask from "../add-task/add-task";

function Header(props: CaptionProps) {
  const { goToMonth, nextMonth, previousMonth } = useNavigation();
  return (
    <div className="w-full dark:border-slate-800 dark:text-white flex border h-20 items-center px-10 rounded-t-xl justify-between">
      <p className="font-bold text-2xl">
        {format(props.displayMonth, "MMMM yyyy")}
      </p>

      <div className="flex gap-2">
        <Button
          variant={"outline"}
          disabled={!previousMonth}
          onClick={() => previousMonth && goToMonth(previousMonth)}
        >
          <ChevronLeft size={15} />
          <span className="ml-3">Previous</span>
        </Button>
        <Button
          className="mr-1"
          variant={"outline"}
          disabled={!nextMonth}
          onClick={() => nextMonth && goToMonth(nextMonth)}
        >
          <span className="mr-3">Next</span>
          <ChevronRight size={15} />
        </Button>
        <AddTask />
      </div>
    </div>
  );
}

export default Header;
