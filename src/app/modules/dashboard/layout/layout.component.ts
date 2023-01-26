import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { tap, catchError, of } from 'rxjs';

import { SnackBarService } from '../../../shared/services/snackbar.service';
import { AuthService } from '../../../shared/services/auth.service';

@UntilDestroy()
@Component({
  selector: 'dashboard-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  isOpen = false;
  userName = '';

  constructor(private router: Router, private authService: AuthService, private snackBarService: SnackBarService) {}

  ngOnInit(): void {
    this.userName = this.authService.displayName;
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
