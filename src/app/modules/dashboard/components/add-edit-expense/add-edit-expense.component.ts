import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs';
import { FormMode } from 'src/app/shared/model/form-mode.model';

import { SnackBarService } from '../../../../shared/services/snackbar.service';
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
    private snackBarService: SnackBarService,
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
      this.form.value.date = this.form.value.date.toISOString();
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
      this.snackBarService.openErrorSnackBar('Check your form errors.');
    }
  }

  edit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
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
      amount: ['', [Validators.required, Validators.max(1000000)]],
      description: [''],
    });
  }
}
