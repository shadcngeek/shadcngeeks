"use client"
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

type SliderProps = React.ComponentProps<typeof Slider>;

export function Range({ className, ...props }: SliderProps) {
  return (
    <Slider
      max={100}
      step={1}
      className={cn("w-[60%]", className)}
      {...props}
    />
  );
}
