import React from "react";

import { Trash2 } from "lucide-react";
import { createColumnHelper } from "@tanstack/react-table";

import Item from "./components/Item";
import Quantity from "./components/quality";

import { TableTypes } from "./type";
import { Button } from "@/components/ui/button";

const columnHelper = createColumnHelper<TableTypes>();

export const columns = [
  columnHelper.accessor("item", {
    header: () => (
      <div className="w-fit">
        <span>Header</span>
      </div>
    ),
    cell: ({ getValue }) => {
      const { imgUrl, itemName } = getValue();
      return <Item {...{ imgUrl, itemName }} />;
    },
    size: 200,
  }),

  columnHelper.accessor("itemPrice", {
    header: () => <span>Price</span>,
  }),

  columnHelper.accessor("quantity", {
    header: () => <span>Quantity</span>,
    cell: () => <Quantity />,
  }),

  columnHelper.accessor("totalPrice", {
    header: () => <span>Total</span>,
    cell: ({ getValue }) => {
      return (
        <div className="flex justify-between items-center gap-3">
          <p>{getValue()}</p>
          <Button size={"icon"} variant={"ghost"}>
            <Trash2 className="w-5 h-5" />
          </Button>
        </div>
      );
    },
  }),
];
