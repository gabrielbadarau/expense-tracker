import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import {
  columnsExpenseTable,
  mockTableData,
  TableExpenseData,
} from '../../../../shared/model/table-expense-data.model';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
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

  @ViewChild('table', { read: ElementRef }) tableExpense!: ElementRef;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog) {
    this.expenses = new MatTableDataSource(mockTableData);
  }

  ngAfterViewInit(): void {
    this.expenses.paginator = this.paginator;
    this.expenses.sort = this.sort;
  }

  scrollTop(): void {
    setTimeout(() => this.tableExpense.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }

  onDelete(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '20rem',
      height: '15rem',
      enterAnimationDuration: 300,
      exitAnimationDuration: 300,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
