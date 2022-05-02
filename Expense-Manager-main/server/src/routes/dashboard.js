const express = require('express')
const router = express.Router()

const DashboardController = require('../controllers/dashboard')

router.get('/showTotalSpentAmount', new DashboardController().showTotalSpentAmount);
router.get('/showLastTransactions', new DashboardController().showLastTransactions);

module.exports = router
