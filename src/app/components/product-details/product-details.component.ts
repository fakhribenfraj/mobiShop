import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product, products } from "../../models/products";
import { CartService } from "../../services/cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  amount = 0;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  increment() {
    this.amount++;
  }
  decrement() {
    this.amount > 0 ? this.amount-- : 0;
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product,this.amount);
  }
  removeFromCart(id: number) {
    // this.cartService.addToCart(product);
  }
  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"));
    this.amount = 0;
    // Find the product that correspond with the id provided in route.
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}
