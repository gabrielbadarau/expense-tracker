import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../../shared/services/auth.service';
import { SnackBarComponent } from '../../shared/components/snackbar/snackbar.component';
import { emailValidator } from '../../shared/validators/email.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userForm!: FormGroup;

  hidePassword = true;

  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar, public authService: AuthService) {
    this.userForm = this.initForm();
  }

  login() {
    if (this.userForm.valid) {
      console.log(this.userForm);
    } else {
      this.openErrorSnackBar();
    }
  }

  private initForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  private openErrorSnackBar(): void {
    this.snackBar.openFromComponent(SnackBarComponent, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      data: 'Check your form errors.',
      duration: 4000,
      panelClass: ['error-snackbar'],
    });
  }
}
