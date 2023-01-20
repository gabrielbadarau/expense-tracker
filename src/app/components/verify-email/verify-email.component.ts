import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { tap, catchError, of } from 'rxjs';

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

  constructor(private snackBarService: SnackBarService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.getUser$
      .pipe(
        untilDestroyed(this),
        tap((user) => {
          this.userName = user?.displayName;
          this.email = user?.email;
        })
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
