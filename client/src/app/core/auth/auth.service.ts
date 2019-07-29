import { TokenService } from './../token/token.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';

const baseRestUrl = 'http://localhost:3001';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService
    ) { }
    
  authenticate(login: string, password: string) {
     return this.http.post(baseRestUrl + '/login', {login, password}, {observe: 'response'})
     .pipe(tap(res => this.userService.setToken(res.headers.get('Authorization'))));
  }
}
