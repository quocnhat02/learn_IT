const mongoose = require('mongoose');
require('dotenv').config();
const User = require('../model/userModel');

const connect = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log(`MongoDB is up and running`);
    })
    .catch((error) => {
      console.log(error);
    });
};

const disconnect = async () => {
  await mongoose.connection.close();
};

const findUser = async (obj) => {
  return await User.findOne(obj);
};

const saveUser = async (newUser) => {
  return await newUser.save();
};

module.exports = { connect, disconnect, findUser, saveUser };
