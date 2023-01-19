import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { tap, catchError, of } from 'rxjs';

import { SnackBarService } from '../../../shared/services/snackbar.service';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'dashboard-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  isOpen = false;

  constructor(private router: Router, private authService: AuthService, private snackBarService: SnackBarService) {}

  logout(): void {
    this.authService
      .logout()
      .pipe(
        tap(() => this.router.navigate(['/login'])),
        catchError((error) => of(this.snackBarService.openServiceErrorSnackBar(error.message)))
      )
      .subscribe();
  }
}
