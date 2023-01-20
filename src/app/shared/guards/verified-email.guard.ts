import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';

import { map, Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable()
export class VerifiedEmailGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (route.routeConfig?.path === 'verify-email') {
      return this.authService.getUser$.pipe(
        map((user) => {
          if (user?.emailVerified) {
            this.router.navigate(['/dashboard']);
          }
          return !user?.emailVerified as boolean;
        })
      );
    } else {
      return this.authService.getUser$.pipe(
        map((user) => {
          if (!user?.emailVerified) {
            this.router.navigate(['/verify-email']);
          }
          return user?.emailVerified as boolean;
        })
      );
    }
  }
}
