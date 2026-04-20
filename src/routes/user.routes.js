const express = require('express')
const { registration, loginUser } = require('../controller/user.controller')
const router = express.Router()

router.post('/register', registration)
router.post('/login', loginUser)

module.exports = router
