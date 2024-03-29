import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/services/auth.service';
import { SnackBarService } from '../../shared/services/snackbar.service';
import { emailValidator } from '../../shared/validators/email.validator';
import { LoginData } from '../../shared/model/login-data.model';

import { omit } from 'lodash';
import { catchError, concatMap, defer, of, tap, concat, finalize } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  isLoading = false;
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
      this.isLoading = true;
      let data = omit(this.userForm.value, ['name']) as LoginData;

      this.authService
        .register(data)
        .pipe(
          finalize(() => (this.isLoading = false)),
          tap(() => this.router.navigate(['/dashboard'])),
          concatMap((res) => {
            const updateProfile$ = defer(async () =>
              res.user?.updateProfile({ displayName: this.userForm.value.name })
            );
            const sendVerificationEmail$ = defer(async () =>
              res.user?.sendEmailVerification({ url: 'https://expensetracker-bd.web.app/login' })
            );

            return concat(
              updateProfile$.pipe(
                catchError((error) => of(this.snackBarService.openServiceErrorSnackBar(error.message)))
              ),
              sendVerificationEmail$.pipe(
                catchError((error) => of(this.snackBarService.openServiceErrorSnackBar(error.message)))
              )
            ).pipe(
              finalize(() => {
                this.isLoading = false;
                this.router.navigate(['/verify-email']);
              })
            );
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
      name: ['', Validators.required],
      email: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
}
