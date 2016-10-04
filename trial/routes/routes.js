module.exports = function(app, passport){

  // router middelware
  function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
    }
    res.redirect('/')
  }


// GET FUNCTIONS. aka. pages to load to. -----------

  app.get('/', function(req, res){
    res.render('1_launch_page');
  });

  app.get('/signup', function(req, res){
    res.render('1_1_signup', {message: req.flash('loginMessage')});
  });

  app.get('/login', function(req, res){
    res.render('1_2_login', {message: req.flash('loginMessage')});
  });

  app.get('/mainmenu', function(req, res){
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
    failureRedirect : '/',
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