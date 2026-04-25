require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const userRouter = require('./routes/user.routes')
const musicRouter = require('./routes/music.routes')
const app = express()

app.use(express.json()) // ✅ parse JSON bodies
app.use(express.urlencoded({ extended: true })) // ✅ parse form data
app.use(cookieParser())

app.use('/api/auth', userRouter)
app.use('/api/music', musicRouter)

module.exports = app
