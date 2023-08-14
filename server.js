const http = require('http');
require('dotenv').config({});

const PORT = process.env.PORT;

http.createServer().listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
