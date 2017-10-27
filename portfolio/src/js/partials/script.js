
$( document ).ready(function() {
   
if ($(window).width() <= 1220) {
   var sectionWidth = $('section').width();
   var imgCarousel = $('.carousel__item');
   $(imgCarousel).width(sectionWidth);
}


});

$( window ).resize(function() {
  if ($(window).width() <= 1220) {
   var sectionWidth = $('section').width();
   var imgCarousel = $('.carousel__item');
   $(imgCarousel).width(sectionWidth);
}
});



var navButton = $(".carousel__button");
navButton.on('click', function(){



        var count = 1,
            thisId =  $(this).attr("data-name"),
            carousel = $("#"+thisId),
            list = $(carousel).find('.carousel__box'),
            position = parseInt($(list).css("marginLeft")),
            listElems = $(carousel).find('.carousel__item'),
            margin = (carousel.width() - listElems.width() * count) / count,
            width = listElems.width() + margin,            
            maxStep = listElems.length * listElems.width() * -1,
            minStep = 0;
        if ($(this).hasClass('navigation-button-right')) {
            position = position - width * count;            
            if(position > maxStep) {
              $(list).css("marginLeft",position + 'px');               
            }
          }
        if ($(this).hasClass('navigation-button-left')) {
            position = position + width * count;
            if(position <= minStep) {
              $(list).css("marginLeft",position + 'px'); 
            }       
          } 
});