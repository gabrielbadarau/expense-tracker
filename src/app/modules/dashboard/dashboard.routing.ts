import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { ExpensesPage } from './pages/expenses/expenses.page';
import { ChartsPage } from './pages/charts/charts.page';
import { AddEditExpense } from './components/add-edit-expense/add-edit-expense.component';

import { FormMode } from '../../shared/model/form-mode.model';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: ExpensesPage,
      },
      {
        path: 'add-expense',
        component: AddEditExpense,
        data: {
          formMode: FormMode.CREATE,
        },
      },
      {
        path: 'edit-expense/:id',
        component: AddEditExpense,
        data: {
          formMode: FormMode.EDIT,
        },
      },
      {
        path: 'view-charts',
        component: ChartsPage,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRouting {}
