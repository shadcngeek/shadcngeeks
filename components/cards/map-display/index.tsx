import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { MapOverview } from "@/components/dashboard/user-activity/components/map";

function MapDisplay() {
  return (
    <Card className="w-[70%]">
      <CardContent className="p-6">
        <MapOverview />
      </CardContent>
    </Card>
  );
}

export default MapDisplay;
