$.ajax({ 
	url: "data.json", 
	dataType: "json",
	success: function(data){
		$.each(data, function(indexa, elementa) {
			var region = document.getElementById('region');
			var regionOption = document.createElement('option');
			regionOption.innerHTML = elementa.regionName;
			regionOption.value = elementa.regionCode;		
			region.appendChild(regionOption);			
    	}); 
	}
});

$.ajax({ 
	url: "data.json", 
	dataType: "json",
	success: function(data){
		$.each(data, function(indexa, elementa) {
			$.each(elementa.regionCities, function(ind, elem) {
				var city = document.getElementById('city');
				var cityOption = document.createElement('option');
				cityOption.innerHTML = elem.cityName;
				cityOption.value = elem.cityCode;		
				city.appendChild(cityOption);	
    		});
    	}); 
	}
});


$('#region').change(function () {
        var region_id = $(this).val();

        if (region_id == '') {
            $('#city').html('<option>all regions</option>');
            $('#city').attr('disabled', true);
            return(false);
        }

     	document.getElementById('city').innerHTML = '0';
     	document.getElementById('city').innerHTML = '<option>--choose city--</option> <option value="' + region_id + '.0">*all cities</option>';

        if (region_id == '0') {
        	$.ajax({ 
			url: "data.json", 
			dataType: "json",
				success: function(data){
					$.each(data, function(indexa, elementa) {
						$.each(elementa.regionCities, function(ind, elem) {
							var city = document.getElementById('city');
							var cityOption = document.createElement('option');
							cityOption.innerHTML = elem.cityName;
							cityOption.value = elem.cityCode;		
							city.appendChild(cityOption);	
			    		});
			    	}); 
				}
			});
        } else {
			$.ajax({ 
				url: "data.json", 
				dataType: "json",
				success: function(data){
					$.each(data, function(indexa, elementa) {	
						$.each(elementa.regionCities, function(ind, elem) {
							if(elementa.regionCode == region_id) {
							var city = document.getElementById('city');
							var cityOption = document.createElement('option');
							cityOption.innerHTML = elem.cityName;
							cityOption.value = elem.cityCode;		
							city.appendChild(cityOption);	
							};	
			    		});
			    	}); 
				}
			});
        }
});

$('#city').change(function () {
        var city_id = $(this).val();       
        var city_id_end = city_id.slice(-2);
        var region_id_start = city_id.split('.')[0];

if (city_id_end == '.0') {
	if(region_id_start == '0') {
				$.ajax({ 
			url: "data.json", 
			dataType: "json",
			success: function(data){
				document.getElementById("submit").addEventListener("click", deleteOld);
					function deleteOld() {
						document.getElementById('results').innerHTML = '';
					};		
				$.each(data, function(index, element) {
				  	$.each(element.regionCities, function(ind, elem) {
				  		$.each(elem.shops, function(indx, el) {

								document.getElementById("submit").addEventListener("click", showShop);
									function showShop(e) {
										e.preventDefault();
										var result = document.getElementById('results');
										var resultItem = document.createElement('p');
										resultItem.innerHTML = el + ', city: ' + elem.cityName + ', region: ' + element.regionName;
										result.appendChild(resultItem);			    	
									}				  				

		    			});
		    		});
		    	});
				document.getElementById("submit").addEventListener("click", ifNull);
					function ifNull() {
						if (document.getElementById('results').innerHTML == '') {
							var result = document.getElementById('results');
							var resultItem = document.createElement('p');
							resultItem.className = 'red';
							resultItem.innerHTML = 'There are no available shops in chosen city';
							result.appendChild(resultItem);	
						}
					};	
			}
		});	
	} else {
			$.ajax({ 
			url: "data.json", 
			dataType: "json",
			success: function(data){
				document.getElementById("submit").addEventListener("click", deleteOld);
					function deleteOld() {
						document.getElementById('results').innerHTML = '';
					};		
				$.each(data, function(index, element) {
				  	$.each(element.regionCities, function(ind, elem) {
				  		$.each(elem.shops, function(indx, el) {
				  			if(element.regionCode == region_id_start) {
								document.getElementById("submit").addEventListener("click", showShop);
									function showShop(e) {
										e.preventDefault();
										var result = document.getElementById('results');
										var resultItem = document.createElement('p');
										resultItem.innerHTML = el + ', city: ' + elem.cityName + ', region: ' + element.regionName;
										result.appendChild(resultItem);			    	
									}				  				
							};	
		    			});
		    		});
		    	});
				document.getElementById("submit").addEventListener("click", ifNull);
					function ifNull() {
						if (document.getElementById('results').innerHTML == '') {
							var result = document.getElementById('results');
							var resultItem = document.createElement('p');
							resultItem.className = 'red';							
							resultItem.innerHTML = 'There are no available shops in chosen city';
							result.appendChild(resultItem);	
						}
					};	
			}
		});		
	}

} else {
			$.ajax({ 
			url: "data.json", 
			dataType: "json",
			success: function(data){
				document.getElementById("submit").addEventListener("click", deleteOld);
					function deleteOld() {
						document.getElementById('results').innerHTML = '';
					};		
				$.each(data, function(index, element) {
				  	$.each(element.regionCities, function(ind, elem) {
				  		$.each(elem.shops, function(indx, el) {
				  			if(elem.cityCode == city_id) {
								document.getElementById("submit").addEventListener("click", showShop);
									function showShop(e) {
										e.preventDefault();
										var result = document.getElementById('results');
										var resultItem = document.createElement('p');
										resultItem.innerHTML = el + ', city: ' + elem.cityName + ', region: ' + element.regionName;
										result.appendChild(resultItem);			    	
									}				  				
							};	
		    			});
		    		});
		    	});
				document.getElementById("submit").addEventListener("click", ifNull);
					function ifNull() {
						if (document.getElementById('results').innerHTML == '') {
							var result = document.getElementById('results');
							var resultItem = document.createElement('p');
							resultItem.className = 'red';							
							resultItem.innerHTML = 'There are no available shops in chosen city';
							result.appendChild(resultItem);	
						}
					};	
			}
		});
}
});


