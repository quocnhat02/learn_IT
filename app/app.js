const express = require('express');
const cors = require('cors');

const app = express();

// use middleware to form our contract for incoming json payloads ONLY!!
app.use(express.json());
// use middleware for url encoding
app.use(
  express.urlencoded({
    extended: true,
  })
);
// use middleware to handle cors policy
app.use(cors());

app.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Service is up',
  });
});

// router

module.exports = app;
