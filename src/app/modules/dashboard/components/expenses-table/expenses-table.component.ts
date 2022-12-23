import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import {
  columnsExpenseTable,
  mockTableData,
  TableExpenseData,
} from '../../../../shared/model/table-expense-data.model';
import { orderTableDetailExpandTrigger } from './expense-table.animations';

@Component({
  selector: 'app-expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.scss'],
  animations: [orderTableDetailExpandTrigger],
})
export class ExpensesTableComponent implements AfterViewInit {
  displayedColumns = columnsExpenseTable;
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  expenses: MatTableDataSource<TableExpenseData>;
  expandedElement: TableExpenseData | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Assign the data to the data source for the table to render
    this.expenses = new MatTableDataSource(mockTableData);
  }

  ngAfterViewInit() {
    this.expenses.paginator = this.paginator;
    this.expenses.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.expenses.filter = filterValue.trim().toLowerCase();

    if (this.expenses.paginator) {
      this.expenses.paginator.firstPage();
    }
  }
}
