"use strict";


function likesCount(a) {
	var commentId = a.getAttribute('data-count');
	var count = document.getElementById('comment_like_'+commentId).innerHTML;
	count++;
	document.getElementById('comment_like_'+commentId).innerHTML = count;	
}




 
