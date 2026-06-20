import {describe, it, expect, vi, beforeEach} from 'vitest';
import {GettService} from "../../src/service/expenseService";
import { ExpenseController } from "../../src/controllers/expense_contoller";
import type { Request, Response } from "express";

const mockGettService = {
    getAllExpenses: vi.fn(),
    getExpenseById: vi.fn(),
    createExpense: vi.fn(),
    updateExpense: vi.fn(),
    deleteExpenseById: vi.fn()
} as unknown as GettService;

const mockRequest = {
    params: {},
    body: {}
} as unknown as Request;

const mockResponse = {
    status: vi.fn().mockReturnThis(),
    json: vi.fn()
} as unknown as Response;

describe("All expensis should be reutned", () => {
    let service: GettService;

    beforeEach(() => {
        service = mockGettService;
    });

it("should return all expenses", async () => {
    const mockExpenses = [
        { id: 1, title: "Expense 1", amount: 100 },
        { id: 2, title: "Expense 2", amount: 200 }
    ];

    mockGettService.getAllExpenses = vi.fn().mockResolvedValue(mockExpenses);

    const controller = new ExpenseController(service);
    await controller.getAllExpenses(mockRequest, mockResponse);

    expect(mockResponse.json).toHaveBeenCalledWith(mockExpenses.map(e => ({ id: String(e.id), title: e.title, amount: String(e.amount) })));
})});


