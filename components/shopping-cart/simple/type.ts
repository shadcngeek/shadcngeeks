export interface ItemTypes {
  imgUrl?: string;
  itemName?: string;
}

export interface TableTypes extends ItemTypes {
  item?: ItemTypes;
  quantity: number;
  itemPrice: number;
  totalPrice: number;
}
