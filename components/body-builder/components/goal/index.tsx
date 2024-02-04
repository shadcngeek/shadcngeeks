import React from "react";

import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import Image from "next/image";

interface GoalTypes {
  num: number;
}

function Goal({ num }: GoalTypes) {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }
  return (
    <div className="mx-auto w-full max-w-sm text-white rounded-lg">
      <DrawerHeader>
        <DrawerTitle>Day {num}</DrawerTitle>
        <DrawerDescription>Set your daily activity goal.</DrawerDescription>
      </DrawerHeader>
      <div className="p-4 pb-0">
        <div className="flex items-center justify-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 shrink-0 rounded-full bg-transparent dark:bg-transparent border-slate-800 dark:border-slate-800"
            onClick={() => onClick(-10)}
            disabled={goal <= 200}
          >
            <Minus className="h-4 w-4" />
            <span className="sr-only">Decrease</span>
          </Button>
          <div className="flex-1 text-center">
            <div className="text-7xl font-bold tracking-tighter text-orange-600">
              {goal}
            </div>
            <div className="text-[0.70rem] uppercase text-muted-foreground">
              Calories/day
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 shrink-0 rounded-full  bg-transparent dark:bg-transparent border-slate-800 dark:border-slate-800"
            onClick={() => onClick(10)}
            disabled={goal >= 400}
          >
            <Plus className="h-4 w-4" />
            <span className="sr-only">Increase</span>
          </Button>
        </div>
        <Image
          alt="image"
          width={800}
          height={800}
          className="mx-auto"
          src={`/images/b${num}.png`}
        />
      </div>
      <DrawerFooter>
        <DrawerClose asChild>
          <Button
            variant="outline"
            className="bg bg-transparent dark:bg-transparent"
          >
            Completed
          </Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  );
}

export default Goal;
