import { Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";

import { ConfirmDeleteTypes } from "../types";
import { DialogClose } from "@radix-ui/react-dialog";

function ConfirmDelete({ onClick }: ConfirmDeleteTypes) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-5 border-none dark:border-none text-red-500 hover:text-red-600 dark:text-red-500 dark:hover:text-red-600 bg-transparent hover:bg-transparent dark:hover:bg-transparent dark:bg-transparent">
          <Trash className="mr-3" size={15} />
          <span>Delete</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Event</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this event?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={onClick}
            className="bg-red-500 hover:bg-red-600 dark:bg-red-500 hover:dark:bg-red-600"
          >
            Delete
          </Button>
          <DialogClose className="border px-3 rounded-md text-sm border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50">
            Cancel
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ConfirmDelete;
