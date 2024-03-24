"use client";
import * as React from "react";
import { useState } from "react";

import Link from "next/link";
import { X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import AddReadMe from "./components/add-readme";
import Visibility from "./components/visibility";
import { GitIgnore } from "./components/gitigtnore";
import SelectOwner from "./components/select-owner";

import { frameworks, gitignore, ownerData } from "./data";
import { Separator } from "@/components/ui/separator";

function Repository() {
  const [tags, setTags] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");

  const handleAddTag = (tag: string) => {
    const sets = Array.from(new Set([tag, ...tags]));
    setTags(sets as any);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag(value);
      setValue("");
    }
  };
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("SUBMIT");
  };

  const handleDeleteBatch = (tag: string) => {
    const filteredTags = tags.filter((_tag) => _tag !== tag);
    setTags(filteredTags);
  };

  return (
    <div className="p-4 md:px-[50px] lg:px-[100px] xl:px-[200px] bg-white dark:bg-slate-950 text-slate-950 dark:text-slate-50 ">
      <div className="p-4 md:p-5 lg:p-10 border dark:border-slate-800 rounded-lg">
        <div className="space-y-2">
          <p className="text-2xl font-bold"> Create a new repository</p>
          <p className="text-slate-700 dark:text-slate-400 text-sm">
            A repository contains all project files, including the revision
            history. Already have a project repository elsewhere?{" "}
            <Link href={"#"} className="text-blue-500 hover:underline">
              Import a repository.
            </Link>
          </p>
        </div>

        <Separator className="my-6" />

        <div>
          <form onSubmit={(e) => handleFormSubmit(e)}>
            <div className="mt-8 space-y-8">
              <div className="flex gap-3 flex-col md:flex-row md:items-center">
                <div className="space-y-2">
                  <Label>Owner</Label>
                  <SelectOwner
                    items={ownerData}
                    defaultValue={ownerData[0].toLowerCase()}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="branchName">Branch name</Label>
                  <Input name="branchName" placeholder="Add branch name" />
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-400 text-sm">
                Great repository names are short and memorable. Need
                inspiration? How about{" "}
                <span className="text-green-500 dark:text-green-400">
                  turbo-bassoon
                </span>{" "}
                ?
              </p>

              <Separator className="my-6" />
              <Visibility />
              <Separator className="my-6" />

              <div className="space-y-2">
                <Label>Initialize this repository with</Label>
                <AddReadMe />
                <p className="text-slate-700 dark:text-slate-400 text-sm">
                  This is where you can write a long description for your
                  project.
                  <Link href={"#"} className="text-blue-500 hover:underline">
                    Learn more about READMEs. Add .gitignore
                  </Link>
                </p>
              </div>
              <div className="space-y-2">
                <Label>Add .gitignore</Label> <br />
                <GitIgnore
                  items={frameworks}
                  placeHolder=".gitignore template:"
                />
                <p className="text-slate-700 dark:text-slate-400 text-sm">
                  Choose which files not to track from a list of templates.{" "}
                  <Link href={"#"} className="text-blue-500 hover:underline">
                    Learn more about ignoring files.{" "}
                  </Link>
                </p>
              </div>

              <div className="space-y-2">
                <Label>Choose a license</Label> <br />
                <GitIgnore placeHolder="License:" items={gitignore} />
                <p className="text-slate-700 dark:text-slate-400 text-sm">
                  A license tells others what they can and can&apos;t do with
                  your code.{" "}
                  <Link href={"#"} className="text-blue-500 hover:underline">
                    {" "}
                    Learn more about licenses.
                  </Link>
                </p>
              </div>

              <Separator className="my-6" />

              <div className="space-y-2">
                <Label htmlFor="description">Add a description</Label>
                <Textarea
                  className="h-56"
                  name="description"
                  placeholder="Add description for the repository"
                />
              </div>

              <Separator className="my-6" />

              <div className="space-y-2">
                <p>Tags</p>
                <div className="flex gap-2 items-center border dark:border-slate-800 p-[2px] pl-2 w-full rounded-md">
                  <div className="space-x-2 max-w-full shrink-0">
                    {tags.map((tag) => (
                      <Badge key={tag}>
                        {tag}
                        <X
                          size={15}
                          className="ml-1 cursor-pointer"
                          onClick={() => handleDeleteBatch(tag)}
                        />
                      </Badge>
                    ))}
                  </div>
                  <Input
                    value={value}
                    onKeyDown={(e) => handleKeyDown(e)}
                    onChange={(e) => setValue(e.target.value)}
                    className="border-none outline-none focus-visible:ring-transparent dark:focus-visible:ring-transparent"
                  />
                </div>
              </div>
              <div className="w-full flex justify-end">
                <Button>Create repository</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Repository;
