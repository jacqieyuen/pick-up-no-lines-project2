/////////////////
function dataBase(cb){
  $.ajax({
      method: "GET",
      url: "/inventory",
    }).done(function(pref) {
      console.log(pref);
      inventoryList = pref;

///////////////
///////////////////
var Total        = 0
var a            = "Pastries";
var b            = "Salad";
var c            = "Sandwiches";
var d            = "Soup";
var f            = "Snacks";
var g            = "Beverages";
var timeChoosen  = "hello";


insertAll();
menuCheckout();

function insertAll(){
  for (var item in inventoryList) {
    $('.inventoryBox').append("<div class= 'col-xs-4 inventoryItems "+inventoryList[item]['category']+"' id='"+item+"'>"+"<img src='/lib/img/pug.jpg'><h4>"+inventoryList[item]['title']+"</h4>"+"</div>");
    console.log(inventoryList[item]['title']);
  }
};

function insertCategory(something){
  for (var item in inventoryList) {
    if (inventoryList[item]['category']==something){
      $('.inventoryBox').append("<div class= 'col-xs-4 inventoryItems "+inventoryList[item]['category']+"' id='"+item+"'>"+"<img src='/lib/img/pug.jpg'><h4>"+inventoryList[item]['title']+"</h4>"+"</div>");
      console.log(inventoryList[item]['title']);
    }
  }
};
function menuCheckout(){
  $('.inventoryItems').off().click(function(e){
    console.log('inventory item clicked');
    var text = $(this).attr('id');
    var inventoryPrice = inventoryList[text]['price'];
    console.log(text);
    $('.basketBox').append("<div class='col-xs-12'><div class='col-xs-4 '><img src='/lib/img/pug.jpg'><h4>"+inventoryList[text]['title']+"</h4></div><div class='col-xs-4'><h4>$"+inventoryPrice+"</h4></div><div class='col-cs-4'><button type='button' class='btn deleteButton'>Delete</button></div></div>");
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
    $('.basketBox').append("<div class='col-xs-12'><div class='col-xs-4 '><img src='/lib/img/pug.jpg'><h4>"+inventoryList[text]['title']+"</h4></div><div class='col-xs-4'><h4>$"+inventoryPrice+"</h4></div><div class='col-cs-4'><button type='button' class='btn deleteButton'>Delete</button></div></div>");
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
    $('.deleteButton').off().click(function(e){
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
currentHour = currentHour+1
var currentMinute = currentTime.getMinutes();
function round5(x) {
if (x<55){
return Math.ceil(x/5)*5;
}else{return 0}
};
var minuteRounded = round5(currentMinute);

function listOfTimes(){
  if(currentHour>=6){
    for(currentHour; currentHour<=19; currentHour++){
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
        $('#dropDown1').append('<li role="presentation"><a class="timesAvailable" role="menuitem" tabindex="-1" href="#">'+availableTime+'</a></li>');
        flag = true;
        // minuteRounded = 0;
      };
    };
  }else{alert("We are open between 7am-9pm. You may start placing orders at 6am and last order is at 7:55pm")}
}

function pickedTime(){
  $('.timesAvailable').off().click(function(e){
  console.log('Time has been picked')
  e.preventDefault();
  timeChoosen = $(this).text();
  $('#menu1').text("");
  $('#menu1').append(timeChoosen);
  });
}

$('#menu1').off().click(function(e){
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
//////////////////////////////////////////
function displayPickUpTime(){
  var whenToPickUp = $('#menu1').text();
  console.log(whenToPickUp);
  $('#pickUpTimeCode').html("");
  $('#pickUpTimeCode').append(whenToPickUp);
}

function displayCheckoutSummary(){
  $(".Summary").html('');
  $('#fourthRow').clone().appendTo(".Summary");
};

$('#toOrderSummaryButton').click(function(){
  displayPickUpTime()
  displayCheckoutSummary();
});

//////////////////////////////////////////

// //HIDE SHOW FUNCTIONS
// function menuInit(){
//   $("#checkoutContainer").hide();
//   $("#orderSumContainer").hide();
// };

// function clickToCheckOutButton(){
//   $("#checkoutContainer").show();
//   $("#menuContainer").hide();
// }

// function clickToOrderSummaryButton(){
//   if(isNaN(timeChoosen[0])){
//     alert("Please Pick A Time");
//     console.log
//   }else{
//   $("#checkoutContainer").hide();
//   $("#orderSumContainer").show();
//   };
// }

// function clickFinishButton(){
//   $("#orderSumContainer").hide();
//   $("#menuContainer").show();
//   $('.basketBox').html('');
//   $('#menu1').text("");
//   $('#menu1').append("Pick A Time");
//   timeChoosen = "hello";
//   Total = 0;
// }

// menuInit();
// $('#toCheckoutButton').click(function(){
//   clickToCheckOutButton();
// });
// $("#toOrderSummaryButton").click(function(){
//   clickToOrderSummaryButton();
// })
// $("#finishButton").click(function(){
//   clickFinishButton();
// })

  });
};

dataBase();


// var yooo = "";
// function does(){
//   dataBase(function(returnedData){
//     yooo=returnedData;
//   });
//   console.log(yooo);
// };

// does()