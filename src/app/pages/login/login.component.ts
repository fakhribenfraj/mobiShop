import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { User } from "src/app/models/users";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  items = this.userService.getUsers();
  user: any;
  isNotValidUser: boolean = false;
  loginForm = this.formBuilder.group({
    email: "",
    password: "",
  });
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {

  }
  onSubmit(): void {
    // Process checkout data here
    this.user = this.userService.login(
      this.loginForm.controls["email"].value,
      this.loginForm.controls["password"].value
    );

    if (this.user) {
      this.router.navigate(["/"]);
    } else {
      this.isNotValidUser = true;
    }
  }
}
