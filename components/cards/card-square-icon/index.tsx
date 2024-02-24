import { Card, CardContent } from "@/components/ui/card";
import React from "react";

function CardSquareIcon() {
  return (
    <Card className="w-full">
      <CardContent className={"flex justify-between p-6"}>
        <div>
          <p>Total Revenue</p>
          <div className="flex justify-between h-full">
            <div className="text-2xl font-bold">$45,231.89</div>
          </div>
        </div>
        <div className="flex justify-center items-center w-[52px] h-[104px]] border border-slate-200 dark:border-slate-800 rounded-lg">
          <svg
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </div>
      </CardContent>
    </Card>
  );
}

export default CardSquareIcon;
