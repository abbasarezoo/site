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

