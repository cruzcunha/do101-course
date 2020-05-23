var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World v2!\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello Mars v2!\n');
});

app.listen(8080, function () {
  console.log('Example app v2 listening on port 8080!');
});