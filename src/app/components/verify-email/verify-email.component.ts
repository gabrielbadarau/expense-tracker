import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { tap, catchError, of, defer, Observable } from 'rxjs';

import { AuthService } from '../../shared/services/auth.service';
import { SnackBarService } from '../../shared/services/snackbar.service';

@UntilDestroy()
@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
})
export class VerifyEmailComponent implements OnInit {
  userName: string | null | undefined;
  email: string | null | undefined;
  sendVerificationEmail!: Observable<any>;

  constructor(private snackBarService: SnackBarService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.getUser$
      .pipe(
        untilDestroyed(this),
        tap((user) => {
          this.sendVerificationEmail = defer(async () =>
            user?.sendEmailVerification({ url: 'https://expensetracker-bd.firebaseapp.com/dashboard' })
          );
          this.userName = user?.displayName;
          this.email = user?.email;
        })
      )
      .subscribe();
  }

  resendEmail(): void {
    this.sendVerificationEmail.subscribe();
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
