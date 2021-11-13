import { Component, Input, Output, EventEmitter } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { User } from "./models/users";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  userId: number = NaN;

  ngDoCheck() {
    let id = localStorage.getItem("loggedUser") || "";
    this.userId = parseInt(id);
  }
}
