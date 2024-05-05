"use client";

import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SubscribeToNewsletter() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Card className="md:w-[430px]">
      <CardHeader>
        <CardTitle>Subscribe to our newsletter</CardTitle>
      </CardHeader>
      <CardContent className="h-fit">
        <div className="h-fit space-y-3">
          <p className="text-slate-700 dark:text-slate-400 text-sm">
            In the garden of life, habits are the seeds that bloom into your
            daily reality. Cultivate positive...
          </p>
          <div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="flex items-center  gap-3">
                <Input placeholder="Enter your email address" />
                <Button>Subscribe</Button>
              </div>
            </form>

            <p className="text-slate-700 dark:text-slate-400 text-sm mt-2">
              By subscribing, you consent to receive recurring automated
              marketing text messages.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
