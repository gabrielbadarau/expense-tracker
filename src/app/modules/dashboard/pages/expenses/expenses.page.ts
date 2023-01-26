import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';

import { catchError, map, Observable, of } from 'rxjs';

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
export class ExpensesPage implements OnInit {
  selectedIndex = 0;
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
    private route: ActivatedRoute
  ) {
    this.isSmallScreen$ = breakpointObserver.observe([Breakpoints.XSmall]).pipe(
      map((xs) => {
        return xs.matches;
      })
    );
  }

  filter!: ExpenseCategory | null;

  ngOnInit(): void {
    this.filter = this.route.snapshot.queryParamMap.get('category') as ExpenseCategory;

    this.setActiveTab();
    this.getExpenses();
  }

  onTabChange(e: MatTabChangeEvent) {
    this.filter = e.tab.textLabel as ExpenseCategory;

    this.changeQueryParamaters(e.tab.textLabel);
    this.setActiveTab();
    this.getExpenses();
  }

  changeQueryParamaters(textLabel: string) {
    if (textLabel) {
      this.router.navigate(['dashboard'], { queryParams: { category: `${textLabel}` } });
    } else {
      this.router.navigate(['dashboard']);
    }
  }

  setActiveTab() {
    const categoryArray = Object.values(ExpenseCategory);
    this.selectedIndex = this.filter ? categoryArray.indexOf(this.filter) + 1 : 0;
  }

  getExpenses(): void {
    this.expenses$ = this.expensesService.getFilteredExpenses(this.authService.uid, this.filter).pipe(
      catchError((error) => {
        this.snackBarService.openServiceErrorSnackBar(error.message);
        return of([]);
      })
    );
  }
}
