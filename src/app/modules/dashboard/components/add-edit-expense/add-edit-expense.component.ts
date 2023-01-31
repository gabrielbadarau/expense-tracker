import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { catchError, finalize, of, tap } from 'rxjs';
import { omit } from 'lodash';

import { FormMode } from '../../../../shared/model/form-mode.model';
import { Expense } from '../../../../shared/model/expense.model';
import { ExpenseCategory } from '../../../../shared/model/expense-category.model';

import { SnackBarService } from '../../../../shared/services/snackbar.service';
import { ExpensesService } from '../../../../shared/services/expenses.service';
import { AuthService } from '../../../../shared/services/auth.service';

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
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private expensesService: ExpensesService,
    private authService: AuthService
  ) {
    this.form = this.initForm();
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.id) {
      this.isLoading = true;

      this.expensesService
        .getExpenseById(this.authService.uid, this.id)
        .pipe(
          tap((expense) => this.form.setValue(omit(expense.data(), ['id']) as Expense)),
          finalize(() => (this.isLoading = false)),
          catchError((error) => of(this.snackBarService.openServiceErrorSnackBar(error.message)))
        )
        .subscribe();
    }

    this.activatedRoute.data
      .pipe(
        untilDestroyed(this),
        tap((data) => (this.formMode = data['formMode']))
      )
      .subscribe();
  }

  create(): void {
    if (this.form.valid) {
      // changing date format
      this.form.value.date = this.form.value.date.toISOString();

      this.isLoading = true;

      this.expensesService
        .createExpense(this.authService.uid, this.form.value)
        .pipe(
          tap(() => {
            this.form.reset();
            of(this.snackBarService.openSuccessSnackBar('Successfully created.'));
          }),
          finalize(() => (this.isLoading = false)),
          catchError((error) => of(this.snackBarService.openServiceErrorSnackBar(error.message)))
        )
        .subscribe();
    } else {
      this.form.markAllAsTouched();
      this.snackBarService.openErrorSnackBar('Check your form errors.');
    }
  }

  edit(): void {
    if (this.form.valid) {
      // changing date format
      this.form.value.date =
        typeof this.form.value.date !== 'string' ? this.form.value.date.toISOString() : this.form.value.date;

      this.isLoading = true;

      this.expensesService
        .editExpense(this.authService.uid, this.id as string, this.form.value)
        .pipe(
          tap(() => {
            this.form.reset();
            of(this.snackBarService.openSuccessSnackBar('Successfully updated.'));
            this.router.navigate(['dashboard']);
          }),
          finalize(() => (this.isLoading = false)),
          catchError((error) => of(this.snackBarService.openServiceErrorSnackBar(error.message)))
        )
        .subscribe();
    } else {
      this.form.markAllAsTouched();
      this.snackBarService.openErrorSnackBar('Check your form errors.');
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
      amount: ['', [Validators.required, Validators.min(0.1), Validators.max(1000000)]],
      description: [''],
    });
  }
}
