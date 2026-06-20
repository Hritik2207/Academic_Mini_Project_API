import {ExpenseController} from "../controllers/expense_contoller";
import { Router } from "express";
import { validateBody, validateParams } from "../middleware/validate";
import { CreateExpenseSchema, IdParamSchema } from "../dtos/expenseDto";
import { z } from "zod";

const router = Router();
const controller = new ExpenseController();

router.get('/api/expenses', (req, res) => controller.getAllExpenses(req, res));
router.get('/api/expenses/:id', validateParams(IdParamSchema),  controller.getExpenseById.bind(controller));
router.post('/api/expenses', validateBody(CreateExpenseSchema), controller.createExpense.bind(controller));
router.put('/api/expenses/:id', validateParams(IdParamSchema), validateBody(CreateExpenseSchema), controller.updateExpense.bind(controller));
router.delete('/api/expenses/:id', validateParams(IdParamSchema), controller.deleteExpenseById.bind(controller));

export default router;