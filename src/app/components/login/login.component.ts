import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SnackBarService } from '../../shared/services/snackbar.service';
import { AuthService } from '../../shared/services/auth.service';
import { emailValidator } from '../../shared/validators/email.validator';
import { LoginData } from '../../shared/model/login-data.model';

import { omit } from 'lodash';
import { catchError, concatMap, of, tap, EMPTY, finalize } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isLoading = false;
  userForm!: FormGroup;

  isRememberMeChecked = false;
  hidePassword = true;

  constructor(
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
    private authService: AuthService,
    private router: Router
  ) {
    this.userForm = this.initForm();
  }

  login() {
    if (this.userForm.valid) {
      this.isLoading = true;
      let data = omit(this.userForm.value, ['checkedRememberMe']) as LoginData;

      this.authService
        .login(data)
        .pipe(
          tap(() => this.router.navigate(['/dashboard'])),
          finalize(() => (this.isLoading = false)),
          concatMap(() => {
            if (this.userForm.value.checkedRememberMe) {
              return this.authService
                .setPersistenceLocal()
                .pipe(catchError((error) => of(this.snackBarService.openServiceErrorSnackBar(error.message))));
            } else {
              return EMPTY;
            }
          }),
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
      password: ['', [Validators.required, Validators.minLength(8)]],
      checkedRememberMe: [false],
    });
  }
}
