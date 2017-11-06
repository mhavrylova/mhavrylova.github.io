"use strict";


var droppedItems = document.getElementsByClassName("navigation__item_dropdown");
for (var i = 0; i < droppedItems.length; i++) {
		droppedItems[i].addEventListener('mouseover', function () {
			this.classList.add("navigation__item_active");
			var nestedList = this.getElementsByTagName("ul")[0];
			nestedList.classList.add("navigation-nested_active");
		});
		droppedItems[i].addEventListener('mouseout', function () {
			this.classList.remove("navigation__item_active");
			var nestedList = this.getElementsByTagName("ul")[0];
			nestedList.classList.remove("navigation-nested_active");
		});		
}

var languages = document.getElementsByClassName("languagues__item");
for (var i = 0; i < languages.length; i++) {
		languages[i].addEventListener('click', function () {				
			var lanEn = "languagues__item_en-active",
				lanFr = "languagues__item_fr-active",
				lanDen = "languagues__item_de-active",
				langClass = this.classList.item(1),
				lang = (langClass.substr(langClass.length - 2));				
			for(var j = 0; j < languages.length; j++){
				if(languages[j].classList.contains(lanEn)) {
					languages[j].classList.remove(lanEn);
				} else if(languages[j].classList.contains(lanFr)) {
					languages[j].classList.remove(lanFr);
				} else if(languages[j].classList.contains(lanDen)) {
					languages[j].classList.remove(lanDen);
				} 
			}
			this.classList.add("languagues__item_"+lang+"-active");			
		});
}

var accordion = document.getElementsByClassName("accordion__item");
for (var i = 0; i < accordion.length; i++) {
	var activeAccordion = "accordion__item_active",
		buttonAccordion = ".accordion__button",
		closeText = "Click to close",
		openText = "Click to open";
		accordion[i].addEventListener('click', function () {
			if(this.classList.contains(activeAccordion)){
				this.classList.remove(activeAccordion);
				this.querySelector(buttonAccordion).innerHTML = openText;
			} else {
				for(var j = 0; j < accordion.length; j++){
					if(accordion[j].classList.contains(activeAccordion)){
						accordion[j].classList.remove(activeAccordion);
						accordion[j].querySelector(buttonAccordion).innerHTML = openText;
					}
				}
				this.classList.add(activeAccordion);
				this.querySelector(buttonAccordion).innerHTML = closeText;				
			}	
		});
}

var xhr = new XMLHttpRequest();
xhr.open('GET', 'MOCK_DATA.json', true);
xhr.send();
xhr.onreadystatechange = function() {
  if (this.readyState != 4) return;
  if (this.status != 200) {
    alert( xhr.status + ': ' + xhr.statusText );
	var loadMessage = document.getElementById('loading');
	loadMessage.innerHTML = "!!! Loading Error !!!";     
    return;
  	} else {
  		var data = JSON.parse(xhr.responseText);
		drawTable(data);
	}
}


function drawTable(data){
		var loadMessage = document.getElementById('loading'),
			newRow = document.createElement("div"),
			count = 0;
		newRow.classList.add("table__row");
		loadMessage.innerHTML = "";
		loadMessage.classList.remove("load-message");;
		// loadMessage.remove();  //deleting message about loading

		for (var index in data[0]) {
		  	count++;
		}

    	var tableAll = document.getElementById("table-drow"),
			tableWidht = tableAll.offsetWidth,
    		columnWidthPx = tableWidht/count,
    		columnWidthPer = columnWidthPx/tableWidht*100 + '%'; //width for column according to count of columns
  		count = 0;

		for (var index in data[0]) {
			var column = document.createElement("div");
			column.classList.add("table__data");
			column.classList.add("table__data_header");
			column.setAttribute("data-column", ++count);
			column.innerHTML = index;
			column.style.width = columnWidthPer;
			newRow.appendChild(column);
		}

    	newRow.classList.add("table__row_header");
		var tableToDraw = document.getElementById("table-to-draw"),		
			tableBody = document.createElement("div");
		tableToDraw.appendChild(newRow); //building the header row
		tableBody.classList.add("table__body");
		tableToDraw.appendChild(tableBody);

		for (var index in data) {
			var element = data[index],
				newRow = document.createElement("div");
			newRow.classList.add("table__row");		
			count = 0;
			for (var ind in element) {
				var column,
					elem = element[ind];
				if (typeof elem != "number") {
			 		if (elem == null) {
						column = document.createElement("div"); //start
						column.classList.add("table__data");
						column.setAttribute("data-column", ++count);
						column.setAttribute("data-type", "string");
						column.innerHTML = "no data"; 
					} else if (elem.toString().indexOf("png") != -1 || elem.toString().indexOf("jpg") != -1  || elem.toString().indexOf("bmp") != -1 ) {
							var image = document.createElement("img");
							image.setAttribute("src", elem);
							image.setAttribute("alt", "user-picture");
							column = document.createElement("div");
							column.classList.add("table__data");
							column.setAttribute("data-column", ++count);
							column.setAttribute("data-type", "string");
							column.appendChild(image);
					} else {
						column = document.createElement("div");
						column.classList.add("table__data");
						column.setAttribute("data-column", ++count);
						column.setAttribute("data-type", "string");
						column.innerHTML = elem;
					}					
				} else {
			 		if (elem == null) {
						column = document.createElement("div");
						column.classList.add("table__data");
						column.setAttribute("data-column", ++count);
						column.setAttribute("data-type", "number");
						column.innerHTML = "no data";
					} else if (elem.toString().indexOf("png") != -1 || elem.toString().indexOf("jpg") != -1  || elem.toString().indexOf("bmp") != -1 ) {
						var image = document.createElement("img");
						image.setAttribute("src", elem);
						image.setAttribute("alt", "user-picture");
						column = document.createElement("div");
						column.classList.add("table__data");
						column.setAttribute("data-column", ++count);
						column.setAttribute("data-type", "number");
						column.appendChild(image);
					} else {
						column = document.createElement("div");
						column.classList.add("table__data");
						column.setAttribute("data-column", ++count);
						column.setAttribute("data-type", "number");
						column.innerHTML = elem;
					}					
				}
				column.style.width = columnWidthPer;
				newRow.appendChild(column);
				tableBody.appendChild(newRow);				
			}
		}
    	addSorter();
	}

function addSorter() {
	var tableToSort = document.getElementById('table-to-draw'), //table
		tableToSortBody = tableToSort.querySelector(".table__body"); //tbody

	function compare(a,b) {
	  if (a.innerHTML < b.innerHTML)
	    return -1;
	  if (a.innerHTML > b.innerHTML)
	    return 1;
	  return 0;
	}

	function compareNumber(a,b) {
	 	return a.innerHTML - b.innerHTML

	}	

	tableToSort.addEventListener('click', function(e) {
		var columnToCheck = e.target, //licked(td)
			dataClass = columnToCheck.className, //clicked td class
			headerClass = 'table__data table__data_header', //class to identificate th
			columnToCheckNumber = columnToCheck.getAttribute("data-column"), //clicked td column number
			columnsToFind = tableToSortBody.getElementsByClassName("table__data"), //all td in tbody
			arrToSort = [],
			arrToSortNum = [];

		if (dataClass != headerClass) {
			return;
		} //if clicked not to th, ignore
		
		for(var i = 0; i < columnsToFind.length; i++){ //through all td
			var checkedCell = columnsToFind[i], //td in this iteration
				columnsToCheckNumber = checkedCell.getAttribute("data-column"), //column number of this td
				 dataType = checkedCell.getAttribute("data-type"); //data type of this td		

				if(columnsToCheckNumber == columnToCheckNumber){ //if this td is in the same column as clecked td
						if (dataType == "number") { //for data with number type
							arrToSortNum.push(checkedCell); //write to number-array
						} else { //fot data with no number-type
							arrToSort.push(checkedCell);  //write to string-array					
						}
				}
		}

			tableToSortBody.innerHTML=''; //to empty table

			if(arrToSortNum.length >= 1) { //if number-array is not empty
				arrToSortNum.sort(compareNumber); //sort as numbers
				for(var i = 0; i < arrToSortNum.length; i++) { //for each sorted td
		 			tableToSortBody.appendChild(arrToSortNum[i].parentNode); //write it's parent row
		    	}
			} else { //if number-array is empty
				arrToSort.sort(compare); //sort as strings
				for(var i = 0; i < arrToSort.length; i++) { //for each sorted td
		 			tableToSortBody.appendChild(arrToSort[i].parentNode); //write it's parent row
		    	}				
			}
	
	});

}