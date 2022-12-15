import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { ExpenseCategory } from '../../../../shared/model/expense-category.model';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss'],
})
export class ExpenseComponent {
  maxDateCalendar = new Date();

  category = new FormControl<ExpenseCategory | null>(null, Validators.required);
  date = new FormControl(new Date());

  categories = Object.values(ExpenseCategory)

}
