import {
  Dialog,
  DialogTitle,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function Subscribe() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-white text-black">Subscribe</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] text-white bg-black dark:bg-black border-slate-800 dark:border-slate-800">
        <DialogHeader>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogDescription>
            An email notification will be sent to you when we launch the
            product.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Email
            </Label>
            <Input
              id="name"
              placeholder="youremail@gmail.com"
              className="col-span-3 bg-transparent dark:bg-transparent border-slate-800 dark:border-slate-800"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-white text-black">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
