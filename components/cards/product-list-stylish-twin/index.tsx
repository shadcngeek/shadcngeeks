"use client";
import React from "react";

import Item from "./Item";
import { products } from "./data/table-data";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

function ProductsListStylishTwin() {
  return (
    <div className="w-full flex flex-col gap-5">
      <ScrollArea>
        {products.map(({ color, imgUrl, itemName, itemPrice, size }) => (
          <Item
            key={itemName}
            {...{ color, imgUrl, itemName, itemPrice, size }}
          />
        ))}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

export default ProductsListStylishTwin;
