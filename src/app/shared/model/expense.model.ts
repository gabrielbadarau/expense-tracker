import { ExpenseCategory } from './expense-category.model';

export interface Expense {
  date: string;
  category: ExpenseCategory;
  amount: number;
  description: string | null;
}
