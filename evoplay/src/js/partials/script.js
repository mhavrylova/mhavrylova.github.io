$(document).ready(function(){
    $(".selection").on('click', function(){
      $(this).css({display:"none"});
      $(".selection__wrapper").css({height:"210px"});
      $(".selection__list").css({display:"block"});
   });
});