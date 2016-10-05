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
  inventoryList[title] = inventory;
};

//Pastries
createInventory("Croissant", "blah blah blah blah blah", "img", "5", "Pastries");
createInventory("Cinammon Roll", "blah blah blah blah blah", "img", "5", "Pastries");
createInventory("Fruit Tart", "blah blah blah blah blah", "img", "5", "Pastries");
createInventory("ChocolateCroissant", "blah blah blah blah blah", "img", "5", "Pastries");
createInventory("Peach Danish", "blah blah blah blah blah", "img", "5", "Pastries");
createInventory("Blueberry Muffin", "blah blah blah blah blah", "img", "5", "Pastries");

//Salad
createInventory("Big Salad", "blah blah blah blah blah", "img", "5", "Salad");
createInventory("Small Salad", "blah blah blah blah blah", "img", "10", "Salad");

//Sandwiches
createInventory("Salami Sandwich", "blah blah blah blah blah", "img", "15", "Sandwiches");
createInventory("Parma Sandwich", "blah blah blah blah blah", "img", "15", "Sandwiches");
createInventory("Egg & Ham Sandwich", "blah blah blah blah blah", "img", "15", "Sandwiches");
createInventory("Ham & Brie Sandwich", "blah blah blah blah blah", "img", "15", "Sandwiches");
createInventory("Tomato Mozza Sandwich", "blah blah blah blah blah", "img", "15", "Sandwiches");
createInventory("Portobello Sandwich", "blah blah blah blah blah", "img", "15", "Sandwiches");

//Soup
createInventory("Pumpkin Soup", "blah blah blah blah blah", "img", "15", "Soup");
createInventory("Mushroom Soup", "blah blah blah blah blah", "img", "15", "Soup");
createInventory("Veggie Soup", "blah blah blah blah blah", "img", "15", "Soup");

//Snacks
createInventory("Fruit Cup", "blah blah blah blah blah", "img", "15", "Snacks");
createInventory("Kettle Chips, BBQ Flavour", "blah blah blah blah blah", "img", "15", "Snacks");
createInventory("Kettle Chips, Cheddar Flavour", "blah blah blah blah blah", "img", "15", "Snacks");
createInventory("Oat Bar", "blah blah blah blah blah", "img", "15", "Snacks");
createInventory("Apple", "blah blah blah blah blah", "img", "15", "Snacks");
createInventory("Bananna", "blah blah blah blah blah", "img", "15", "Snacks");
createInventory("70% Chocolate", "blah blah blah blah blah", "img", "15", "Snacks");
createInventory("Coffee Flavoured Chocolate", "blah blah blah blah blah", "img", "15", "Snacks");
createInventory("Chilli Nut Trail", "blah blah blah blah blah", "img", "15", "Snacks");

//Beverages
createInventory("Cappucino", "blah blah blah blah blah", "img", "15", "Beverages");
createInventory("Latte", "blah blah blah blah blah", "img", "15", "Beverages");
createInventory("Flat White", "blah blah blah blah blah", "img", "15", "Beverages");
createInventory("Americano", "blah blah blah blah blah", "img", "15", "Beverages");
createInventory("Espresso", "blah blah blah blah blah", "img", "15", "Beverages");
createInventory("Berry Smoothie", "blah blah blah blah blah", "img", "15", "Beverages");
createInventory("Greenie Smoothie", "blah blah blah blah blah", "img", "15", "Beverages");
createInventory("Orange Juice", "blah blah blah blah blah", "img", "15", "Beverages");
createInventory("Grapefruit Juice", "blah blah blah blah blah", "img", "15", "Beverages");
createInventory("Apple Juice", "blah blah blah blah blah", "img", "15", "Beverages");
createInventory("Sparkling Water", "blah blah blah blah blah", "img", "15", "Beverages");
createInventory("Water", "blah blah blah blah blah", "img", "15", "Beverages");

///////////////

//function to input all the inventory into the inventoryBox

var Total = 0

function insertAll(){
  for (var item in inventoryList) {
    $('.inventoryBox').append("<div class= 'col-xs-4 inventoryItems "+inventoryList[item]['category']+"' id='"+item+"'>"+"<h4>"+inventoryList[item]['category']+"   "+item+"</h4>"+"</div>");
    console.log(item);
  }
};
insertAll();
$('.inventoryItems').click(function(e){
  var text = $(this).attr('id');
  var inventoryPrice = inventoryList[text]['price'];
  console.log(text);
  $('.basketBox').append("<div class='col-xs-12'><div class='col-xs-4 '><h4>"+text+"</h4></div><div class='col-xs-4'><h4>$"+inventoryPrice+"</h4></div><div class='col-cs-4'><button type='button' class='btn'>Delete</button></div></div>");
  numInventoryPrice = Number(inventoryPrice);
  Total = Total+numInventoryPrice;
  stringTotal = Total.toString();
  $('#totalPrice').html("<h2 id='totalPrice'>$ "+stringTotal+"</h2>");
  console.log("the total is "+Total);
  deleteFromBasket(Total);
})

function insertPastries(){
  for (var item in inventoryList) {
    if (inventoryList[item]['category']=="Pastries"){
      $('.inventoryBox').append("<div class= 'col-xs-4 inventoryItems "+inventoryList[item]['category']+"' id='"+item+"'>"+"<h4>"+inventoryList[item]['category']+"   "+item+"</h4>"+"</div>");
      console.log(item);
    }
  }
};

$('#pastries').click(function(e){
  console.log('pastries clicked');
  e.preventDefault();

  $.ajax({
    method: 'GET',
    url:'/',
  }).done(function(){
    $('.inventoryBox').html("");
    $('.inventoryBox').append(insertPastries());
      console.log('ajax success');
    $('.inventoryItems').click(function(e){
    var text = $(this).attr('id');
    var inventoryPrice = inventoryList[text]['price'];
    console.log(text);
    $('.basketBox').append("<div class='col-xs-12'><div class='col-xs-4 '><h4>"+text+"</h4></div><div class='col-xs-4'><h4>$"+inventoryPrice+"</h4></div><div class='col-cs-4'><button type='button' class='btn'>Delete</button></div></div>");
    numInventoryPrice = Number(inventoryPrice);
    Total = Total+numInventoryPrice;
    stringTotal = Total.toString();
    $('#totalPrice').html("<h2 id='totalPrice'>$ "+stringTotal+"</h2>");
    console.log("the total is "+Total);
    deleteFromBasket();
    });
  });
});


function insertSalad(){
  for (var item in inventoryList) {
    if (inventoryList[item]['category']=="Salad"){
      $('.inventoryBox').append("<div class= 'col-xs-4 inventoryItems "+inventoryList[item]['category']+"' id='"+item+"'>"+"<h4>"+inventoryList[item]['category']+"   "+item+"</h4>"+"</div>");
      console.log(item);
    }
  }
};

$('#salad').click(function(e){
  console.log('salad clicked');
  e.preventDefault();

  $.ajax({
    method: 'GET',
    url:'/',
  }).done(function(){
    $('.inventoryBox').html("");
    $('.inventoryBox').append(insertSalad());
      console.log('ajax success');
    $('.inventoryItems').click(function(e){
    var text = $(this).attr('id');
    var inventoryPrice = inventoryList[text]['price'];
    console.log(text);
    $('.basketBox').append("<div class='col-xs-12'><div class='col-xs-4 '><h4>"+text+"</h4></div><div class='col-xs-4'><h4>$"+inventoryPrice+"</h4></div><div class='col-cs-4'><button type='button' class='btn'>Delete</button></div></div>");
    numInventoryPrice = Number(inventoryPrice);
    Total = Total+numInventoryPrice;
    stringTotal = Total.toString();
    $('#totalPrice').html("<h2 id='totalPrice'>$ "+stringTotal+"</h2>");
    console.log("the total is "+Total);
    deleteFromBasket();
    });
  });
});

function insertSandwiches(){
  for (var item in inventoryList) {
    if (inventoryList[item]['category']=="Sandwiches"){
      $('.inventoryBox').append("<div class= 'col-xs-4 inventoryItems "+inventoryList[item]['category']+"' id='"+item+"'>"+"<h4>"+inventoryList[item]['category']+"   "+item+"</h4>"+"</div>");
      console.log(item);
    }
  }
};

$('#sandwiches').click(function(e){
  console.log('sandwiches clicked');
  e.preventDefault();

  $.ajax({
    method: 'GET',
    url:'/',
  }).done(function(){
    $('.inventoryBox').html("");
    $('.inventoryBox').append(insertSandwiches());
      console.log('ajax success');
    $('.inventoryItems').click(function(e){
    var text = $(this).attr('id');
    var inventoryPrice = inventoryList[text]['price'];
    console.log(text);
    $('.basketBox').append("<div class='col-xs-12'><div class='col-xs-4 '><h4>"+text+"</h4></div><div class='col-xs-4'><h4>$"+inventoryPrice+"</h4></div><div class='col-cs-4'><button type='button' class='btn'>Delete</button></div></div>");
    numInventoryPrice = Number(inventoryPrice);
    Total = Total+numInventoryPrice;
    stringTotal = Total.toString();
    $('#totalPrice').html("<h2 id='totalPrice'>$ "+stringTotal+"</h2>");
    console.log("the total is "+Total);
    deleteFromBasket();
    });
  });
});

function insertSoup(){
  for (var item in inventoryList) {
    if (inventoryList[item]['category']=="Soup"){
      $('.inventoryBox').append("<div class= 'col-xs-4 inventoryItems "+inventoryList[item]['category']+"' id='"+item+"'>"+"<h4>"+inventoryList[item]['category']+"   "+item+"</h4>"+"</div>");
      console.log(item);
    }
  }
};

$('#soup').click(function(e){
  console.log('soup clicked');
  e.preventDefault();

  $.ajax({
    method: 'GET',
    url:'/',
  }).done(function(){
    $('.inventoryBox').html("");
    $('.inventoryBox').append(insertSoup());
      console.log('ajax success');
    $('.inventoryItems').click(function(e){
    var text = $(this).attr('id');
    var inventoryPrice = inventoryList[text]['price'];
    console.log(text);
    $('.basketBox').append("<div class='col-xs-12'><div class='col-xs-4 '><h4>"+text+"</h4></div><div class='col-xs-4'><h4>$"+inventoryPrice+"</h4></div><div class='col-cs-4'><button type='button' class='btn'>Delete</button></div></div>");
    numInventoryPrice = Number(inventoryPrice);
    Total = Total+numInventoryPrice;
    stringTotal = Total.toString();
    $('#totalPrice').html("<h2 id='totalPrice'>$ "+stringTotal+"</h2>");
    console.log("the total is "+Total);
    deleteFromBasket();
    });
  });
});

function insertSnacks(){
  for (var item in inventoryList) {
    if (inventoryList[item]['category']=="Snacks"){
      $('.inventoryBox').append("<div class= 'col-xs-4 inventoryItems "+inventoryList[item]['category']+"' id='"+item+"'>"+"<h4>"+inventoryList[item]['category']+"   "+item+"</h4>"+"</div>");
      console.log(item);
    }
  }
};

$('#snacks').click(function(e){
  console.log('snacks clicked');
  e.preventDefault();

  $.ajax({
    method: 'GET',
    url:'/',
  }).done(function(){
    $('.inventoryBox').html("");
    $('.inventoryBox').append(insertSnacks());
      console.log('ajax success');
    $('.inventoryItems').click(function(e){
    var text = $(this).attr('id');
    var inventoryPrice = inventoryList[text]['price'];
    console.log(text);
    $('.basketBox').append("<div class='col-xs-12'><div class='col-xs-4 '><h4>"+text+"</h4></div><div class='col-xs-4'><h4>$"+inventoryPrice+"</h4></div><div class='col-cs-4'><button type='button' class='btn'>Delete</button></div></div>");
    numInventoryPrice = Number(inventoryPrice);
    Total = Total+numInventoryPrice;
    stringTotal = Total.toString();
    $('#totalPrice').html("<h2 id='totalPrice'>$ "+stringTotal+"</h2>");
    console.log("the total is "+Total);
    deleteFromBasket();
    });
  });
});

function insertBeverages(){
  for (var item in inventoryList) {
    if (inventoryList[item]['category']=="Beverages"){
      $('.inventoryBox').append("<div class= 'col-xs-4 inventoryItems "+inventoryList[item]['category']+"' id='"+item+"'>"+"<h4>"+inventoryList[item]['category']+"   "+item+"</h4>"+"</div>");
      console.log(item);
    }
  }
};

$('#beverages').click(function(e){
  console.log('beverages clicked');
  e.preventDefault();

  $.ajax({
    method: 'GET',
    url:'/',
  }).done(function(){
    $('.inventoryBox').html("");
    $('.inventoryBox').append(insertBeverages());
      console.log('ajax success');
    $('.inventoryItems').click(function(e){
    var text = $(this).attr('id');
    var inventoryPrice = inventoryList[text]['price'];
    console.log(text);
    $('.basketBox').append("<div class='col-xs-12'><div class='col-xs-4 '><h4>"+text+"</h4></div><div class='col-xs-4'><h4>$"+inventoryPrice+"</h4></div><div class='col-cs-4'><button type='button' class='btn'>Delete</button></div></div>");
    numInventoryPrice = Number(inventoryPrice);
    Total = Total+numInventoryPrice;
    stringTotal = Total.toString();
    $('#totalPrice').html("<h2 id='totalPrice'>$ "+stringTotal+"</h2>");
    console.log("the total is "+Total);
    deleteFromBasket();
    });
  });
});

$('#header1').click(function(e){
  console.log('#header1 clicked');
  e.preventDefault();

  $.ajax({
    method: 'GET',
    url:'/',
  }).done(function(){
    $('.inventoryBox').html("");
    $('.inventoryBox').append(insertAll());
      console.log('ajax success');
    $('.inventoryItems').click(function(e){
    var text = $(this).attr('id');
    var inventoryPrice = inventoryList[text]['price'];
    console.log(text);
    $('.basketBox').append("<div class='col-xs-12'><div class='col-xs-4 '><h4>"+text+"</h4></div><div class='col-xs-4'><h4>$"+inventoryPrice+"</h4></div><div class='col-cs-4'><button type='button' class='btn'>Delete</button></div></div>");
    numInventoryPrice = Number(inventoryPrice);
    Total = Total+numInventoryPrice;
    stringTotal = Total.toString();
    $('#totalPrice').html("<h2 id='totalPrice'>$ "+stringTotal+"</h2>");
    console.log("the total is "+Total);
    deleteFromBasket(Total);
    });
  });
});

function deleteFromBasket(Total){
    $('.btn').off().click(function(e){
      console.log('delete function init-ed');
      var minus = $(this).parent().prev().text();
      minus = minus.replace('$','');
      console.log(Total);
      console.log('minus this '+minus);
      numMinus = Number(minus);
      Total = Total-numMinus;
      stringTotal = Total.toString();
    $('#totalPrice').html("<h2 id='totalPrice'>$ "+stringTotal+"</h2>");
      console.log("the total is "+Total);
      $(this).parent().parent().remove();
    });
}
//re-calculate total by minus-ing