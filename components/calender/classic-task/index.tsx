import Image from "next/image";

import Calendar from "./day-picker/day-picker";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

function ClassicCalender() {
  return (
    <div className="dark:bg-slate-950 p-4 md:p-10 min-h-dvh">
      <div className="sm:hidden dark:text-white">
        <Image
          width={1280}
          height={866}
          alt="Playground"
          className="block dark:hidden"
          src="/images/www/classic-task.png"
        />
        <Image
          width={1280}
          height={866}
          alt="Playground"
          className="hidden dark:block"
          src="/images/www/classic-task-dark.png"
        />

        <p className="text-slate-700 text-sm">
          This UI is not available for small screen devices yet. Switch to a
          large screen device.
        </p>
      </div>
      <ScrollArea className="hidden sm:block">
        <Calendar />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

export default ClassicCalender;
