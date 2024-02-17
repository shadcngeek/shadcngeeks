import { useState } from "react";

import { atom, useAtom } from "jotai";
import { Plus } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import DatePicker, { dateAtom } from "../date-picker/date-picker";

import { DatabaseAtom } from "../types";

export const descriptionAtom = atom<string>("");
export const databaseAtom = atom<DatabaseAtom[]>([]);

function AddTask() {
  const [DB, setDB] = useAtom(databaseAtom);
  const [description, setDescription] = useState("");
  const [formattedDate, setFormattedDate] = useAtom(dateAtom);

  const handleAddDataToDatabase = () => {
    const filteredData = DB.filter((data) => data.date !== formattedDate);
    setDB(() => {
      return [...filteredData, { date: formattedDate as string, description }];
    });
  };

  const reset = () => {
    setFormattedDate("");
    setDescription("");
  };

  return (
    <Popover onOpenChange={(isOpen) => isOpen && reset()}>
      <PopoverTrigger asChild>
        <div className="border-l dark:border-l-slate-800 pl-3">
          <Button>
            <span className="mr-3">Add Event</span>
            <Plus size={15} />
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Add Task</h4>
            <p className="text-sm text-slate-700 dark:text-slate-400">
              Never forget about the next again.
            </p>
          </div>
          <div className="grid gap-2">
            <>
              <Label htmlFor="">Pick date</Label>
              <DatePicker />
            </>
            <div className="items-center gap-4 space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                className="col-span-2 h-8"
                placeholder="Add description..."
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <Button onClick={handleAddDataToDatabase}>Add</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default AddTask;
