import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

import { catchError, finalize, of } from 'rxjs';

import { Expense } from '../../../../shared/model/expense.model';
import { columnsExpenseTable } from '../../../../shared/model/table-expense-data.model';

import { SnackBarService } from '../../../../shared/services/snackbar.service';
import { AuthService } from '../../../../shared/services/auth.service';
import { ExpensesService } from '../../../../shared/services/expenses.service';

import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { orderTableDetailExpandTrigger } from './expense-table.animations';

@Component({
  selector: 'app-expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.scss'],
  animations: [orderTableDetailExpandTrigger],
})
export class ExpensesTableComponent implements AfterViewInit {
  isLoading = false;
  displayedColumns = columnsExpenseTable;
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  data!: MatTableDataSource<Expense>;
  expandedElement: Expense | null = null;

  @Input() set expenses(value: Expense[]) {
    this.data = new MatTableDataSource(value);

    this.ngAfterViewInit();
  }

  @ViewChild('table', { read: ElementRef }) tableExpense!: ElementRef;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private expensesService: ExpensesService,
    private authService: AuthService,
    private snackBarService: SnackBarService
  ) {}

  ngAfterViewInit(): void {
    this.data.paginator = this.paginator;
    this.data.sort = this.sort;
  }

  scrollTop(): void {
    setTimeout(() => this.tableExpense.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }

  onDelete(element: Expense): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '20rem',
      height: '15rem',
      enterAnimationDuration: 300,
      exitAnimationDuration: 300,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && element.id) {
        this.isLoading = true;

        this.expensesService
          .deleteExpense(this.authService.uid, element.id)
          .pipe(
            finalize(() => {
              this.isLoading = false;
              this.snackBarService.openSuccessSnackBar('Successfully deleted.');
            }),
            catchError((error) => of(this.snackBarService.openServiceErrorSnackBar(error.message)))
          )
          .subscribe();
      }
    });
  }

  onEdit(element: Expense): void {
    this.router.navigate([`dashboard/edit-expense/${element.id}`]);
  }
}
