import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { catchError, finalize, of, tap } from 'rxjs';

import { AuthService } from '../../shared/services/auth.service';
import { SnackBarService } from '../../shared/services/snackbar.service';
import { emailValidator } from '../../shared/validators/email.validator';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  isLoading = false;
  userForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
    private authService: AuthService
  ) {
    this.userForm = this.initForm();
  }

  resetPassword(): void {
    if (this.userForm.valid) {
      this.isLoading = true;

      this.authService
        .sendPasswordResetEmail(this.userForm.value.email)
        .pipe(
          tap(() => {
            this.userForm.reset();
            of(this.snackBarService.openSuccessSnackBar('A password reset email has been sent successfully.'));
          }),
          finalize(() => (this.isLoading = false)),
          catchError((error) => of(this.snackBarService.openServiceErrorSnackBar(error.message)))
        )
        .subscribe();
    } else {
      this.snackBarService.openErrorSnackBar('Check your form errors.');
    }
  }

  private initForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required, emailValidator]],
    });
  }
}
