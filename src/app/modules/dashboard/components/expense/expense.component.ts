import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { SnackBarComponent } from '../../../../shared/components/snackbar/snackbar.component';
import { ExpenseCategory } from '../../../../shared/model/expense-category.model';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss'],
})
export class ExpenseComponent {
  maxDateCalendar = new Date();
  categories = Object.values(ExpenseCategory);

  form!: FormGroup;

  hidePassword = true;

  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar, private router: Router) {
    this.form = this.initForm();
  }

  create(): void {
    if (this.form.valid) {
      console.log(this.form);
    } else {
      this.openErrorSnackBar();
    }
  }

  cancel(): void {
    this.router.navigate(['/dashboard']);
  }

  private initForm(): FormGroup {
    return this.formBuilder.group({
      date: [{ disabled: true }],
      category: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      description: [''],
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
