const Expense = require('../models/expense')

class ExpenseController {
  async createNewExpense(req, res) {
    let { amount, currency, description, category } = req.body;

    try {
      const newExpense = new Expense({
        amount,
        currency,
        description,
        category
      });

      newExpense.save()

      res.send({ message: "New Expense had been created successfully" })
    }

    catch (error) {
      res.send(`Method: createNewExpense Class: ExpenseController Error : ${error}`);
    }

  }

  async viewExpense(req, res) {

    try {
      const viewExpense = await Expense.find({ "activeStatus": 1 })

      res.send(viewExpense)
    }

    catch (error) {
      res.send(`Method: viewExpense Class: ExpenseController Error : ${error}`);
    }

  }


  async updateExpense(req, res) {
    let { expense_id, amount, currency, description, category } = req.query;

    try {
      await Expense.updateMany({ "_id": expense_id },
        { "amount": amount, "currency": currency, "description": description, "category": category, updatedAt: Date.now() });


      res.send({ message: "Expense had been updated successfully" })
    }

    catch (error) {
      res.send(`Method: updateExpense Class: ExpenseController Error : ${error}`);
    }

  }

  async deleteExpense(req, res) {
    let { expense_id } = req.query;

    try {
      await Expense.updateMany({ "_id": expense_id },
        { activeStatus: 0, deletedAt: Date.now() });

      res.send({ message: "Expense had been deleted successfully" })
    }

    catch (error) {
      res.send(`Method: deleteExpense Class: ExpenseController Error : ${error}`);
    }

  }
}

module.exports = ExpenseController