"use strict";

$(document).ready(function(){

$('.dropdown-toggle').dropdown();

$('#myTabs a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
})

 $(".choose-smile-click").mouseover(function(){ 	
  		$(this).children(".comment__reaction-options__tooltip").css({display:"block"});
  		}).mouseout(function(){
    		$(".comment__reaction-options__tooltip").css({display:"none"});
    		})
});



 
