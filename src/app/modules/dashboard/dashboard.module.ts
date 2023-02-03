import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardRouting } from './dashboard.routing';

import { MaterialModule } from '../material-module/material.module';
import { DomPortalModule } from '../../shared/components/dom-portal/dom-portal.module';
import { ExpensesService } from '../../shared/services/expenses.service';
import { ChartService } from '../../shared/services/chart.service';

import { LayoutComponent } from './layout/layout.component';
import { ExpensesTableComponent } from './components/expenses-table/expenses-table.component';
import { AddEditExpense } from './components/add-edit-expense/add-edit-expense.component';
import { ChartComponent } from './components/chart/chart.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { ExpensesPage } from './pages/expenses/expenses.page';
import { ChartsPage } from './pages/charts/charts.page';

@NgModule({
  declarations: [
    LayoutComponent,
    ExpensesTableComponent,
    ChartComponent,
    DeleteDialogComponent,
    AddEditExpense,
    ExpensesPage,
    ChartsPage,
  ],
  imports: [CommonModule, DashboardRouting, DomPortalModule, MaterialModule, ReactiveFormsModule],
  providers: [ExpensesService, ChartService],
})
export class DashboardModule {}
