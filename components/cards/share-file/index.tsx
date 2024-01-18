"use client";

import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ShareFile() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Card className="w-[430px]">
      <CardHeader>
        <CardTitle>Share File</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-5 items-start">
          <div className="w-full">
            <p className="text-[#71717a] dark:text-[#a1a1aa] text-sm">
              Share with team members
            </p>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="my-5">
                <Input placeholder="Enter an email address" />
              </div>
            </form>

            <div className="flex justify-between items-center w-full">
              <p className="text-[#71717a] dark:text-[#a1a1aa] text-sm mt-2">
                Anyone with the link can view this filter.
              </p>
              <Link href={"#"} className="text-blue-500 underline text-sm mt-2">
                Generate link
              </Link>
            </div>
            <Button className="mt-5">Share file</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
