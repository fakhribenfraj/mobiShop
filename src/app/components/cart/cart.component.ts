import { Component, OnInit } from "@angular/core";
import { CartService } from "../../services/cart.service";
import { UserService } from "../../services/user.service";

import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  isShippingView = false;
  cart = this.cartService.getCart();
  items = this.cart.products;
  loggedUser = this.userService.getLoggedUser();
  checkoutForm = this.formBuilder.group({
    name: "",
    address: "",
  });

  constructor(
    private cartService: CartService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router

  ) {}
  toggleShippingVue() {
    this.isShippingView = !this.isShippingView;
  }
  purchase(): void {
    // Process checkout data here
    this.loggedUser = this.userService.getLoggedUser();
    if(this.loggedUser.id>=0){
      this.cartService.submitCart(this.loggedUser.id);
      this.items = this.cartService.clearCart();
      window.alert('purchase success')
    }else{
      this.router.navigate(["/login"]);
    }
    
  }
  deleteItem(id: number) {
    this.cartService.deleteFromCart(id);
  }

  ngOnInit(): void {}
  ngDoCheck() {
    this.cart = this.cartService.getCart();
    this.items = this.cart.products;
  }
}
