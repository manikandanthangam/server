var createError = require('http-errors');
var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
const cookieParser = require('cookie-parser');

var logger = require('morgan');
var cors = require('cors');
const mongoose = require('mongoose');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var employeeRouter = require('./routes/employee');
var studentRouter = require('./routes/student');
var commentsRouter = require('./routes/comments');
const withAuth = require('./middleware');

var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//connect to mongo
mongoose.connect('mongodb://localhost:27017/test');

mongoose.connection.on('connected', () => {
  console.log('connected');
})

mongoose.connection.on('error', (error) => {
  if (error) {
    console.log('error ' + error);
  }
});

// app.use(express.cookieParser());

// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/employee', withAuth, employeeRouter);
app.use('/student', withAuth, studentRouter);
app.use('/comments', withAuth, commentsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
