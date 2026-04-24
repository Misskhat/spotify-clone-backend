const express = require('express')
const userRouter = require('./routes/user.routes')
const musicRouter = require('./routes/music.routes')
const app = express()
require('dotenv').config()

app.use(express.json())

app.use('/api/auth', userRouter)
app.use('/api/music', musicRouter)

module.exports = app
