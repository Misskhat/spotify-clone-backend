const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')
const userModel = require('../model/user.model')

const registration = async (req, res) => {
  const { userName, email, password, role = 'user' } = req.body
  const isUserNameExit = await userModel.findOne({
    $or: [{ userName }, { email }],
  })
  if (isUserNameExit) {
    return res.send({
      message: 'User already exist',
    })
  }
  const passwordHash = await bcrypt.hash(password, 10)
  const newUser = await userModel.create({
    userName,
    email,
    password: passwordHash,
    role,
  })

  const token = jwt.sign({ _id: newUser._id }, process.env.JWT_TOKEN)
  res.cookie('token', token)
  res.status(200).json({
    message: 'User successfully register',
    user: newUser,
  })
}

const loginUser = async (req, res) => {
  const { userName, email, password, role = 'user' } = req.body
  const user = userModel.findOne({
    $or: [{ userName }, { email }],
  })

  if (!user) {
    return res.status(401).json({ message: 'Invalid credential' })
  }

  const isPassword = await bcrypt.compare(password, user.password)

  if (!isPassword) {
    return res.status(401).json({ message: 'Invalid credential' })
  }

  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_TOKEN,
  )

  res.cookie('token', token)

  res.status(200).json({
    message: 'Login Successfully',
    user: {
      id: user._id,
      userName: user.userName,
      email: user.email,
      role: user.role,
    },
  })
}

module.exports = { registration, loginUser }
