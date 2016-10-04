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

app.get('/checkout', function (req,res) {
  res.render('checkout');
});


//LISTENER
app.listen(3000, function () {
  console.log ('listening on port 3000'); // Have to add this listener
});



/////////////////


var inventoryList = {};


var createInventory = function(title, description, img, price, category){
  var inventory = {
    title : title,
    description : description,
    img : img,
    price : price,
    category : category
  }
  inventoryList[category] = inventory;
};

//Pastries
createInventory("Croissant", "blah blah blah blah blah", "img", "price", "Pastries");
createInventory("Cinammon Roll", "blah blah blah blah blah", "img", "price", "Pastries");
createInventory("Fruit Tart", "blah blah blah blah blah", "img", "price", "Pastries");
createInventory("Chocolate Croissant", "blah blah blah blah blah", "img", "price", "Pastries");
createInventory("Peach Danish", "blah blah blah blah blah", "img", "price", "Pastries");
createInventory("Blueberry Muffin", "blah blah blah blah blah", "img", "price", "Pastries");

//Salad
createInventory("Big Salad", "blah blah blah blah blah", "img", "price", "Salad");
createInventory("Small Salad", "blah blah blah blah blah", "img", "price", "Salad");

//Sandwiches
createInventory("Salami Sandwich", "blah blah blah blah blah", "img", "price", "Sandwiches");
createInventory("Parma Sandwich", "blah blah blah blah blah", "img", "price", "Sandwiches");
createInventory("Egg and Ham Sandwich", "blah blah blah blah blah", "img", "price", "Sandwiches");
createInventory("Ham and Brie Sandwich", "blah blah blah blah blah", "img", "price", "Sandwiches");
createInventory("Tomato and Mozzarella Sandwich", "blah blah blah blah blah", "img", "price", "Sandwiches");
createInventory("Portobello and Parmasean Sandwich", "blah blah blah blah blah", "img", "price", "Sandwiches");

//Soup
createInventory("Pumpkin Soup", "blah blah blah blah blah", "img", "price", "Soup");
createInventory("Mushroom Soup", "blah blah blah blah blah", "img", "price", "Soup");
createInventory("Veggie Soup", "blah blah blah blah blah", "img", "price", "Soup");

//Snacks
createInventory("Fruit Cup", "blah blah blah blah blah", "img", "price", "Snacks");
createInventory("Kettle Chips, BBQ Flavour", "blah blah blah blah blah", "img", "price", "Snacks");
createInventory("Kettle Chips, Cheddar Flavour", "blah blah blah blah blah", "img", "price", "Snacks");
createInventory("Oat Bar", "blah blah blah blah blah", "img", "price", "Snacks");
createInventory("Apple", "blah blah blah blah blah", "img", "price", "Snacks");
createInventory("Bananna", "blah blah blah blah blah", "img", "price", "Snacks");
createInventory("70% Chocolate", "blah blah blah blah blah", "img", "price", "Snacks");
createInventory("Coffee Flavoured Chocolate", "blah blah blah blah blah", "img", "price", "Snacks");
createInventory("Chilli Nut Trail", "blah blah blah blah blah", "img", "price", "Snacks");

//Beverages
createInventory("Cappucino", "blah blah blah blah blah", "img", "price", "Beverages");
createInventory("Latte", "blah blah blah blah blah", "img", "price", "Beverages");
createInventory("Flat White", "blah blah blah blah blah", "img", "price", "Beverages");
createInventory("Americano", "blah blah blah blah blah", "img", "price", "Beverages");
createInventory("Espresso", "blah blah blah blah blah", "img", "price", "Beverages");
createInventory("Berry Smoothie", "blah blah blah blah blah", "img", "price", "Beverages");
createInventory("Greenie Smoothie", "blah blah blah blah blah", "img", "price", "Beverages");
createInventory("Orange Juice", "blah blah blah blah blah", "img", "price", "Beverages");
createInventory("Grapefruit Juice", "blah blah blah blah blah", "img", "price", "Beverages");
createInventory("Apple Juice", "blah blah blah blah blah", "img", "price", "Beverages");
createInventory("Sparkling Water", "blah blah blah blah blah", "img", "price", "Beverages");
createInventory("Water", "blah blah blah blah blah", "img", "price", "Beverages");





















