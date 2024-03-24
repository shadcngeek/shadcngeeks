import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function MoreInfo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem className="dark:border-slate-800" value="item-1">
        <AccordionTrigger>Features</AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-3 list-disc text-slate-700 dark:text-slate-400 pl-8 text-sm">
            <li>
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <p>Lorem, ipsum dolor.</p>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="dark:border-slate-800" value="item-2">
        <AccordionTrigger>Variations</AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-3 list-disc text-slate-700 dark:text-slate-400 pl-8 text-sm">
            <li>
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <p>Lorem, ipsum dolor.</p>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="dark:border-slate-800" value="item-3">
        <AccordionTrigger>Factories</AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-3 list-disc text-slate-700 dark:text-slate-400 pl-8 text-sm">
            <li>
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <p>Lorem, ipsum dolor.</p>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
