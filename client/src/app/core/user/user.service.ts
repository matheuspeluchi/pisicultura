import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import {  Router } from '@angular/router';
import { AuthService, SocialUser } from 'angularx-social-login';
import { AuthentService } from '../auth/auth.service';


const APIURL = 'http://localhost:3001/pessoa';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<SocialUser>(null);
  private user: SocialUser;
  private loggedIn: boolean;

  constructor(
    private tokenService: TokenService,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
    ) {
    // tslint:disable-next-line: no-unused-expression
    this.tokenService.hasToken() && this.decodeAndNotify();
  }
  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  registerUser(user: User) {
    return this.http.put<User>(APIURL, user);
  }

  logout() {
    this.loggedIn = false;
    this.userSubject.next(null);
    this.tokenService.removeToken();
    this.router.navigate(['login']);

  }

  decodeAndNotify() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      this.userSubject.next(user);
    });
  }

  getUserData(email: string) {
    return this.http.get<User>(APIURL + '/email/' + email);
  }

  islogged() {
    return (!!this.tokenService.hasToken());
  }

  getUserLogin() {
    return this.user.email;
  }

}
