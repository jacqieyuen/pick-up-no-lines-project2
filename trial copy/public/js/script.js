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
    $('.inventoryBox').append("<div class= 'col-xs-4 inventoryItems "+inventoryList[item]['category']+"' id='"+item+"'>"+"<img src='/lib/img/pug.png'><h7>"+inventoryList[item]['title']+"</h7>"+"</div>");
    console.log(inventoryList[item]['title']);
  }
};

function insertCategory(something){
  for (var item in inventoryList) {
    if (inventoryList[item]['category']==something){
      $('.inventoryBox').append("<div class= 'col-xs-4 inventoryItems "+inventoryList[item]['category']+"' id='"+item+"'>"+"<img src='/lib/img/pug.png'><h7>"+inventoryList[item]['title']+"</h7>"+"</div>");
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
   $('.basketBox').append("<div class='col-xs-12 rawr'><div class='col-xs-4 foodTitle'><img src='/lib/img/pug.png'><h7>"+inventoryList[text]['title']+"</h7></div><div class='col-xs-4 foodPrice'><h7>$"+inventoryPrice+"</h7></div><div class='col-cs-4 removeButton'><button type='button' class='btn deleteButton'style='background-color: rgba(0, 0, 0, 0.7)'>Delete</button></div></div>");
    numInventoryPrice = Number(inventoryPrice);
    Total = Total+numInventoryPrice;
    $('#totalPrice').html("<h2 id='totalPrice'>$ "+Total+"</h2>");
    $('#totalPrice1').html("<h2 id='totalPrice'>$ "+Total+"</h2>");
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
    $('.basketBox').append("<div class='col-xs-12 rawr'><div class='col-xs-4 foodTitle'><img src='/lib/img/pug.png'><h7>"+inventoryList[text]['title']+"</h7></div><div class='col-xs-4 foodPrice'><h7>$"+inventoryPrice+"</h7></div><div class='col-cs-4 removeButton'><button type='button' class='btn deleteButton opacityButton'>Delete</button></div></div>");
    numInventoryPrice = Number(inventoryPrice);
    Total = Total+numInventoryPrice;
    $('#totalPrice').html("<h2 id='totalPrice'>$ "+Total+"</h2>");
    $('#totalPrice1').html("<h2 id='totalPrice1'>$ "+Total+"</h2>");

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
  $('#pickUpTimeCode').append("<h1>"+whenToPickUp+"</h1>");
}

function displayCheckoutSummary(){
  $(".Summary").html('');
  $('#fourthRow').clone().appendTo(".Summary");
  $(".rawr").removeClass(".removeButton");
};

$('#toOrderSummaryButton').click(function(){
  displayPickUpTime()
  displayCheckoutSummary();
  $(this).removeClass(".removeButton");
});

//////////////////////////////////////////

//HIDE SHOW FUNCTIONS
function menuInit(){
  $("#checkoutContainer").hide();
  $("#orderSumContainer").hide();
};

function clickToCheckOutButton(){
  if($('.basketBox').is(':empty')){alert("Please Choose An Item")}else{
    $("#checkoutContainer").show();
    $("#menuContainer").hide();}
};

function backToMenuFromCheckout(){
  $("#checkoutContainer").hide();
  $('#menuContainer').show();
}

function clickToOrderSummaryButton(){
  if(isNaN(timeChoosen[0])){
    alert("Please Pick A Time");
    console.log
  }else{
  $("#checkoutContainer").hide();
  $("#orderSumContainer").show();
  };
}

function clickFinishButton(){
  $("#orderSumContainer").hide();
  $("#menuContainer").show();
  $('.basketBox').html('');
  $('#menu1').text("");
  $('#menu1').append("Pick A Time");
  $('#totalPrice1').html("");
  $('#totalPrice1').append("No Items Selected");
  timeChoosen = "hello";
  Total = 0;
}

menuInit();
$('#toCheckoutButton').click(function(){
  clickToCheckOutButton();
});
$('#backToMenu').click(function(){
  backToMenuFromCheckout();
});
$("#toOrderSummaryButton").click(function(){
  clickToOrderSummaryButton();
})
$("#finishButton").click(function(){
  clickFinishButton();
})

///////////////////////////////////////

  $('#profileButton').click(userData());


function userData(cb){
  $.ajax({
      method: "GET",
      url: "/user",
    }).done(function(data) {
      userInfo = data;
      var Name = userInfo.facebook.name;
      console.log(Name);
      $("#nameHere").append('<h1>'+Name+'</h1>');
 });
};

  });
};

dataBase();
 // if(userInfo.facebook.name!=undefined){
 //        Name = userInfo.facebook.name;
 //        $("#nameHere").append('<h1>'+Name+'</h1>');
 //        }
 //      if(userInfo.twitter.name != undefined){
 //        Name = userInfo.facebook.name;
 //        $("#nameHere").append('<h1>'+Name+'</h1>');
 //      };

// $('.basketBox').append("<div class='col-xs-12'><div class='col-xs-4 foodTitle'><img src='/lib/img/pug.jpg'><h4>"+inventoryList[text]['title']+"</h4></div><div class='col-xs-4 foodPrice'><h4>$"+inventoryPrice+"</h4></div><div class='col-cs-4'><button type='button' class='btn deleteButton'>Delete</button></div></div>");

// var $record = $(e.target).parents('.basketBox');
// var title = $record.find('.foodTitle h4').text();
// var price = $record.find('.foodPrice h4').text();


// $(document).ready(function(){
// // Grabbing text info from saved colleges to present in wishlist
//   $('.choose').on('click', function(e){
//     // prevent to redirect to another/same page
//     e.preventDefault();
//     // get values from html & add to user db
//     var $college = $(e.target).parents('.college-wrapper');
//     var name = $college.find('.college-info h2').text();
//     var address = $college.find('.college-info p').text();
//     var url = $college.find('.college-info a').attr('href');
//     $.ajax({
//         url:'/shortlist',
//         type:'POST',
//         data:{name:name, address:address, url:url},
//         success: function(data){
//             $('#name').html(name);
//             $('#address').html(address);
//             $('#url').html(url);
//             alert('college saved');
//         },
//         error: function(err){
//             alert(JSON.stringify(err));
//         }
//     })
//   });
// //Delete items from shortlist
//   $('.delete').on('click', function(e) {
//     e.preventDefault();
//     var $college = $(e.target).parents('.college');
//     var id       = $college.data("id");
//     $.ajax({
//       url:'/shortlist/' + id,
//       type:'DELETE',
//       success: function(data){
//         console.log(data)
//         $college.remove();
//         alert('college deleted');
//       },
//       error: function(err){
//         alert(err);
//       }
//     })
//   });
// }); //End doc ready

  // section#main
  //   .container
  //     .row
  //       .col-sm-3
  //         .left-sidebar
  //           h2 Filter by
  //           #accordian.panel-group.search-options
  //             .panel.panel-default
  //               .panel-heading
  //                 h2 State
  //                 select#state(name='State')
  //                   option(value="") Select State...
  //                   option(value="All") All
  //             .panel.panel-default
  //               .panel-heading
  //                 h2 Program
  //                 select#levelOne(name='levelOne')
  //                   option(value="") Select Program...
  //                 select#levelTwo(name='levelTwo')
  //                   option(value="") Select Sub Category
  //                 select#levelThree(name='levelThree')
  //                   option(value="") Select Sub Category
  //             .panel.panel-default.text-center
  //               button#search Find my course
  //       .col-sm-9.padding-right
  //         .search-results
  //           h2.title.text-center Search Results
  //           - for (var i = 0; i < colleges.length; i++) {
  //             .col-sm-4
  //               .college-wrapper
  //                 .single-uni
  //                   .college-info.text-center
  //                     img(src="", alt='')
  //                     h2
  //                       a(href= 'http://'+ colleges[i]["Website"])= colleges[i]["Name"]
  //                     p= colleges[i]["Address"]
  //                 .choose
  //                   ul.nav.nav-pills.nav-justified
  //                     li
  //                       a(href='#')
  //                         i.fa.fa-plus-square
  //                         | Add to shortlist

//   /saves each shortlisted college into user db
//   app.post('/shortlist', function(req, res) {
//     var name = req.body.name;
//     var address = req.body.address;
//     var url = req.body.url;
//     req.user.shortlist.push({
//       'name': name,
//       'address': address,
//       'url': url
//     });
//     req.user.save(function(err, newUser){
//       res.json(newUser.shortlist);
//     });
//   });
// //Gets saved colleges for each user and renders onto shorlist page
//   app.get('/shortlist', isLoggedIn, function(req,res){
//     res.render('shortlist',{shortlist: req.user.shortlist});
//   });
// //Deletes item from shorlist
//   app.delete('/shortlist/:id', isLoggedIn, function(req,res){
//     var id        = req.params.id;
//     var user      = req.user;
//     var shortlist = user.shortlist;
//     var listIndex = shortlist.findIndex(function(elem){
//       console.log(elem._id == id, elem._id, id);
//       if (elem._id == id) { //Checks if selected elem id is matched in db
//         return true;
//       } else {
//         return false;
//       }
//     });
//     if (listIndex >= 0) { //If elem index is found
//       shortlist.splice(listIndex, 1); //Splice item
//       user.shortlist = shortlist; //Update new list
//       user.save(function(err, updatedUser){ //Save updated list
//         res.json(updatedUser.shortlist);
//       });
//     } else {
//       res.json({message: "Cannot find list"}).status(400);
//     }
//   });