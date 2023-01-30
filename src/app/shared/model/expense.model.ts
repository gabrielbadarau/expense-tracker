import { ExpenseCategory } from './expense-category.model';

export interface Expense {
  id?: string;
  date: string;
  category: ExpenseCategory;
  amount: number;
  description: string | null;
}
