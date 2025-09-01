import express = require('express');
import cors = require('cors');

import apiRouter from './routes/api.js';

const app = express();

import dotenv from 'dotenv';
dotenv.config();

const {
  CLIENT_PORT = 3000,
  CLIENT_HOST = 'localhost'
} = process.env;

app.use(express.json());

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

app.use('/api', apiRouter);

export default app;
