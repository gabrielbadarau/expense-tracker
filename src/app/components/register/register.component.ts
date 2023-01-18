import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../shared/services/auth.service';
import { SnackBarService } from '../../shared/services/snackbar.service';
import { emailValidator } from '../../shared/validators/email.validator';
import { LoginData } from '../../shared/model/login-data.model';

import { omit } from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  userForm!: FormGroup;

  hidePassword = true;

  constructor(
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
    private authService: AuthService,
    private router: Router
  ) {
    this.userForm = this.initForm();
  }

  register(): void {
    if (this.userForm.valid) {
      let data = omit(this.userForm.value, ['name']) as LoginData;

      this.authService.register(data).then(
        (res) => {
          this.router.navigate(['/dashboard']);

          // Updating display name
          res.user?.updateProfile({ displayName: this.userForm.value.name }).catch((error) => {
            this.snackBarService.openServiceErrorSnackBar(error.message);
          });
        },
        (error) => this.snackBarService.openServiceErrorSnackBar(error.message)
      );
    } else {
      this.snackBarService.openErrorSnackBar('Check your form errors.');
    }
  }

  private initForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
}
