import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
    borderClassName?: string;
    fillClassName?: string;
  }
>(({ className, borderClassName, fillClassName, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-6 w-6 rounded-full border text-slate-900 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:border-slate-50 dark:text-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
        className,
        borderClassName,
        fillClassName
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className={cn("h-5 w-5 fill-current", fillClassName)} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };

function Color() {
  return (
    <div className="space-y-2">
      <p>Color</p>
      <div className="flex gap-3">
        <RadioGroup defaultValue="orange">
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              id="r1"
              className=""
              value="orange"
              fillClassName="text-orange-500 dark:text-orange-500"
              borderClassName="border-orange-500 dark:border-orange-500"
            />
            <RadioGroupItem
              value="cyan"
              id="r2"
              fillClassName="text-cyan-500 dark:text-cyan-500"
              borderClassName="border-cyan-500 dark:border-cyan-500"
            />
            <RadioGroupItem
              value="green"
              id="r3"
              fillClassName="text-green-500 dark:text-green-500"
              borderClassName="border-green-500 dark:border-green-500"
            />
            <RadioGroupItem
              value="yellow"
              id="r4"
              fillClassName="text-yellow-500 dark:text-yellow-500"
              borderClassName="border-yellow-500 dark:border-yellow-500"
            />
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

export default Color;
