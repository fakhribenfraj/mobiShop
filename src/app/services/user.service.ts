import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { User, users } from "../models/users";

@Injectable({
  providedIn: "root",
})
export class UserService {
  users: User[] = [];
  loggedUser: User = {
    id: -1,
    username: "",
    email: "",
    password: "",
    address:""
  };

  newUser() {
    return {
      id: -1,
      username: "",
      email: "",
      password: "",
      address:""
    };
  }

  login(email: string, password: string) {
    const user: User = [...users].filter(
      (user) => user.email === email && user.password === password
    )[0];
    if (user) {
      localStorage.setItem("loggedUser", "" + user.id);
      this.loggedUser = user;
    }
    return user;
  }
  getUser(id: number | string) {
    let id2 = typeof id === "string" ? parseInt(id) : id;
    id2--;
    return id2 > 0 ? users[id2] : this.newUser();
  }
  getLoggedUser() {
    return this.loggedUser;
  }
  logout() {
    localStorage.removeItem("loggedUser");
    this.loggedUser = this.newUser();
    return this.newUser();
  }
  getUsers() {
    return this.users;
  }
}
