import { Component, ChangeDetectorRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { Sort, SortDirection } from '@angular/material/sort';

import { catchError, map, Observable, of, switchMap, tap } from 'rxjs';

import { Expense } from '../../../../shared/model/expense.model';
import { ExpenseCategory } from '../../../../shared/model/expense-category.model';

import { AuthService } from '../../../../shared/services/auth.service';
import { ExpensesService } from '../../../../shared/services/expenses.service';
import { SnackBarService } from '../../../../shared/services/snackbar.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.page.html',
  styleUrls: ['./expenses.page.scss'],
})
export class ExpensesPage {
  selectedIndex = 0;
  filter!: ExpenseCategory | '';
  sortData!: Sort;
  isLoading = false;
  categories = Object.values(ExpenseCategory);

  isSmallScreen$: Observable<boolean>;
  expenses$!: Observable<Expense[]>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private expensesService: ExpensesService,
    private authService: AuthService,
    private snackBarService: SnackBarService,
    private router: Router,
    private route: ActivatedRoute,
    private changeDetector: ChangeDetectorRef
  ) {
    this.isSmallScreen$ = breakpointObserver.observe([Breakpoints.XSmall]).pipe(
      map((xs) => {
        return xs.matches;
      })
    );

    this.expenses$ = this.route.queryParamMap.pipe(
      tap((queryParamMap) => {
        //listen to filter param changes
        this.filter = (queryParamMap.get('category') as ExpenseCategory) ?? '';

        //listen to sort data param changes
        const active = queryParamMap.get('active') ?? 'date';
        const direction = (queryParamMap.get('direction') ?? 'desc') as SortDirection;
        this.sortData = { active, direction };

        // show active Angular Material Tab based on filter
        this.setActiveTab();
        this.changeDetector.detectChanges();
      }),
      switchMap(() => {
        this.isLoading = true;

        return this.expensesService.getFilteredExpenses(this.authService.uid, this.filter, this.sortData).pipe(
          tap(() => (this.isLoading = false)),
          catchError((error) => {
            this.snackBarService.openServiceErrorSnackBar(error.message);
            this.isLoading = false;
            return of([]);
          })
        );
      })
    );
  }

  onTabChange(e: MatTabChangeEvent) {
    this.filter = e.tab.textLabel as ExpenseCategory;

    this.setActiveTab();
    this.changeQueryParamaters(e.tab.textLabel);
  }

  changeQueryParamaters(textLabel: string) {
    if (textLabel) {
      this.router.navigate(['dashboard'], { queryParams: { category: `${textLabel}` }, queryParamsHandling: 'merge' });
    } else {
      this.router.navigate(['dashboard']);
    }
  }

  setActiveTab() {
    const categoryArray = Object.values(ExpenseCategory);
    this.selectedIndex = this.filter ? categoryArray.indexOf(this.filter) + 1 : 0;
  }
}
