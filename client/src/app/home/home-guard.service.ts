import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { UserService } from '../core/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuardService implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userService.islogged()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
