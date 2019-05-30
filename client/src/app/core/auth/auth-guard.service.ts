import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  canActivate(rotute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userService.islogged()) {
      this.router.navigate(['grupos']);
      return false;

    }
    return true;
  }
}
