export interface CartState {
  totalPrice: number;
  items: CartItem[]
}

export interface CartItem {
  id: number;
  color: string;
  size: string;
  art: string;
  price: number;
  quantity: number;
  description: string;
  name: string;
  image: string[];
  vendorDEscription: string;
  vendorPrice: number;
}