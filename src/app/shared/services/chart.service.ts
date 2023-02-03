import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { v4 as uuidv4 } from 'uuid';

import { defer, Observable } from 'rxjs';

import { Expense } from '../model/expense.model';
import { ExpenseCategory } from '../model/expense-category.model';

@Injectable()
export class ChartService {
  userCollection = this.afs.collection('/users');

  constructor(private afs: AngularFirestore) {}

  getExpensesRange(uid: string, start: string, end: string): Observable<Expense[]> {
    return this.userCollection
      .doc(`${uid}`)
      .collection('expenses', (ref) => ref.where('date', '>=', start).where('date', '<=', end))
      .valueChanges() as Observable<Expense[]>;
  }

  initializeExpenseCategoryArray() {
    return Object.values(ExpenseCategory).reduce((acc, curr) => {
      const object: { [key: string]: number | string } = {};

      object['category'] = curr;
      object['number'] = 0;

      acc.push(object);

      return acc;
    }, [] as { [key: string]: number | string }[]);
  }

  getExpenseCategoryArray(expenses: Expense[]) {
    const expenseCategoryArray = this.initializeExpenseCategoryArray();

    expenses.forEach((expense) => {
      const foundIndex = expenseCategoryArray.findIndex((item) => item['category'] === expense.category);

      if (foundIndex) {
        (expenseCategoryArray[foundIndex]['number'] as number) += expense.amount;
      }
    });

    expenseCategoryArray.sort((a, b) => {
      const x = a['number'] as number;
      const y = b['number'] as number;

      return y - x;
    });

    return expenseCategoryArray;
  }

  getSortedCategories(
    expenses: {
      [key: string]: string | number;
    }[]
  ) {
    return expenses.reduce((acc, curr) => {
      acc.push(curr['category'] as string);

      return acc;
    }, [] as Array<string>);
  }

  getSortedAmounts(
    expenses: {
      [key: string]: string | number;
    }[]
  ) {
    return expenses.reduce((acc, curr) => {
      acc.push(curr['number'] as number);

      return acc;
    }, [] as Array<number>);
  }
}
