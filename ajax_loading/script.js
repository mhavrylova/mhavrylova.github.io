
var count = 10;
var step = count;

$(document).ready(function() {
	$.ajax({
		url: "MOCK_DATA.json", 
		dataType: "json",
		success: function(data){
			$.each(data, function(index, element) {
				if (element.ID <= count) {
					addUserList(element);
				}
	    	}); 
		},
		error: function(){
			errorMessage();
		}
	});
})

$('#showmore').on("click", function(){
		$.ajax({
		url: "MOCK_DATA.json", 
		dataType: "json",
		success: function(data){
			$.each(data, function(index, element) {
				if (element.ID > count && element.ID <= count+step) {
					addUserList(element);
				}
	    	});
	    	count = count+step;	 
		},
		error: function(){
			errorMessage()
		}		
	});
})

function addUserList(element) {
	var newRow = $('<div class="list__row"></div>');
	$(newRow).attr("id",element.ID);
		$.each(element, function(ind, elem) {
			if (ind=='Avatar') {
				var image = $('<img src="'+elem+'" alt="user-'+element.ID+'-avatar">');
				var column = $('<div class="list__column"></div>');
				$(image).appendTo($(column));
				$(column).appendTo($(newRow));
			} else {
				var column = $('<div class="list__column">'+elem+'</div>');
				$(column).appendTo($(newRow));
			}
			$(newRow).appendTo($('.list__body'));
		})
}

function errorMessage(){
	$('.list').css('display','none');
	$('#showmore').css('display','none');
	var errorTex = $('<div class="error">Error</div>').appendTo($('.wrapper'));	
}