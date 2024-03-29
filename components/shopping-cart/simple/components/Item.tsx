import React from "react";
import Image from "next/image";

import { ItemTypes } from "../type";

function Item({ imgUrl, itemName }: ItemTypes) {
  return (
    <div className="w-[500px]">
      <div className="flex gap-5">
        <div className="w-[100px] h-[75px] rounded-lg overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            src={imgUrl}
            alt="Product image"
            width={200}
            height={100}
          />
        </div>
        <p>{itemName}</p>
      </div>
    </div>
  );
}

export default Item;
