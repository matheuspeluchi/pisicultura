import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { User } from 'src/app/core/user/user';
import { UserService } from 'src/app/core/user/user.service';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user$: Observable<User>;
  private user: SocialUser;
  private loggedIn: boolean;

  constructor(
      private userService: UserService,
      private router: Router,
      private authService: AuthService
     ) {
    this.user$ = userService.getUser();
   }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['login']);
  }


}
