import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { CartService } from "../../services/cart.service";

import { Router, ActivatedRoute } from "@angular/router";
import { User } from "src/app/models/users";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  user = this.userService.newUser();
  carts:any
  constructor(
    private userService: UserService,
    private cartService: CartService,

    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const userIdFromRoute = Number(routeParams.get("productId"));
    this.cartService.getCarts().then(res =>{
      this.carts = res
    })
  }
  ngDoCheck() {
    this.user = this.userService.getLoggedUser();
    
  }
  logout() {
    this.router.navigate(["/"]);
    this.userService.logout();
  }
}
