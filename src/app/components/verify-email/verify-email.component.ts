import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { tap, catchError, of } from 'rxjs';

import { AuthService } from '../../shared/services/auth.service';
import { SnackBarService } from '../../shared/services/snackbar.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
})
export class VerifyEmailComponent {
  constructor(private snackBarService: SnackBarService, private authService: AuthService, private router: Router) {}

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
