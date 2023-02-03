import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { tap, catchError, of } from 'rxjs';

import { SnackBarService } from '../../../shared/services/snackbar.service';
import { AuthService } from '../../../shared/services/auth.service';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
  selector: 'dashboard-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  isOpen = false;
  userName = '';

  startTime: number = 0;

  constructor(
    private router: Router,
    private authService: AuthService,
    private snackBarService: SnackBarService,
    private analytics: AngularFireAnalytics
  ) {}

  ngOnInit(): void {
    this.userName = this.authService.displayName;

    this.startTime = new Date().getTime();
  }

  logout(): void {
    this.authService
      .logout()
      .pipe(
        tap(() => {
          this.router.navigate(['/login']);

          const endTime = new Date().getTime();

          this.analytics
            .logEvent('session_length', {
              userName: this.userName,
              uid: this.authService.uid,
              duration: endTime - this.startTime,
            })
            .then(() => console.log('Logged event'));
        }),
        catchError((error) => of(this.snackBarService.openServiceErrorSnackBar(error.message)))
      )
      .subscribe();
  }
}
