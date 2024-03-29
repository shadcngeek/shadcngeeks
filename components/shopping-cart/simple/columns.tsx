import React from "react";

import { Trash2 } from "lucide-react";
import { createColumnHelper } from "@tanstack/react-table";

import Item from "./components/Item";
import Quantity from "./components/quality";

import { TableTypes } from "./type";

const columnHelper = createColumnHelper<TableTypes>();

export const columns = [
  columnHelper.accessor("item", {
    header: () => (
      <div className="w-fit">
        <span>Header</span>
      </div>
    ),
    cell: ({ getValue, row }) => {
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
        <div className="flex justify-between items-center">
          <p>{getValue()}</p> <Trash2 />
        </div>
      );
    },
  }),
];
