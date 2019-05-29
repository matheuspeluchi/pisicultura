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
    this.userSubject.next(user);
  }
}
