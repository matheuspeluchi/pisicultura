import { Observable } from 'rxjs';
import { Component, OnInit, RootRenderer } from '@angular/core';
import { UserService } from '../user/user.service';
import { User } from '../user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  user$: Observable<User>;


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
    this.router.navigate(['']);
  }



}
