const express = require('express')
const { registration, loginUser, logOutUser } = require('../controller/user.controller')
const router = express.Router()

router.post('/register', registration)
router.post('/login', loginUser)
router.post('/logout', logOutUser)

module.exports = router
