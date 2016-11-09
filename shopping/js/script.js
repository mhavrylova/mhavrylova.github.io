"use strict";

$(document).ready(function(){

$(".search-icon").click(function(){
        $("#search").toggle();
});


$("#slider").owlCarousel({
      autoPlay: 5000, 
      items : 5, //5 items above 1024px browser width
      itemsDesktop : [1024,4], //4 items between 1024px and 769px
      itemsDesktopSmall : [768,3], //3 items betweem 768px and 0
      itemsTablet: false, //itemsTable disabled
      itemsMobile : false, // itemsMobile disabled 
      responsiveBaseWidth: '.slider', //with of carousel = with of '.slider'
      pagination: false,
      loop:true
});

  $(".slider__arrow_right").click(function(){
    $("#slider").trigger('owl.next');
  }) //step "previos" for element .slider__arrow_right

  $(".slider__arrow_left").click(function(){
   $("#slider").trigger('owl.prev');
  }) //step "next" for element .slider__arrow_left

document.getElementById("send-email").addEventListener("click", function(event){
    event.preventDefault()
});

});

