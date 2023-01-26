import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

import { v4 as uuidv4 } from 'uuid';

import { defer, Observable } from 'rxjs';

import { Expense } from '../../shared/model/expense.model';
import { ExpenseCategory } from '../model/expense-category.model';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  constructor(private afs: AngularFirestore) {}

  getFilteredExpenses(uid: string, filter: ExpenseCategory | null) {
    if (filter) {
      return this.afs
        .collection('/users')
        .doc(`${uid}`)
        .collection('expenses', (ref) => ref.where('category', '==', filter))
        .valueChanges() as Observable<Expense[]>;
    } else {
      return this.afs.collection('/users').doc(`${uid}`).collection('expenses').valueChanges() as Observable<Expense[]>;
    }
  }

  getExpenseById(uid: string, idExpense: string) {
    return defer(() => this.afs.collection('/users').doc(`${uid}`).collection('expenses').doc(`${idExpense}`).get());
  }

  createExpense(uid: string, expense: Expense) {
    const id = uuidv4();

    return defer(() =>
      this.afs
        .collection('/users')
        .doc(`${uid}`)
        .collection('expenses')
        .doc(id)
        .set({ ...expense, id })
    );
  }

  editExpense(uid: string, idExpense: string, expense: Expense) {
    return defer(() =>
      this.afs.collection('/users').doc(`${uid}`).collection('expenses').doc(`${idExpense}`).update(expense)
    );
  }

  deleteExpense(uid: string, idExpense: string) {
    return defer(() => this.afs.collection('/users').doc(`${uid}`).collection('expenses').doc(`${idExpense}`).delete());
  }
}
