import { TokenService } from './../token/token.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { AuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';

const baseRestUrl = 'http://localhost:3001';
@Injectable({
  providedIn: 'root'
})
export class AuthentService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
    private authService: AuthService
    ) { }

    signInWithGoogle(): void {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
        .then(res => {
            console.log('Usuario logado!');
            this.router.navigate(['']);
        });
    }

    signInWithFB(): void {
      this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
        .then(res => {
          console.log('Usuario logado!');
          this.router.navigate(['']);
        });
    }

    signOut(): void {
      this.authService.signOut()
        .then(res => console.log(res));
    }
  authenticate(login: string, password: string) {
     return this.http.post<any>(baseRestUrl + '/login', {login, password}, {observe: 'response'})
     .pipe(tap(res => this.userService.setToken(res.body.token)));
  }
}
