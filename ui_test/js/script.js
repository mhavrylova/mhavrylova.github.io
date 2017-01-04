"use strict";

$(document).ready(function(){

    $(".toggle-button").on('click', function(){
        $(".toggle-button > div").toggleClass("toggle-button__tick toggle-button__cross")
    });

    $( "#slider1" ).slider({
        animate: true,
            range: "min", 
            value: 200, 
            min: 0, 
            max: 400, 
            step: 1, 
            slide: function( event, ui ) {
                $( "#slider__progress_info1" ).html('+' + ui.value);
            },
    });

    $( "#slider2" ).slider({
        animate: true,
            range: "min",
            value: 3000,
            min: 0,
            max: 4000,
            step: 1,
            slide: function( event, ui ) {
                $( "#slider__progress_info2" ).html('+' + ui.value);
            },
    });

});


	

 
