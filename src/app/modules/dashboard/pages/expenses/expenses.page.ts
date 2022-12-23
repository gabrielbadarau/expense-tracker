import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';

import { ExpenseCategory } from '../../../../shared/model/expense-category.model';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.page.html',
  styleUrls: ['./expenses.page.scss'],
})
export class ExpensesPage {
  selectedIndex = 0;
  categories = Object.values(ExpenseCategory);
  isSmallScreen$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isSmallScreen$ = breakpointObserver.observe([Breakpoints.XSmall]).pipe(
      map((xs) => {
        return xs.matches;
      })
    );
  }
}
