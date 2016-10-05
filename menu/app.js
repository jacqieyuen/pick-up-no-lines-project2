// FRAMEWORK SET UP
var express = require ('express'); //how we import module into our code
var bodyParser = require ('body-parser');
var path = require ('path');

var app = express(); //initiatilizes it, app is the main object of our project

app.use(bodyParser.json()); //middleware
app.use(bodyParser.urlencoded({extended: true})); //middleware
app.use(express.static(path.join(__dirname, 'public'))); //

app.set ('views', path.join(__dirname, 'views'));
app.set ('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('menu');
});


//LISTENER
app.listen(3000, function () {
  console.log ('listening on port 3000');
});
