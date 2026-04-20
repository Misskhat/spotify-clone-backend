const express = require('express')
const userRouter = require('./routes/user.routes')
const app = express()
require('dotenv').config()

app.use(express.json())

app.use('/api/auth', userRouter)

module.exports = app
