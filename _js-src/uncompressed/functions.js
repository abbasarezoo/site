jQuery(document).ready(function ($) {

// TOGGLES

$(".toggle--main-nav").click(function(e){
    $(".main-nav").fadeToggle();
    if($(this).hasClass("nav-open")){
      $(this).removeClass("nav-open");
    }
    else {
      $(this).addClass("nav-open");
    }
    e.preventDefault();
});

$(".nav-open").click(function(e){
  $(this).parent().hide();
  e.preventDefault();
});


// END DOCUMENT READY
});

jQuery(function($) {

    var $nav = $('.pg-header'),
        $win = $(window),
        winH = $win.height();    // Get the window height.

    $win.on("scroll", function () {
       $nav.toggleClass("floaty", $(this).scrollTop() > winH );
    }).on("resize", function(){ // If the user resizes the window
       winH = $(this).height(); // you'll need the new height value
    });

});


