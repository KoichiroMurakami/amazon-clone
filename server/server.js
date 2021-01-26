const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// config
dotenv.config();

const app = express();

mongoose.connect(
  process.env.DATABASE,
  { useUnifiedTopology: true, useNewUrlParser: true },
  err => {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to the DB');
    }
  }
);

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

// routing
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');
const ownerRoutes = require('./routes/owner');
app.use('/api', productRoutes);
app.use('/api', categoryRoutes);
app.use('/api', ownerRoutes);

// server response
app.listen(3000, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('listening on PORT', 3000);
  }
});

module.exports = app;
