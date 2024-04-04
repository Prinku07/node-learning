const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//Middleware
app.use(express.json()); // parse incoming requests with JSON payloads

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); //  Log HTTP requests in the 'dev' format
}

app.use(express.static(`${__dirname}/starter/public`)); // serve static files can excess img css files

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
