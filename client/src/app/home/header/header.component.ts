import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
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

  user$: Observable<SocialUser>;
  user: SocialUser;
  userSubject = new BehaviorSubject<SocialUser>(null);


  constructor(
      private userService: UserService
     ) {
       this.userService.decodeAndNotify();
       this.user$ = this.userService.getUser();
     }


  ngOnInit() {  }


  logout() {
    this.userService.logout();
  }


}
