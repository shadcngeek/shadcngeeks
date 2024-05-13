import { Metadata } from "next";
import Image from "next/image";

import path from "path";
import { z } from "zod";
import { promises as fs } from "fs";

import { taskSchema } from "./data/schema";
import { columns } from "./components/columns";
import { UserNav } from "./components/user-nav";
import { DataTable } from "./components/data-table";

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "components/table/task/data/tasks.json")
  );

  const tasks = JSON.parse(data?.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function TaskComponent() {
  const tasks = await getTasks();

  return (
    <div className="dark:bg-slate-950 dark:text-white h-[100vh]">
      <div className="md:hidden">
        <Image
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
          src="/examples/tasks-light.png"
        />
        <Image
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
          src="/examples/tasks-dark.png"
        />
        <p className="text-slate-700 text-sm">
          This UI is not available for small screen devices yet. Please, switch
          to a large screen device.
        </p>
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </div>
  );
}
