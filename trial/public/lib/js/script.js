var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 0, lng: 0},
        zoom: 2
    });
};

document.addEventListener("DOMContentLoaded", function(event){

  var socket = io.connect('http://localhost:3000');

  socket.on('tweet', function (tweet) {
    console.log(tweet);

    if(!map){
      return;
    }
    //Create a position objet from the lat/lng of the tweet
    var position = {
        lat: tweet.place.bounding_box.coordinates[0][0][1],
        lng: tweet.place.bounding_box.coordinates[0][0][0]
    };

    //Create new marker
    var marker = new google.maps.Marker({
        position: position,
        map: map,
        title: tweet.text
    });
  });
});
