var express = require('express');
app = express();

const OWM_API_KEY = process.env.OWM_API_KEY || 'invalid_key';
const UNITS = process.env.UNITS || 'metric';

app.get('/', function (req, res) {
  res.send('Hello World v2: ${OWM_API_KEY},${UNITS}!\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello Mars v2!\n');
});

app.listen(8080, function () {
  console.log('Example app v2 listening on port 8080!');
});