const express = require('express')
const router = express.Router()

const ExpenseController = require('../controllers/expense')

router.post('/createNewExpense', new ExpenseController().createNewExpense);
router.get('/viewExpense', new ExpenseController().viewExpense);
router.get('/updateExpense', new ExpenseController().updateExpense);
router.get('/deleteExpense', new ExpenseController().deleteExpense);


module.exports = router
