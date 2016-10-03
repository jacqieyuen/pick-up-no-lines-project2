var express          = require('express');
var path             = require('path');
var mongoose         = require('mongoose');
var passport         = require('passport');
var flash            = require('connect-flash');
var cookieParser     = require('cookie-parser');
var bodyParser       = require('body-parser');
var session          = require('express-session');
var expressValidator = require('express-validator');
var localStrategy    = require('passport-local'),Strategy;
var mongo            = require('mongodb');
var mongoose         = require('mongoose');

// Connect with Mongo DB
mongoose.connect('mongodb://localhost/pick-up-no-lines-project2');
var db               = mongoose.connect;

// Init App
var app              = express();

// View Engine
app.set( 'views', path.join(__dirname, 'views'));
app.set( 'view engine', 'pug');

// Init and Middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Set up Express sessions
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}))

// Passport Init
app.use(passport.initialize());
app.use(passport.session());

//Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect Flash
app.use(flash());

app.listen( 3000, function(){
    console.log('listening on port 3000');
});