const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'successful - GET',
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

router.get('/:id', (req, res, next) => {
  res.status(200).json({
    message: 'successful - GET by id',
    metadata: {
      id: req.params.id,
      hostname: req.hostname,
      method: req.method,
    },
  });
});

router.post('/', (req, res, next) => {
  const name = req.body.name;
  res.status(200).json({
    message: 'successful - POST by id',
    metadata: {
      name,
      hostname: req.hostname,
      method: req.method,
    },
  });
});

router.put('/:id', (req, res, next) => {
  res.status(200).json({
    message: 'successful - PUT by id',
    metadata: {
      id: req.params.id,
      hostname: req.hostname,
      method: req.method,
    },
  });
});

router.delete('/:id', (req, res, next) => {
  res.status(200).json({
    message: 'successful - DELETE by id',
    metadata: {
      id: req.params.id,
      hostname: req.hostname,
      method: req.method,
    },
  });
});

module.exports = router;
