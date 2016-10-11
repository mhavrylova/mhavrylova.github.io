"use strict";

$(document).ready(function(){

    $(".click-block").on('click', function(){
   		var el_id = $(this).attr('data-id');
   		var el_text = $(this).attr('data-text');
       $(".game__answer--"+el_id+" .no-answer").removeClass("no-answer").addClass(el_text+"-answer-"+el_id);
       $(".game__answer--"+el_id+" .no-answer__text").css({display:"none"});
       $(".game__answer--"+el_id+" .answer__text").css({display:"block"});
       $(".blue-answer-"+el_id+" .answer__text-box").addClass("answer__text-box--"+el_id);
       $(this).removeClass("click-block");
       var a = $(".click-block").length;
       if (a == 0) {
       	window.location.href = './finalpage.html';
       }
   });

    	
    $(".game__choose-pack").mouseover(function(){
    	var el_text = $(this).attr('data-text');   	
   		$(".game__choose-pack--"+el_text).css("z-index","3");   	
  		$(".choose-pack__type-text--"+el_text).css({display:"block"});
  		$(".choose-pack__type-border--"+el_text).css({display:"block"});
		$(".content__background").addClass("content__background--shadow");
  		}).mouseout(function(){
    		$(".choose-pack__type-text").css({display:"none"});
			$(".content__background--shadow").removeClass("content__background--shadow");
    		$(".choose-pack__type-border").css("display","none");				
			$(this).css("z-index","inherit");
    		})
});


	

 
