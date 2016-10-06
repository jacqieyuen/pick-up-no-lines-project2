var inventory = require('../model/inventory')


module.exports = function(app, passport){

  // router middelware
  function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
    }
    res.redirect('/')
  }


  app.get('/inventory/:id', function(err, inv){

    var id = req.params.id;

    Inventory.findById(id, function(err, i){

      if(err){
        return res.json('error': err);
      }

      res.json(i);
    });



  });

  Inventory.findOne({title: 'Croissant'}, function(err,obj){
  console.log(obj);
});




}