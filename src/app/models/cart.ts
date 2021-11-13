import { Product } from "./products";
export interface CartItem {
  product: Product;
  amount: number ;
}
export interface Cart {
  id: number;
  userId: number ;
  products: CartItem[];
  totalPrice: number ;
  totalProducts: number;
}
