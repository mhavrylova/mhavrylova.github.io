"use strict";

$(document).ready(function(){

$(".menu__click").on('click', function(){
  $(this).toggleClass("navigation__toggle-button--nonactive navigation__toggle-button--active")
   });

});

$(".menu__click").on('click', function(){
 $(".header__navigation-menu--mob").slideToggle("slow");
}
);