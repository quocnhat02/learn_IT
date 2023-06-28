const express = require('express');
const cors = require('cors');

// import routers
const userRouter = require('../router/userRouter');

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

// health point or actuator
// http://localhost:5000
app.get('/', (req, res) => {
  res.status(200).json('Hello World');
});

// router
app.use('/users', userRouter);

// bad url or error we can handle
// with middleware
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: { message: error.message, status: error.status },
  });
});

module.exports = app;
