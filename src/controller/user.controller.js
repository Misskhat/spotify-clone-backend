const express = require("express");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const userModel = require("../model/user.model");

const registration = async (req, res) => {
  const { userName, email, passport, role } = req.body;
  const isUserNameExit = await userModel.findOne({
    $or: [{ userName }, { email }],
  });
  if (isUserNameExit) {
    res.send({
      message: "User already exist",
    });
  }
    const passportHash = bcrypt.hash(passport, 10);
    
};
