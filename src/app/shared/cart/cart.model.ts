export interface CartState {
  totalPrice: number;
  items: CartItem[]
}

export interface CartItem {
  color: string;
  size: string;
  art: string;
  price: number;
}