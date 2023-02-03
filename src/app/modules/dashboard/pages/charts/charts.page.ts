import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { catchError, map, Observable, of, switchMap } from 'rxjs';

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
  chartData$!: Observable<{ [key: string]: string | number }[]>;
  maxDateCalendar = new Date();
  range!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private chartService: ChartService,
    private snackBarService: SnackBarService,
    private router: Router,
    private route: ActivatedRoute,
    private changeDetector: ChangeDetectorRef
  ) {
    this.range = this.initForm();

    this.chartData$ = this.route.queryParamMap.pipe(
      map((queryParamMap) => {
        // listen to start end param changes
        return this.handleParamChange(queryParamMap);
      }),
      switchMap((range) => {
        if (range) {
          return this.chartService.getExpensesRange(this.authService.uid, range.start, range.end).pipe(
            untilDestroyed(this),
            map((expenses) => this.chartService.getExpenseCategoryArray(expenses)),
            catchError((error) => {
              this.snackBarService.openServiceErrorSnackBar(error.message);
              console.error(error);
              return of([]);
            })
          );
        } else {
          return of([]);
        }
      })
    );
  }

  onCalendarClose() {
    if (this.range.valid) {
      const start = this.range.value.start.toISOString();
      const end = this.range.value.end.toISOString();

      this.router.navigate(['dashboard/view-charts'], { queryParams: { start, end } });
    }
  }

  private initForm(): FormGroup {
    return this.formBuilder.group({
      start: [null, Validators.required],
      end: [null, Validators.required],
    });
  }

  private handleParamChange(paramMap: ParamMap) {
    const start = paramMap.get('start') ?? '';
    const end = paramMap.get('end') ?? '';

    if (start && end) {
      this.range.setValue({
        start: new Date(start),
        end: new Date(end),
      });

      this.changeDetector.detectChanges();

      return { start, end };
    } else {
      return undefined;
    }
  }
}
