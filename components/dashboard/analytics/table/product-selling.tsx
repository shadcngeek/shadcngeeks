import { Metadata } from "next";

import path from "path";
import { z } from "zod";
import { promises as fs } from "fs";

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";

import { salesSchema } from "./data/schema";

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

// Simulate a database read for tasks.
async function getProducts() {
  const data = await fs.readFile(
    path.join(
      process.cwd(),
      "components/dashboard/analytics/table/data/sales.json"
    )
  );

  const tasks = JSON.parse(data?.toString());

  return z.array(salesSchema).parse(tasks);
}

export default async function ProductSelling() {
  const tasks = await getProducts();

  return (
    <>
      <div className="h-full flex-1 flex-col space-y-4 lg:space-y-8 lg:p-8 flex pt-3">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Top selling products
            </h2>
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
