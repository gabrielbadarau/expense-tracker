import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

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
    private snackBarService: SnackBarService
  ) {
    this.isSmallScreen$ = breakpointObserver.observe([Breakpoints.XSmall]).pipe(
      map((xs) => {
        return xs.matches;
      })
    );
  }

  ngOnInit(): void {
    this.expenses$ = this.expensesService.getExpenses(this.authService.uid).pipe(
      catchError((error) => {
        this.snackBarService.openServiceErrorSnackBar(error.message);
        return of([]);
      })
    );
  }
}
