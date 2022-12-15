import { ExpenseCategory } from './expense-category.model';

export interface Expense {
  date: Date;
  category: ExpenseCategory;
  amount: number;
  description: string;
}
