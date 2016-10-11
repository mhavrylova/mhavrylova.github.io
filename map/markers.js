var markers = [];

$.ajax({ 
	url: "locations.json", 
	dataType: "json",
	success: function(data){
		  $.each(data, function(element, index) {
		  	markers.push({'title' : index.title,'latitude':index.latitude,
		  				  'longitude':index.longitude,'address':index.address,
		  				  'brand':index.brand, 'contacts':index.contacts});
    	});
	}
});


window.onload = function () {
    initMap();
}

function initMap() {
    var mapOptions = {
        center: new google.maps.LatLng(markers[0].latitude, markers[0].longitude),
        zoom: 7
    };
     var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    //Create and open InfoWindow.
    var infoWindow = new google.maps.InfoWindow();

    for (var i = 0; i < markers.length; i++) {
        var data = markers[i];
        var myLatlng = new google.maps.LatLng(data.latitude, data.longitude);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: data.title
        });

        //Attach click event to the marker.
        (function (marker, data) {
            google.maps.event.addListener(marker, "click", function (e) {
                //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
                infoWindow.setContent("<p>" +  "<span class=name>" + "Name: " + "</span>" + data.title + "</p>"
                					+ "<p>" + "<span class=name>" + "Address: " + "</span>" + data.address + "</p>"
                					+ "<p>" + "<span class=name>" + "Brand: " + "</span>" + data.brand + "</p>"
                					+ "<p>" + "<span class=link>" + "Contacts: " + "</span>"+ "<a href="+ "http://www." + data.contacts + ">" + data.contacts + "</a>" + "</p>"                      
                					);
                infoWindow.open(map, marker);
            });
        })(marker, data);
    }

}

