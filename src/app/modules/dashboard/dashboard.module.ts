import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardRouting } from './dashboard.routing';

import { MaterialModule } from '../material-module/material.module';
import { DomPortalModule } from '../../shared/components/dom-portal/dom-portal.module';

import { LayoutComponent } from './layout/layout.component';
import { ExpensesTableComponent } from './components/expenses-table/expenses-table.component';
import { ExpenseComponent } from './components/expense/expense.component';

@NgModule({
  declarations: [LayoutComponent, ExpensesTableComponent, ExpenseComponent],
  imports: [CommonModule, DashboardRouting, DomPortalModule, MaterialModule, ReactiveFormsModule],
})
export class DashboardModule {}
