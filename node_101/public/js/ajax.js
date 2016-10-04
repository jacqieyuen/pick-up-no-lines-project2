$( document ).ready(function() {

  $('a').click(function(e){
    e.preventDefault();
    // var target = e.target;
    // var href = e.target.href;
    // var id = href.split('').pop();

    var id = $(e.target).data("id");

    $.ajax({
      method: "GET",
      url: "/candy/" + id
    }).done(function(paris){
      $('div#info').html("<h1>" + paris.name + "</h1><h2>" + paris.color + "</h2>");
    });
  });

  $('div#edit form').submit(function(e){
    e.preventDefault();
    $("#edit input.id").css("border", "");

    var id    = $('#edit input.id').val();
    var color = $('#edit input.color').val();

    $.ajax({
      method: "PUT",
      url: "/candy/" + id,
      data: { color: color },
    }).done(function(candy){
      //  li > a[data-id="1"]
      $('li > a[data-id="' + id + '"]').text(candy.name + ' | ' + candy.color);
    }).fail(function(message){
      $("#edit input.id").css("border", "solid red 2px");
    });
  });

  $('div#add form').submit(function(e){
    e.preventDefault();
    var id    = $('#add input.id').val();
    var name = $('#add input.name').val();
    var color = $('#add input.color').val();

    $.ajax({
      method: "Post",
      url: "/candy/",
      data: { id : id, name: name color: color },
    }).done(function(candy){
      $('ul').append('<li><a href="http://localhost:3000/"' + candy.id + '>' + candy.name + ' | ' + candy.color + '</a><button type="submit"> Delete </button></li>');
   })
 });

});

