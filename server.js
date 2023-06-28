const http = require('http');

require('dotenv').config();

const PORT = process.env.PORT || 5001;

http.createServer().listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
