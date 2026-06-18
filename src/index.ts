import express from 'express';
import expenseRouter from './routes/expense_router';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(expenseRouter);

app.get('/', (req, res) => {
	res.json({ message: 'API is running' });
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
