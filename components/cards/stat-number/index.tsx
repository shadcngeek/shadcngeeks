import React from "react";

import { Card, CardContent } from "@/components/ui/card";

function StatNumber() {
  return (
    <Card className="w-full h-44 flex flex-col justify-center">
      <CardContent className="p-6">
        <div className="text-center space-y-2">
          <p className="text-3xl font-bold">$43 Million</p>
          <p>Marketing every 1 week</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default StatNumber;
