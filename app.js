const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan')('dev');
const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(logger);

app.use((err, req, res, next) => {
  const { statusCode, message } = err;
  const status = statusCode || 500;
});

module.exports = app;
