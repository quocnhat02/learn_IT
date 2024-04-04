const express = require('express');

const app = express();

app.get('/order', (req, res) => {
  const time = new Date().getTime();
  console.log(`Time request: ${time}`);
  return res.json({
    status: 'success',
    message: 'OK',
    time,
  });
});

app.listen(3456, () => {
  console.log('The server is running at port 3456');
});
