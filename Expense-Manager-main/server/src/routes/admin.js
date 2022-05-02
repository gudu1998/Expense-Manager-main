const express = require('express')
const router = express.Router()

const AdminController = require('../controllers/admin')

router.post('/register', new AdminController().signupAdmin);
router.post('/login', new AdminController().signinAdmin);

module.exports = router
