"use strict";


document.getElementById("commenting_submit").addEventListener("click", addComment);
document.getElementById("best_search").addEventListener("click", sortByLikes);
document.getElementById("oldest_search").addEventListener("click", sortByDateOld);
document.getElementById("newest_search").addEventListener("click", sortByDateNew);

function addComment(e) {
e.preventDefault();

var commentElement = document.getElementById('commenting_field'),
lastComment = document.getElementsByClassName('content-comment'),
comment = document.createElement('div');
comment.className = 'content-comment';

if (!formValidation(commentElement.value)) {
commentElement.setAttribute("style", 'background : #ffd9d9');
return false;
} else {
commentElement.setAttribute("style", 'background-image : url(images/clip.png)');
} //form validation

var userBox = document.createElement('div');
userBox.className = 'user-box';

//1.1
var userImageLink = document.createElement('a');
userImageLink.href = "#";
//1.1.1
var userImage = document.createElement('img'),
	userImageSmall = document.createElement('img');

userImageSmall.src = 'images/user_sm.png';
userImageSmall.className = 'content-comment__avatar--small';
userImage.src = 'images/user.png';
userImage.className = 'content-comment__avatar';

userImageLink.appendChild(userImage);
userImageLink.appendChild(userImageSmall);


//1.2
var contentCommentText = document.createElement('div');
contentCommentText.className = 'content-comment__text';

//1.2.1
var contentCommentTextHead = document.createElement('div');
contentCommentTextHead.className = 'content-comment__text--head';

//1.2.1.1
var contentCommentTextName = document.createElement('a');
contentCommentTextName.href = "#";
contentCommentTextName.className = "content-comment__text--name";
contentCommentTextName.innerHTML = "Name Surname";

//1.2.1.2
var contentCommentActivity = document.createElement('div');
contentCommentActivity.className = 'content-comment__activity';

//1.2.1.2.1
var contentCommentActivityTime = document.createElement('span'),
dateTime = new Date(),
dateOptions = {month: "short", day: "numeric", hour: "2-digit", minute: "2-digit"};
contentCommentActivityTime.className = "content-comment__activity--time";
contentCommentActivityTime.innerHTML = dateTime.toLocaleTimeString("en-us", dateOptions).replace('AM','am').replace('PM','pm');

//1.2.1.2.2
var contentCommentActivityLike = document.createElement('span');
contentCommentActivityLike.className = 'content-comment__activity--like';
//1.2.1.2.2.1
var contentCommentActivityLikeHeart = document.createElement('span');
contentCommentActivityLikeHeart.className = 'content-comment__activity--like-heart';
contentCommentActivityLikeHeart.addEventListener('click', likesCount);
contentCommentActivityLikeHeart.setAttribute('data-count', (lastComment.length + 1).toString());
//1.2.1.2.2.2
var contentCommentActivityLikeCount = document.createElement('span');
contentCommentActivityLikeCount.className = 'content-comment__activity--like-count';
contentCommentActivityLikeCount.id = 'comment_like_' + (lastComment.length + 1);
contentCommentActivityLikeCount.innerHTML = '0';

//1.2.1.2.2.*
contentCommentActivityLike.appendChild(contentCommentActivityLikeHeart);
contentCommentActivityLike.appendChild(contentCommentActivityLikeCount);

//1.2.1.2.*
contentCommentActivity.appendChild(contentCommentActivityTime);
contentCommentActivity.appendChild(contentCommentActivityLike);

contentCommentTextHead.appendChild(contentCommentTextName);
contentCommentTextHead.appendChild(contentCommentActivity);

//1.2.2
var contentCommentTextText = document.createElement('p');
contentCommentTextText.className = 'content-comment__text--text';
contentCommentTextText.innerHTML = commentElement.value;

//1.2.*
contentCommentText.appendChild(contentCommentTextHead);
contentCommentText.appendChild(contentCommentTextText);

//1.*
userBox.appendChild(userImageLink);
userBox.appendChild(contentCommentText);

comment.appendChild(userBox);
commentElement.value = '';

insertAfter(comment, lastComment[lastComment.length - 1]);
}

function insertAfter(newNode, referenceNode) {
referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function likesCount(event) {
var commentId = event.currentTarget.getAttribute('data-count');
if (document.getElementById('comment_like_' + commentId)) {
var count = document.getElementById('comment_like_' + commentId).innerHTML;
} else {
return false;
}
count++;
document.getElementById('comment_like_'+commentId).innerHTML = count;
}

function formValidation(value) {
return !(value == null || value == "");
}

function sortByLikes() {
var comments = document.getElementsByClassName('content-comment'),
commentsZone = document.getElementById('comment-zone');
comments = Array.prototype.slice.call(comments, 0);

comments.sort(function (a, b) {
return b.querySelector('.content-comment__activity--like-count').innerHTML
- a.querySelector('.content-comment__activity--like-count').innerHTML;
});
commentsZone.innerHTML = "";

for(var i = 0, l = comments.length; i < l; i++) {
commentsZone.appendChild(comments[i]);
}

}

function sortByDateOld() {
var comments = document.getElementsByClassName('content-comment'),
commentsZone = document.getElementById('comment-zone');
comments = Array.prototype.slice.call(comments, 0);

comments.sort(function (a, b) {
var time1 = Date.parse(a.querySelector('.content-comment__activity--time').innerHTML),
time2 = Date.parse(b.querySelector('.content-comment__activity--time').innerHTML);
return time1 > time2;
});
commentsZone.innerHTML = "";

for(var i = 0, l = comments.length; i < l; i++) {
commentsZone.appendChild(comments[i]);
}
}

function sortByDateNew() {
var comments = document.getElementsByClassName('content-comment'),
commentsZone = document.getElementById('comment-zone');
comments = Array.prototype.slice.call(comments, 0);

comments.sort(function (a, b) {
var time1 = Date.parse(a.querySelector('.content-comment__activity--time').innerHTML),
time2 = Date.parse(b.querySelector('.content-comment__activity--time').innerHTML);

return time1 < time2;
});
commentsZone.innerHTML = "";

for(var i = 0, l = comments.length; i < l; i++) {
commentsZone.appendChild(comments[i]);
}
}



 
