var navButton = $(".carousel__button");
navButton.on('click', function(){
        var count = 4,
            thisId =  $(this).attr("data-name"),
            carousel = $("#"+thisId),
            list = $(carousel).find('.carousel__box'),
            position = parseInt($(list).css("marginLeft")),
            listElems = $(carousel).find('.carousel__item'),
            margin = (carousel.outerWidth() - listElems.outerWidth() * count) / count,
            width = listElems.outerWidth() + margin,            
            maxStep = listElems.length * listElems.outerWidth() * -1,
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