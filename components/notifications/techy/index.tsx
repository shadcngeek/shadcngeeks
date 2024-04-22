import { Metadata } from "next";

import path from "path";
import { z } from "zod";
import { promises as fs } from "fs";

import SideNav from "./components/sidebar";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";

import { notificationsSchema } from "./data/schema";

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

// Simulate a database read for tasks.
async function getNotifications() {
  const data = await fs.readFile(
    path.join(
      process.cwd(),
      "components/notifications/techy/data/notifications.json"
    )
  );

  const tasks = JSON.parse(data?.toString());

  return z.array(notificationsSchema).parse(tasks);
}

export default async function TechyNotifications() {
  const tasks = await getNotifications();

  return (
    <div className="dark:bg-slate-950 dark:text-white min-h-[100vh]">
      <div className="h-full flex gap-3 p-4 lg:py-5 lg:pl-0">
        <div className="hidden lg:block">
          <SideNav />
        </div>
        <div className="space-y-4 w-full">
          <DataTable data={tasks} columns={columns} />
        </div>
      </div>
    </div>
  );
}
