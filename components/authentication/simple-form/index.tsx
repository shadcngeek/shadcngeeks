import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

function SimpleForm() {
  return (
    <div className="space-y-3 w-[350px] border p-6 rounded-lg">
      <p className="text-2xl font-bold">Sign in</p>
      <div>
        <Input placeholder="Username" />
      </div>
      <div>
        <Input placeholder="Password" />
      </div>
      <div className="flex justify-end">
        <Button>Sign in</Button>
      </div>
    </div>
  );
}

export default SimpleForm;
