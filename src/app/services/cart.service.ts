import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Product } from "../models/products";
import { Cart, CartItem } from "../models/cart";

@Injectable({
  providedIn: "root",
})
export class CartService {
  items: Product[] = [];
  carts: Cart[] = [];
  cartId:number = -1;
  cart: Cart = {
    id: 0,
    userId: 0,
    products: [
      // { product: { description: "", id: 0, name: "", price: 0 }, amount: 0 },
    ],
    totalPrice: 0,
    totalProducts: 0,
  };
  constructor(private http: HttpClient) {}

  addToCart(product: Product, amount: number) {
    if (amount === 0) return;
    let item = this.cart.products.find(
      (item) => product.id === item.product.id
    );
    if (item) {
      item.amount += amount;
    } else {
      this.cart.products.push({ product: product, amount: amount });
    }
    this.cart.totalPrice += product.price * amount;
    this.calculateTotalProduct();
  }
  calculateTotalProduct() {
    this.cart.totalProducts = this.cart.products.reduce(
      (prev, item) => prev + item.amount,
      0
    );
    this.cart.totalPrice = this.cart.products.reduce(
      (prev, item) => prev + item.product.price * item.amount,
      0
    );
  }
  deleteFromCart(id: number) {
    let item = this.cart.products.find((item) => id === item.product.id);
    if (item) {
      if (item.amount > 1) {
        item.amount--;
      } else {
        this.cart.products = this.cart.products.filter(
          (item) => id !== item.product.id
        );
      }
      this.calculateTotalProduct();
    }
  }
  getCart() {
    return this.cart;
  }
  getCartAmount() {
    return this.cart.totalProducts;
  }
  getProducts() {
    return this.cart.products;
  }

  clearCart() {
    this.cart.products = [];
    this.cart.totalProducts = 0;
    this.cart.totalPrice = 0;
    return this.cart.products;
  }
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      "https://miniprojet-d7f08-default-rtdb.europe-west1.firebasedatabase.app/shipping.json"
    );
  }
  async getCarts() {
    await this.http
      .get<Cart[]>(
        "https://miniprojet-d7f08-default-rtdb.europe-west1.firebasedatabase.app/carts.json"
      )
      .subscribe((res) => {
        this.carts = res;
      });
    return this.carts;
  }
  submitCart(id: number) {
    this.cart.id = this.cartId++;
    this.cart.userId = id;
    this.carts.push(this.cart);
    return this.http
      .put<Cart[]>(
        "https://miniprojet-d7f08-default-rtdb.europe-west1.firebasedatabase.app/carts.json",
        this.carts
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}
