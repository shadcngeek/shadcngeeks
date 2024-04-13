"use client";
import React from "react";

import Item from "./Item";
import { products } from "../data/table-data";

function Products() {
  return (
    <div className="w-full flex flex-col gap-5">
      {products.map(({ color, imgUrl, itemName, itemPrice, size }) => (
        <Item
          key={itemName}
          {...{ color, imgUrl, itemName, itemPrice, size }}
        />
      ))}
    </div>
  );
}

export default Products;
