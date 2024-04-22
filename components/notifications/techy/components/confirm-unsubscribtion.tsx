import {
  Dialog,
  DialogTitle,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function ConfirmUnsubscribing() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Unsubscribe</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] dark:text-white">
        <DialogHeader>
          <DialogTitle className="dark:text-white">Confirm</DialogTitle>
          <DialogDescription>
            Are you sure you want to unsubscribe?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit">Yes</Button>
          <Button className="dark:text-white" variant={"outline"}>
            No
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
