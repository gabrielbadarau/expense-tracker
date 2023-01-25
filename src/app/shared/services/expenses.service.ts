import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

import { defer, Observable } from 'rxjs';

import { Expense } from '../../shared/model/expense.model';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  constructor(private afs: AngularFirestore) {}

  getUserDb(uid: string): AngularFirestoreCollection<Expense> {
    return this.afs.collection(`/${uid}`);
  }

  createExpense(uid: string, expense: Expense) {
    return defer(() => this.afs.collection('/users').doc(`${uid}`).collection('expenses').add(expense));
  }

  editExpense(uid: string, idExpense: string, expense: Expense) {
    return defer(() =>
      this.afs.collection('/users').doc(`${uid}`).collection('expenses').doc(`${idExpense}`).update(expense)
    );
  }

  getExpenseById(uid: string, idExpense: string) {
    return defer(() => this.afs.collection('/users').doc(`${uid}`).collection('expenses').doc(`${idExpense}`).get());
  }

  // delete(id: string): Promise<void> {
  //   return this.tutorialsRef.doc(id).delete();
  // }
}
