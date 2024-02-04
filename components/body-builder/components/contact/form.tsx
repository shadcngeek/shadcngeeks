"use client";
import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function Form() {
  return (
    <Card className="text-white mx-auto w-[370px] md:w-[400px] border-slate-800 dark:border-slate-800 bg-black dark:bg-black my-4">
      <CardHeader>
        <CardTitle>Report an issue</CardTitle>
        <CardDescription>
          What area are you having problems with?
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="fullName">Full name</Label>
            <Input
              id="fullName"
              placeholder="Your full name"
              className="bg-transparent dark:bg-transparent border-slate-800 dark:border-slate-800"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phoneNumber">Phone number</Label>
            <Input
              id="phoneNumber"
              placeholder="Your contact"
              className="bg-transparent dark:bg-transparent border-slate-800 dark:border-slate-800"
            />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            placeholder="Requesting for..."
            className="bg-transparent dark:bg-transparent border-slate-800 dark:border-slate-800"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            className="bg-transparent dark:bg-transparent border-slate-800 dark:border-slate-800"
            placeholder="Please include all information relevant to your issue."
          />
        </div>
      </CardContent>
      <CardFooter className="justify-between space-x-2">
        <Button variant="ghost">Cancel</Button>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  );
}
