const Inventory = require('../model/inventory');
const User = require('../model/user')


module.exports = function(app, passport){

  // router middelware
  function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
    }
    res.redirect('/')
  }


// GET FUNCTIONS. aka. pages to load to. -----------


  app.get('/inventory', isLoggedIn, function(req, res, next){


    Inventory.find({}, function(err, foods){
      if(err){
        res.send(err);
      }
      res.json(foods)
    });
  });

  app.get('/user', isLoggedIn, function(req,res, next){
    res.json(req.user)
  });

  app.get('/', function(req, res){
    res.render('1_launch_page');
  });

  app.get('/signup', function(req, res){
    res.render('1_1_signup', {message: req.flash('loginMessage')});
  });

  app.get('/login', function(req, res){
    res.render('1_2_login', {message: req.flash('loginMessage')});
  });

  app.get('/profile',  isLoggedIn, function(req, res){
    res.render('3_profile');
  });

  app.get('/mainmenu', isLoggedIn, function(req, res){
    res.render('2_main_menu');
  });


  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

  //Facebook Login... creates the connection to facebook
  app.get('/auth/facebook', passport.authenticate('facebook'));

  app.get('/auth/facebook/callback', passport.authenticate('facebook',{
    successRedirect : '/mainmenu',
    failureRedirect : '/',
    failureFlash: true
  }));

  //Twitter Login... creates the connection to twitter
  app.get('/auth/twitter', passport.authenticate('twitter'));
  app.get('/auth/twitter/callback', passport.authenticate('twitter',{
    successRedirect : '/mainmenu',
    failureRedirect : '/',
    failureFlash: true
  }));

// POST FUNCTIONS. aka.-----------------------------

// Sign up authentication using passport
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/mainmenu',
    failureRedirect : '/signup',
    failureFlash: true
  }));

// login authentication using passport
  app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/mainmenu',
    failureRedirect : '/login',
    failureFlash: true
  }));


//do not delete this curly bracket!!!
}
//do not delete this curly bracket!!!