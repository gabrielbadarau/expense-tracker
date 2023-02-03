import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { v4 as uuidv4 } from 'uuid';

import { defer, Observable } from 'rxjs';

import { Expense } from '../../shared/model/expense.model';
import { ExpenseCategory } from '../model/expense-category.model';

@Injectable()
export class ExpensesService {
  userCollection = this.afs.collection('/users');

  constructor(private afs: AngularFirestore) {}

  getFilteredExpenses(uid: string, filter: ExpenseCategory | '', sortData: Sort): Observable<Expense[]> {
    if (filter) {
      return this.userCollection
        .doc(`${uid}`)
        .collection('expenses', (ref) =>
          ref
            .where('category', '==', filter)
            .orderBy(sortData.active, sortData.direction as firebase.default.firestore.OrderByDirection | undefined)
        )
        .valueChanges() as Observable<Expense[]>;
    } else {
      return this.userCollection
        .doc(`${uid}`)
        .collection('expenses', (ref) =>
          ref.orderBy(sortData.active, sortData.direction as firebase.default.firestore.OrderByDirection | undefined)
        )
        .valueChanges() as Observable<Expense[]>;
    }
  }

  getExpenseById(uid: string, idExpense: string) {
    return defer(() => this.userCollection.doc(`${uid}`).collection('expenses').doc(`${idExpense}`).get());
  }

  createExpense(uid: string, expense: Expense) {
    const id = uuidv4();

    return defer(() =>
      this.userCollection
        .doc(`${uid}`)
        .collection('expenses')
        .doc(id)
        .set({ ...expense, id })
    );
  }

  editExpense(uid: string, idExpense: string, expense: Expense) {
    return defer(() => this.userCollection.doc(`${uid}`).collection('expenses').doc(`${idExpense}`).update(expense));
  }

  deleteExpense(uid: string, idExpense: string) {
    return defer(() => this.userCollection.doc(`${uid}`).collection('expenses').doc(`${idExpense}`).delete());
  }
}
