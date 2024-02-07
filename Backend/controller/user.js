const express = require('express');
const User = require('../model/user');
const sequelize = require('../utils/database');

exports.postUser = async (req, res, next) => {
  const name = req.body.name;
  const mail = req.body.mail;
  const number = req.body.number;
  const data = await User.create({
    name: name,
    mail: mail,
    number: number,
  });
  res.json({ newUserDetails: data });
};

exports.getUser = async (req, res, next) => {
  const user = await User.findAll();
  res.json({ allUserDetails: user });
};

exports.deleteUser = (req, res, next) => {
  const id = req.params.id;
  User.destroy({
    where: {
      id: id,
    },
  });
};
