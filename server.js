const http = require('http');
const PORT = 5000;

http.createServer().listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
