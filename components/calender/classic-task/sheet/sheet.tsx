import { useState } from "react";

import { Edit } from "lucide-react";
import { useAtom } from "jotai";

import {
  Sheet,
  SheetTitle,
  SheetClose,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

import { databaseAtom } from "../add-task/add-task";
import { dateAtom } from "../date-picker/date-picker";

import { SheetDrawerTypes } from "../types";

function SheetDrawer({ date, prevDescription }: SheetDrawerTypes) {
  const [DB, setDB] = useAtom(databaseAtom);
  const [formattedDate] = useAtom(dateAtom);
  const [description, setDescription] = useState(prevDescription);

  const handleAddDataToDatabase = () => {
    const filteredData = DB.filter((data) => data.date !== formattedDate);
    setDB(() => {
      return [...filteredData, { date: formattedDate as string, description }];
    });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className=" h-5 border-none dark:border-none bg-transparent hover:bg-transparent dark:hover:bg-transparent dark:bg-transparent"
          variant={"outline"}
        >
          <Edit className="mr-3" size={15} />
          <span>Edit</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit task description</SheetTitle>
        </SheetHeader>
        <p className="mt-5 dark:text-slate-200">
          Date: <span>{date}</span>
        </p>
        <Separator className="my-10" />
        <div className="grid gap-4 py-4">
          <Textarea
            className="text-2xl dark:text-white h-72 border-none dark:border-none focus-visible:ring-transparent dark:focus-visible:ring-transparent"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button onClick={handleAddDataToDatabase} type="submit">
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default SheetDrawer;
