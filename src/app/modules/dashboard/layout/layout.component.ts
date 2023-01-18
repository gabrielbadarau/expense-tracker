import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    this.authService.logout().then(
      () => this.router.navigate(['/login']),
      (error) => this.snackBarService.openServiceErrorSnackBar(error.message)
    );
  }
}
