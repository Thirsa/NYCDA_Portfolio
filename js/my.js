$(document).ready(function() {

  $('#menu a').click(function (){
    $('#menu a').removeClass('active');
    $(this).addClass('active')
  })

  $( ".menu1" ).click(function() {
    $( "#home" ).fadeIn( 500, function() {
      // Animation complete
    });
    $("#webDevWork").hide()
    $("#about").hide()
    $("#moreWork").hide()

  });

  $( ".menu2" ).click(function() {
    $( "#webDevWork" ).fadeIn( 500, function() {
      // Animation complete
    });
    $("#home").hide()
    $("#about").hide()
    $("#moreWork").hide()
  });

  $( ".menu3" ).click(function() {
    $( "#about" ).fadeIn( 500, function() {
      // Animation complete
    });
    $("#home").hide()
    $("#webDevWork").hide()
    $("#moreWork").hide()

  });

  $( ".menu4" ).click(function() {
    $( "#moreWork" ).fadeIn( 500, function() {
      // Animation complete
    });
    $("#home").hide()
    $("#webDevWork").hide()
    $("#about").hide()


  });

});

