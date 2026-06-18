import express from 'express';
import expenses from '../expensedb';

const router = express.Router();

router.get('/api/expenses', (req, res) => {
    res.status(200).json(expenses);
});

router.get('/api/expenses/:id', (req, res) => {
    const {id} = req.params;
    const expense = expenses.find(e => e.id === id);
    if (expense){
        res.status(200).json(expense);
    }else {
        res.status(404).json({ message: 'Expense not found' });
    }
});

router.post('/api/expenses', (req, res) => {
    const { id, title, amount } = req.body;

    const newExpense = {
        id,
        title,
        amount
    };

    expenses.push(newExpense);
    res.status(201).json(newExpense);
});

router.put('/api/expenses/:id', (req, res) => {
    const { id } = req.params;
    const { title, amount } = req.body;

    //
    const update = { id:Number(id), title, amount };
    res.status(200).json(update);

});
   

router.delete('/api/expenses/:id', (req, res) => {
    const { id } = req.params;
     res.status(200).json({ message: `Expense with id ${id} deleted` });
});

export default router;
