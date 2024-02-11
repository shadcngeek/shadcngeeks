import { AlertOctagon } from "lucide-react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export function WarningMessage() {
  return (
    <Card className="border-yellow-500 dark:border-yellow-400 relative">
      <CardContent className="p-6">
        <div className="absolute h-[80%] w-1 bg-yellow-500 left-1 top-[50%] translate-y-[-50%] rounded-full"></div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem className="border-none " value="item-1">
            <AccordionTrigger className="hover:no-underline p-0 text-yellow-500 dark:text-yellow-400">
              <div className="flex gap-3 items-center ml-1">
                <AlertOctagon />
                <p>Warning</p>
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
