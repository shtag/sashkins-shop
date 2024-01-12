export default interface ProductDB {
  art: string;
  color: ColorProduct[];
  description: string;
  id: number;
  name: string;
  image: string[];
  price: number;
  size: string[];
  vendorDEscription: string;
  vendorPrice: number;
}

interface ColorProduct {
  name: string;
  hex: string;
  photoId?: number
}