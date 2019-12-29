const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const dbUtils = require('utils/db');

console.log("dbutils", dbUtils.getMongoURI())
mongoose.connect(dbUtils.getMongoURI(), { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection has closed"));

dbUtils.setDBListeners();

const indexRouter = require('./routes');

const app = express();
const reactAppPath =  path.join(__dirname, '../client/build')

// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(reactAppPath));



app.use('/', indexRouter);

console.log("path", path.join(__dirname, '../client/build', 'index.html'))
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err)
  res.status(err.status || 500).send();
});

module.exports = app;
