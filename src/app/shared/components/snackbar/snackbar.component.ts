import { Component, Inject } from '@angular/core';

import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: 'snackbar.component.html',
})
export class SnackBarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string, public snackBarRef: MatSnackBarRef<SnackBarComponent>) {}

  dismiss() {
    this.snackBarRef.dismiss();
  }
}
