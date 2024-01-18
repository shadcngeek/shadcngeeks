import { Check } from "lucide-react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export function SuccessMessage() {
  return (
    <Card className="border-green-500 dark:border-green-400 relative w-[350px]">
      <CardContent className="p-6">
        <div className="absolute h-[80%] w-1 bg-green-500 left-1 top-[50%] translate-y-[-50%] rounded-full"></div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem className="border-none " value="item-1">
            <AccordionTrigger className="hover:no-underline p-0 text-green-500 dark:text-green-400">
              <div className="flex gap-3 items-center ml-1">
                <Check />
                <p>Success</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-0 text-[#71717a] dark:text-[#a1a1aa] ml-10">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
