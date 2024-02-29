import React from "react";

import { Card, CardContent } from "@/components/ui/card";

function ClassicStat() {
  return (
    <Card>
      <CardContent className="flex justify-between items-center p-40 rounded-lg">
        <div className="text-center space-y-2">
          <p className="text-5xl font-bold">$43 Million</p>
          <p>Marketing every 1 week</p>
        </div>

        <div className="text-center space-y-2">
          <p className="text-5xl font-bold">$200 Million</p>
          <p>Profit every month</p>
        </div>

        <div className="text-center space-y-2">
          <p className="text-5xl font-bold">500, 000</p>
          <p>Users every day</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default ClassicStat;
