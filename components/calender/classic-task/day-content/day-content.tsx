import { useEffect, useState } from "react";

import { useAtom } from "jotai";
import { format, getDate } from "date-fns";

import { databaseAtom } from "../add-task/add-task";
import MoreAction from "../more-action/more-action";

const initialData = { date: "", description: "" };

function DayContent(day: any, text: any): any {
  const [DB] = useAtom(databaseAtom);
  const [currentDate, setCurrentDate] = useState<{
    date: string;
    description: string;
  }>(initialData);

  useEffect(() => {
    const handleUpdateDescription = () => {
      const result = DB.find((data) => data.date == format(day, "d, MMM yyyy"));
      if (result) {
        setCurrentDate({ ...result });
      } else {
        setCurrentDate(initialData);
      }
    };
    handleUpdateDescription();
  }, [DB]);

  return (
    <div className="space-y-5 w-full">
      <p className="text-left dark:!text-white">{getDate(day)}</p>
      {currentDate?.description && (
        <>
          <p className="break-words text-left dark:!text-white">
            {currentDate.description.slice(0, 150)}
            {currentDate.description.length > 150 && "..."}
          </p>
          <MoreAction
            prevDescription={currentDate.description}
            date={currentDate.date}
          />
        </>
      )}
    </div>
  );
}

export default DayContent;
