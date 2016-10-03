var express = require ('express');
var router = express Router();

// Sign Up
router.get('/signup', function(req.res){
  res.render('signup');
});

// Log In
router.get('/login', function(req.res){
  res.render('login');
});

module exports = router;