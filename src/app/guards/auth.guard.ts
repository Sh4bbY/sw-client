import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userService.isAuthenticated().map(isAuthenticated => {
      if (!isAuthenticated) {
        this.userService.locationWhenAuthenticated = state.url;
        this.router.navigateByUrl('/login');
      }
      return isAuthenticated;
    });
  }
}
