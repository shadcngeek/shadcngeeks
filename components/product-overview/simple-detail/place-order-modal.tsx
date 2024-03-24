import PlaceOrder from "./place-order";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function PlaceOrderModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-violet-500 dark:bg-violet-500 hover:bg-violet-600 dark:hover:bg-violet-600 dark:text-white">
          Buy now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-0 border-none">
        <PlaceOrder />
      </DialogContent>
    </Dialog>
  );
}
