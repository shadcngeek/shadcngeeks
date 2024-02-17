import { useAtom } from "jotai";

import { MoreVertical, Trash } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SheetDrawer from "../sheet/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { SheetDrawerTypes } from "../types";
import { databaseAtom } from "../add-task/add-task";
import { dateAtom } from "../date-picker/date-picker";
import ConfirmDelete from "../confirm-delete/confirm-delete";

function MoreAction({ date, prevDescription }: SheetDrawerTypes) {
  const [DB, setDB] = useAtom(databaseAtom);
  const [formattedDate, setFormattedDate] = useAtom(dateAtom);

  const handleDeleteDataFromDatabase = () => {
    const filteredData = DB.filter((data) => data.date !== formattedDate);
    setDB([...filteredData]);
  };

  return (
    <div className="absolute -top-4 right-0">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            onClick={() => setFormattedDate(date)}
            className="text-slate-400 dark:text-slate-200 bg-transparent hover:bg-transparent dark:hover:bg-transparent dark:bg-transparent"
          >
            <MoreVertical size={15} />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end" className="grid w-fit p-2 space-y-2">
          <SheetDrawer date={date} prevDescription={prevDescription} />
          <Separator />
          <ConfirmDelete onClick={handleDeleteDataFromDatabase} />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default MoreAction;
