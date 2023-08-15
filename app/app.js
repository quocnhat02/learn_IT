const express = require('express');
const cors = require('cors');
const userRouter = require('../router/userRouter');
const app = express();

// use middleware to form our contract for incoming json payloads ONLY!
app.use(express.json());
// use middleware for url encoding
app.use(express.urlencoded({ extended: true }));
// use middleware to handle cors policy
app.use(cors());

// health point or actuator
// http://localhost:5000
app.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Service is up',
  });
});

// routers
app.use('/users', userRouter);
// bad url or error we can handle
// with middleware
app.use((req, res, next) => {
  const error = new Error('Not Found');

  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    status: err.status,
  });
});

module.exports = app;
