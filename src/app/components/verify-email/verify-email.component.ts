import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { tap, catchError, of, finalize } from 'rxjs';

import { AuthService } from '../../shared/services/auth.service';
import { SnackBarService } from '../../shared/services/snackbar.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
})
export class VerifyEmailComponent implements OnInit {
  isLoading!: boolean;
  email = '';

  constructor(private snackBarService: SnackBarService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.email = this.authService.email;
  }

  resendEmail(): void {
    this.isLoading = true;

    this.authService.sendVerificationEmail$
      .pipe(
        tap(() => of(this.snackBarService.openSuccessSnackBar('A verification email has been sent successfully.'))),
        catchError((error) => of(this.snackBarService.openServiceErrorSnackBar(error.message))),
        finalize(() => (this.isLoading = false))
      )
      .subscribe();
  }

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
