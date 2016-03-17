$(document).ready(function() {
	var path = window.location.href; 
	console.log (path)
	$('#test a').each(function() {
	    if (this.href === path) {
	        $(this).addClass('active');
	    };
	});

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
    // $("#home").css('display','none');
    // console.log ("im here")
    $("#home").hide()
    $("#about").hide()
    $("#moreWork").hide()

    // console.log ("I made it")
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

// // Cache selectors
// $(document).ready(function() {
   
//   var lastId,
//       topMenu = $("#menu"),
//       topMenuHeight = topMenu.outerWidth()+15,
//       // All list items
//       menuItems = topMenu.find("a"),
//       // Anchors corresponding to menu items
//       scrollItems = menuItems.map(function(){
//         var item = $($(this).attr("href"));
//         if (item.length) { return item; }
//       });


//       console.log("lastId" + lastId)
//       console.log("topMenu" + topMenu)
//       console.log("topMenuHeight" + topMenuHeight)
//       console.log ("menuItems" + JSON.stringify(menuItems) + "scrollItems" + JSON.stringify(scrollItems))
//       // console.log ("item" + item)

//   // Bind click handler to menu items
//   // so we can get a fancy scroll animation
//   menuItems.click(function(e){
//     var href = $(this).attr("href"),
//         offsetLeft = href === "#home" ? 0 : $(href).offset().top-topMenuHeight+1;
//     $('html, body').stop().animate({ 
//         scrollLeft: offsetLeft
//     }, 300);
//     e.preventDefault();
//   });

//   // Bind to scroll
//   $(window).scroll(function(){
//      // Get container scroll position
//      var fromTop = $(this).scrollLeft()+topMenuHeight;
     
//      // Get id of current scroll item
//      var cur = scrollItems.map(function(){
//        if ($(this).offset().top < fromTop)
//          return this;
//      });
//      // Get the id of the current element
//      cur = cur[cur.length-1];
//      var id = cur && cur.length ? cur[0].id : "";
     
//      if (lastId !== id) {
//          lastId = id;
//          // Set/remove active class
//          menuItems
//            .parent().removeClass("active")
//            .end().filter("[href='#"+id+"']").parent().addClass("active");
//      }                   
//   });

 
// });
