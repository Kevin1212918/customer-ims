const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

const app = express();

const { 
  CLIENT_PORT = 3000, 
  CLIENT_HOST = 'localhost' 
} = process.env;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const allowedOrigins = [`http://${CLIENT_HOST}:${CLIENT_PORT}`];

app.use(cors({
  origin: function (origin, callback) {

    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use('/', indexRouter);
app.use('/api', apiRouter);

module.exports = app;


