import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { catchError, of, tap } from 'rxjs';

import { ChartService } from '../../../../shared/services/chart.service';
import { AuthService } from '../../../../shared/services/auth.service';
import { SnackBarService } from '../../../../shared/services/snackbar.service';

@UntilDestroy()
@Component({
  selector: 'app-charts-page',
  templateUrl: './charts.page.html',
  styleUrls: ['./charts.page.scss'],
})
export class ChartsPage {
  maxDateCalendar = new Date();
  range!: FormGroup;
  sortedExpensesByCategory: {
    [key: string]: string | number;
  }[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private chartService: ChartService,
    private snackBarService: SnackBarService
  ) {
    this.range = this.initForm();
  }

  onCalendarClose() {
    if (this.range.valid) {
      const start = this.range.value.start.toISOString();
      const end = this.range.value.end.toISOString();

      this.chartService
        .getExpensesRange(this.authService.uid, start, end)
        .pipe(
          untilDestroyed(this),
          tap((expenses) => (this.sortedExpensesByCategory = this.chartService.getExpenseCategoryArray(expenses))),
          catchError((error) => of(this.snackBarService.openServiceErrorSnackBar(error.message)))
        )
        .subscribe();
    }
  }

  private initForm(): FormGroup {
    return this.formBuilder.group({
      start: [null, Validators.required],
      end: [null, Validators.required],
    });
  }
}
