
const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    dateTime: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    },
    deletedAt: {
        type: Date
    },
    activeStatus: {
        type: Number,
        default: 1
    },
    category: {
        type: String,
        required: true
    }
});

const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = Expense;
