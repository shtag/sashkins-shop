export default interface OrderDB {
  id: number;
  date: number;
  products: OrderProduct[];
  trackNumber: string;
  totalPrice: number;
  deliveryInfo: OrderDeliveryInfo;
}

interface OrderProduct {
  id: string;
  price: number;
  vendorPrice: number;
  size: string;
  color: string;
}

interface OrderDeliveryInfo {
  phoneNumber: number;
  firstName: string;
  lastName: string;
  fatherName?: string;
  city: string;
  deliveryType: 'post-office' | 'postamt' | 'adress';
  postNumber?: number;
  payback?: number;
}