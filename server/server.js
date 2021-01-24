const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json('hello world express');
});

app.post('/', (req, res) => {
  console.log(req.body.name);
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('listening on PORT', 3000);
  }
});
