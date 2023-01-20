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
          switch (user?.emailVerified) {
            case undefined: {
              this.router.navigate(['/login']);
              return false;
            }
            case true: {
              this.router.navigate(['/dashboard']);
              return false;
            }
            case false: {
              return true;
            }
          }
        })
      );
    } else {
      return this.authService.getUser$.pipe(
        map((user) => {
          switch (user?.emailVerified) {
            case undefined: {
              this.router.navigate(['/login']);
              return false;
            }
            case true: {
              return true;
            }
            case false: {
              this.router.navigate(['/verify-email']);
              return false;
            }
          }
        })
      );
    }
  }
}
