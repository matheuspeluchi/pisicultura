import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/user/user.service';
import { Router } from '@angular/router';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user$: Observable<SocialUser>;


  constructor(
      private userService: UserService,
      private router: Router
     ) {
    this.user$ = userService.getUser();
   }

  ngOnInit() {

  }

  logout() {
    this.userService.logout();
    this.router.navigate(['login']);
  }

}
