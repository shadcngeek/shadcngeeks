import { createColumnHelper } from "@tanstack/react-table";
import HeaderPricingCard from "./header-pricing-card";

import ColumnIndex from "./column-index";

import { TableTypes } from "./types";

const columnHelper = createColumnHelper<TableTypes>();
const columns = [
  columnHelper.group({
    header: " ",
    columns: [
      columnHelper.accessor("index", {
        header: () => null,
        cell: ({ row }) => <ColumnIndex row={row} />,
      }),
    ],
  }),

  columnHelper.group({
    header: "Hobbyist",
    columns: [
      columnHelper.accessor("hobbyist", {
        header: () => {
          return (
            <div className="pl-5">
              <HeaderPricingCard
                description={
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste mollitia aspernatur nam aut consectetur eum."
                }
                price="0.00$"
                subtitle="For hobbyist"
              />
            </div>
          );
        },
        cell: ({ getValue }) => (
          <div className="w-fit mx-auto">{getValue()}</div>
        ),
      }),
    ],
  }),

  columnHelper.group({
    header: "Enterprise",
    columns: [
      columnHelper.accessor("enterprise", {
        header: () => {
          return (
            <HeaderPricingCard
              price="400.98$"
              subtitle="For enterprise"
              buttonClassName="bg-blue-500 dark:bg-blue-500 hover:bg-blue-600 hover:dark:bg-blue-600 dark:text-white"
              priceClassName="text-blue-500 dark:text-blue-500"
              className="border-blue-500 dark:border-blue-500"
              description={
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste mollitia aspernatur nam aut consectetur eum."
              }
            />
          );
        },
        cell: ({ row, getValue }) => {
          return <div className="w-fit mx-auto">{getValue()}</div>;
        },
      }),
    ],
  }),

  columnHelper.group({
    header: "Professional",
    columns: [
      columnHelper.accessor("professional", {
        header: () => {
          return (
            <HeaderPricingCard
              description={
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste mollitia aspernatur nam aut consectetur eum."
              }
              price="280.88$"
              subtitle="For professionals"
            />
          );
        },
        cell: ({ getValue }) => (
          <div className="w-fit mx-auto">{getValue()}</div>
        ),
      }),
    ],
  }),
];

export default columns;
