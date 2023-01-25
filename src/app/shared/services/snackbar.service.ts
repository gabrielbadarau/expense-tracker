import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

import { SnackBarComponent } from '../components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  constructor(private snackBar: MatSnackBar) {}

  openSuccessSnackBar(message: string): void {
    this.snackBar.openFromComponent(SnackBarComponent, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      data: message,
      duration: 7000,
      panelClass: ['success-snackbar'],
    });
  }

  openErrorSnackBar(message: string): void {
    this.snackBar.openFromComponent(SnackBarComponent, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      data: message,
      duration: 7000,
      panelClass: ['error-snackbar'],
    });
  }

  openServiceErrorSnackBar(message: string) {
    const messageError = this.buildErrorMessage(message);

    this.openErrorSnackBar(messageError);
  }

  private buildErrorMessage(error: string): string {
    const a = error.indexOf(' ') + 1;
    const b = error.indexOf('.') + 1;

    return error.substring(a, b);
  }
}
