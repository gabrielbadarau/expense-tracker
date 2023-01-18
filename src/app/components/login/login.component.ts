import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SnackBarService } from '../../shared/services/snackbar.service';
import { AuthService } from '../../shared/services/auth.service';
import { emailValidator } from '../../shared/validators/email.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userForm!: FormGroup;

  hidePassword = true;

  constructor(
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
    public authService: AuthService
  ) {
    this.userForm = this.initForm();
  }

  login() {
    if (this.userForm.valid) {
      console.log(this.userForm);
    } else {
      this.snackBarService.openErrorSnackBar('Check your form errors.');
    }
  }

  private initForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
}
