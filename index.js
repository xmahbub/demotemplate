const http = require('http');

const server = http.createServer((req, res) => {
  // Log the incoming request
  console.log(`Received request: ${req.method} ${req.url}`);

  // Set the response content type
  res.setHeader('Content-Type', 'text/plain');

  // Send a response
  res.end(' ');
});

const port = 5000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
