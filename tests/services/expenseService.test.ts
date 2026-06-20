import {describe, expect, it, beforeEach} from "vitest";
import {GettService} from "../../src/service/expenseService";

describe('GettService', () => {
    let service: GettService;

    beforeEach(() => {
        service = new GettService();
    });

    it('should create a new expense', async () => {
        const createExpenseDto = { title: 'Test Expense', amount: '100' };
        const expense = await service.createExpense(createExpenseDto);
        expect(expense).toHaveProperty('id');
        expect(expense.title).toBe(createExpenseDto.title);
        expect(expense.amount).toBe(Number(createExpenseDto.amount));
    });

    it('should get all expenses', async () => {
        const expenses = await service.getAllExpenses();
        expect(Array.isArray(expenses)).toBe(true);
    });

    it('should get an expense by id', async () => {
        const createExpenseDto = { title: 'Test Expense', amount: '100' };
        const newExpense = await service.createExpense(createExpenseDto);
        const expense = await service.getExpenseById(newExpense.id);
        expect(expense).toEqual(newExpense);
    });

    it('should update an expense', async () => {
        const createExpenseDto = { title: 'Test Expense', amount: '100' };
        const newExpense = await service.createExpense(createExpenseDto);
        const updateExpenseDto = { title: 'Updated Expense', amount: '150' };
        const updatedExpense = await service.updateExpense(newExpense.id, updateExpenseDto);
        expect(updatedExpense.title).toBe(updateExpenseDto.title);
        expect(updatedExpense.amount).toBe(Number(updateExpenseDto.amount));
    });

});
