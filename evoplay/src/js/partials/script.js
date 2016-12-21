$(document).ready(function(){

    $(".selection").on('click', function(){
      $(this).css({display:"none"});
      $(".selection__wrapper").css({height:"210px"});
      $(".selection__list").css({display:"block"});
      	$('.selection__list').slimScroll({
	        	height: '100%',
	        	width: '100%', 
	            color: 'linear-gradient(to bottom, #243c54 0%,#243c54 36%,#182033 75%,#182033 100%)',
    			size: '8px',
    			distance: '7px',
    			wheelStep: 1,
    			opacity: '1',
    			borderRadius: '2px',
       			alwaysVisible : true
	    });
   });


	$(document).mouseup(function (e){
		var div = $(".selection__wrapper");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			$(".selection").css({display:"block"});
			$(".selection__wrapper").css({height:"40px"});
      		$(".selection__list").css({display:"none"});
	    	$(".slimScrollBar").css({display:"none"});
		}

	});

	for (var i = 2015; i >= 1900; i--) {
		$(".selection__list").append("<li class='selection__list-item'>" + i + "</li>");
	}

	$(".selection__list-item").on('click', function(){
		var selected = $(this).text();
		$(".selection").css({display:"block"});
		$(".selection__wrapper").css({height:"40px"});
		$(".selection__list").css({display:"none"});
		$(".slimScrollBar").css({display:"none"});
		$(".selection__text").text(selected);
	});
});


        