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
  const products = await getProducts();

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Top selling products
            </h2>
          </div>
        </div>
        <DataTable data={products} columns={columns} />
      </div>
    </>
  );
}
