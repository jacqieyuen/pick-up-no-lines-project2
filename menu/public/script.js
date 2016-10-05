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

var Total     = 0
var a         = "Pastries";
var b         = "Salad";
var c         = "Sandwiches";
var d         = "Soup";
var f         = "Snacks";
var g         = "Beverages";


function insertAll(){
  for (var item in inventoryList) {
    $('.inventoryBox').append("<div class= 'col-xs-4 inventoryItems "+inventoryList[item]['category']+"' id='"+item+"'>"+"<h4>"+inventoryList[item]['category']+"   "+item+"</h4>"+"</div>");
    console.log(item);
  }
};

function insertCategory(something){
  for (var item in inventoryList) {
    if (inventoryList[item]['category']==something){
      $('.inventoryBox').append("<div class= 'col-xs-4 inventoryItems "+inventoryList[item]['category']+"' id='"+item+"'>"+"<h4>"+inventoryList[item]['category']+"   "+item+"</h4>"+"</div>");
      console.log(item);
    }
  }
};
function menuCheckout(){
  $('.inventoryItems').off().click(function(e){
    console.log('inventory item clicked');
    var text = $(this).attr('id');
    var inventoryPrice = inventoryList[text]['price'];
    console.log(text);
    $('.basketBox').append("<div class='col-xs-12'><div class='col-xs-4 '><h4>"+text+"</h4></div><div class='col-xs-4'><h4>$"+inventoryPrice+"</h4></div><div class='col-cs-4'><button type='button' class='btn'>Delete</button></div></div>");
    numInventoryPrice = Number(inventoryPrice);
    Total = Total+numInventoryPrice;
    $('#totalPrice').html("<h2 id='totalPrice'>$ "+Total+"</h2>");
    console.log("the total is "+Total);
    deleteFromBasket();
  });
}

function ajax1(yay){
  $.ajax({
    method: 'GET',
    url:'/',
  }).done(function(){
    $('.inventoryBox').html("");
    $('.inventoryBox').append(insertCategory(yay));
      console.log('ajax success');
    $('.inventoryItems').off().click(function(e){
    var text = $(this).attr('id');
    var inventoryPrice = inventoryList[text]['price'];
    console.log(text);
    $('.basketBox').append("<div class='col-xs-12'><div class='col-xs-4 '><h4>"+text+"</h4></div><div class='col-xs-4'><h4>$"+inventoryPrice+"</h4></div><div class='col-cs-4'><button type='button' class='btn'>Delete</button></div></div>");
    numInventoryPrice = Number(inventoryPrice);
    Total = Total+numInventoryPrice;
    $('#totalPrice').html("<h2 id='totalPrice'>$ "+Total+"</h2>");
    console.log("the total is "+Total);
    deleteFromBasket();
    });
  });
}

function deleteFromBasket(){
    console.log(Total)
    $('.btn').off().click(function(e){
      console.log('delete function init-ed');
      var minus = $(this).parent().prev().text();
      minus = minus.replace('$','');
      console.log(Total);
      console.log('minus this '+minus);
      numMinus = Number(minus);
      Total = Total-numMinus;
    $('#totalPrice').html("<h2 id='totalPrice'>$ "+Total+"</h2>");
      console.log("the total is "+Total);
      $(this).parent().parent().remove();
    });
  }

insertAll();
menuCheckout();

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
    menuCheckout();
});
});

$('#pastries').click(function(e){
  console.log('pastries clicked');
  e.preventDefault();
  ajax1(a);
});


$('#salad').click(function(e){
  console.log('salad clicked');
  e.preventDefault();
  ajax1(b);
});

$('#sandwiches').click(function(e){
  console.log('sandwiches clicked');
  e.preventDefault();
  ajax1(c);
});


$('#soup').click(function(e){
  console.log('soup clicked');
  e.preventDefault();
  ajax1(d);
});


$('#snacks').click(function(e){
  console.log('soup clicked');
  e.preventDefault();
  ajax1(f);
});

$('#beverages').click(function(e){
  console.log('beverages clicked');
  e.preventDefault();
  ajax1(g);
});

///////////////////////////////////////////////////

var flag = false;
var currentTime = new Date();
var currentHour = currentTime.getHours();
var currentMinute = currentTime.getMinutes();
function round5(x) {
if (x<55){
return Math.ceil(x/5)*5;
}else{return 0}
};
var minuteRounded = round5(currentMinute);

function listOfTimes(){
  if(currentHour>=7){
    for(currentHour; currentHour<=20; currentHour++){
      console.log("the hour is "+currentHour);
      if(flag){
        minuteRounded=0
      };
      for(minuteRounded; minuteRounded<=55; minuteRounded = minuteRounded+5){
        console.log("running");
        var Minute = 0
        if (minuteRounded<=6){
          Minute = "0"+minuteRounded;
        }else{
          Minute = minuteRounded};
        var availableTime = currentHour+":"+Minute;
        console.log("time available is "+currentHour+":"+Minute);
        $('.dropdown-menu').append('<li role="presentation"><a class="timesAvailable" role="menuitem" tabindex="-1" href="#">'+availableTime+'</a></li>');
        flag = true;
        // minuteRounded = 0;
      };
    };
  }
}

function pickedTime(){
  $('.timesAvailable').off().click(function(e){
  console.log('Time has been picked')
  e.preventDefault();
  var timeChoosen = $(this).text();
  $('.dropdown-toggle').html("");
  $('.dropdown-toggle').append(timeChoosen);
  });
}

$('#menu1').click(function(e){
  console.log('Pick a Time clicked');
  currentTime = new Date();
  e.preventDefault();
  $.ajax({
    method: 'GET',
    url:'/',
  }).done(function(){
    listOfTimes();
    pickedTime();
  });
});
