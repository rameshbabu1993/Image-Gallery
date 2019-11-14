var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
var cors = require('cors');

var getFeed = require('./module/getFeed');

// Allow any method from any host
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header({
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, X-token, Content-Type, Accept",
    "access-control-expose-headers": "X-token",
    "Access-Control-Allow-Methods": "OPTIONS, GET, POST, PUT, DELETE"
  });
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());

// map getfeed api 
app.use('/getFeeds/:tags?', getFeed);

// load client build resource.
app.use(express.static(`${process.cwd()}/dist/image-gallery/`));

// catch 404 and forward to error handler
app.use(function(req, res) {
  // Invalid request
  res.json({
    error: {
      'name':'Error',
      'status':404,
      'message':'Invalid Request',
      'statusCode':404,
      'stack':'http://localhost:8081/'
    },
      message: 'Testing!'
  });
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
