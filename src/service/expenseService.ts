import expenses from '../expensedb';
import { Expense } from '../models/expense';
import { ExpenseDto, CreateExpenseDto } from '../dtos/expenseDto';

export class GettService {
    async getAllExpenses(): Promise<Expense[]> {
        return expenses;
    }

    async getExpenseById(id: number): Promise<Expense> {
        const expense = expenses.find(e => e.id === id);
        if (expense){
            return expense;
        } else {
            throw new Error('Expense not found');
        }
    }

    async createExpense(createExpenseDto: CreateExpenseDto): Promise<Expense> {
        const newExpense = new Expense(
            expenses.length > 0 ? expenses[expenses.length - 1].id + 1 : 1,
            createExpenseDto.title,
            createExpenseDto.amount
        );
        expenses.push(newExpense);
        return newExpense;
    }

    async updateExpense(id: number, updateExpenseDto: CreateExpenseDto): Promise<Expense> {
        const expense = expenses.find(e => e.id === id);
        if (expense) {
            expense.title = updateExpenseDto.title;
            expense.amount = updateExpenseDto.amount;
            return expense;
        } else {
            throw new Error('Expense not found');
        }
    }

    async deleteExpenseById(id: number): Promise<Boolean> {
        const index = expenses.findIndex(e => e.id === id);
        if (index !== -1) {
            expenses.splice(index, 1);
            return true;
        } else {
            throw new Error('Expense not found');
        }
    }
}
