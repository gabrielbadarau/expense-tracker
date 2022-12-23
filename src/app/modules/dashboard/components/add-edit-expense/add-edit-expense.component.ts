import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs';
import { FormMode } from 'src/app/shared/model/form-mode.model';

import { SnackBarComponent } from '../../../../shared/components/snackbar/snackbar.component';
import { ExpenseCategory } from '../../../../shared/model/expense-category.model';

@UntilDestroy()
@Component({
  selector: 'app-expense',
  templateUrl: './add-edit-expense.component.html',
  styleUrls: ['./add-edit-expense.component.scss'],
})
export class AddEditExpense implements OnInit {
  maxDateCalendar = new Date();
  categories = Object.values(ExpenseCategory);

  form!: FormGroup;
  formMode!: FormMode;
  id!: string | null;

  formModes = FormMode;
  hidePassword = true;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.form = this.initForm();
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.activatedRoute.data
      .pipe(
        untilDestroyed(this),
        tap((data) => (this.formMode = data['formMode']))
      )
      .subscribe();
  }

  create(): void {
    if (this.form.valid) {
      console.log(this.form);
    } else {
      this.form.markAllAsTouched();
      this.openErrorSnackBar();
    }
  }

  edit(): void {
    if (this.form.valid) {
      console.log(this.form);
    } else {
      this.form.markAllAsTouched();
      this.openErrorSnackBar();
    }
  }

  cancel(): void {
    this.router.navigate(['/dashboard']);
    this.form.reset();
  }

  private initForm(): FormGroup {
    return this.formBuilder.group({
      date: [{ disabled: true }],
      category: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.max(1000000)]],
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
