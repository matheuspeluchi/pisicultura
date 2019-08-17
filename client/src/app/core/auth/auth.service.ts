import { TokenService } from './../token/token.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { AuthService, SocialUser } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';
import { User } from '../user/user';

const baseRestUrl = 'http://localhost:3001';
@Injectable({
  providedIn: 'root'
})
export class AuthentService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private tokenService: TokenService
    ) { }

    userCheck(res: SocialUser) {
      this.userService.getUserData(res.email)
      .subscribe((user: User) => {

          if (user !== null) {
              this.router.navigate(['']);
              console.log('Encontrado usuário cadastrado.');


          } else {
              console.log('Registrando usuario no banco de dados...');
              const usuario =  {
                nome: res.name,
                socialId: res.id,
                email: res.email
              } as User;
              this.userService.registerUser(usuario)
                .subscribe((data: User) => {
                  console.log(`${data.nome} foi adicionado a base de dados.`);

                });
              }
          this.router.navigate(['']);

      },
        err => console.log(err)
      );

    }

    signInWithGoogle() {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
        .then((res: SocialUser) => {
            this.userCheck(res);
            this.userService.setToken(res.authToken);
        });

    }

    signInWithFB(): void {
      this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
        .then(res => {
          this.userCheck(res);
          this.userService.setToken(res.authToken);
        });
    }

    signOut(): void {
      this.authService.signOut();
    }

  authenticate(login: string, password: string) {
     return this.http.post<any>(baseRestUrl + '/login', {login, password}, {observe: 'response'})
     .pipe(tap(res => this.userService.setToken(res.body.token)));
  }
}
