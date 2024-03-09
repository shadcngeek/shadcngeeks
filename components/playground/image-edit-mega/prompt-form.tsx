"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

function PromptForm() {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <Textarea placeholder="Add instructions" />
        <div className="ml-auto w-fit mt-3">
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default PromptForm;
