import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExpensesTableComponent } from './components/expenses-table/expenses-table.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ExpenseComponent } from './components/expense/expense.component';

import { FormMode } from '../../shared/model/form-mode.model';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ExpensesTableComponent,
      },
      {
        path: 'add-expense',
        component: ExpenseComponent,
        data: {
          formMode: FormMode.CREATE,
        },
      },
      {
        path: 'edit-expense',
        component: ExpenseComponent,
        data: {
          formMode: FormMode.EDIT,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRouting {}
