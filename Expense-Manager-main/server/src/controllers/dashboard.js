const Expense = require('../models/expense')

class DashboardController {
    async showTotalSpentAmount(req, res) {

        const viewExpense = await Expense.find({ "activeStatus": 1 })
        let totalSpentAmount = 0
        try {
            if (!!viewExpense) {
                for (let i = 0; i < viewExpense.length; i++)
                    totalSpentAmount += viewExpense[i].amount

                res.send({ message: totalSpentAmount })
            }
            else
                res.send({ message: "No expenses to show" })

        }
        catch (error) {
            res.send(`Method: signupAdmin Class: AdminController Error : ${error}`);
        }
    }

    async showLastTransactions(req, res) {

        const lastTransactions = await Expense.find({ "activeStatus": 1 }).sort({ _id: -1 }).limit(5)
        try {
            if (!!lastTransactions) {
                res.send(lastTransactions)
            }
            else {
                res.send({ message: "No more transactions to show" })
            }
        }
        catch (error) {
            res.send(`Method: signupAdmin Class: AdminController Error : ${error}`);
        }
    }
}

module.exports = DashboardController