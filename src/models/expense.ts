export class Expense {
    constructor(
        public readonly id: number,
        public readonly title: string,
        public readonly amount: number
    ) {
        if(amount < 0) {
            throw new Error('Amount cannot be negative');
        }
        if(title.trim().length === 0) {
            throw new Error('Title cannot be empty');
        }
        if(id <= 0) {
            throw new Error('ID must be a positive number');
        }
        if(!id || !title || !amount) {
            throw new Error('All fields are required');
        }
    }
}