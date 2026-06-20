import {Request, Response} from 'express';
import {GettService} from '../service/expenseService';
import { ExpenseDto } from '../dtos/expenseDto';

export class ExpenseController {
    constructor(private service : GettService = new GettService()) {}

    async getAllExpenses(req: Request, res: Response): Promise<void> {
        const expenses = await this.service.getAllExpenses();
        const dto: ExpenseDto[] = expenses.map(e => ({ id: String(e.id), title: e.title, amount: String(e.amount) }));
        res.json(dto);
    };

    async getExpenseById(req: Request, res: Response): Promise<void> {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            res.status(400).json({ error: 'Invalid ID format' });
            return;
        }
        const expense = await this.service.getExpenseById(id);
        if (!expense) {
            res.status(404).json({ error: 'Expense not found' });
            return;
        }
        const dto: ExpenseDto = { id: String(expense.id), title: expense.title, amount: String(expense.amount) };
        res.status(200).json(dto);
    };

        async createExpense(req: Request, res: Response): Promise<void> {
        const { title, amount } = req.body;

        const newExpense = await this.service.createExpense({ title, amount });
        const dto: ExpenseDto = { id: String(newExpense.id), title: newExpense.title, amount: String(newExpense.amount) };
        res.status(201).json(dto);
        };

        async updateExpense(req: Request, res: Response): Promise<void> {
            const { id } = req.params;
            const { title, amount } = req.body;

            const update = await this.service.updateExpense(Number(id), { title, amount });
            const dto: ExpenseDto = { id: String(update.id), title: update.title, amount: String(update.amount) };

            res.status(200).json(dto);
        }

        async deleteExpenseById(req: Request, res: Response): Promise<void> {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            res.status(400).json({ error: 'Invalid ID format' });
            return;
        }

        const expense = await this.service.getExpenseById(id);
        if (!expense) {
            res.status(404).json({ error: 'Expense not found' });
            return;
        }
        const dto: ExpenseDto = { id: String(expense.id), title: expense.title, amount: String(expense.amount) };
        res.status(200).json(dto);
    };
}