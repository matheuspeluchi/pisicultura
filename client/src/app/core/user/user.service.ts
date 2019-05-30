import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(null);
  private userId: string;
  private userGroup: string;

  constructor(private tokenService: TokenService) {
    // tslint:disable-next-line: no-unused-expression
    this.tokenService.hasToken() && this.decodeAndNotify();
  }
  setToken(token: string){
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  logout(){
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User;
    this.userId = user.id;
    this.userGroup = user.grupo;
    this.userSubject.next(user);
  }

  islogged() {
    return this.tokenService.hasToken();
  }

  getUserLogin() {
    return this.userId;
  }

  getUserGroup() {
    return this.userGroup;
  }

  isDeveloper() {
    if (this.getUserGroup() === 'developer') {
     return true;
    } else {
      return false;
    }
  }

  isAdmin() {
    if (this.getUserGroup() === 'admin') {
      return true;
    } else {
      return false;
    }
  }

  isComercial() {
    if (this.getUserGroup() === 'comercial') {
      return true;
    } else {
      return false;
    }
  }
}
