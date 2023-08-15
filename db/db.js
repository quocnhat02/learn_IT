const mongoose = require('mongoose');
require('dotenv').config();

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

module.exports = { connect };
