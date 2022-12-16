import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SnackBarComponent } from '../../shared/components/snackbar/snackbar.component';
import { emailValidator } from '../../shared/validators/email.validator';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar) {
    this.userForm = this.initForm();
  }

  resetPassword(): void {
    if (this.userForm.valid) {
      console.log(this.userForm);
    } else {
      this.openErrorSnackBar();
    }
  }

  private initForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required, emailValidator]],
    });
  }

  private openErrorSnackBar(): void {
    this.snackBar.openFromComponent(SnackBarComponent, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      data: 'Check your form errors.',
      duration: 4000,
      panelClass: 'error-snackbar',
    });
  }
}
