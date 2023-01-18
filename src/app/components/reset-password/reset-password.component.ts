import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SnackBarService } from '../../shared/services/snackbar.service';
import { emailValidator } from '../../shared/validators/email.validator';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private snackBarService: SnackBarService) {
    this.userForm = this.initForm();
  }

  resetPassword(): void {
    if (this.userForm.valid) {
      console.log(this.userForm);
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
