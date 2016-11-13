"use strict";

$(document).ready(function(){

    $("#menu-button").on('click', function(){
      $(".menu-button").css({display:"none"});
      $("header").css({height:"150px"});
      $(".menu.navigation").removeClass("navigation").addClass("navigation-mobile");
      $(".menu__item.navigation__item").removeClass("navigation__item").addClass("navigation-mobile__item"); 
      $(".menu-close-button").css({display:"block"});    
   });

    $("#menu-close-button").on('click', function(){
      $(".menu-close-button").css({display:"none"});
      $("header").css({height:"50px"});
      $(".menu.navigation-mobile").removeClass("navigation-mobile").addClass("navigation");
      $(".menu__item.navigation-mobile__item").removeClass("navigation-mobile__item").addClass("navigation__item"); 
      $(".menu-button").css({display:"block"});    
   });

    var media = "screen and (max-width: 767px)",
    placeholderEmail = "Email",
    placeholderRassword = "Пароль";

    if ($(window).width() < 768) {
      $('#email').attr('placeholder', placeholderEmail); 
      $('#password').attr('placeholder', placeholderRassword);
    }
    else {
      $('#email').attr('placeholder', ""); 
      $('#password').attr('placeholder', ""); 
    }

    $(window).resize(function(){    
        if(window.matchMedia(media).matches) {
          $('#email').attr('placeholder', placeholderEmail); 
          $('#password').attr('placeholder', placeholderRassword);
          $(".menu-button").css({display:"block"});
        }
        else {
          $('#email').attr('placeholder', ""); 
          $('#password').attr('placeholder', "");
          $(".menu-button").css({display:"none"});      
        }
    });

});


	

 
