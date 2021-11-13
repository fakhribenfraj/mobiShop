import { Component, Input } from "@angular/core";
import { UserService } from "../../services/user.service";
import { CartService } from "../../services/cart.service";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.css"],
})
export class TopBarComponent {
  @Input() loginId: number = -1;
  isLoggedIn = false;
  cartAmount = this.cartService.getCartAmount()
  user = this.userService.newUser();

  constructor(
    private userService: UserService,
    private cartService: CartService
  ) {}
  ngDoCheck() {
    this.user = this.userService.getLoggedUser();
    this.cartAmount = this.cartService.getCartAmount()
    this.isLoggedIn = this.user.id > 0;
  }
  onLogin() {
    // this.login =
    // if (this.login) window.alert("login");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
