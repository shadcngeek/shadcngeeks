import React from "react";

import { Play } from "lucide-react";

import WaveIcon from "./wave-icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function AudioDisplay() {
  return (
    <Card className=" h-[65px] w-fit">
      <CardContent className="flex items-center  gap-3 w-full h-full p-3 rounded-md overflow-hidden">
        <Button size={"icon"} variant={"outline"} className="border-blue-500">
          <Play className="text-blue-500" />
        </Button>
        <WaveIcon />
      </CardContent>
    </Card>
  );
}

export default AudioDisplay;
