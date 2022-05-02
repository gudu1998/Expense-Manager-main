
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const adminRoutes = require('./routes/admin')
const expenseRoutes = require('./routes/expense')
const dashboardRoutes = require('./routes/dashboard')
const cors = require('cors')

const app = express();
app.use(bodyParser.json({ limit: "5 Mb" }))

app.use(cors())
dotenv.config()

app.use('/users', adminRoutes)
app.use('/', expenseRoutes)
app.use('/', dashboardRoutes)


mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.u9ogn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Express server has started on port ${process.env.SERVER_PORT} Click http://localhost:${process.env.SERVER_PORT}/ `);
})
