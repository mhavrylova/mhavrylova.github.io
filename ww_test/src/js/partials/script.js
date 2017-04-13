var next = document.getElementById('nextSlide'),
    bodyBG = document.getElementById('wrap'),
    previous = document.getElementById('prevSlide'),
    classes = ['body__cover_1', 'body__cover_2', 'body__cover_3'],
    filename = document.title;

var pageFooter = document.getElementById('pageFooter');



if (filename == 'Avto+ Home') {
    var languages = document.getElementById('headLan');
    languages.style.display = "block";

 if (document.body.clientWidth <= 768) {
    bodyBG.classList.remove("body__cover");
    bodyBG.classList.remove("body__cover_1");
    bodyBG = document.getElementById('wrap2');
    bodyBG.classList.add("body__cover");
    bodyBG.classList.add("body__cover_1");    
 }

    next.addEventListener("click", function(){
        for (var i = 0; i < classes.length; i++) {
          if ( bodyBG.className.match(classes[i]) ) {
              if ( i == [classes.length-1] ) {
              bodyBG.classList.remove(classes[i]);
              bodyBG.classList.add(classes[0]);
              break;
              } else {
                  bodyBG.classList.remove(classes[i]);
                  bodyBG.classList.add(classes[i+1]);
                  break;
              }
          }
        }
    });

    previous.addEventListener("click", function(){
      for (var i = 0; i < classes.length; i++) {
        if ( bodyBG.className.match(classes[i]) ) {
            if ( i == 0 ) {
            bodyBG.classList.remove(classes[i]);
            bodyBG.classList.add(classes[classes.length-1]);
            break;
            } else {
                bodyBG.classList.remove(classes[i]);
                bodyBG.classList.add(classes[i-1]);
                break;
            }
        }
      }
    });

    if (document.body.clientWidth > 768) {
          pageFooter.style.display = "none";
    } else {
       pageFooter.style.display = "block";
    }



} 


var phoneMenu = document.getElementById('phone-menu');
var navMenu = document.getElementById('nav-menu');

    phoneMenu.addEventListener("click", function(){
      var bothead = document.getElementById('headBot');
      var wrapBG = document.getElementById('wrap2');
      var mTitle = document.querySelector('.main-title_respons');      
       if (!phoneMenu.classList.contains("button-response_active")) {
            phoneMenu.classList.add('button-response_active');  
            bothead.style.display = "block";
            wrapBG.style.display = "none";
            mTitle.style.flexGrow = "1";

       } else {
          phoneMenu.classList.remove('button-response_active');
          bothead.style.display = "none"; 
          wrapBG.style.display = "flex";
          mTitle.style.flexGrow = "0";         
       }

    });

    navMenu.addEventListener("click", function(){
      var mMenu = document.getElementById('m-menu');
      var wrapBG = document.getElementById('wrap2');
      var mTitle = document.querySelector('.main-title_respons');  
       if (!navMenu.classList.contains("button-response_active")) {
          navMenu.classList.add('button-response_active');
          navMenu.classList.remove('icon-menu');
          navMenu.classList.add('icon-close');
          mMenu.style.display = "block"; 
          wrapBG.style.display = "none";
          mTitle.style.flexGrow = "1";          
        } else {
          navMenu.classList.remove('button-response_active'); 
          navMenu.classList.remove('icon-close'); 
          navMenu.classList.add('icon-menu'); 
          mMenu.style.display = "none";  
          wrapBG.style.display = "flex";
          mTitle.style.flexGrow = "0";                             
        }


    });

  if (pageFooter) {
    var footerHeight = pageFooter.offsetHeight,
        bottomHead = document.getElementById('headBot'),
        head = document.querySelector('.header'),
        padd = getComputedStyle(head).paddingTop,
        paddSize = parseInt(padd, 10),
        contBox = document.querySelector('.content__main'),
        paddCont = getComputedStyle(contBox).paddingBottom,
        paddContSize = parseInt(paddCont, 10);

    bottomHead.style.paddingBottom = footerHeight+paddSize+'px';    
    contBox.style.paddingBottom = footerHeight+paddContSize+'px';
  }



if (document.body.clientWidth <= 768) {
        var header = document.querySelector('.header');
        var headerHeight = getComputedStyle(header).height;
        var bodyBGI = document.querySelector('.body__cover');
        bodyBGI.style.backgroundPositionY = headerHeight;
}



window.onload = function () {
    initMap();
}

function initMap() {
    var latlng = new google.maps.LatLng(48.4396468,22.7274694); // Creating a LatLng object containing the coordinate for the center of the map

    var options = {
        zoom: 14, // This number can be set to define the initial zoom level of the map
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP // This value can be set to define the map type ROADMAP/SATELLITE/HYBRID/TERRAIN
    }; // Creating an object literal containing the properties we want to pass to the map

    var map = new google.maps.Map(document.getElementById('map_div'), options); // Calling the constructor, thereby initializing the map

    var image = new google.maps.MarkerImage('/img/pin.png',
        new google.maps.Size(32, 54) // This marker is 32 pixels wide by 54 pixels tall.
    ); // Define Marker properties

    var marker1 = new google.maps.Marker({
        position: new google.maps.LatLng(48.4396468,22.7274694),
        map: map,
        icon: image // This path is the custom pin to be shown. Remove this line and the proceeding comma to use default pin
    }); // Add Marker

    google.maps.event.addListener(marker1, 'click', function() {
        infowindow1.open(map, marker1);
    }); // Add listener for a click on the pin


    var infowindow1 = new google.maps.InfoWindow({
        content: createInfo('<strong>Avto+ LTD</strong></br>','</br>Украина, Закарпатская обл.,</br>г.Мукачево, ул. Мира 57')
    }); // Add information window


    function createInfo(title, content) {
        return '<div style="color: #1f2f60;" class="infowindow">'+ title + content + '</div>';
    } // Create information window
}
