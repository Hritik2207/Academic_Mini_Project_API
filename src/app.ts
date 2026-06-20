import express from 'express';
import expenseRouter from './routes/expenseRouter';

const app = express();

app.use(express.json());
app.use(expenseRouter);

app.get('/', (req, res) => {
	res.json({ message: 'API is running' });
});

export default app;
