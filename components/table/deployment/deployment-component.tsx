import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import Image from "next/image";
import { z } from "zod";

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { UserNav } from "./components/user-nav";
import { productionSchema } from "./data/schema";

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(
      process.cwd(),
      "components/table/deployment/data/deployments.json"
    )
  );

  const tasks = JSON.parse(data?.toString());

  return z.array(productionSchema).parse(tasks);
}

export default async function DeploymentComponent() {
  const tasks = await getTasks();
  console.log(tasks);

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-950 dark:text-slate-50 p-4 md:p-10 pb-16 h-[100vh]">
      <div className="h-full flex-1 flex-col space-y-8 md:p-8 flex max-w-[1536px] mx-auto">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Deployments</h2>
            <p className="text-muted-foreground">
              Deployments for this project!
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
