import React from "react";

import SmallDeviceItem from "./small-device-Item";

import { ItemTypes } from "./type";

function Item({ imgUrl, itemName, color, itemPrice, size }: ItemTypes) {
  return <SmallDeviceItem {...{ imgUrl, itemName, color, itemPrice, size }} />;
}

export default Item;
