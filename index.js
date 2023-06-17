const express = require('express');
const app = express();

app.get('*', (req, res) => {
  console.log(' ', req.url);
  res.send(' ');
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
